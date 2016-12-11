import { takeLatest } from 'redux-saga';
import { put, fork, call, select } from 'redux-saga/effects';
import { LOAD_PODCAST, CREATE_ORDER, podcastLoaded } from './actions';

import fetchData from 'containers/App/sagas/fetchData';
import { selectCurrentUser } from 'containers/App/selectors';

export function* getPodcastData(action) {
  const url = `/podcast/episode/${action.id}`;
  const results = yield call(fetchData, { url });

  if (results) {
    const mock = {
      latest_update: '2016-11-13T16:48:28.061450Z',
      title: '糖蒜女子脱口秀',
      copyright: 'All rights reserved',
      id: 1,
      image: null,
      episodes_count: 1,
      description: '“俗话说“女人能顶半边天”，作为当今糖蒜广播堪称当红炸子鸡的明星节目，节目以温柔细腻的女性视角观察社会万象，以犀利的言语分析时尚潮流，在品评人间百态的同时也为大家呈现了社会新女性的精神面貌。自2012年上线以来，一直颇受追捧。',
      keywords: '',
      frequency: '',
      hosts: [
        {
          id: 1,
          name: '大王',
          description: '',
          image: null,
        },
        {
          image: null,
          description: '',
          name: '喵阿阿',
          id: 3,
        },
      ],
      explicit: 'no',
    };
    const { description, latest_update, episodes_count } = results;
    const memorizedResults = {
      // ...results,
      ...mock,
      desc: description,
      update: latest_update,
      count: episodes_count,
    };
    yield put(podcastLoaded(memorizedResults));
  }
}

export function* watcher() {
  yield fork(takeLatest, LOAD_PODCAST, getPodcastData);
}

export function* loadPodcast() {
  yield fork(watcher);
}

export function* requireOrder(action) {
  const user = yield select(selectCurrentUser());
  const url = '/term/order/';
  const options = {
    method: 'POST',
    body: JSON.stringify({
      tier: 'episode',
      member: user.member_id,
      item: action.id,
      payments: [{ agent: 'wechat' }],
    }),
  };
  const results = yield call(fetchData, { url, options });

  if (results) {
    // TODO: 根据返回值调起支付
    console.log(results);
  }
}

export function* createOrderWatcher() {
  yield fork(takeLatest, CREATE_ORDER, requireOrder);
}

export function* createOrder() {
  yield fork(createOrderWatcher);
}

// Bootstrap sagas
export default [
  loadPodcast,
  createOrder,
];