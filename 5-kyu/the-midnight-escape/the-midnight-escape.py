def solve(people):
    people = sorted(people, key=lambda x: x[1])  # Sort by crossing time
    result = []
​
    while len(people) > 3:
        fast1, fast2 = people[0], people[1]
        slow1, slow2 = people[-1], people[-2]
​
        # Two strategies
        timeA = fast1[1] + 2 * fast2[1] + slow1[1]
        timeB = 2 * fast1[1] + slow1[1] + slow2[1]
​
        if timeA < timeB:
            # Strategy A
            result.append([fast1[0], fast2[0]])
            result.append([fast1[0]])
            result.append([slow2[0], slow1[0]])
            result.append([fast2[0]])
        else:
            # Strategy B
            result.append([fast1[0], slow1[0]])
            result.append([fast1[0]])
            result.append([fast1[0], slow2[0]])
            result.append([fast1[0]])
​
        # Remove the slowest two
        people.pop()
        people.pop()
​
    # Final 3 or fewer
    if len(people) == 3:
        result.append([people[0][0], people[1][0]])
        result.append([people[0][0]])
        result.append([people[0][0], people[2][0]])
    elif len(people) == 2:
        result.append([people[0][0], people[1][0]])
    elif len(people) == 1:
        result.append([people[0][0]])
​
    return result
​