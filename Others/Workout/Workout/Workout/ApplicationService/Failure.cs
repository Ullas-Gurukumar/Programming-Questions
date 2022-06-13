namespace Workout.ApplicationService
{
    public class Failure
    {
        public Exception exception;

        public Failure(Exception e)
        {
            exception = e;
        }

        public Failure(string exceptionMessage)
        {
            exception = new Exception(exceptionMessage);
        }

        public Exception ToException() => exception ?? new Exception();
    }
}
