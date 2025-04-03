from itertools import permutations

# Function to check if the placement of crowns is valid
def is_valid_solution(matrix, perm):
    n = len(matrix)  # Grid size (assumed square)
    occupied_regions = set()

    for row, col in enumerate(perm):
        # Check if the current region is already occupied
        region = matrix[row][col]
        if region in occupied_regions:
            return False
        occupied_regions.add(region)

        # Check for adjacency (including diagonals)
        for r_offset, c_offset in [(-1, -1), (-1, 1), (1, -1), (1, 1)]:
            r, c = row + r_offset, col + c_offset
            if 0 <= r < n and 0 <= c < n and c == perm[r]:  # Diagonal conflict
                return False

    return True

# Function to count valid solutions for a given level matrix
def count_valid_solutions(matrix):
    n = len(matrix)  # Size of the grid (assumed square)
    valid_solutions = 0

    # Generate all possible row-wise placements (permutations)
    for perm in permutations(range(n)):
        if is_valid_solution(matrix, perm):
            valid_solutions += 1

    return valid_solutions

# Define all levels
levels = {
    "level1": [
        [1, 1, 1, 1, 6, 6],
        [3, 3, 3, 6, 6, 6],
        [3, 3, 3, 6, 6, 6],
        [3, 3, 5, 5, 5, 5],
        [2, 2, 4, 4, 4, 5],
        [2, 2, 4, 4, 4, 5]
    ],
    "level2": [
        [1, 1, 1, 1, 5, 5],
        [1, 1, 1, 6, 6, 5],
        [1, 1, 1, 6, 6, 5],
        [2, 2, 4, 4, 6, 5],
        [2, 2, 4, 4, 3, 3],
        [4, 4, 4, 4, 3, 3]
    ],
    "level3": [
        [6, 1, 4, 4, 4, 4],
        [6, 1, 1, 1, 4, 3],
        [6, 6, 6, 5, 3, 3],
        [6, 6, 6, 5, 3, 3],
        [2, 6, 5, 5, 5, 3],
        [2, 2, 2, 5, 5, 5]
    ],
    "level4": [
        [1, 1, 1, 5, 5, 5],
        [1, 1, 6, 6, 6, 4],
        [3, 6, 6, 6, 6, 4],
        [3, 3, 2, 2, 6, 4],
        [3, 2, 2, 2, 2, 4],
        [3, 2, 2, 2, 2, 4]
    ],
    "level5": [
        [1, 1, 1, 6, 6, 6],
        [1, 1, 6, 6, 6, 6],
        [1, 5, 5, 5, 6, 6],
        [3, 3, 2, 4, 4, 6],
        [3, 2, 2, 4, 4, 4],
        [3, 2, 2, 2, 4, 4]
    ],
    "level6": [
        [5, 5, 5, 1, 6, 6],
        [5, 5, 5, 1, 1, 6],
        [5, 5, 5, 1, 1, 6],
        [2, 5, 3, 1, 1, 6],
        [2, 3, 3, 3, 6, 6],
        [2, 2, 2, 4, 4, 4]
    ],
    "level7": [
        [4, 4, 3, 3, 3, 3],
        [4, 4, 3, 3, 3, 3],
        [1, 1, 5, 5, 5, 3],
        [1, 1, 1, 5, 5, 6],
        [1, 1, 2, 5, 6, 6],
        [2, 2, 2, 5, 5, 6]
    ],
    "level8": [
        [1, 1, 1, 5, 5, 5],
        [1, 1, 2, 5, 6, 6],
        [1, 2, 2, 5, 6, 6],
        [1, 2, 2, 4, 6, 3],
        [1, 2, 4, 4, 3, 3],
        [4, 4, 4, 4, 3, 3]
    ],
    "level9": [
        [1, 1, 1, 6, 6, 2],
        [1, 1, 6, 6, 2, 2],
        [1, 1, 1, 6, 2, 2],
        [4, 3, 6, 6, 2, 2],
        [4, 3, 3, 6, 6, 6],
        [4, 3, 3, 5, 5, 6]
    ],
    "level10": [
        [1, 1, 5, 5, 5, 5],
        [3, 1, 1, 1, 1, 5],
        [3, 1, 2, 1, 4, 5],
        [3, 3, 2, 6, 4, 4],
        [3, 2, 2, 6, 6, 4],
        [2, 2, 6, 6, 6, 6]
    ]
}


# Compute the number of valid solutions for each level
solution_counts = {level: count_valid_solutions(matrix) for level, matrix in levels.items()}
print(solution_counts)
