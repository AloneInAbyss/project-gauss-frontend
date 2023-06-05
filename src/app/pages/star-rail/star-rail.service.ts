import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MainStatsEnum, RelicTypeEnum } from './models/relic-enums';
import { RelicMainStats } from './models/relic-main-stats.model';

@Injectable({
  providedIn: 'root'
})
export class StarRailService {
  constructor(private httpClient: HttpClient) {}

  listMainStatAvailability(): RelicMainStats[] {
    return [
      {
        relicType: RelicTypeEnum.HEAD,
        availableStats: [MainStatsEnum.FLAT_HP]
      },
      {
        relicType: RelicTypeEnum.HANDS,
        availableStats: [MainStatsEnum.FLAT_ATK]
      },
      {
        relicType: RelicTypeEnum.BODY,
        availableStats: [
          MainStatsEnum.PERC_HP,
          MainStatsEnum.PERC_ATK,
          MainStatsEnum.PERC_DEF,
          MainStatsEnum.EFFECT_HIT_RATE,
          MainStatsEnum.OUTGOING_HEAL
        ]
      },
      {
        relicType: RelicTypeEnum.FEET,
        availableStats: [
          MainStatsEnum.SPD,
          MainStatsEnum.PERC_HP,
          MainStatsEnum.PERC_ATK,
          MainStatsEnum.PERC_DEF
        ]
      },
      {
        relicType: RelicTypeEnum.PLANAR_SPHERE,
        availableStats: [
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
        availableStats: [
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
