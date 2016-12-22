export function normalizePodcast(data) {
  return {
    id: data.id,
    title: data.title,
    desc: data.description || '暂无简介',
    rank: data.episodes_count || 0,
    ablumPicture: data.image,
    time: data.full_length || 0,
    coast: data.price || 0,
    createDate: data.dt_updated,
  };
}

export function normalizeAblum(data) {
  return {
    id: data.id,
    image: data.image,
    title: data.title,
    desc: data.description || '暂无简介',
    amount: data.episodes_count || 0,
    time: data.length || 0,
  };
}
