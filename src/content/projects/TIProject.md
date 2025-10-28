---
title: TI Wi-SUN FAN DHCPv6 for IoT Networks
publishDate: 2025-05-16 00:00:00
img: /assets/stock-3.jpg
img_alt: A picture of us testing the real-time demo. There is an RC car positioned to run over sensors on a minature city track.
description: |
  We developed an IoT dashboard for Texas Instrument's Wi-SUN Tech.
tags:
  - Embedded Systems
  - Network Design
  - React.js
  - SQLite
---

https://github.com/LawsonLay/CS4485-TI-WISUN-IOT

In the Spring 2025 semester, we created a minature smart city to simulate an application of Wi-SUN technology using Texas Instruments' LaunchPads, ti-web-app, ti-wfantund, the Kea DHCPv6 server, and a BeaglePlay. When run over by a RC car, the sensors would send a CoAP request to the central ti-web-app, to activate the corresponding light zones. All Router Nodes (sensors and lights) could be managed and monitored via our modified ti-web-app in real-time.

This project implements an adaptable and scalable DHCP service for Wi-SUN Field Area Networks (FAN), designed for smart city loT applications. Using BeaglePlay® as a host device and Texas Instruments' LP-CC1352P7-1 evaluation boards as router nodes, we integrate a Kea DHCPv6 server and Stork dashboard to manage IPv6 address allocation.

![The IoT dashboard UI for devices](/assets/ti-web-app_devices.png)
![The IoT dashboard UI for routines](/assets/ti-web-app_routines.png)


![The senior project poster](/assets/poster.png)