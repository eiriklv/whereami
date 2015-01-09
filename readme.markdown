# whereami

keep track of your roaming headless linux devices in the wild

This module tracks the IP address and wireless essid of roaming devices.
Just put `whereami phonehome ...` in a crontab on something like a raspberry pi.

# example

```
$ whereami server -p 5000 &
[1] 10096
$ curl http://localhost:5000
{}
$ whereami phonehome raspberry-pi http://localhost:5000
ok
$ curl http://localhost:5000{
  "raspberry-pi": {
    "id": "raspberry-pi",
    "time": "2015-01-08.21:14:16",
    "addr": "192.168.180.151",
    "wifi": "sudomesh"
  }
}
```

# usage

```
$ whereami phonehome DEVICE-ID URL
$ whereami server -p PORT
```

# install

With [npm](https://npmjs.org) do:

```
npm install -g whereami
```

# license

MIT
