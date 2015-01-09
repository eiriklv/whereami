#!/bin/bash
addr=$(ifconfig wlan0 \
    | grep 'inet addr:' \
    | sed -r 's/[^:]+://; s/ .*//'
)
wifi=$(iwconfig wlan0 \
    | grep ESSID: \
    | sed 's/.*ESSID:"//; s/".*//'
)
curl -X POST \
  -d id="$1" \
  -d time=`date +%Y-%m-%d.%T` \
  -d addr="$addr" \
  -d wifi="$wifi" \
  "$2"
