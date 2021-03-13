ESX = nil
local display = false

CreateThread(function()
    while ESX == nil do
        TriggerEvent('esx:GetSharedObject', function(obj) ESX = obj end)
        Wait(5000)
    end
end)

RegisterNUICallback("order", function(data)
    TriggerServerEvent('bros-blackmarket:makeorder', data)
end)

RegisterNUICallback("exit", function(data)
    open(false)
end)

function open(bool)
    display = bool
    SetNuiFocus(bool, bool)
    SendNUIMessage({
        type = "ui",
        status = bool,
    })
end

RegisterNetEvent('black:ac')
AddEventHandler('black:ac', function()
    TriggerEvent("mythic_progbar:client:progress", {
        name = "blackac",
        duration = 10000,
        label = "VPN'e bağlanılıyor",
        useWhileDead = false,
        canCancel = true,
        controlDisables = {
            disableMovement = true,
            disableCarMovement = true,
            disableMouse = false,
            disableCombat = true,
        },
        animation = {
            animDict = "amb@world_human_tourist_map@male@base",
            anim = "base",
        },
        prop = {
            model = "prop_cs_tablet",
        }
    }, function(status)
        if not status then
        end
    end)
    Citizen.Wait(10000)
    exports['mythic_notify']:DoHudText('success', 'Vpne bağladın.')
    open(not display)
end)

CreateThread(function()
    while display do
        Wait(0)
        DisableControlAction(0, 1, display) -- LookLeftRight
        DisableControlAction(0, 2, display) -- LookUpDown
        DisableControlAction(0, 142, display) -- MeleeAttackAlternate
        DisableControlAction(0, 18, display) -- Enter
        DisableControlAction(0, 322, display) -- ESC
        DisableControlAction(0, 106, display) -- VehicleMouseControlOverride
    end
end)
