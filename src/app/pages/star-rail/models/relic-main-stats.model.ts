import { MainStatsEnum, RelicTypeEnum } from './relic-enums';

export interface RelicMainStats {
  relicType: RelicTypeEnum;
  availableStats: MainStatsEnum[];
}
