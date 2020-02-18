json.set! @stock_id do
    json.merge! @stock_info
    json.set! "data" do
        json.merge! @stock_info2
    end
end

