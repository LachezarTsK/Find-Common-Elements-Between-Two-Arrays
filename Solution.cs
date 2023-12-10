
using System;

public class Solution
{
    private static readonly int[] RANGE_OF_VALUES = { 1, 100 };

    public int[] FindIntersectionValues(int[] inputOne, int[] inputTwo)
    {
        return new int[]{
            TotalElementsInSourceThatOccurAtLeastOnceInTarget(inputOne, inputTwo),
            TotalElementsInSourceThatOccurAtLeastOnceInTarget(inputTwo, inputOne)
        };
    }

    private int TotalElementsInSourceThatOccurAtLeastOnceInTarget(int[] source, int[] target)
    {
        int[] frequencyCharacters = new int[RANGE_OF_VALUES[1] + 1];
        foreach (int n in source)
        {
            ++frequencyCharacters[n];
        }

        int totalElementsInSourceThatOccurAtLeastOnceInTarget = 0;
        bool[] visited = new bool[RANGE_OF_VALUES[1] + 1];
        foreach (int n in target)
        {
            if (frequencyCharacters[n] > 0 && !visited[n])
            {
                totalElementsInSourceThatOccurAtLeastOnceInTarget += frequencyCharacters[n];
                visited[n] = true;
            }
        }
        return totalElementsInSourceThatOccurAtLeastOnceInTarget;
    }
}
