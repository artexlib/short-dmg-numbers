module.exports = function ZelekieShortDmgNumbers(mod) {

  const block_settings = require('./damage_block_preset.js'),
        Type = 1 // We assume other dmg types are irrelevant, might not be true.

  // Hook packet responsible for dmg, check wherever it's relative to us, modify it if so
  mod.hook('S_EACH_SKILL_RESULT', 13, event => {
    if (!mod.settings.enabled) return // we disabled :(
    if ((mod.game.me.gameId === event.source || mod.game.me.gameId === event.owner) && event.type === Type) {
      // It's us pog
      if (!block_settings[mod.game.me.class].enabled || !block_settings[mod.game.me.class][Math.round(event.skill.id / 10000)]) {
        // Someone disabled my damage pepehands
        event.damage = 0
        return true
      }
      // We do the big maffs for making the number smoler here ez
      event.damage = event.damage / BigInt(mod.settings.divisor)
      return true
    }
  })

  // Bunch of useless commands
  mod.command.add('smn', {
    on() {
      if (mod.settings.enabled) return mod.command.message('Fool, i was already enabled!')
      mod.settings.enabled = true
      mod.command.message('Module enabled.')
    },
    off() {
      if (!mod.settings.enabled) return mod.command.message('Fool, i was already disabled!')
      mod.settings.enabled = false
      mod.command.message('Module disabled.')
    },
    divisor(NewValue) {
      if (!+NewValue) return mod.command.message('Innapropiate or missing divisor value.')
      mod.settings.divisor = NewValue
      mod.command.message('Divisor set to: ' + mod.settings.divisor + '.')
    },
    $default() { mod.command.message('Invalid command.') }
  })
}
