using Azure;
using Azure.Data.Tables;
using Functional;
using Workout.ApplicationService;

namespace Workout.Data.TableStorage
{
    public class FunctionalTableStorage
    {
        private TableStorageExecutor tableStorageExecutor;
        public FunctionalTableStorage(string connectionString = "http://127.0.0.1:10002/devstoreaccount1", string accountName = "devstoreaccount1", string storageAccountKey = "Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq / K1SZFPTOtr / KBHBeksoGMGw ==")
        {
            tableStorageExecutor = new TableStorageExecutor(connectionString, accountName, storageAccountKey);
        }

        public async Task<Result<T, StorageFailure>> Upsert<T>(string tableName, T entity) where T : class, ITableEntity, new()
        {
            try
            {
                await tableStorageExecutor.Upsert(tableName, entity);
                return Result.Success(entity);
            }
            catch (RequestFailedException ex)
            {
                Console.WriteLine(ex.Message);
                return Result.Failure<T, StorageFailure>(new StorageFailure(ex));
            }
        }

        public async Task<Result<T, StorageFailure>> Create<T>(string tableName, T entity) where T : class, ITableEntity, new()
        {
            try
            {
                await tableStorageExecutor.Create(tableName, entity);
                return Result.Success(entity);
            }
            catch (RequestFailedException ex)
            {
                Console.WriteLine(ex.Message);
                return Result.Failure<T, StorageFailure>(new StorageFailure(ex));
            }
        }

        public async Task<Result<T, StorageFailure>> Get<T>(string tableName, string partitionKey, string rowKey) where T : class, ITableEntity, new()
        {
            try
            {
                var entity = await tableStorageExecutor.Get<T>(tableName, partitionKey, rowKey);
                return Result.Success<T, StorageFailure>(entity);

            } catch (Exception ex) // RequestFailedException | ArgumentNullException
            {
                Console.WriteLine(ex.Message);
                return Result.Failure<T, StorageFailure>(new StorageFailure(ex));
            }
        }

        public async Task<Result<List<T>,StorageFailure>> GetMultiple<T>(string tableName, string partitionKey) where T : class, ITableEntity, new()
        {
            try
            {
                var entities = await tableStorageExecutor.GetMultiple<T>(tableName, partitionKey);
                return Result.Success<List<T>, StorageFailure>(entities);

            }
            catch (RequestFailedException ex)
            {
                Console.WriteLine(ex.Message);
                return Result.Failure<List<T>, StorageFailure>(new StorageFailure(ex));
            }
        }

        public async Task<Result<Unit,StorageFailure>> Delete(string tableName, string partitionKey, string rowKey)
        {
            try
            {
                await tableStorageExecutor.Delete(tableName, partitionKey, rowKey);
                return Result.Unit<StorageFailure>();

            }
            catch (RequestFailedException ex)
            {
                Console.WriteLine(ex.Message);
                return Result.Failure<Unit, StorageFailure>(new StorageFailure(ex));
            }
        }

        public async Task<Result<Unit, StorageFailure>> Delete(string tableName, TableEntity entity)
        {
            return await Delete(tableName, entity.PartitionKey, entity.RowKey);
        }
    }

    public class StorageFailure : Failure
    {
        public StorageFailure(string message) : base(message) { }
        public StorageFailure(Exception e) : base(e) { }
    }
}
