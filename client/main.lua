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
    startAnim()
    hackbasla()
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

function SendDistressSignal()
	local playerPed = PlayerPedId()
	local PedPosition = GetEntityCoords(playerPed)
	local PlayerCoords = {x = PedPosition.x, y = PedPosition.y, z = PedPosition.z}

	TriggerServerEvent(
		"esx_addons_gcphone:startCall",
		"police",
		("VPN Kullanımı"),
		PlayerCoords,
		{PlayerCoords = {x = PedPosition.x, y = PedPosition.y, z = PedPosition.z}}
	)
end

function attachObject()
	tab = CreateObject(GetHashKey("prop_cs_tablet"), 0, 0, 0, true, true, true)
	AttachEntityToEntity(tab, PlayerPedId(), GetPedBoneIndex(PlayerPedId(), 28422), -0.05, 0.0, 0.0, 0.0, 0.0, 0.0, true, true, false, true, 1, true)
end

function stopAnim()
	temp = false
	StopAnimTask(PlayerPedId(), "amb@code_human_in_bus_passenger_idles@female@tablet@idle_a", "idle_a" ,8.0, -8.0, -1, 50, 0, false, false, false)
	DeleteObject(tab)
end

function startAnim()
	if not temp then
		RequestAnimDict("amb@code_human_in_bus_passenger_idles@female@tablet@idle_a")
		while not HasAnimDictLoaded("amb@code_human_in_bus_passenger_idles@female@tablet@idle_a") do
			Citizen.Wait(0)
		end
		attachObject()
		TaskPlayAnim(PlayerPedId(), "amb@code_human_in_bus_passenger_idles@female@tablet@idle_a", "idle_a" ,8.0, -8.0, -1, 50, 0, false, false, false)
		temp = true
	end
end

function hackbasla()
	TriggerEvent("mhacking:show")
	TriggerEvent("mhacking:start", 5 , 30, hackbitir)
    SendDistressSignal()
end

function hackbitir()
	TriggerEvent('mhacking:hide')
    startAnim()
    exports['mythic_progbar']:Progress({
        name = "blackac",
        duration = 25000,
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
            animDict = "",
            anim = "",
        },
        prop = {
            model = "",
        }
    }, function(cancelled)
        if not cancelled then
            stopAnim()
            open(not display)
            exports['mythic_notify']:DoHudText('success', 'Vpne bağladın.')
        else
            stopAnim()
            TriggerServerEvent("bros-blackmarket:ekle")
        end
    end)
end   
-- Citizen.Wait(25000)


