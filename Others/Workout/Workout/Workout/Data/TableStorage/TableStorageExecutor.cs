using Azure;
using Azure.Data.Tables;
using System.Linq.Expressions;

namespace Workout.Data.TableStorage
{
    public class TableStorageExecutor
    {
        private TableServiceClient tableServiceClient;

        public TableStorageExecutor(string connectionString = "http://127.0.0.1:10002/devstoreaccount1", string accountName= "devstoreaccount1", string storageAccountKey= "Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq / K1SZFPTOtr / KBHBeksoGMGw ==")
        {
            tableServiceClient = new TableServiceClient(new Uri(connectionString), new TableSharedKeyCredential(accountName, storageAccountKey));
        }

        public async Task<TableClient> GetTable(string tableName)
        {
            await tableServiceClient.CreateTableIfNotExistsAsync(tableName);

            return tableServiceClient.GetTableClient(tableName);
        }

        public async Task Upsert(string tableName, ITableEntity entity)
        {
            var tableClient = await GetTable(tableName);

            await tableClient.UpsertEntityAsync(entity);
        }

        public async Task Create(string tableName, ITableEntity entity)
        {
            var tableClient = await GetTable(tableName);

            await tableClient.AddEntityAsync(entity);
        }

        public async Task<T> Get<T>(string tableName, string partitionKey, string rowKey) where T : class, ITableEntity, new()
        {
            var tableClient = await GetTable(tableName);

            var responseEntity = await tableClient.GetEntityAsync<T>(partitionKey, rowKey);
            return responseEntity.Value;
        }

        private async Task<List<Page<T>>> GetMultiple<T>(string tableName, Expression<Func<T, bool>> filter) where T : class, ITableEntity, new()
        {
            var tableClient = await GetTable(tableName);

            return tableClient.QueryAsync(filter).AsPages().ToListAsync().Result;
        }

        public async Task<List<T>> GetMultiple<T>(string tableName, string partitionKey) where T : class, ITableEntity, new()
        {
            Expression<Func<T, bool>> filter = (entity) => entity.PartitionKey == partitionKey;

            var pages = await GetMultiple(tableName, filter);
            return pages.SelectMany(page => page.Values).ToList();
        }

        public async Task Delete(string tableName, string partitionKey, string rowKey)
        {
            try
            {
                var tableClient = await GetTable(tableName);

                await tableClient.DeleteEntityAsync(partitionKey, rowKey);
            } catch (RequestFailedException ex)
            {
                Console.WriteLine(ex.Message);
                throw ex;
            }
            
        }

        public async Task Delete(string tableName, TableEntity entity)
        {
            await Delete(tableName, entity.PartitionKey, entity.RowKey);
        }
    }
}
