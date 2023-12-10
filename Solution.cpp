
#include <span>
#include <array>
#include <vector>
using namespace std;

class Solution {
    
    static constexpr array<int, 2> RANGE_OF_VALUES {1, 100};

public:
    vector<int> findIntersectionValues(const vector<int>& inputOne, const vector<int>& inputTwo) const {

        return {
            totalElementsInSourceThatOccurAtLeastOnceInTarget(inputOne, inputTwo),
            totalElementsInSourceThatOccurAtLeastOnceInTarget(inputTwo, inputOne)};
    }

private:
    int totalElementsInSourceThatOccurAtLeastOnceInTarget(span<const int> source, span<const int> target) const {
        array<int, RANGE_OF_VALUES[1] + 1> frequencyCharacters{};
        for (const auto& n : source) {
            ++frequencyCharacters[n];
        }

        int totalElementsInSourceThatOccurAtLeastOnceInTarget = 0;
        array<bool, RANGE_OF_VALUES[1] + 1> visited{};
        for (const auto& n : target) {
            if (frequencyCharacters[n] > 0 && !visited[n]) {
                totalElementsInSourceThatOccurAtLeastOnceInTarget += frequencyCharacters[n];
                visited[n] = true;
            }
        }
        return totalElementsInSourceThatOccurAtLeastOnceInTarget;
    }
};
