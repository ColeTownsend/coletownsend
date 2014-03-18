def truncate(input, length = 50, truncate_string = "...")
    if input.nil? then return end
    l = length.to_i - truncate_string.length
    l = 0 if l < 0
    a=0
    test = input.length > length.to_i ? input.chars.take_while{|c| (a += c.bytes.to_a.length) <= length }.join + truncate_string : input
    return test
end