def sort(num_list):
    sorted_list = [num_list[0]]

    for i in xrange(1, len(num_list)):
        appended = False
        for j in xrange(0, len(sorted_list)):
            number_to_sort = num_list[i]
            sorted_number = sorted_list[j]
            if not appended:
                if len(sorted_number) == len(number_to_sort) and sorted_number < number_to_sort:
                    sorted_list.insert(j, number_to_sort)
                    appended = True
                    break
                elif len(sorted_number) < len(number_to_sort):
                    for x in xrange(0, len(sorted_number)):
                        if number_to_sort[x] > sorted_number[x] or (sorted_number[x] == number_to_sort[x]
                                                                    and number_to_sort[x+1] > sorted_number[x]):
                            sorted_list.insert(j, number_to_sort)
                            appended = True
                            break
                elif len(sorted_number) > len(number_to_sort):
                    for x in xrange(0, len(number_to_sort)):
                        if number_to_sort[x] > sorted_number[x]:
                            sorted_list.insert(j, number_to_sort)
                            appended = True
                            break
                if not appended and j == len(sorted_list) - 1:
                    sorted_list.append(number_to_sort)
                    appended = True
    print(sorted_list)


with open('input.txt') as f:
    content = f.readlines()

content = [x.strip() for x in content]
print(content)

sort(content[2].split(' '))
sort(content[4].split(' '))
