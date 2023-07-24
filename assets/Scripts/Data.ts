export class GameConfig {
  static level: number = 0;
}
GameConfig.level = 0;

//Size nên chia bằng code chứ đừng set cứng
export const Data = [
  {
    id: 1,
    widthBackGround: 510,
    heightBackGround: 330,
    sizeBackGround: { rows: 10, columns: 6 },
    time: 50,
  },
  {
    id: 2,
    widthBackGround: 580,
    heightBackGround: 350,
    sizeBackGround: { rows: 11, columns: 6 },
    time: 50,
  },
  {
    id: 3,
    widthBackGround: 630,
    heightBackGround: 400,
    sizeBackGround: { rows: 12, columns: 7 },
    time: 50,
  },
];

/**
 * Lưu cấu hình ma trận: Số lượng tối thiểu và tối đa của một character chia 2. 
 * (Để xíu mình đảm bảo random ra số lượng character sẽ chẵn)
 */
export const config = [4, 4, 4, 4, 4, 6, 4, 6, 4, 6, 4, 6, 4];