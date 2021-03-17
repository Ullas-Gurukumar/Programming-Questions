using Microsoft.Azure.Cosmos.Table;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Skeleton.TableStorage
{
    public class TableStorageExecutor
    {
        private CloudTableClient tableClient;
        public TableStorageExecutor(string connectionString)
        {
            CloudStorageAccount storageAccount = CloudStorageAccount.Parse(connectionString);
            tableClient = storageAccount.CreateCloudTableClient(new TableClientConfiguration());

        }

        public async Task<CloudTable> GetTable(string tableName)
        {
            var table = tableClient.GetTableReference(tableName);
            await table.CreateIfNotExistsAsync();

            return table;
        }

        public async Task InsertOrMerge(string tableName, TableEntity entity)
        {
            var table = await GetTable(tableName);

            var operation = TableOperation.InsertOrMerge(entity);
            await table.ExecuteAsync(operation);
        }

        public async Task<TableResult> Get<T>(string tableName, string partitionKey, string rowKey) where T : TableEntity
        {
            var table = await GetTable(tableName);

            var operation = TableOperation.Retrieve<T>(partitionKey, rowKey);
            return await table.ExecuteAsync(operation);
        }

        public async Task<IEnumerable<TEntity>> GetMultiple<TEntity>(string tableName, string partitionKey) where TEntity : ITableEntity, new()
        {
            var table = await GetTable(tableName);

            var query = new TableQuery<TEntity>()
                .Where(TableQuery.GenerateFilterCondition(
                    "PartitionKey", QueryComparisons.GreaterThanOrEqual, partitionKey));

            return table.ExecuteQuery(query);
        }

        public async Task Delete(string tableName, TableEntity entity)
        {
            var table = await GetTable(tableName);

            var operation = TableOperation.Delete(entity);
            await table.ExecuteAsync(operation);
        }
    }
}
