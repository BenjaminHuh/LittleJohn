@accounts.each do |account|
    json.set! account.id do
        json.extract! account, :user_id, :balance
    end
end