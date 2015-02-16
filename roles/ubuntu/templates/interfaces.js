#This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).

# The loopback network interface
auto lo
iface lo inet loopback

# The primary network interface

auto br-ex
iface br-ex inet static
	address 172.20.101.{{ last_octet.stdout }}
	netmask 255.255.0.0
	gateway 172.20.1.1
	dns-search lucky-ccielab.com
	dns-nameservers 172.20.1.1
	bridge_ports eth0
	bridge_fd 9
	bridge_hello 2
	bridge_maxage 12
	bridge_stp off
