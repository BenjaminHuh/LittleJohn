@summaries.each do |summary|
    json.set! summary[:id] do 
        json.merge! summary
    end
end