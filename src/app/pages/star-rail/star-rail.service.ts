import { Injectable } from '@angular/core';
import { MainStatsEnum, RelicTypeEnum } from './models/star-rail-enums';

@Injectable({
  providedIn: 'root'
})
export class StarRailService {
  constructor() {}

  listMainStatAvailability() {
    return [
      {
        relicType: RelicTypeEnum.HEAD,
        possibleStats: [MainStatsEnum.FLAT_HP]
      },
      {
        relicType: RelicTypeEnum.HANDS,
        possibleStats: [MainStatsEnum.FLAT_ATK]
      },
      {
        relicType: RelicTypeEnum.BODY,
        possibleStats: [
          MainStatsEnum.PERC_HP,
          MainStatsEnum.PERC_ATK,
          MainStatsEnum.PERC_DEF,
          MainStatsEnum.EFFECT_HIT_RATE,
          MainStatsEnum.OUTGOING_HEAL
        ]
      },
      {
        relicType: RelicTypeEnum.FEET,
        possibleStats: [
          MainStatsEnum.SPD,
          MainStatsEnum.PERC_HP,
          MainStatsEnum.PERC_ATK,
          MainStatsEnum.PERC_DEF
        ]
      },
      {
        relicType: RelicTypeEnum.PLANAR_SPHERE,
        possibleStats: [
          MainStatsEnum.PERC_HP,
          MainStatsEnum.PERC_ATK,
          MainStatsEnum.PERC_DEF,
          MainStatsEnum.PHYS_DMG,
          MainStatsEnum.FIRE_DMG,
          MainStatsEnum.ICE_DMG,
          MainStatsEnum.WIND_DMG,
          MainStatsEnum.LIGHT_DMG,
          MainStatsEnum.QUANT_DMG,
          MainStatsEnum.IMG_DMG
        ]
      },
      {
        relicType: RelicTypeEnum.LINK_ROPE,
        possibleStats: [
          MainStatsEnum.PERC_HP,
          MainStatsEnum.PERC_ATK,
          MainStatsEnum.PERC_DEF,
          MainStatsEnum.BREAK_EFFECT,
          MainStatsEnum.ENERGY_REG
        ]
      }
    ];
  }
}
