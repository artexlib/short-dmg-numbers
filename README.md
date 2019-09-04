### **Intro**

Divides the damage you deal by the value set in the script, with the default one being `1000` for pve and `1` for pvp. The core idea is to free up space from the screen to actually be able to see what's going on. The module does not work below lvl 65 as damage is already rather low.

#### Settings

* Edit `settings.json`:
  * `enabled` - it does the obvious. 
  * `pvp_divisor` - pvp divisor to be used.
  * `pve_divisor` - pve divisor to be used.

#### In-game Commands

* ***`smn`***  *`[on/off]`* - turns on and off the module.
* ***`smn`*** *`pve`* *`divisor(number)`* - sets a new pve divisor.
* ***`smn`*** *`pvp`*  *`divisor(number)`* - sets a new pvp divisor.
######
