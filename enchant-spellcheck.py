import sys
import requests
import json
import enchant
import wx
from enchant.checker import SpellChecker
from enchant.checker.wxSpellCheckerDialog import wxSpellCheckerDialog
from enchant.checker.CmdLineChecker import CmdLineChecker

#this is to just check the python script by itself with .js
input = raw_input()
lines = input.lower()

#    lines = read_in()
linesStr = str(lines)
chkr = enchant.checker.SpellChecker("en_EN")
chkr.set_text(linesStr)
for err in chkr:
#    print(err.word)
    sug = err.suggest()[0]
    err.replace(sug)

spellChecked = chkr.get_text() #returns corrected text
spellChecked =  str(spellChecked)
print spellChecked



