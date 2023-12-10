
public class Solution {

    private static final int[] RANGE_OF_VALUES = {1, 100};

    public int[] findIntersectionValues(int[] inputOne, int[] inputTwo) {

        return new int[]{
            totalElementsInSourceThatOccurAtLeastOnceInTarget(inputOne, inputTwo),
            totalElementsInSourceThatOccurAtLeastOnceInTarget(inputTwo, inputOne)
        };
    }

    private int totalElementsInSourceThatOccurAtLeastOnceInTarget(int[] source, int[] target) {
        int[] frequencyCharacters = new int[RANGE_OF_VALUES[1] + 1];
        for (int n : source) {
            ++frequencyCharacters[n];
        }

        int totalElementsInSourceThatOccurAtLeastOnceInTarget = 0;
        boolean[] visited = new boolean[RANGE_OF_VALUES[1] + 1];
        for (int n : target) {
            if (frequencyCharacters[n] > 0 && !visited[n]) {
                totalElementsInSourceThatOccurAtLeastOnceInTarget += frequencyCharacters[n];
                visited[n] = true;
            }
        }
        return totalElementsInSourceThatOccurAtLeastOnceInTarget;
    }
}
