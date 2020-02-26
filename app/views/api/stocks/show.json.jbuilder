#// json.extract! @stock, :id, :ticker, :name
# json.merge! @stock_info

# json.symbol @ticker
# json.set! "data" do
#     json.merge! @stock_info
# end

json.set! @ticker do
    json.merge! @stock_info
    json.extract! @stock, :id 
    json.merge! @num_stocks
    json.set! "company" do
        json.merge! @company
    end
    json.set! "data" do
        json.merge! @stock_info2
    end
end

