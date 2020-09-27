import { generateKeyPairSync } from "crypto";

export interface IItemData {
  highest_buy_order: string;
  lowest_sell_order: string;
  price_prefix: string;
  price_suffix: string;
}

export interface IItemsData {
  price: string;
  assetId: string;
  itemId: string;
  url: string;
}

export interface IItemDetail {
  type: string;
  id: string;
  name: string;
  img: string;
}

export interface IBox {
  resources: IItemDetail[];
  results: IItemDetail[];
}

export const Box1: IBox = {
  resources: [
    {
      type: "minimal Wear",
      id: "139654856",
      name: "StatTrak%E2%84%A2%20MAG-7%20%7C%20Praetorian%20%28Minimal%20Wear%29#",
      img:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhnwMzFcDoV08yklYWfmOX9MrXummJW4NFOhujT8om73QGw8kU6MT3wJIWUdw8_YAnS-Vi5lLjmgJa0tJqcwSQ36yQhtHyIzAv330_ZgbOSgA/360fx360f",
    },
    // {
    //   type: "minimal Wear",
    //   id: "139654816",
    //   name: "StatTrak™%20MP7%20%7C%20Impire%20%28Minimal%20Wear%29",
    //   img:
    //     "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFBRw7P7YJgJL4cy_hoW0m_7zO6_ummpD78A_i-zEod-kile3-UJtZz-hd4_Dd1VoZV6Dq1i5wuu8jZDo6M_NzHIx6z5iuyjkfvt3Uw/360fx360f",
    // },
    // {
    //   type: "minimal Wear",
    //   id: "139673157",
    //   name: "StatTrak™%20Five-SeveN%20%7C%20Triumvirate%20%28Minimal%20Wear%29",
    //   img:
    //     "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTQg2xc7ctlj-3--YXygECLpxIuNDztcdSSew47ZgqD-AS6k-bv05Lp6MvPyCNj6SVz4n2LzUTiiRgabbRtheveFwsXZP-DHw/360fx360f",
    // },
    // {
    //   type: "Factory New",
    //   id: "139654857",
    //   name: "StatTrak™%20MP7%20%7C%20Impire%20%28Factory%20New%29",
    //   img:
    //     "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFBRw7P7YJgJL4cy_hoW0m_7zO6_ummpD78A_i-zEod-kile3-UJtZz-hd4_Dd1VoZV6Dq1i5wuu8jZDo6M_NzHIx6z5iuyjkfvt3Uw/360fx360f",
    // },
    // {
    //   type: "Factory New",
    //   id: "139673197",
    //   name: "StatTrak™%20Five-SeveN%20%7C%20Triumvirate%20%28Factory%20New%29",
    //   img:
    //     "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTQg2xc7ctlj-3--YXygECLpxIuNDztcdSSew47ZgqD-AS6k-bv05Lp6MvPyCNj6SVz4n2LzUTiiRgabbRtheveFwsXZP-DHw/360fx360f",
    // },
    // {
    //   type: "Factory New",
    //   id: "139654774",
    //   name: "StatTrak™%20MAG-7%20%7C%20Praetorian%20%28Factory%20New%29",
    //   img:
    //     "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhnwMzFcDoV08yklYWfmOX9MrXummJW4NFOhujT8om73QGw8kU6MT3wJIWUdw8_YAnS-Vi5lLjmgJa0tJqcwSQ36yQhtHyIzAv330_ZgbOSgA/360fx360f",
    // },
  ],
  results: [
    {
      type: "Factory New",
      id: "139748204",
      name: "StatTrak™%20AWP%20%7C%20Elite%20Build%20%28Factory%20New%29",
      img:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJP7c-ikZKSqPv9NLPFqWdQ-sJ0xL-Qoomm2wHk_0A6YWzzd9LHe1I4MFyD_Vi2lO7ogMTptZjPySE37iQ8pSGKluvjCzA/360fx360f",
    },
    {
      type: "minimal Wear",
      id: "139673221",
      name: "StatTrak™%20AWP%20%7C%20Elite%20Build%20%28Minimal%20Wear%29",
      img:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJP7c-ikZKSqPv9NLPFqWdQ-sJ0xL-Qoomm2wHk_0A6YWzzd9LHe1I4MFyD_Vi2lO7ogMTptZjPySE37iQ8pSGKluvjCzA/360fx360f",
    },
    {
      type: "Factory New",
      id: "139691720",
      name: "StatTrak™%20Desert%20Eagle%20%7C%20Kumicho%20Dragon%20%28Factory%20New%29",
      img:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjlH_9mkgIWKkPvxDLDEm2JS4Mp1mOjG-oLKhF2zowcDPzixc9OLcw82ZlyF8wC8wb251MW4tcifmydi7CEn4HiPlhyy1BxJbeNshqPIHELeWfJvK5CfiA/360fx360f",
    },
    {
      type: "minimal Wear",
      id: "139691733",
      name: "StatTrak™%20Desert%20Eagle%20%7C%20Kumicho%20Dragon%20%28Minimal%20Wear%29",
      img:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjlH_9mkgIWKkPvxDLDEm2JS4Mp1mOjG-oLKhF2zowcDPzixc9OLcw82ZlyF8wC8wb251MW4tcifmydi7CEn4HiPlhyy1BxJbeNshqPIHELeWfJvK5CfiA/360fx360f",
    },
    {
      type: "Factory New",
      id: "139673207",
      name: "StatTrak™%20Nova%20%7C%20Hyper%20Beast%20%28Factory%20New%29",
      img:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD09SvhIWZlfL1IK_ummJW4NFOhujT8om7jVfi_xZtMjjxJtLGdQ5oMF7Z-AC8w-jm1J-1upvAwXZh6CkjtizbyQv3308wMAGOhw/360fx360f",
    },
    {
      type: "minimal Wear",
      id: "139691725",
      name: "StatTrak™%20Nova%20%7C%20Hyper%20Beast%20%28Minimal%20Wear%29",
      img:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD09SvhIWZlfL1IK_ummJW4NFOhujT8om7jVfi_xZtMjjxJtLGdQ5oMF7Z-AC8w-jm1J-1upvAwXZh6CkjtizbyQv3308wMAGOhw/360fx360f",
    },
  ],
};
