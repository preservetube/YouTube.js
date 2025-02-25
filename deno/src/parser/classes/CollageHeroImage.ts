import NavigationEndpoint from './NavigationEndpoint.ts';
import Thumbnail from './misc/Thumbnail.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class CollageHeroImage extends YTNode {
  static type = 'CollageHeroImage';

  left: Thumbnail[];
  top_right: Thumbnail[];
  bottom_right: Thumbnail[];
  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.left = Thumbnail.fromResponse(data.leftThumbnail);
    this.top_right = Thumbnail.fromResponse(data.topRightThumbnail);
    this.bottom_right = Thumbnail.fromResponse(data.bottomRightThumbnail);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}