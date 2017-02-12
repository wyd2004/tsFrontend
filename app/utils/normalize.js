export function normalizePodcast(data) {
  return {
    id: data.id,
    title: data.title,
    desc: data.description || '暂无简介',
    rank: data.serial || '1',
    image: data.image,
    time: data.full_length || 0,
    coast: data.price || 0,
    createDate: data.dt_updated,
    srcShort: data.preview_url,
    src: data.full_url,
    serial: data.serial,
    people: data.hosts,
    albumId: data.album_id,
    next: data.next_ep_id,
    prev: data.previous_ep_id,
    subscribed: data.is_album_sub,
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
