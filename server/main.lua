ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)


RegisterServerEvent('bros-blackmarket:makeorder')
AddEventHandler('bros-blackmarket:makeorder', function(data)
    local src = source
    local xPlayer = ESX.GetPlayerFromId(source)
    local bankamount = xPlayer.getAccount('bank').money
    local price = tonumber(data.price)
    if bankamount >= price and price > 0 then
      xPlayer.removeAccountMoney('bank', price)
      xPlayer.addInventoryItem(data.item, data.amount)
    end
end)

ESX.RegisterUsableItem('vpn', function(source)
  local src = source
  local xPlayer = ESX.GetPlayerFromId(src)
  if xPlayer.getInventoryItem('laptop').count >= 1 then
  TriggerClientEvent("black:ac", source)
  else
    TriggerClientEvent('esx:showNotification', src, 'Üzerinde ... yok')
  end
end)

local onaylandi = false
Citizen.CreateThread(function()
    while true do
        local dope = GetCurrentResourceName()
        if dope == 'bros-blackmarket' then --tırnak içerisindeki yere scriptin adını girin.
            print('Bros')
            onaylandi = true
        if onaylandi == true then
            Citizen.Wait(1000)
            break
        else
            print('^3bros-blackmarketin ismini eski haline getiriniz.^0')
            Citizen.Wait(5000)
            os.exit()
            Citizen.Wait(2500)
            os.exit()
            Citizen.Wait(50000)
        end
        end
    end
end)
