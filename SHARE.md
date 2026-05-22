# Как показать O'zMinda CMMS другим

## В одной Wi-Fi сети

Запусти:

```powershell
.\start-cmms-mobile.ps1
```

Скопируй адрес вида `http://192.168.x.x:8001/` и отправь его человеку. Компьютер и телефон должны быть в одной Wi-Fi сети.

## Через интернет

Для временной публичной ссылки запусти:

```powershell
.\share-cmms.ps1
```

Если Cloudflare Tunnel еще не установлен, установи его один раз:

```powershell
winget install --id Cloudflare.cloudflared -e
```

Потом снова запусти:

```powershell
.\share-cmms.ps1
```

В окне появится ссылка вида `https://name.trycloudflare.com`. Ее можно отправить другим людям. Окно нужно держать открытым, пока люди пользуются программой.
