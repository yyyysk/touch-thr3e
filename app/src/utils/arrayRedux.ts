/**
 * Object/light/camera Storeの配列にデータを追加
 * @param array 
 * @param item 
 */
export const addItem = (array, item) => {
  return Array.from(new Set([...array, item]));
}

/**
 * Object/light/camera Storeの配列からデータを削除
 * @param array 
 * @param id 
 */
export const removeItem = (array, id) => {
  return array.filter((v, i) => v.id !== id);
}
