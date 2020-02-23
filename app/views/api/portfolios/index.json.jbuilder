# @portfolio_stocks.each do |stock|
#   json.set! stock.stock_id do
#     json.extract! stock, :stock_id, :num_stocks
#   end
# end

# json.set! @stock_id do
#     json.merge! @stock_info
#     json.set! "data" do
#         json.merge! @stock_info2
#     end
# end

@portfolio_stocks.each do |stock|
  json.set! stock[:id] do
    json.merge! stock[:stock_info]
    json.set! "data" do
      json.merge! stock[:stock_info2]
    end
  end
end