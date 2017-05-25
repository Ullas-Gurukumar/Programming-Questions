public class SumSquareDifference
{
    public static void main(String[] args){
        System.out.println(SumSquareDifference.main(100));
    }

    public static int main(int limit)
    {   
        int sqrOfSum = (int) Math.pow( (double) summationOfPowerOne(limit), (double) 2);
        int sumOfSquares = summationOfPowerTwo(limit);
        return sqrOfSum - sumOfSquares;
    }
    
    public static int summationOfPowerOne(int n)
    {
        return ( n * (n+1)) / 2;
    }
    
    public static int summationOfPowerTwo(int n)
    {
        return ( n * (n+1) * (2 * n + 1)) / 6;
    }
}
