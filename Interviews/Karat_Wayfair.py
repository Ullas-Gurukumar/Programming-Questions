'''
We have some clickstream data that we gathered on our client's website. Using cookies, we collected snippets of users' anonymized URL histories while they browsed the site. The histories are in chronological order, and no URL was visited more than once per person.

Write a function that takes two users' browsing histories as input and returns the longest contiguous sequence of URLs that appears in both.

Sample input:

user0 = ["/start", "/green", "/blue", "/pink", "/register", "/orange", "/one/two"]
user1 = ["/start", "/pink", "/register", "/orange", "/red", "a"]
user2 = ["a", "/one", "/two"]
user3 = ["/pink", "/orange", "/yellow", "/plum", "/blue", "/tan", "/red", "/amber", "/HotRodPink", "/CornflowerBlue", "/LightGoldenRodYellow", "/BritishRacingGreen"]
user4 = ["/pink", "/orange", "/amber", "/BritishRacingGreen", "/plum", "/blue", "/tan", "/red", "/lavender", "/HotRodPink", "/CornflowerBlue", "/LightGoldenRodYellow"]
user5 = ["a"]
user6 = ["/pink","/orange","/six","/plum","/seven","/tan","/red", "/amber"]

Sample output:

findContiguousHistory(user0, user1) => ["/pink", "/register", "/orange"]
findContiguousHistory(user0, user2) => [] (empty)
findContiguousHistory(user0, user0) => ["/start", "/green", "/blue", "/pink", "/register", "/orange", "/one/two"]
findContiguousHistory(user2, user1) => ["a"] 
findContiguousHistory(user5, user2) => ["a"]
findContiguousHistory(user3, user4) => ["/plum", "/blue", "/tan", "/red"]
findContiguousHistory(user4, user3) => ["/plum", "/blue", "/tan", "/red"]
findContiguousHistory(user3, user6) => ["/tan", "/red", "/amber"]

n: length of the first user's browsing history
m: length of the second user's browsing history
'''

counts = [
    "900,google.com",
    "60,mail.yahoo.com",
    "10,mobile.sports.yahoo.com",
    "40,sports.yahoo.com",
    "300,yahoo.com",
    "10,stackoverflow.com",
    "20,overflow.com",
    "5,com.com",
    "2,en.wikipedia.org",
    "1,m.wikipedia.org",
    "1,mobile.sports",
    "1,google.co.uk" 
]



def solution(counts):
    click_by_domain = {}
    for entry in counts:
        split_string = entry.split(",")
        num_of_hits = int(split_string[0])
        domains = split_string[1].split('.')

        for i in range(len(domains)):
            sub_domain = domains[len(domains)-i-1:len(domains)]
            sub_domain = ".".join(sub_domain)
            if sub_domain in click_by_domain:
                click_by_domain[sub_domain] = click_by_domain[sub_domain] + num_of_hits
            else:
                click_by_domain[sub_domain] = num_of_hits

        
    return click_by_domain



# print(solution(counts))



user0 = ["/start", "/green", "/blue", "/pink", "/register", "/orange", "/one/two"]
user1 = ["/start", "/pink", "/register", "/orange", "/red", "a"]
user2 = ["a", "/one", "/two"]
user3 = ["/pink", "/orange", "/yellow", "/plum", "/blue", "/tan", "/red", "/amber", "/HotRodPink", "/CornflowerBlue", "/LightGoldenRodYellow", "/BritishRacingGreen"]
user4 = ["/pink", "/orange", "/amber", "/BritishRacingGreen", "/plum", "/blue", "/tan", "/red", "/lavender", "/HotRodPink", "/CornflowerBlue", "/LightGoldenRodYellow"]
user5 = ["a"]
user6 = ["/pink","/orange","/six","/plum","/seven","/tan","/red", "/amber"]


def longest_list(user1, user2):
    start_index = -1
    length = 0
    for index1, item1 in enumerate(user1):
        for index2, item2 in enumerate(user2):
            if item1 is item2:
                curr_length = longest_length(user1, user2, index1, index2)
                if curr_length > length:
                    length = curr_length
                    start_index = index1

    return user1[start_index:start_index+length]


def longest_length(user1, user2, index1, index2, length=0):
    if (index1 >= len(user1) or index2 >= len(user2)):
        return length

    if user1[index1] is user2[index2]:
        index1 += 1
        index2 += 1 
        length += 1
        return longest_length(user1, user2, index1, index2, length)
    else:
        return length


print(longest_list(user3, user6))