json.array!(@washes) do |wash|
  json.extract! wash, :id, :email, :address, :plate
  json.url wash_url(wash, format: :json)
end
