while True:
    n = input("Height: ")
    if n.isdigit():
        num = int(n)
        if num > 0 and num <= 8:
            break

#make use of i which is changing !
for i in range(num):
    # print spaces first
    print(" " * (num-1-i), end="")
    # print hashes
    print("#" * (i + 1), end="")

    # print middle spaces
    print("  ", end="")
    # print hashes again
    print("#" * (i + 1))