#// json.extract! @stock, :id, :ticker, :name
# json.merge! @stock_info

# json.symbol @ticker
# json.set! "data" do
#     json.merge! @stock_info
# end

json.set! @ticker do
    json.merge! @stock_info
    json.set! "data" do
        json.merge! @stock_info2
    end
end

