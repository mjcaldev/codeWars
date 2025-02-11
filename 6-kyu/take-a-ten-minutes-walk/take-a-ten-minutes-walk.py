def is_valid_walk(walk: list[str]) -> bool:
    if len(walk) != 10:
        return False  # Walk must be exactly 10 minutes long
​
    x, y = 0, 0  # Track position
​
    for direction in walk:
        if direction == 'n':
            y += 1
        elif direction == 's':
            y -= 1
        elif direction == 'e':
            x += 1
        elif direction == 'w':
            x -= 1
​
    return x == 0 and y == 0  # Return to the start