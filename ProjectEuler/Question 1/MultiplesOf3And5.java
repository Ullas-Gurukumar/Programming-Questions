public class MultiplesOf3And5
{
    public static void main(String[] args){
        System.out.println(MultiplesOf3And5.main(1000));
    }

    public static int main(int limit){
        int numOfMultiplesOfThree = (limit - 1)/3;
        int numOfMultiplesOfFive = (limit - 1)/5;
        int numOfMultiplesOfFifteen = (limit - 1)/15;
        return ( 3 * summationOfPowerOne(numOfMultiplesOfThree)) + ( 5 * summationOfPowerOne(numOfMultiplesOfFive)) - ( 15 * summationOfPowerOne(numOfMultiplesOfFifteen));
    }
    
    public static int summationOfPowerOne(int n){
        return ( n * (n+1)) / 2;
    }
}
