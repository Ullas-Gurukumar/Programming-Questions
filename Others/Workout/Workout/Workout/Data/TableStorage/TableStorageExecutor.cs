using Azure.Data.Tables;

namespace Workout.Data.TableStorage
{
    public class TableStorageExecutor
    {

        private TableClient tableClient;
        public TableStorageExecutor(string connectionString, string tableName, string accountName, string storageAccountKey)
        {
            tableClient = new TableClient(new Uri("http://127.0.0.1:10002/devstoreaccount1"), "test", new TableSharedKeyCredential("devstoreaccount1", "Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq / K1SZFPTOtr / KBHBeksoGMGw =="));
        }
    }
}
