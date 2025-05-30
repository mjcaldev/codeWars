def generate_hashtag(s):
    if not s or s.strip() == "":
        return False
​
    words = s.strip().split()
    hashtag = '#' + ''.join(word.capitalize() for word in words)
​
    return hashtag if 0 < len(hashtag) <= 140 else False
​
    pass
​
​
# Pseudo code
# 1. Trim and split the input string into words.
# 2. Capitalize the first letter of each word.
# 3. Concatenate them and add a # at the beginning.
# 4. Check for edge cases (empty result or length > 140).
​
​