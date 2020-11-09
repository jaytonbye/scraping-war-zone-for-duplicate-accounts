// The purpose of this is to check for duplicate users on the WAR Zone rankings page.
// To use, post the table body between the ``, and delete the opening and closing body tags. 

let rankingList = `<tr>
    <td>1</td>
    <td><a href="/player/2001/jason-layton-the-champ/" target="_blank">Jason Layton (The Champ!)</a></td>
    <td>185.2</td>
    <td>37.1</td>
    <td>99999.9</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2</td>
    <td><a href="/player/1385/devin-mcribb/" target="_blank">Devin McRibb</a></td>
    <td>285.0</td>
    <td>16.3</td>
    <td>12480.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>3</td>
    <td><a href="/player/1672/salvatore-orlando/" target="_blank">Salvatore Orlando</a></td>
    <td>285.0</td>
    <td>14.1</td>
    <td>12480.1</td>
    <td>Salk</td>
</tr>

<tr>
    <td>4</td>
    <td><a href="/player/2788/michael-peneski/" target="_blank">Michael Peneski</a></td>
    <td>285.0</td>
    <td>17.2</td>
    <td>12480.1</td>
    <td>Port Washington</td>
</tr>

<tr>
    <td>5</td>
    <td><a href="/player/2772/cristian-a-pacheco/" target="_blank">Cristian A. Pacheco</a></td>
    <td>327.0</td>
    <td>5.3</td>
    <td>12381.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>6</td>
    <td><a href="/player/2932/miguel-rivera/" target="_blank">Miguel Rivera</a></td>
    <td>253.7</td>
    <td>16.7</td>
    <td>12086.9</td>
    <td>N/a</td>
</tr>

<tr>
    <td>7</td>
    <td><a href="/player/1488/santiago-strick/" target="_blank">Santiago Strick</a></td>
    <td>246.4</td>
    <td>15.8</td>
    <td>12082.0</td>
    <td>William Floyd</td>
</tr>

<tr>
    <td>8</td>
    <td><a href="/player/2811/issa-issa/" target="_blank">Issa Issa</a></td>
    <td>263.0</td>
    <td>19.5</td>
    <td>12070.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>9</td>
    <td><a href="/player/1579/alex-ashooh/" target="_blank">Alex Ashooh</a></td>
    <td>225.2</td>
    <td>18.7</td>
    <td>11997.4</td>
    <td>GSR</td>
</tr>

<tr>
    <td>10</td>
    <td><a href="/player/3404/ethan-green/" target="_blank">Ethan Green</a></td>
    <td>231.0</td>
    <td>17.4</td>
    <td>11940.7</td>
    <td>Howell Higj School</td>
</tr>

<tr>
    <td>11</td>
    <td><a href="/player/3151/nickolas-melis/" target="_blank">Nickolas Melis</a></td>
    <td>210.0</td>
    <td>37.5</td>
    <td>11922.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>12</td>
    <td><a href="/player/3388/j-nauta/" target="_blank">J Nauta</a></td>
    <td>205.0</td>
    <td>25.6</td>
    <td>11800.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>13</td>
    <td><a href="/player/2939/brandon-harper/" target="_blank">Brandon Harper</a></td>
    <td>257.5</td>
    <td>15.5</td>
    <td>11719.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>14</td>
    <td><a href="/player/629/jonathan-elliott/" target="_blank">jonathan elliott</a></td>
    <td>262.0</td>
    <td>16.7</td>
    <td>11716.4</td>
    <td>floyd</td>
</tr>

<tr>
    <td>15</td>
    <td><a href="/player/1764/nikolas-canfield/" target="_blank">Nikolas Canfield</a></td>
    <td>245.0</td>
    <td>16.8</td>
    <td>11708.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>16</td>
    <td><a href="/player/3313/jason-okeefe/" target="_blank">Jason O'KEEFE</a></td>
    <td>243.0</td>
    <td>17.5</td>
    <td>11667.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>17</td>
    <td><a href="/player/1549/nicolas-paredes/" target="_blank">Nicolas Paredes</a></td>
    <td>217.2</td>
    <td>16.4</td>
    <td>11654.5</td>
    <td>East Stroudsburg North HS</td>
</tr>

<tr>
    <td>18</td>
    <td><a href="/player/755/aaron-price/" target="_blank">Aaron Price</a></td>
    <td>241.0</td>
    <td>17.0</td>
    <td>11625.0</td>
    <td>dumont</td>
</tr>

<tr>
    <td>19</td>
    <td><a href="/player/3290/brenden-hansen/" target="_blank">Brenden Hansen</a></td>
    <td>240.0</td>
    <td>16.7</td>
    <td>11603.8</td>
    <td>Dynasty</td>
</tr>

<tr>
    <td>20</td>
    <td><a href="/player/3310/bryan-bonilla/" target="_blank">Bryan Bonilla</a></td>
    <td>240.0</td>
    <td>17.4</td>
    <td>11603.8</td>
    <td>Dynasty</td>
</tr>

<tr>
    <td>21</td>
    <td><a href="/player/3118/gavin-parker/" target="_blank">Gavin Parker</a></td>
    <td>267.3</td>
    <td>17.4</td>
    <td>11573.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>22</td>
    <td><a href="/player/581/branden-ortiz/" target="_blank">Branden Ortiz</a></td>
    <td>213.8</td>
    <td>20.6</td>
    <td>11548.1</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>23</td>
    <td><a href="/player/1354/keith-simon/" target="_blank">Keith Simon</a></td>
    <td>213.8</td>
    <td>17.6</td>
    <td>11403.3</td>
    <td>Bayonne</td>
</tr>

<tr>
    <td>24</td>
    <td><a href="/player/1604/nick-stpeter/" target="_blank">Nick St.Peter</a></td>
    <td>248.6</td>
    <td>16.9</td>
    <td>11370.6</td>
    <td>Ascension</td>
</tr>

<tr>
    <td>25</td>
    <td><a href="/player/1514/norris-robinson/" target="_blank">Norris Robinson</a></td>
    <td>208.2</td>
    <td>16.6</td>
    <td>11362.7</td>
    <td>William Floyd</td>
</tr>

<tr>
    <td>26</td>
    <td><a href="/player/2436/patrick-morski/" target="_blank">Patrick Morski</a></td>
    <td>225.0</td>
    <td>16.7</td>
    <td>11274.7</td>
    <td>Commack</td>
</tr>

<tr>
    <td>27</td>
    <td><a href="/player/1677/frank-kempton/" target="_blank">Frank Kempton</a></td>
    <td>185.6</td>
    <td>16.9</td>
    <td>11254.6</td>
    <td>Massapequa</td>
</tr>

<tr>
    <td>28</td>
    <td><a href="/player/1416/kymir-jackson/" target="_blank">Kymir Jackson</a></td>
    <td>241.4</td>
    <td>14.7</td>
    <td>11244.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>29</td>
    <td><a href="/player/1942/ian-hamel/" target="_blank">Ian Hamel</a></td>
    <td>228.0</td>
    <td>14.1</td>
    <td>11215.3</td>
    <td>Rms</td>
</tr>

<tr>
    <td>30</td>
    <td><a href="/player/2635/owen-castor/" target="_blank">Owen Castor</a></td>
    <td>220.0</td>
    <td>14.8</td>
    <td>11160.1</td>
    <td>Smittys barn</td>
</tr>

<tr>
    <td>31</td>
    <td><a href="/player/792/angel-montoya/" target="_blank">angel montoya</a></td>
    <td>225.0</td>
    <td>16.7</td>
    <td>11071.6</td>
    <td>floyd</td>
</tr>

<tr>
    <td>32</td>
    <td><a href="/player/1428/eric-fontanez/" target="_blank">Eric Fontanez</a></td>
    <td>224.0</td>
    <td>15.1</td>
    <td>11048.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>33</td>
    <td><a href="/player/2089/patrick-vachon/" target="_blank">Patrick Vachon</a></td>
    <td>198.0</td>
    <td>14.1</td>
    <td>11036.6</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>34</td>
    <td><a href="/player/2820/matthew-watson/" target="_blank">Matthew Watson</a></td>
    <td>187.7</td>
    <td>17.0</td>
    <td>10950.9</td>
    <td>Hamilton High School West</td>
</tr>

<tr>
    <td>35</td>
    <td><a href="/player/1274/cole-blatter/" target="_blank">Cole Blatter</a></td>
    <td>224.2</td>
    <td>14.7</td>
    <td>10949.4</td>
    <td>Comsewogue</td>
</tr>

<tr>
    <td>36</td>
    <td><a href="/player/2189/chance-hagan/" target="_blank">Chance Hagan</a></td>
    <td>244.6</td>
    <td>13.6</td>
    <td>10941.8</td>
    <td>RMS</td>
</tr>

<tr>
    <td>37</td>
    <td><a href="/player/3224/adam-haselius/" target="_blank">Adam Haselius</a></td>
    <td>181.0</td>
    <td>15.4</td>
    <td>10870.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>38</td>
    <td><a href="/player/3042/avery-dickerson/" target="_blank">Avery Dickerson</a></td>
    <td>182.5</td>
    <td>17.6</td>
    <td>10833.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>39</td>
    <td><a href="/player/799/shamus-weissbach/" target="_blank">shamus weissbach</a></td>
    <td>219.0</td>
    <td>16.6</td>
    <td>10823.6</td>
    <td>floyd</td>
</tr>

<tr>
    <td>40</td>
    <td><a href="/player/1584/hayden-robinson/" target="_blank">Hayden Robinson</a></td>
    <td>211.6</td>
    <td>14.6</td>
    <td>10808.4</td>
    <td>GSR Wrestling Academy</td>
</tr>

<tr>
    <td>41</td>
    <td><a href="/player/1451/john-hegner/" target="_blank">John Hegner</a></td>
    <td>197.6</td>
    <td>15.7</td>
    <td>10790.9</td>
    <td>MacArthur Generals</td>
</tr>

<tr>
    <td>42</td>
    <td><a href="/player/2585/kalil-cuffe/" target="_blank">Kalil Cuffe</a></td>
    <td>174.2</td>
    <td>16.9</td>
    <td>10770.2</td>
    <td>Baldwin</td>
</tr>

<tr>
    <td>43</td>
    <td><a href="/player/2536/jared-tetrault/" target="_blank">Jared Tetrault</a></td>
    <td>189.0</td>
    <td>16.9</td>
    <td>10753.9</td>
    <td></td>
</tr>

<tr>
    <td>44</td>
    <td><a href="/player/572/keshon-davila/" target="_blank">Keshon Davila</a></td>
    <td>217.2</td>
    <td>16.4</td>
    <td>10749.6</td>
    <td>New Brunswick</td>
</tr>

<tr>
    <td>45</td>
    <td><a href="/player/2523/elmer-cruz/" target="_blank">Elmer Cruz</a></td>
    <td>199.0</td>
    <td>15.0</td>
    <td>10748.5</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>46</td>
    <td><a href="/player/777/fernando-sanchez/" target="_blank">Fernando Sanchez</a></td>
    <td>200.0</td>
    <td>15.2</td>
    <td>10730.8</td>
    <td>brentwood</td>
</tr>

<tr>
    <td>47</td>
    <td><a href="/player/1048/chase-frole/" target="_blank">Chase Frole</a></td>
    <td>218.4</td>
    <td>11.8</td>
    <td>10723.3</td>
    <td>LWC</td>
</tr>

<tr>
    <td>48</td>
    <td><a href="/player/1473/dylan-young/" target="_blank">Dylan Young</a></td>
    <td>183.4</td>
    <td>17.2</td>
    <td>10705.5</td>
    <td>MacArthur Generals</td>
</tr>

<tr>
    <td>49</td>
    <td><a href="/player/3386/josh-hunsberger/" target="_blank">Josh Hunsberger</a></td>
    <td>165.0</td>
    <td>32.3</td>
    <td>10693.1</td>
    <td>MAGA</td>
</tr>

<tr>
    <td>50</td>
    <td><a href="/player/3066/steven-andreone/" target="_blank">Steven Andreone</a></td>
    <td>215.1</td>
    <td>13.3</td>
    <td>10680.1</td>
    <td>New Boston wrestling clu b</td>
</tr>

<tr>
    <td>51</td>
    <td><a href="/player/2647/gabe-dean/" target="_blank">Gabe Dean</a></td>
    <td>200.0</td>
    <td>25.7</td>
    <td>10674.1</td>
    <td>Lowell</td>
</tr>

<tr>
    <td>52</td>
    <td><a href="/player/1461/steven-sesti/" target="_blank">Steven Sesti</a></td>
    <td>233.2</td>
    <td>13.9</td>
    <td>10671.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>53</td>
    <td><a href="/player/550/victor-wladika/" target="_blank">Victor Wladika</a></td>
    <td>176.0</td>
    <td>17.6</td>
    <td>10661.1</td>
    <td>holmdel</td>
</tr>

<tr>
    <td>54</td>
    <td><a href="/player/2590/paul-lavender/" target="_blank">Paul Lavender</a></td>
    <td>220.0</td>
    <td>14.4</td>
    <td>10660.1</td>
    <td>Massapequa</td>
</tr>

<tr>
    <td>55</td>
    <td><a href="/player/2537/dominick-casamassina/" target="_blank">Dominick Casamassina</a></td>
    <td>185.2</td>
    <td>16.5</td>
    <td>10657.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>56</td>
    <td><a href="/player/2505/roarke-creedon/" target="_blank">Roarke Creedon</a></td>
    <td>172.2</td>
    <td>16.4</td>
    <td>10653.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>57</td>
    <td><a href="/player/2088/kenneth-olibrice/" target="_blank">Kenneth Olibrice</a></td>
    <td>230.4</td>
    <td>14.1</td>
    <td>10653.1</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>58</td>
    <td><a href="/player/2090/stephen-johnston/" target="_blank">Stephen Johnston</a></td>
    <td>171.0</td>
    <td>13.7</td>
    <td>10636.0</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>59</td>
    <td><a href="/player/1817/jonah-houser/" target="_blank">Jonah Houser</a></td>
    <td>183.0</td>
    <td>15.3</td>
    <td>10621.1</td>
    <td>Lackawanna trail</td>
</tr>

<tr>
    <td>60</td>
    <td><a href="/player/1588/miguel-santiago/" target="_blank">Miguel Santiago</a></td>
    <td>206.0</td>
    <td>15.6</td>
    <td>10618.4</td>
    <td>Granite State Rebellion</td>
</tr>

<tr>
    <td>61</td>
    <td><a href="/player/1508/ryan-mendez/" target="_blank">Ryan Mendez</a></td>
    <td>180.0</td>
    <td>15.6</td>
    <td>10605.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>62</td>
    <td><a href="/player/2935/conner-ferino/" target="_blank">Conner Ferino</a></td>
    <td>177.5</td>
    <td>18.8</td>
    <td>10593.3</td>
    <td>Manchester Township High School</td>
</tr>

<tr>
    <td>63</td>
    <td><a href="/player/3029/garrett-smith/" target="_blank">Garrett Smith</a></td>
    <td>203.8</td>
    <td>16.9</td>
    <td>10586.1</td>
    <td>LakeVille Falcons</td>
</tr>

<tr>
    <td>64</td>
    <td><a href="/player/1277/william-setters/" target="_blank">William Setters</a></td>
    <td>170.2</td>
    <td>17.5</td>
    <td>10548.6</td>
    <td></td>
</tr>

<tr>
    <td>65</td>
    <td><a href="/player/1643/logan-morelli/" target="_blank">Logan Morelli</a></td>
    <td>195.0</td>
    <td>16.1</td>
    <td>10545.0</td>
    <td>Bristol Eastern Lancers</td>
</tr>

<tr>
    <td>66</td>
    <td><a href="/player/2922/daniel-pereira/" target="_blank">Daniel Pereira</a></td>
    <td>195.0</td>
    <td>17.4</td>
    <td>10545.0</td>
    <td>Cordoba Trained</td>
</tr>

<tr>
    <td>67</td>
    <td><a href="/player/1711/aodhan-williams/" target="_blank">Aodhan Williams</a></td>
    <td>154.4</td>
    <td>15.4</td>
    <td>10498.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>68</td>
    <td><a href="/player/649/james-araneo/" target="_blank">James Araneo</a></td>
    <td>173.0</td>
    <td>15.3</td>
    <td>10494.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>69</td>
    <td><a href="/player/1616/kyle-matthews/" target="_blank">Kyle Matthews</a></td>
    <td>156.4</td>
    <td>16.6</td>
    <td>10459.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>70</td>
    <td><a href="/player/1720/rodrigo-melendez/" target="_blank">Rodrigo Melendez</a></td>
    <td>170.0</td>
    <td>17.3</td>
    <td>10445.3</td>
    <td>Lindenhurst</td>
</tr>

<tr>
    <td>71</td>
    <td><a href="/player/1499/john-darrell/" target="_blank">John Darrell</a></td>
    <td>198.8</td>
    <td>16.1</td>
    <td>10442.3</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>72</td>
    <td><a href="/player/3215/nick-dalessio/" target="_blank">Nick DAlessio</a></td>
    <td>160.0</td>
    <td>16.5</td>
    <td>10436.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>73</td>
    <td><a href="/player/1468/tyler-gonzalez/" target="_blank">Tyler Gonzalez</a></td>
    <td>194.6</td>
    <td>15.9</td>
    <td>10432.4</td>
    <td>William Floyd</td>
</tr>

<tr>
    <td>74</td>
    <td><a href="/player/3354/gavin-wilmoth/" target="_blank">Gavin Wilmoth</a></td>
    <td>169.6</td>
    <td>17.0</td>
    <td>10426.3</td>
    <td>ARES</td>
</tr>

<tr>
    <td>75</td>
    <td><a href="/player/2924/brandon-rau/" target="_blank">Brandon Rau</a></td>
    <td>176.0</td>
    <td>16.8</td>
    <td>10422.2</td>
    <td>Tecumseh</td>
</tr>

<tr>
    <td>76</td>
    <td><a href="/player/2581/benjamin-katz/" target="_blank">Benjamin Katz</a></td>
    <td>190.0</td>
    <td>15.5</td>
    <td>10412.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>77</td>
    <td><a href="/player/1706/anthony-digennaro/" target="_blank">Anthony DiGennaro</a></td>
    <td>174.4</td>
    <td>14.7</td>
    <td>10396.5</td>
    <td>Massapequa</td>
</tr>

<tr>
    <td>78</td>
    <td><a href="/player/1305/dan-cassera/" target="_blank">Dan Cassera</a></td>
    <td>159.6</td>
    <td>16.7</td>
    <td>10388.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>79</td>
    <td><a href="/player/1509/jack-coffey/" target="_blank">Jack Coffey</a></td>
    <td>163.0</td>
    <td>16.7</td>
    <td>10368.9</td>
    <td>East Meadow</td>
</tr>

<tr>
    <td>80</td>
    <td><a href="/player/704/mohab-ali/" target="_blank">Mohab Ali</a></td>
    <td>182.0</td>
    <td>16.9</td>
    <td>10368.0</td>
    <td>Newfield</td>
</tr>

<tr>
    <td>81</td>
    <td><a href="/player/492/marino-mancuso/" target="_blank">Marino Mancuso</a></td>
    <td>164.0</td>
    <td>17.0</td>
    <td>10365.8</td>
    <td>dynamic</td>
</tr>

<tr>
    <td>82</td>
    <td><a href="/player/1780/michael-dvorkin/" target="_blank">Michael Dvorkin</a></td>
    <td>187.8</td>
    <td>17.9</td>
    <td>10353.2</td>
    <td>Fight factory</td>
</tr>

<tr>
    <td>83</td>
    <td><a href="/player/1692/joshua-rubin/" target="_blank">Joshua Rubin</a></td>
    <td>148.6</td>
    <td>17.7</td>
    <td>10352.2</td>
    <td>VHW</td>
</tr>

<tr>
    <td>84</td>
    <td><a href="/player/2519/omari-valme/" target="_blank">Omari valme</a></td>
    <td>195.0</td>
    <td>15.8</td>
    <td>10345.0</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>85</td>
    <td><a href="/player/3274/jack-reiter/" target="_blank">Jack Reiter</a></td>
    <td>160.0</td>
    <td>17.1</td>
    <td>10336.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>86</td>
    <td><a href="/player/2215/lucas-winn/" target="_blank">Lucas Winn</a></td>
    <td>182.4</td>
    <td>13.5</td>
    <td>10326.8</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>87</td>
    <td><a href="/player/2568/jelani-dowe/" target="_blank">Jelani Dowe</a></td>
    <td>165.0</td>
    <td>16.3</td>
    <td>10322.1</td>
    <td>Baldwin</td>
</tr>

<tr>
    <td>88</td>
    <td><a href="/player/813/fabian-rodriguez/" target="_blank">fabian rodriguez</a></td>
    <td>182.0</td>
    <td>16.5</td>
    <td>10321.7</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>89</td>
    <td><a href="/player/3101/anthony-bradley/" target="_blank">Anthony Bradley</a></td>
    <td>157.1</td>
    <td>17.0</td>
    <td>10321.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>90</td>
    <td><a href="/player/993/hudson-cobe/" target="_blank">Hudson Cobe</a></td>
    <td>168.0</td>
    <td>13.7</td>
    <td>10305.8</td>
    <td>Blue Wave</td>
</tr>

<tr>
    <td>91</td>
    <td><a href="/player/1550/dylan-hogan/" target="_blank">Dylan Hogan</a></td>
    <td>164.2</td>
    <td>16.4</td>
    <td>10297.8</td>
    <td>East Stroudsburg North</td>
</tr>

<tr>
    <td>92</td>
    <td><a href="/player/574/ben-walker/" target="_blank">Ben Walker</a></td>
    <td>195.8</td>
    <td>16.1</td>
    <td>10285.0</td>
    <td>New Brunswick</td>
</tr>

<tr>
    <td>93</td>
    <td><a href="/player/2965/nick-rochowiak/" target="_blank">Nick Rochowiak</a></td>
    <td>165.4</td>
    <td>15.3</td>
    <td>10284.6</td>
    <td>Hartland</td>
</tr>

<tr>
    <td>94</td>
    <td><a href="/player/1251/kyle-pattilio/" target="_blank">Kyle Pattilio</a></td>
    <td>185.0</td>
    <td>17.0</td>
    <td>10276.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>95</td>
    <td><a href="/player/1425/james-clarkson/" target="_blank">James Clarkson</a></td>
    <td>196.8</td>
    <td>14.8</td>
    <td>10274.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>96</td>
    <td><a href="/player/3238/evan-frick/" target="_blank">Evan Frick</a></td>
    <td>174.0</td>
    <td>15.1</td>
    <td>10273.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>97</td>
    <td><a href="/player/1707/waynecarl-barker/" target="_blank">WayneCarl Barker</a></td>
    <td>161.0</td>
    <td>20.9</td>
    <td>10270.7</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>98</td>
    <td><a href="/player/756/scott-defex/" target="_blank">scott defex</a></td>
    <td>173.4</td>
    <td>17.4</td>
    <td>10263.6</td>
    <td>long beach</td>
</tr>

<tr>
    <td>99</td>
    <td><a href="/player/2474/josh-cohen/" target="_blank">Josh Cohen</a></td>
    <td>168.6</td>
    <td>16.8</td>
    <td>10257.6</td>
    <td>Empire Wrestling Academy</td>
</tr>

<tr>
    <td>100</td>
    <td><a href="/player/3023/devin-mckinney/" target="_blank">Devin Mckinney</a></td>
    <td>177.2</td>
    <td>13.4</td>
    <td>10256.9</td>
    <td>Michigan Matcats</td>
</tr>

<tr>
    <td>101</td>
    <td><a href="/player/1494/charles-leo/" target="_blank">Charles Leo</a></td>
    <td>180.6</td>
    <td>17.3</td>
    <td>10249.9</td>
    <td>Kings Park</td>
</tr>

<tr>
    <td>102</td>
    <td><a href="/player/2787/luis-paulino/" target="_blank">Luis Paulino</a></td>
    <td>165.5</td>
    <td>17.5</td>
    <td>10228.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>103</td>
    <td><a href="/player/3005/jared-shotzman/" target="_blank">Jared Shotzman</a></td>
    <td>175.1</td>
    <td>18.0</td>
    <td>10227.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>104</td>
    <td><a href="/player/1571/denali-collins/" target="_blank">Denali Collins</a></td>
    <td>220.8</td>
    <td>14.6</td>
    <td>10224.1</td>
    <td>Colchester Bobcats</td>
</tr>

<tr>
    <td>105</td>
    <td><a href="/player/716/josh-leidig/" target="_blank">Josh Leidig</a></td>
    <td>174.0</td>
    <td>16.4</td>
    <td>10221.0</td>
    <td>Bellport</td>
</tr>

<tr>
    <td>106</td>
    <td><a href="/player/2528/jakarai-mckay/" target="_blank">Jakarai McKay</a></td>
    <td>165.8</td>
    <td>17.9</td>
    <td>10217.8</td>
    <td>Pitbull</td>
</tr>

<tr>
    <td>107</td>
    <td><a href="/player/1944/evan-couture/" target="_blank">Evan Couture</a></td>
    <td>167.4</td>
    <td>13.2</td>
    <td>10199.3</td>
    <td>Rochester Timberwolves</td>
</tr>

<tr>
    <td>108</td>
    <td><a href="/player/1384/cole-greco/" target="_blank">Cole Greco</a></td>
    <td>182.0</td>
    <td>15.6</td>
    <td>10193.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>109</td>
    <td><a href="/player/569/dylan-waller/" target="_blank">Dylan Waller</a></td>
    <td>176.8</td>
    <td>16.3</td>
    <td>10190.6</td>
    <td>Manalapan</td>
</tr>

<tr>
    <td>110</td>
    <td><a href="/player/2927/daniel-shami/" target="_blank">Daniel Shami</a></td>
    <td>179.2</td>
    <td>16.8</td>
    <td>10186.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>111</td>
    <td><a href="/player/1582/louis-greenwood/" target="_blank">Louis Greenwood</a></td>
    <td>199.8</td>
    <td>15.3</td>
    <td>10166.0</td>
    <td>Ludlow High School</td>
</tr>

<tr>
    <td>112</td>
    <td><a href="/player/2534/liam-villanti/" target="_blank">Liam Villanti</a></td>
    <td>174.0</td>
    <td>15.9</td>
    <td>10163.9</td>
    <td>Walt whitman</td>
</tr>

<tr>
    <td>113</td>
    <td><a href="/player/2889/justin-vanvaerenbergh/" target="_blank">Justin Vanvaerenbergh</a></td>
    <td>150.0</td>
    <td>17.6</td>
    <td>10157.1</td>
    <td>MI Revolution</td>
</tr>

<tr>
    <td>114</td>
    <td><a href="/player/1485/aidan-hamilton/" target="_blank">Aidan Hamilton</a></td>
    <td>173.2</td>
    <td>16.1</td>
    <td>10155.5</td>
    <td>Rocky Point</td>
</tr>

<tr>
    <td>115</td>
    <td><a href="/player/2475/liam-villanti/" target="_blank">Liam Villanti</a></td>
    <td>174.0</td>
    <td>15.9</td>
    <td>10147.6</td>
    <td>Walt Whitman</td>
</tr>

<tr>
    <td>116</td>
    <td><a href="/player/2622/dominic-decristofaro/" target="_blank">Dominic DeCristofaro</a></td>
    <td>170.0</td>
    <td>15.9</td>
    <td>10145.3</td>
    <td>Sachem North</td>
</tr>

<tr>
    <td>117</td>
    <td><a href="/player/3006/martin-landes/" target="_blank">Martin Landes</a></td>
    <td>148.7</td>
    <td>16.6</td>
    <td>10136.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>118</td>
    <td><a href="/player/3113/niko-martinez/" target="_blank">Niko Martinez</a></td>
    <td>160.0</td>
    <td>16.8</td>
    <td>10136.2</td>
    <td>Paw paw</td>
</tr>

<tr>
    <td>119</td>
    <td><a href="/player/2500/talon-carsto/" target="_blank">Talon Carsto</a></td>
    <td>173.2</td>
    <td>17.4</td>
    <td>10116.3</td>
    <td>SLEEPY HOLLOW</td>
</tr>

<tr>
    <td>120</td>
    <td><a href="/player/2551/antonio-jimenez/" target="_blank">antonio jimenez</a></td>
    <td>164.2</td>
    <td>16.7</td>
    <td>10100.1</td>
    <td>mattituck</td>
</tr>

<tr>
    <td>121</td>
    <td><a href="/player/3150/wayne-stinson-jr/" target="_blank">Wayne Stinson Jr</a></td>
    <td>165.0</td>
    <td>26.5</td>
    <td>10093.1</td>
    <td>Apache</td>
</tr>

<tr>
    <td>122</td>
    <td><a href="/player/2984/calvin-huggler/" target="_blank">Calvin Huggler</a></td>
    <td>160.6</td>
    <td>17.4</td>
    <td>10089.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>123</td>
    <td><a href="/player/2571/edras-hernandez/" target="_blank">Edras Hernandez</a></td>
    <td>171.0</td>
    <td>15.5</td>
    <td>10075.2</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>124</td>
    <td><a href="/player/3399/xzavier-suess/" target="_blank">Xzavier Suess</a></td>
    <td>162.1</td>
    <td>17.0</td>
    <td>10074.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>125</td>
    <td><a href="/player/698/sean-levine/" target="_blank">Sean Levine</a></td>
    <td>160.0</td>
    <td>17.0</td>
    <td>10069.5</td>
    <td>SmithTown East</td>
</tr>

<tr>
    <td>126</td>
    <td><a href="/player/2579/joe-ramirez/" target="_blank">Joe Ramirez</a></td>
    <td>168.4</td>
    <td>16.9</td>
    <td>10049.8</td>
    <td>baldwin</td>
</tr>

<tr>
    <td>127</td>
    <td><a href="/player/3322/zachary-jacobs/" target="_blank">Zachary Jacobs</a></td>
    <td>156.5</td>
    <td>16.0</td>
    <td>10048.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>128</td>
    <td><a href="/player/3171/ryan-winn/" target="_blank">Ryan Winn</a></td>
    <td>170.0</td>
    <td>17.2</td>
    <td>10045.3</td>
    <td>Toms River HS North</td>
</tr>

<tr>
    <td>129</td>
    <td><a href="/player/3173/jacob-gerish/" target="_blank">Jacob Gerish</a></td>
    <td>170.0</td>
    <td>17.2</td>
    <td>10045.3</td>
    <td>DePaul Catholic</td>
</tr>

<tr>
    <td>130</td>
    <td><a href="/player/2069/josh-pasek/" target="_blank">Josh Pasek</a></td>
    <td>166.2</td>
    <td>14.0</td>
    <td>10044.9</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>131</td>
    <td><a href="/player/661/sal-livigni/" target="_blank">Sal Livigni</a></td>
    <td>189.4</td>
    <td>16.7</td>
    <td>10043.3</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>132</td>
    <td><a href="/player/3336/avery-greathouse/" target="_blank">Avery Greathouse</a></td>
    <td>165.0</td>
    <td>13.3</td>
    <td>10043.1</td>
    <td>RIWA</td>
</tr>

<tr>
    <td>133</td>
    <td><a href="/player/3234/bryson-tibbs/" target="_blank">Bryson Tibbs</a></td>
    <td>180.0</td>
    <td>14.5</td>
    <td>10036.8</td>
    <td>Middletown Middies</td>
</tr>

<tr>
    <td>134</td>
    <td><a href="/player/562/christian-pittari/" target="_blank">Christian Pittari</a></td>
    <td>183.2</td>
    <td>17.2</td>
    <td>10027.7</td>
    <td>Marlboro</td>
</tr>

<tr>
    <td>135</td>
    <td><a href="/player/2508/zachary-miller/" target="_blank">Zachary Miller</a></td>
    <td>170.0</td>
    <td>15.9</td>
    <td>10020.2</td>
    <td>Pro-Ex</td>
</tr>

<tr>
    <td>136</td>
    <td><a href="/player/1787/kevin-martinez/" target="_blank">Kevin Martinez</a></td>
    <td>167.8</td>
    <td>15.6</td>
    <td>10019.7</td>
    <td>brentwood</td>
</tr>

<tr>
    <td>137</td>
    <td><a href="/player/2244/erick-benavides/" target="_blank">erick benavides</a></td>
    <td>203.2</td>
    <td>13.7</td>
    <td>10015.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>138</td>
    <td><a href="/player/2525/william-johnson/" target="_blank">William Johnson</a></td>
    <td>152.2</td>
    <td>16.2</td>
    <td>10009.1</td>
    <td>5 Points Wrestling</td>
</tr>

<tr>
    <td>139</td>
    <td><a href="/player/1434/anthony-poveromo/" target="_blank">Anthony Poveromo</a></td>
    <td>184.6</td>
    <td>14.3</td>
    <td>10006.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>140</td>
    <td><a href="/player/1607/dean-appell/" target="_blank">Dean Appell</a></td>
    <td>160.2</td>
    <td>17.9</td>
    <td>10003.6</td>
    <td>Putnam Valley</td>
</tr>

<tr>
    <td>141</td>
    <td><a href="/player/2514/matthew-atanasiu/" target="_blank">Matthew Atanasiu</a></td>
    <td>185.6</td>
    <td>15.0</td>
    <td>9999.7</td>
    <td>Baldwin</td>
</tr>

<tr>
    <td>142</td>
    <td><a href="/player/3214/jason-bowers/" target="_blank">Jason Bowers</a></td>
    <td>167.0</td>
    <td>16.6</td>
    <td>9994.5</td>
    <td>Paw Paw Varsity Wrestling</td>
</tr>

<tr>
    <td>143</td>
    <td><a href="/player/2573/dylan-gainey/" target="_blank">Dylan Gainey</a></td>
    <td>165.0</td>
    <td>15.9</td>
    <td>9993.1</td>
    <td></td>
</tr>

<tr>
    <td>144</td>
    <td><a href="/player/1631/gabe-simard/" target="_blank">Gabe Simard</a></td>
    <td>164.6</td>
    <td>15.4</td>
    <td>9986.7</td>
    <td>Bay State Wrestling</td>
</tr>

<tr>
    <td>145</td>
    <td><a href="/player/2557/terry-ellis/" target="_blank">Terry Ellis</a></td>
    <td>133.6</td>
    <td>15.7</td>
    <td>9981.8</td>
    <td>5points</td>
</tr>

<tr>
    <td>146</td>
    <td><a href="/player/846/james-mulhern/" target="_blank">James Mulhern</a></td>
    <td>159.4</td>
    <td>10.4</td>
    <td>9980.1</td>
    <td>Lindenhurst Wrestling Club</td>
</tr>

<tr>
    <td>147</td>
    <td><a href="/player/2566/jerry-ellis/" target="_blank">Jerry Ellis</a></td>
    <td>149.4</td>
    <td>16.8</td>
    <td>9972.8</td>
    <td>Freeport</td>
</tr>

<tr>
    <td>148</td>
    <td><a href="/player/1726/dylan-sofield/" target="_blank">Dylan Sofield</a></td>
    <td>155.8</td>
    <td>15.8</td>
    <td>9972.7</td>
    <td>Long Beach</td>
</tr>

<tr>
    <td>149</td>
    <td><a href="/player/1710/liam-futterman/" target="_blank">Liam Futterman</a></td>
    <td>162.4</td>
    <td>16.6</td>
    <td>9968.8</td>
    <td>Edge</td>
</tr>

<tr>
    <td>150</td>
    <td><a href="/player/1520/jezayd-hall/" target="_blank">Jezayd Hall</a></td>
    <td>157.0</td>
    <td>16.2</td>
    <td>9966.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>151</td>
    <td><a href="/player/3436/jeffrey-preston/" target="_blank">Jeffrey Preston</a></td>
    <td>171.8</td>
    <td>17.4</td>
    <td>9964.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>152</td>
    <td><a href="/player/2782/dj-erickson/" target="_blank">DJ Erickson</a></td>
    <td>177.1</td>
    <td>18.9</td>
    <td>9961.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>153</td>
    <td><a href="/player/606/gabriel-willins/" target="_blank">Gabriel Willins</a></td>
    <td>165.2</td>
    <td>14.5</td>
    <td>9960.5</td>
    <td>brentwood</td>
</tr>

<tr>
    <td>154</td>
    <td><a href="/player/1785/jason-cruz/" target="_blank">Jason Cruz</a></td>
    <td>184.0</td>
    <td>15.9</td>
    <td>9954.3</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>155</td>
    <td><a href="/player/2576/jack-giovanniello/" target="_blank">Jack Giovanniello</a></td>
    <td>170.4</td>
    <td>16.4</td>
    <td>9948.5</td>
    <td>Mattituck</td>
</tr>

<tr>
    <td>156</td>
    <td><a href="/player/1395/kj-sherman/" target="_blank">Kj Sherman</a></td>
    <td>147.2</td>
    <td>16.1</td>
    <td>9948.2</td>
    <td>Egg Harbor City</td>
</tr>

<tr>
    <td>157</td>
    <td><a href="/player/3035/charles-weidman/" target="_blank">Charles Weidman</a></td>
    <td>163.3</td>
    <td>13.7</td>
    <td>9947.1</td>
    <td>KT kidz</td>
</tr>

<tr>
    <td>158</td>
    <td><a href="/player/1247/keith-mcdowell/" target="_blank">Keith McDowell</a></td>
    <td>195.0</td>
    <td>11.0</td>
    <td>9945.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>159</td>
    <td><a href="/player/3019/connor-bercume/" target="_blank">Connor Bercume</a></td>
    <td>152.8</td>
    <td>14.3</td>
    <td>9939.7</td>
    <td>Michigan Revolution</td>
</tr>

<tr>
    <td>160</td>
    <td><a href="/player/573/donna-walker/" target="_blank">Donna Walker</a></td>
    <td>175.4</td>
    <td>14.9</td>
    <td>9921.0</td>
    <td>New Brunswick</td>
</tr>

<tr>
    <td>161</td>
    <td><a href="/player/470/pedro-romero/" target="_blank">Pedro Romero</a></td>
    <td>163.4</td>
    <td>20.8</td>
    <td>9906.0</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>162</td>
    <td><a href="/player/2452/steven-mahoney/" target="_blank">Steven Mahoney</a></td>
    <td>172.0</td>
    <td>13.9</td>
    <td>9905.0</td>
    <td>Longwood Lions</td>
</tr>

<tr>
    <td>163</td>
    <td><a href="/player/712/gabe-demarco/" target="_blank">Gabe DeMarco</a></td>
    <td>157.8</td>
    <td>16.3</td>
    <td>9904.1</td>
    <td>Dynamic Wrestling</td>
</tr>

<tr>
    <td>164</td>
    <td><a href="/player/1273/bobby-filippi/" target="_blank">Bobby Filippi</a></td>
    <td>152.0</td>
    <td>17.6</td>
    <td>9874.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>165</td>
    <td><a href="/player/2789/joshua-ryan/" target="_blank">Joshua Ryan</a></td>
    <td>152.0</td>
    <td>15.8</td>
    <td>9874.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>166</td>
    <td><a href="/player/3375/aidan-beattie/" target="_blank">Aidan Beattie</a></td>
    <td>171.7</td>
    <td>15.6</td>
    <td>9862.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>167</td>
    <td><a href="/player/2656/katimahmud-goldsmith-ii/" target="_blank">Katimahmud Goldsmith II</a></td>
    <td>188.0</td>
    <td>14.7</td>
    <td>9858.5</td>
    <td>Toss am up</td>
</tr>

<tr>
    <td>168</td>
    <td><a href="/player/2836/blake-bryant/" target="_blank">Blake Bryant</a></td>
    <td>153.3</td>
    <td>15.0</td>
    <td>9853.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>169</td>
    <td><a href="/player/1715/john-brockey/" target="_blank">John Brockey</a></td>
    <td>171.1</td>
    <td>17.0</td>
    <td>9851.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>170</td>
    <td><a href="/player/565/nick-florin/" target="_blank">Nick Florin</a></td>
    <td>154.8</td>
    <td>16.9</td>
    <td>9845.9</td>
    <td>Vision</td>
</tr>

<tr>
    <td>171</td>
    <td><a href="/player/1333/daequan-swoope/" target="_blank">Daequan Swoope</a></td>
    <td>170.0</td>
    <td>18.8</td>
    <td>9845.3</td>
    <td>1K</td>
</tr>

<tr>
    <td>172</td>
    <td><a href="/player/2546/jayson-rivera/" target="_blank">Jayson Rivera</a></td>
    <td>183.0</td>
    <td>14.5</td>
    <td>9844.6</td>
    <td>Highlander wrestling</td>
</tr>

<tr>
    <td>173</td>
    <td><a href="/player/1439/nathaniel-vasile-cozzo/" target="_blank">Nathaniel Vasile-Cozzo</a></td>
    <td>179.4</td>
    <td>15.8</td>
    <td>9840.6</td>
    <td>Deer park</td>
</tr>

<tr>
    <td>174</td>
    <td><a href="/player/655/brian-whitman/" target="_blank">brian whitman</a></td>
    <td>159.8</td>
    <td>16.6</td>
    <td>9829.6</td>
    <td>rocky point</td>
</tr>

<tr>
    <td>175</td>
    <td><a href="/player/2460/erik-campos/" target="_blank">Erik Campos</a></td>
    <td>190.2</td>
    <td>15.9</td>
    <td>9817.9</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>176</td>
    <td><a href="/player/3028/nathan-young/" target="_blank">Nathan Young</a></td>
    <td>146.0</td>
    <td>17.6</td>
    <td>9811.0</td>
    <td>Lakeville Falcon wrestling</td>
</tr>

<tr>
    <td>177</td>
    <td><a href="/player/580/jon-catania/" target="_blank">Jon Catania</a></td>
    <td>170.2</td>
    <td>17.6</td>
    <td>9810.0</td>
    <td>Marlboro</td>
</tr>

<tr>
    <td>178</td>
    <td><a href="/player/1581/israel-tricoche-jr/" target="_blank">Israel Tricoche Jr.</a></td>
    <td>157.0</td>
    <td>15.8</td>
    <td>9800.5</td>
    <td>GSW</td>
</tr>

<tr>
    <td>179</td>
    <td><a href="/player/2430/anthony-big-momma-chiraz/" target="_blank">Anthony “Big Momma” Chiraz</a></td>
    <td>171.8</td>
    <td>15.9</td>
    <td>9800.5</td>
    <td>Commack</td>
</tr>

<tr>
    <td>180</td>
    <td><a href="/player/2599/jakarai-mckay/" target="_blank">Jakarai mckay</a></td>
    <td>165.8</td>
    <td>17.9</td>
    <td>9800.2</td>
    <td>Walt whitman</td>
</tr>

<tr>
    <td>181</td>
    <td><a href="/player/2995/abigail-stanberry/" target="_blank">Abigail Stanberry</a></td>
    <td>165.0</td>
    <td>16.7</td>
    <td>9793.1</td>
    <td>Jackson Memorial LadyJags</td>
</tr>

<tr>
    <td>182</td>
    <td><a href="/player/1229/tyler-kelly/" target="_blank">Tyler Kelly</a></td>
    <td>172.2</td>
    <td>13.8</td>
    <td>9775.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>183</td>
    <td><a href="/player/1693/jared-gallub/" target="_blank">Jared Gallub</a></td>
    <td>133.8</td>
    <td>16.0</td>
    <td>9771.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>184</td>
    <td><a href="/player/686/dylan-dipippa/" target="_blank">dylan dipippa</a></td>
    <td>177.4</td>
    <td>15.5</td>
    <td>9764.4</td>
    <td>floyd</td>
</tr>

<tr>
    <td>185</td>
    <td><a href="/player/1276/thomas-huxtable/" target="_blank">Thomas Huxtable</a></td>
    <td>145.0</td>
    <td>16.7</td>
    <td>9761.0</td>
    <td>Smithtown East</td>
</tr>

<tr>
    <td>186</td>
    <td><a href="/player/3197/sam-hoppe/" target="_blank">Sam Hoppe</a></td>
    <td>170.0</td>
    <td>16.2</td>
    <td>9760.7</td>
    <td>Hopkins</td>
</tr>

<tr>
    <td>187</td>
    <td><a href="/player/812/antonio-vaquiz/" target="_blank">Antonio Vaquiz</a></td>
    <td>152.8</td>
    <td>17.1</td>
    <td>9758.1</td>
    <td>Newfield</td>
</tr>

<tr>
    <td>188</td>
    <td><a href="/player/3001/braden-gariety/" target="_blank">Braden Gariety</a></td>
    <td>157.3</td>
    <td>16.2</td>
    <td>9756.8</td>
    <td>Northwest</td>
</tr>

<tr>
    <td>189</td>
    <td><a href="/player/3095/justin-varcally/" target="_blank">Justin Varcally</a></td>
    <td>144.3</td>
    <td>17.7</td>
    <td>9753.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>190</td>
    <td><a href="/player/1529/johnathon-kostner/" target="_blank">Johnathon Kostner</a></td>
    <td>200.0</td>
    <td>12.7</td>
    <td>9748.8</td>
    <td>NYWA</td>
</tr>

<tr>
    <td>191</td>
    <td><a href="/player/1724/nicholas-nicho-rojas/" target="_blank">Nicholas “Nicho” Rojas</a></td>
    <td>164.4</td>
    <td>13.9</td>
    <td>9746.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>192</td>
    <td><a href="/player/3167/dylan-kuschel/" target="_blank">Dylan Kuschel</a></td>
    <td>167.4</td>
    <td>18.2</td>
    <td>9746.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>193</td>
    <td><a href="/player/1644/moshe-mitchell/" target="_blank">Moshe Mitchell</a></td>
    <td>165.2</td>
    <td>16.1</td>
    <td>9742.8</td>
    <td>East Stroudsburg North</td>
</tr>

<tr>
    <td>194</td>
    <td><a href="/player/1975/quinton-delorey/" target="_blank">Quinton Delorey</a></td>
    <td>139.2</td>
    <td>13.4</td>
    <td>9742.4</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>195</td>
    <td><a href="/player/1404/alpha-ba/" target="_blank">Alpha Ba</a></td>
    <td>179.6</td>
    <td>17.8</td>
    <td>9739.3</td>
    <td>BAYONNE</td>
</tr>

<tr>
    <td>196</td>
    <td><a href="/player/3256/matt-leslie/" target="_blank">Matt Leslie</a></td>
    <td>160.0</td>
    <td>16.0</td>
    <td>9736.2</td>
    <td>Morris Hills</td>
</tr>

<tr>
    <td>197</td>
    <td><a href="/player/3302/adrian-artsisheuskiy/" target="_blank">Adrian Artsisheuskiy</a></td>
    <td>160.0</td>
    <td>17.3</td>
    <td>9736.2</td>
    <td>Elite Wrestling Academy</td>
</tr>

<tr>
    <td>198</td>
    <td><a href="/player/3416/logan-klinge/" target="_blank">Logan Klinge</a></td>
    <td>134.8</td>
    <td>17.2</td>
    <td>9730.2</td>
    <td>Ares</td>
</tr>

<tr>
    <td>199</td>
    <td><a href="/player/975/john-caccavale/" target="_blank">John Caccavale</a></td>
    <td>150.0</td>
    <td>14.4</td>
    <td>9709.8</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>200</td>
    <td><a href="/player/3096/julius-guzman/" target="_blank">Julius Guzman</a></td>
    <td>163.6</td>
    <td>17.3</td>
    <td>9701.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>201</td>
    <td><a href="/player/1985/solomon-page/" target="_blank">Solomon Page</a></td>
    <td>162.4</td>
    <td>13.6</td>
    <td>9695.6</td>
    <td>Conval</td>
</tr>

<tr>
    <td>202</td>
    <td><a href="/player/1264/dan-clancy/" target="_blank">Dan Clancy</a></td>
    <td>165.0</td>
    <td>25.9</td>
    <td>9693.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>203</td>
    <td><a href="/player/3206/timothy-babayev/" target="_blank">Timothy Babayev</a></td>
    <td>175.0</td>
    <td>15.6</td>
    <td>9693.1</td>
    <td>Elite wrestling academy</td>
</tr>

<tr>
    <td>204</td>
    <td><a href="/player/3011/jack-thompson/" target="_blank">Jack Thompson</a></td>
    <td>138.1</td>
    <td>18.2</td>
    <td>9686.5</td>
    <td>thegarage</td>
</tr>

<tr>
    <td>205</td>
    <td><a href="/player/3156/gavin-mcquade/" target="_blank">Gavin McQuade</a></td>
    <td>145.0</td>
    <td>17.5</td>
    <td>9684.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>206</td>
    <td><a href="/player/593/cosmo-stoia/" target="_blank">Cosmo Stoia</a></td>
    <td>161.5</td>
    <td>17.7</td>
    <td>9683.8</td>
    <td>William Floyd</td>
</tr>

<tr>
    <td>207</td>
    <td><a href="/player/1279/jaimeson-shea/" target="_blank">Jaimeson Shea</a></td>
    <td>161.8</td>
    <td>15.2</td>
    <td>9678.1</td>
    <td>Centereach</td>
</tr>

<tr>
    <td>208</td>
    <td><a href="/player/3376/justin-tioran/" target="_blank">Justin Tioran</a></td>
    <td>142.7</td>
    <td>16.6</td>
    <td>9676.8</td>
    <td>Assembly</td>
</tr>

<tr>
    <td>209</td>
    <td><a href="/player/1943/wesley-alfonso/" target="_blank">Wesley Alfonso</a></td>
    <td>185.0</td>
    <td>13.4</td>
    <td>9676.5</td>
    <td>N/a</td>
</tr>

<tr>
    <td>210</td>
    <td><a href="/player/2236/zaire-wallace/" target="_blank">Zaire Wallace</a></td>
    <td>158.0</td>
    <td>13.5</td>
    <td>9674.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>211</td>
    <td><a href="/player/2881/maddox-mccormick/" target="_blank">Maddox McCormick</a></td>
    <td>148.8</td>
    <td>13.6</td>
    <td>9671.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>212</td>
    <td><a href="/player/2591/stephen-coleman/" target="_blank">Stephen Coleman</a></td>
    <td>152.8</td>
    <td>15.2</td>
    <td>9650.8</td>
    <td>East Islip</td>
</tr>

<tr>
    <td>213</td>
    <td><a href="/player/1176/jaiden-mehmedi/" target="_blank">Jaiden Mehmedi</a></td>
    <td>181.2</td>
    <td>12.5</td>
    <td>9644.6</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>214</td>
    <td><a href="/player/2613/kieran-hughes/" target="_blank">Kieran Hughes</a></td>
    <td>151.0</td>
    <td>15.2</td>
    <td>9641.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>215</td>
    <td><a href="/player/699/jason-diaz/" target="_blank">Jason Diaz</a></td>
    <td>168.0</td>
    <td>17.1</td>
    <td>9638.6</td>
    <td>Brentwood Wrestling</td>
</tr>

<tr>
    <td>216</td>
    <td><a href="/player/802/daniel-mattei/" target="_blank">daniel mattei</a></td>
    <td>168.0</td>
    <td>16.1</td>
    <td>9638.4</td>
    <td>herricks</td>
</tr>

<tr>
    <td>217</td>
    <td><a href="/player/3241/matthew-regateiro/" target="_blank">Matthew Regateiro</a></td>
    <td>160.0</td>
    <td>16.3</td>
    <td>9636.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>218</td>
    <td><a href="/player/2522/erick-bonilla/" target="_blank">Erick Bonilla</a></td>
    <td>145.0</td>
    <td>16.3</td>
    <td>9634.2</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>219</td>
    <td><a href="/player/2572/tristan-petretti/" target="_blank">Tristan Petretti</a></td>
    <td>132.2</td>
    <td>15.6</td>
    <td>9632.2</td>
    <td>Shoreham</td>
</tr>

<tr>
    <td>220</td>
    <td><a href="/player/1729/benjamin-cruces/" target="_blank">Benjamin Cruces</a></td>
    <td>175.0</td>
    <td>16.4</td>
    <td>9627.5</td>
    <td>Longwood</td>
</tr>

<tr>
    <td>221</td>
    <td><a href="/player/1626/alexander-marshall/" target="_blank">Alexander Marshall</a></td>
    <td>146.4</td>
    <td>15.2</td>
    <td>9627.2</td>
    <td>Ascension</td>
</tr>

<tr>
    <td>222</td>
    <td><a href="/player/1826/matthew-raczkowski/" target="_blank">Matthew Raczkowski</a></td>
    <td>175.4</td>
    <td>16.8</td>
    <td>9627.1</td>
    <td></td>
</tr>

<tr>
    <td>223</td>
    <td><a href="/player/2422/kelvin-sanchez/" target="_blank">Kelvin Sanchez</a></td>
    <td>149.4</td>
    <td>16.8</td>
    <td>9627.1</td>
    <td>Walt Whitman Hugh school</td>
</tr>

<tr>
    <td>224</td>
    <td><a href="/player/3342/jameson-mullens/" target="_blank">Jameson Mullens</a></td>
    <td>148.6</td>
    <td>17.5</td>
    <td>9625.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>225</td>
    <td><a href="/player/613/imanol-munoz/" target="_blank">imanol munoz</a></td>
    <td>176.0</td>
    <td>16.6</td>
    <td>9625.5</td>
    <td>floyd</td>
</tr>

<tr>
    <td>226</td>
    <td><a href="/player/648/michael-waxman/" target="_blank">Michael Waxman</a></td>
    <td>151.0</td>
    <td>15.8</td>
    <td>9621.6</td>
    <td>Commack</td>
</tr>

<tr>
    <td>227</td>
    <td><a href="/player/1688/dan-ocallaghan/" target="_blank">Dan O’Callaghan</a></td>
    <td>152.4</td>
    <td>17.0</td>
    <td>9620.8</td>
    <td>Massapequa</td>
</tr>

<tr>
    <td>228</td>
    <td><a href="/player/1620/marcus-brown/" target="_blank">Marcus Brown</a></td>
    <td>164.8</td>
    <td>15.7</td>
    <td>9618.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>229</td>
    <td><a href="/player/751/nickolas-chalarca/" target="_blank">nickolas chalarca</a></td>
    <td>152.2</td>
    <td>17.5</td>
    <td>9613.5</td>
    <td>dumont</td>
</tr>

<tr>
    <td>230</td>
    <td><a href="/player/484/marc-kleyman/" target="_blank">Marc Kleyman</a></td>
    <td>152.0</td>
    <td>17.6</td>
    <td>9605.5</td>
    <td>dynamic</td>
</tr>

<tr>
    <td>231</td>
    <td><a href="/player/1770/edwin-claros/" target="_blank">Edwin Claros</a></td>
    <td>153.0</td>
    <td>19.1</td>
    <td>9604.1</td>
    <td>WAR Zone</td>
</tr>

<tr>
    <td>232</td>
    <td><a href="/player/2506/logan-catalanotto/" target="_blank">Logan Catalanotto</a></td>
    <td>164.6</td>
    <td>16.6</td>
    <td>9601.4</td>
    <td>Sachem East</td>
</tr>

<tr>
    <td>233</td>
    <td><a href="/player/1708/max-castro/" target="_blank">Max Castro</a></td>
    <td>162.0</td>
    <td>14.0</td>
    <td>9599.5</td>
    <td>Hasbrouck Heights</td>
</tr>

<tr>
    <td>234</td>
    <td><a href="/player/3183/lian-khai/" target="_blank">Lian Khai</a></td>
    <td>133.0</td>
    <td>21.5</td>
    <td>9593.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>235</td>
    <td><a href="/player/3330/jose-martinez/" target="_blank">Jose Martinez</a></td>
    <td>152.0</td>
    <td>17.3</td>
    <td>9574.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>236</td>
    <td><a href="/player/3346/sean-mclaughlin/" target="_blank">Sean McLaughlin</a></td>
    <td>155.0</td>
    <td>16.0</td>
    <td>9574.3</td>
    <td>Cja</td>
</tr>

<tr>
    <td>237</td>
    <td><a href="/player/564/chris-fanelli/" target="_blank">Chris Fanelli</a></td>
    <td>158.2</td>
    <td>16.1</td>
    <td>9573.7</td>
    <td>Monroe</td>
</tr>

<tr>
    <td>238</td>
    <td><a href="/player/2501/jordan-torres/" target="_blank">Jordan Torres</a></td>
    <td>160.2</td>
    <td>15.8</td>
    <td>9573.7</td>
    <td>Eagles</td>
</tr>

<tr>
    <td>239</td>
    <td><a href="/player/3240/colin-neal/" target="_blank">Colin Neal</a></td>
    <td>158.0</td>
    <td>16.8</td>
    <td>9572.0</td>
    <td>Iron Horse</td>
</tr>

<tr>
    <td>240</td>
    <td><a href="/player/2547/isaiah-thomas/" target="_blank">Isaiah Thomas</a></td>
    <td>161.8</td>
    <td>15.7</td>
    <td>9570.5</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>241</td>
    <td><a href="/player/3243/alex-auletta/" target="_blank">Alex Auletta</a></td>
    <td>135.0</td>
    <td>16.9</td>
    <td>9569.8</td>
    <td>Hazlet</td>
</tr>

<tr>
    <td>242</td>
    <td><a href="/player/3049/gabe-cappellano/" target="_blank">Gabe Cappellano</a></td>
    <td>148.8</td>
    <td>16.2</td>
    <td>9564.4</td>
    <td>Michigan Revolution</td>
</tr>

<tr>
    <td>243</td>
    <td><a href="/player/753/alex-castillo/" target="_blank">Alex Castillo</a></td>
    <td>174.0</td>
    <td>15.7</td>
    <td>9563.8</td>
    <td>Anchor Wrestling Club</td>
</tr>

<tr>
    <td>244</td>
    <td><a href="/player/2960/jacob-coffey/" target="_blank">Jacob Coffey</a></td>
    <td>140.0</td>
    <td>17.9</td>
    <td>9556.8</td>
    <td>Bay City Western</td>
</tr>

<tr>
    <td>245</td>
    <td><a href="/player/3208/jackson-sichelstiel/" target="_blank">Jackson Sichelstiel</a></td>
    <td>132.0</td>
    <td>16.6</td>
    <td>9555.2</td>
    <td>Paulsboro High School</td>
</tr>

<tr>
    <td>246</td>
    <td><a href="/player/1327/justin-norwicke/" target="_blank">Justin Norwicke</a></td>
    <td>180.0</td>
    <td>23.4</td>
    <td>9536.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>247</td>
    <td><a href="/player/1463/michael-molina/" target="_blank">Michael Molina</a></td>
    <td>160.0</td>
    <td>15.7</td>
    <td>9536.2</td>
    <td>KingsPark</td>
</tr>

<tr>
    <td>248</td>
    <td><a href="/player/2719/terelle-dorceus/" target="_blank">Terelle Dorceus</a></td>
    <td>160.0</td>
    <td>16.5</td>
    <td>9536.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>249</td>
    <td><a href="/player/3141/nicholas-cadoo/" target="_blank">Nicholas Cadoo</a></td>
    <td>160.0</td>
    <td>16.8</td>
    <td>9536.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>250</td>
    <td><a href="/player/3277/jack-nelson/" target="_blank">Jack Nelson</a></td>
    <td>145.0</td>
    <td>16.9</td>
    <td>9534.2</td>
    <td>Team Colavita</td>
</tr>

<tr>
    <td>251</td>
    <td><a href="/player/715/jaden-rodriguez/" target="_blank">Jaden Rodriguez</a></td>
    <td>159.0</td>
    <td>15.1</td>
    <td>9533.9</td>
    <td>Dynamic Wrestling</td>
</tr>

<tr>
    <td>252</td>
    <td><a href="/player/809/paul-danzi/" target="_blank">Paul Danzi</a></td>
    <td>176.0</td>
    <td>16.5</td>
    <td>9528.8</td>
    <td>connetquot</td>
</tr>

<tr>
    <td>253</td>
    <td><a href="/player/1731/kevin-lopez/" target="_blank">kevin lopez</a></td>
    <td>148.2</td>
    <td>18.4</td>
    <td>9526.6</td>
    <td>dynamic</td>
</tr>

<tr>
    <td>254</td>
    <td><a href="/player/634/david-burg/" target="_blank">David Burg</a></td>
    <td>155.6</td>
    <td>16.6</td>
    <td>9523.0</td>
    <td>Pro Ex</td>
</tr>

<tr>
    <td>255</td>
    <td><a href="/player/1563/devin-matthews/" target="_blank">Devin Matthews</a></td>
    <td>136.6</td>
    <td>16.6</td>
    <td>9522.5</td>
    <td>Empire</td>
</tr>

<tr>
    <td>256</td>
    <td><a href="/player/493/henry-baronowski/" target="_blank">Henry Baronowski</a></td>
    <td>169.2</td>
    <td>14.8</td>
    <td>9520.9</td>
    <td>dynamic</td>
</tr>

<tr>
    <td>257</td>
    <td><a href="/player/3420/charles-white/" target="_blank">Charles White</a></td>
    <td>138.7</td>
    <td>13.8</td>
    <td>9518.3</td>
    <td>Pontiac huskies</td>
</tr>

<tr>
    <td>258</td>
    <td><a href="/player/642/michael-barker/" target="_blank">michael barker</a></td>
    <td>148.4</td>
    <td>16.7</td>
    <td>9512.8</td>
    <td>sachem north</td>
</tr>

<tr>
    <td>259</td>
    <td><a href="/player/2463/joey-iazzetta/" target="_blank">Joey Iazzetta</a></td>
    <td>155.4</td>
    <td>15.4</td>
    <td>9511.1</td>
    <td>Walt Whitman</td>
</tr>

<tr>
    <td>260</td>
    <td><a href="/player/563/pierce-gomez/" target="_blank">Pierce Gomez</a></td>
    <td>147.4</td>
    <td>17.0</td>
    <td>9491.2</td>
    <td>triumph</td>
</tr>

<tr>
    <td>261</td>
    <td><a href="/player/3102/jason-rocz/" target="_blank">Jason Rocz</a></td>
    <td>148.7</td>
    <td>17.8</td>
    <td>9489.7</td>
    <td>Paw Paw High School</td>
</tr>

<tr>
    <td>262</td>
    <td><a href="/player/1513/josh-glasgold/" target="_blank">Josh Glasgold</a></td>
    <td>158.8</td>
    <td>16.9</td>
    <td>9483.2</td>
    <td>Sachem north</td>
</tr>

<tr>
    <td>263</td>
    <td><a href="/player/2602/bryant-lubertine/" target="_blank">Bryant Lubertine</a></td>
    <td>168.6</td>
    <td>15.4</td>
    <td>9483.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>264</td>
    <td><a href="/player/941/christian-campay/" target="_blank">Christian Campay</a></td>
    <td>131.6</td>
    <td>14.3</td>
    <td>9481.9</td>
    <td>Lindenhurst</td>
</tr>

<tr>
    <td>265</td>
    <td><a href="/player/2876/jackson-mcmonagle/" target="_blank">Jackson McMonagle</a></td>
    <td>149.3</td>
    <td>13.9</td>
    <td>9481.6</td>
    <td>Breese's Barn</td>
</tr>

<tr>
    <td>266</td>
    <td><a href="/player/2864/max-parnis/" target="_blank">Max Parnis</a></td>
    <td>132.6</td>
    <td>16.0</td>
    <td>9479.3</td>
    <td>Turkshead</td>
</tr>

<tr>
    <td>267</td>
    <td><a href="/player/1694/ryan-isom/" target="_blank">Ryan Isom</a></td>
    <td>149.6</td>
    <td>16.0</td>
    <td>9476.7</td>
    <td>MacArthur</td>
</tr>

<tr>
    <td>268</td>
    <td><a href="/player/3232/kelsey-noll/" target="_blank">Kelsey Noll</a></td>
    <td>154.8</td>
    <td>12.8</td>
    <td>9475.7</td>
    <td>Bedford</td>
</tr>

<tr>
    <td>269</td>
    <td><a href="/player/1086/bryan-aulino/" target="_blank">Bryan Aulino</a></td>
    <td>161.0</td>
    <td>12.9</td>
    <td>9475.4</td>
    <td>Lindenhurst</td>
</tr>

<tr>
    <td>270</td>
    <td><a href="/player/3291/elijah-rodriguez/" target="_blank">Elijah Rodriguez</a></td>
    <td>152.0</td>
    <td>17.2</td>
    <td>9474.6</td>
    <td>Dynasty</td>
</tr>

<tr>
    <td>271</td>
    <td><a href="/player/1665/dylan-vargas/" target="_blank">Dylan Vargas</a></td>
    <td>151.2</td>
    <td>13.5</td>
    <td>9469.9</td>
    <td>Salk</td>
</tr>

<tr>
    <td>272</td>
    <td><a href="/player/714/ryan-quinn/" target="_blank">Ryan Quinn</a></td>
    <td>148.0</td>
    <td>16.6</td>
    <td>9466.7</td>
    <td>Smithtown East</td>
</tr>

<tr>
    <td>273</td>
    <td><a href="/player/567/matt-paglia/" target="_blank">Matt Paglia</a></td>
    <td>157.2</td>
    <td>16.6</td>
    <td>9466.5</td>
    <td>Allentown</td>
</tr>

<tr>
    <td>274</td>
    <td><a href="/player/1725/john-huttle/" target="_blank">John Huttle</a></td>
    <td>158.0</td>
    <td>15.4</td>
    <td>9461.1</td>
    <td></td>
</tr>

<tr>
    <td>275</td>
    <td><a href="/player/3072/andrew-marchese/" target="_blank">Andrew Marchese</a></td>
    <td>132.0</td>
    <td>16.3</td>
    <td>9455.2</td>
    <td>Washingtonville</td>
</tr>

<tr>
    <td>276</td>
    <td><a href="/player/3309/jacob-britten/" target="_blank">Jacob Britten</a></td>
    <td>189.5</td>
    <td>14.5</td>
    <td>9448.8</td>
    <td>Bronson</td>
</tr>

<tr>
    <td>277</td>
    <td><a href="/player/3410/pierce-carpenter-kydd/" target="_blank">Pierce Carpenter-Kydd</a></td>
    <td>149.5</td>
    <td>16.3</td>
    <td>9439.9</td>
    <td>Una</td>
</tr>

<tr>
    <td>278</td>
    <td><a href="/player/1820/jake-leslie/" target="_blank">Jake Leslie</a></td>
    <td>133.0</td>
    <td>13.6</td>
    <td>9436.5</td>
    <td>Gracie Grappling</td>
</tr>

<tr>
    <td>279</td>
    <td><a href="/player/583/james-doliscar/" target="_blank">James Doliscar</a></td>
    <td>156.2</td>
    <td>15.8</td>
    <td>9434.5</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>280</td>
    <td><a href="/player/3402/nolan-berglin/" target="_blank">Nolan Berglin</a></td>
    <td>142.1</td>
    <td>15.2</td>
    <td>9434.4</td>
    <td>Paw Paw High School</td>
</tr>

<tr>
    <td>281</td>
    <td><a href="/player/3245/carson-barry/" target="_blank">Carson Barry</a></td>
    <td>145.0</td>
    <td>18.2</td>
    <td>9434.2</td>
    <td>West Essex</td>
</tr>

<tr>
    <td>282</td>
    <td><a href="/player/761/chimdindu-molokwu/" target="_blank">chimdindu molokwu</a></td>
    <td>169.6</td>
    <td>14.1</td>
    <td>9429.4</td>
    <td>mcauliffe</td>
</tr>

<tr>
    <td>283</td>
    <td><a href="/player/2883/devante-rivera/" target="_blank">Devante Rivera</a></td>
    <td>149.5</td>
    <td>14.8</td>
    <td>9428.2</td>
    <td>Apex/Chenango valley</td>
</tr>

<tr>
    <td>284</td>
    <td><a href="/player/2517/jordan-addison/" target="_blank">Jordan Addison</a></td>
    <td>186.8</td>
    <td>14.1</td>
    <td>9426.7</td>
    <td>5 Points Wrestling</td>
</tr>

<tr>
    <td>285</td>
    <td><a href="/player/1258/ansel-then/" target="_blank">Ansel Then</a></td>
    <td>142.2</td>
    <td>17.1</td>
    <td>9425.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>286</td>
    <td><a href="/player/706/tommy-corcoran/" target="_blank">Tommy Corcoran</a></td>
    <td>145.0</td>
    <td>17.5</td>
    <td>9422.4</td>
    <td>Dynamic Wrestling</td>
</tr>

<tr>
    <td>287</td>
    <td><a href="/player/2757/eli-morder/" target="_blank">Eli Morder</a></td>
    <td>153.6</td>
    <td>17.3</td>
    <td>9408.2</td>
    <td>Toshea</td>
</tr>

<tr>
    <td>288</td>
    <td><a href="/player/2020/jayden-kuilan/" target="_blank">Jayden Kuilan</a></td>
    <td>156.0</td>
    <td>12.6</td>
    <td>9407.1</td>
    <td>Litchfield</td>
</tr>

<tr>
    <td>289</td>
    <td><a href="/player/2567/anthony-moore/" target="_blank">Anthony Moore</a></td>
    <td>150.0</td>
    <td>15.6</td>
    <td>9407.1</td>
    <td>Roslyn</td>
</tr>

<tr>
    <td>290</td>
    <td><a href="/player/2552/daniel-puluc/" target="_blank">Daniel Puluc</a></td>
    <td>140.4</td>
    <td>17.6</td>
    <td>9402.9</td>
    <td>Mattituck high school</td>
</tr>

<tr>
    <td>291</td>
    <td><a href="/player/1642/shane-appell/" target="_blank">Shane Appell</a></td>
    <td>152.6</td>
    <td>16.3</td>
    <td>9398.3</td>
    <td>putnam Valley</td>
</tr>

<tr>
    <td>292</td>
    <td><a href="/player/3247/danny-haws/" target="_blank">Danny Haws</a></td>
    <td>128.0</td>
    <td>16.9</td>
    <td>9398.3</td>
    <td>Lenape Valley HS</td>
</tr>

<tr>
    <td>293</td>
    <td><a href="/player/764/james-shaw/" target="_blank">james shaw</a></td>
    <td>154.8</td>
    <td>17.9</td>
    <td>9395.6</td>
    <td>hudson valley wrestling</td>
</tr>

<tr>
    <td>294</td>
    <td><a href="/player/3008/nicholas-dimitroff/" target="_blank">Nicholas Dimitroff</a></td>
    <td>150.0</td>
    <td>16.6</td>
    <td>9395.1</td>
    <td>Michigan Revolution</td>
</tr>

<tr>
    <td>295</td>
    <td><a href="/player/2157/samuel-erickson/" target="_blank">Samuel Erickson</a></td>
    <td>150.4</td>
    <td>14.0</td>
    <td>9390.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>296</td>
    <td><a href="/player/763/jimmie-sgarella/" target="_blank">Jimmie Sgarella</a></td>
    <td>139.4</td>
    <td>16.2</td>
    <td>9388.1</td>
    <td>Dumont</td>
</tr>

<tr>
    <td>297</td>
    <td><a href="/player/1266/dylan-moore/" target="_blank">Dylan Moore</a></td>
    <td>167.8</td>
    <td>14.0</td>
    <td>9387.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>298</td>
    <td><a href="/player/566/steven-pabon/" target="_blank">Steven Pabon</a></td>
    <td>142.0</td>
    <td>18.4</td>
    <td>9385.6</td>
    <td>Triumph</td>
</tr>

<tr>
    <td>299</td>
    <td><a href="/player/2376/nate-gsell/" target="_blank">Nate Gsell</a></td>
    <td>154.4</td>
    <td>14.2</td>
    <td>9376.6</td>
    <td>Sachem</td>
</tr>

<tr>
    <td>300</td>
    <td><a href="/player/640/nick-germano/" target="_blank">Nick Germano</a></td>
    <td>133.6</td>
    <td>16.8</td>
    <td>9374.8</td>
    <td>Barn Brothers</td>
</tr>

<tr>
    <td>301</td>
    <td><a href="/player/2588/kelvin-lin/" target="_blank">Kelvin Lin</a></td>
    <td>155.0</td>
    <td>14.1</td>
    <td>9374.3</td>
    <td>Longwood</td>
</tr>

<tr>
    <td>302</td>
    <td><a href="/player/2809/hunter-fink/" target="_blank">Hunter Fink</a></td>
    <td>155.0</td>
    <td>16.8</td>
    <td>9374.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>303</td>
    <td><a href="/player/1890/shakie-williams/" target="_blank">Shakie Williams</a></td>
    <td>140.6</td>
    <td>13.2</td>
    <td>9374.2</td>
    <td>Longwood</td>
</tr>

<tr>
    <td>304</td>
    <td><a href="/player/1407/anas-zia/" target="_blank">Anas Zia</a></td>
    <td>171.4</td>
    <td>17.2</td>
    <td>9372.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>305</td>
    <td><a href="/player/798/john-mcelroy/" target="_blank">john mcelroy</a></td>
    <td>154.4</td>
    <td>15.5</td>
    <td>9370.8</td>
    <td>wardmeville</td>
</tr>

<tr>
    <td>306</td>
    <td><a href="/player/3084/daine-crouch/" target="_blank">Daine Crouch</a></td>
    <td>146.0</td>
    <td>17.7</td>
    <td>9369.3</td>
    <td>Independent</td>
</tr>

<tr>
    <td>307</td>
    <td><a href="/player/570/jaydin-mahon/" target="_blank">Jaydin Mahon</a></td>
    <td>151.4</td>
    <td>15.9</td>
    <td>9362.6</td>
    <td>New Brunswick</td>
</tr>

<tr>
    <td>308</td>
    <td><a href="/player/3027/zerrick-thomas/" target="_blank">Zerrick Thomas</a></td>
    <td>162.6</td>
    <td>15.7</td>
    <td>9361.4</td>
    <td>Romulus</td>
</tr>

<tr>
    <td>309</td>
    <td><a href="/player/849/anthony-molinaro/" target="_blank">Anthony Molinaro</a></td>
    <td>160.4</td>
    <td>11.5</td>
    <td>9358.4</td>
    <td>Lindenhurst</td>
</tr>

<tr>
    <td>310</td>
    <td><a href="/player/3422/joel-zimmerman/" target="_blank">Joel Zimmerman</a></td>
    <td>144.0</td>
    <td>18.0</td>
    <td>9356.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>311</td>
    <td><a href="/player/1497/antonio-iannetta/" target="_blank">Antonio Iannetta</a></td>
    <td>159.0</td>
    <td>14.0</td>
    <td>9355.9</td>
    <td>Farmingdale</td>
</tr>

<tr>
    <td>312</td>
    <td><a href="/player/3155/askar-imanbekov/" target="_blank">Askar Imanbekov</a></td>
    <td>140.0</td>
    <td>16.7</td>
    <td>9355.3</td>
    <td>Elite wrestling Academy</td>
</tr>

<tr>
    <td>313</td>
    <td><a href="/player/1256/erick-rodriguez/" target="_blank">Erick Rodriguez</a></td>
    <td>149.2</td>
    <td>17.2</td>
    <td>9344.2</td>
    <td>Elite</td>
</tr>

<tr>
    <td>314</td>
    <td><a href="/player/759/luke-zargo/" target="_blank">luke zargo</a></td>
    <td>142.6</td>
    <td>15.6</td>
    <td>9343.5</td>
    <td>monroe</td>
</tr>

<tr>
    <td>315</td>
    <td><a href="/player/808/chris-shenzey/" target="_blank">Chris Shenzey</a></td>
    <td>154.0</td>
    <td>16.7</td>
    <td>9341.3</td>
    <td>Proex</td>
</tr>

<tr>
    <td>316</td>
    <td><a href="/player/625/dario-molina/" target="_blank">Dario Molina</a></td>
    <td>162.0</td>
    <td>17.5</td>
    <td>9337.4</td>
    <td>William Floyd</td>
</tr>

<tr>
    <td>317</td>
    <td><a href="/player/3148/jack-mcgowan/" target="_blank">Jack Mcgowan</a></td>
    <td>145.0</td>
    <td>17.2</td>
    <td>9334.2</td>
    <td>Rhino wrestling club</td>
</tr>

<tr>
    <td>318</td>
    <td><a href="/player/794/aidan-tripodi/" target="_blank">aidan tripodi</a></td>
    <td>144.6</td>
    <td>18.1</td>
    <td>9333.3</td>
    <td>kings park</td>
</tr>

<tr>
    <td>319</td>
    <td><a href="/player/1700/brendan-lee/" target="_blank">Brendan Lee</a></td>
    <td>168.2</td>
    <td>15.2</td>
    <td>9328.8</td>
    <td>Cardozo</td>
</tr>

<tr>
    <td>320</td>
    <td><a href="/player/2890/dylan-garcia/" target="_blank">Dylan Garcia</a></td>
    <td>130.2</td>
    <td>16.6</td>
    <td>9327.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>321</td>
    <td><a href="/player/3315/jacob-kennedy/" target="_blank">Jacob Kennedy</a></td>
    <td>141.5</td>
    <td>14.0</td>
    <td>9327.3</td>
    <td>Dearborn heights Wildcats</td>
</tr>

<tr>
    <td>322</td>
    <td><a href="/player/647/alex-bruno/" target="_blank">Alex Bruno</a></td>
    <td>160.0</td>
    <td>16.4</td>
    <td>9324.7</td>
    <td>Patchogue Medford</td>
</tr>

<tr>
    <td>323</td>
    <td><a href="/player/3099/dakota-pahany/" target="_blank">Dakota Pahany</a></td>
    <td>151.3</td>
    <td>17.8</td>
    <td>9323.5</td>
    <td>High School</td>
</tr>

<tr>
    <td>324</td>
    <td><a href="/player/472/thomas-mancini/" target="_blank">Thomas Mancini</a></td>
    <td>147.0</td>
    <td>13.7</td>
    <td>9319.9</td>
    <td>VHW / Lindenhurst</td>
</tr>

<tr>
    <td>325</td>
    <td><a href="/player/2483/adam-ilian/" target="_blank">Adam Ilian</a></td>
    <td>158.0</td>
    <td>15.4</td>
    <td>9311.5</td>
    <td>Great Neck North</td>
</tr>

<tr>
    <td>326</td>
    <td><a href="/player/631/eric-wetherbee/" target="_blank">Eric Wetherbee</a></td>
    <td>153.8</td>
    <td>14.7</td>
    <td>9307.0</td>
    <td>Sachem North</td>
</tr>

<tr>
    <td>327</td>
    <td><a href="/player/3202/angelo-deangelis/" target="_blank">Angelo DeAngelis</a></td>
    <td>147.0</td>
    <td>16.5</td>
    <td>9304.1</td>
    <td>Platinum</td>
</tr>

<tr>
    <td>328</td>
    <td><a href="/player/2186/grant-mccubrey/" target="_blank">Grant McCubrey</a></td>
    <td>144.0</td>
    <td>12.8</td>
    <td>9298.9</td>
    <td>Nashua BGC</td>
</tr>

<tr>
    <td>329</td>
    <td><a href="/player/578/justin-castaneda/" target="_blank">Justin Castaneda</a></td>
    <td>150.2</td>
    <td>16.8</td>
    <td>9295.5</td>
    <td>Passaic Valley</td>
</tr>

<tr>
    <td>330</td>
    <td><a href="/player/3364/jaiden-sarabia/" target="_blank">Jaiden Sarabia</a></td>
    <td>139.0</td>
    <td>13.8</td>
    <td>9294.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>331</td>
    <td><a href="/player/695/joseph-volovar/" target="_blank">joseph volovar</a></td>
    <td>143.0</td>
    <td>19.2</td>
    <td>9290.4</td>
    <td>brentwood</td>
</tr>

<tr>
    <td>332</td>
    <td><a href="/player/3147/francesco-rossiter/" target="_blank">Francesco Rossiter</a></td>
    <td>138.0</td>
    <td>15.8</td>
    <td>9281.9</td>
    <td>Metuchen High School</td>
</tr>

<tr>
    <td>333</td>
    <td><a href="/player/1613/james-powers/" target="_blank">James Powers</a></td>
    <td>157.4</td>
    <td>17.0</td>
    <td>9278.5</td>
    <td>Raider Mat Club</td>
</tr>

<tr>
    <td>334</td>
    <td><a href="/player/1690/gavin-cirolli/" target="_blank">Gavin Cirolli</a></td>
    <td>148.0</td>
    <td>16.0</td>
    <td>9275.7</td>
    <td>Vhw</td>
</tr>

<tr>
    <td>335</td>
    <td><a href="/player/2593/demetri-walker/" target="_blank">Demetri Walker</a></td>
    <td>150.2</td>
    <td>16.5</td>
    <td>9273.1</td>
    <td>Highlanders Wrestling Club</td>
</tr>

<tr>
    <td>336</td>
    <td><a href="/player/762/aladeen-hussein/" target="_blank">Aladeen Hussein</a></td>
    <td>157.6</td>
    <td>18.2</td>
    <td>9272.8</td>
    <td>Buxton</td>
</tr>

<tr>
    <td>337</td>
    <td><a href="/player/2425/anthony-paige/" target="_blank">Anthony paige</a></td>
    <td>180.0</td>
    <td>12.6</td>
    <td>9272.2</td>
    <td>Island Trees</td>
</tr>

<tr>
    <td>338</td>
    <td><a href="/player/2541/alex-spagnoli/" target="_blank">Alex Spagnoli</a></td>
    <td>146.0</td>
    <td>15.9</td>
    <td>9265.9</td>
    <td>Five Point Wrestling</td>
</tr>

<tr>
    <td>339</td>
    <td><a href="/player/2979/steve-perez/" target="_blank">Steve Perez</a></td>
    <td>146.0</td>
    <td>17.0</td>
    <td>9264.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>340</td>
    <td><a href="/player/650/john-baloga/" target="_blank">John Baloga</a></td>
    <td>140.0</td>
    <td>17.7</td>
    <td>9261.2</td>
    <td>Pro-Ex</td>
</tr>

<tr>
    <td>341</td>
    <td><a href="/player/2545/isaiah-blemur/" target="_blank">Isaiah Blemur</a></td>
    <td>129.0</td>
    <td>16.7</td>
    <td>9260.8</td>
    <td>Hylander Wrestling Club</td>
</tr>

<tr>
    <td>342</td>
    <td><a href="/player/1524/chris-ayala/" target="_blank">Chris Ayala</a></td>
    <td>157.8</td>
    <td>13.5</td>
    <td>9257.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>343</td>
    <td><a href="/player/2444/colby-dandria/" target="_blank">Colby D’Andria</a></td>
    <td>140.0</td>
    <td>16.7</td>
    <td>9255.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>344</td>
    <td><a href="/player/1556/robert-gierum/" target="_blank">Robert Gierum</a></td>
    <td>160.0</td>
    <td>15.5</td>
    <td>9246.0</td>
    <td>Fox Lane</td>
</tr>

<tr>
    <td>345</td>
    <td><a href="/player/1718/dylan-washburn/" target="_blank">Dylan Washburn</a></td>
    <td>145.0</td>
    <td>17.4</td>
    <td>9239.1</td>
    <td>suffield</td>
</tr>

<tr>
    <td>346</td>
    <td><a href="/player/2992/gavin-skelton/" target="_blank">Gavin Skelton</a></td>
    <td>135.8</td>
    <td>16.4</td>
    <td>9234.9</td>
    <td>LakeVille Falcons</td>
</tr>

<tr>
    <td>347</td>
    <td><a href="/player/3159/david-lisk/" target="_blank">David Lisk</a></td>
    <td>145.0</td>
    <td>16.4</td>
    <td>9234.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>348</td>
    <td><a href="/player/1260/sean-martinez/" target="_blank">Sean Martinez</a></td>
    <td>131.4</td>
    <td>16.9</td>
    <td>9230.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>349</td>
    <td><a href="/player/3161/jason-dubrasky/" target="_blank">Jason Dubrasky</a></td>
    <td>142.0</td>
    <td>15.3</td>
    <td>9227.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>350</td>
    <td><a href="/player/700/sean-peterson/" target="_blank">sean peterson</a></td>
    <td>141.0</td>
    <td>16.5</td>
    <td>9223.7</td>
    <td>islip</td>
</tr>

<tr>
    <td>351</td>
    <td><a href="/player/635/michael-malone/" target="_blank">Michael Malone</a></td>
    <td>148.0</td>
    <td>15.4</td>
    <td>9222.1</td>
    <td>William Floyd</td>
</tr>

<tr>
    <td>352</td>
    <td><a href="/player/1618/sean-mcauley/" target="_blank">sean mcauley</a></td>
    <td>144.4</td>
    <td>16.2</td>
    <td>9221.0</td>
    <td>cold spring harbor</td>
</tr>

<tr>
    <td>353</td>
    <td><a href="/player/1678/ryan-howard/" target="_blank">Ryan Howard</a></td>
    <td>148.2</td>
    <td>17.2</td>
    <td>9219.9</td>
    <td>MASSAPEQUA</td>
</tr>

<tr>
    <td>354</td>
    <td><a href="/player/608/manny-willins/" target="_blank">manny willins</a></td>
    <td>143.0</td>
    <td>16.5</td>
    <td>9217.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>355</td>
    <td><a href="/player/2134/zoe-mizula/" target="_blank">Zoe Mizula</a></td>
    <td>133.0</td>
    <td>16.1</td>
    <td>9215.6</td>
    <td>BGCGN</td>
</tr>

<tr>
    <td>356</td>
    <td><a href="/player/2314/malachi-thomas/" target="_blank">Malachi Thomas</a></td>
    <td>145.6</td>
    <td>13.9</td>
    <td>9212.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>357</td>
    <td><a href="/player/1322/donovan-valles/" target="_blank">Donovan Valles</a></td>
    <td>150.0</td>
    <td>13.8</td>
    <td>9207.1</td>
    <td>Voorhees</td>
</tr>

<tr>
    <td>358</td>
    <td><a href="/player/3252/ian-gardner/" target="_blank">Ian Gardner</a></td>
    <td>150.0</td>
    <td>13.8</td>
    <td>9207.1</td>
    <td>PRIDE</td>
</tr>

<tr>
    <td>359</td>
    <td><a href="/player/3311/quinn-peters/" target="_blank">Quinn Peters</a></td>
    <td>150.0</td>
    <td>16.4</td>
    <td>9207.1</td>
    <td></td>
</tr>

<tr>
    <td>360</td>
    <td><a href="/player/3381/dayne-gaskell/" target="_blank">Dayne Gaskell</a></td>
    <td>147.0</td>
    <td>15.4</td>
    <td>9204.1</td>
    <td>Pitbulls</td>
</tr>

<tr>
    <td>361</td>
    <td><a href="/player/709/chris-henzey/" target="_blank">Chris Henzey</a></td>
    <td>154.0</td>
    <td>16.4</td>
    <td>9200.9</td>
    <td>Pro X</td>
</tr>

<tr>
    <td>362</td>
    <td><a href="/player/3075/isaiah-barton/" target="_blank">Isaiah Barton</a></td>
    <td>144.0</td>
    <td>17.1</td>
    <td>9198.9</td>
    <td>Lakeville Falcons</td>
</tr>

<tr>
    <td>363</td>
    <td><a href="/player/1426/nick-maniscalco/" target="_blank">Nick Maniscalco</a></td>
    <td>145.4</td>
    <td>15.8</td>
    <td>9197.0</td>
    <td>MacArthur</td>
</tr>

<tr>
    <td>364</td>
    <td><a href="/player/2887/andrew-madanci/" target="_blank">Andrew Madanci</a></td>
    <td>165.8</td>
    <td>16.5</td>
    <td>9196.3</td>
    <td>Malvern Prep</td>
</tr>

<tr>
    <td>365</td>
    <td><a href="/player/1422/abdelsalam-fezani/" target="_blank">Abdelsalam Fezani</a></td>
    <td>148.6</td>
    <td>17.5</td>
    <td>9195.9</td>
    <td></td>
</tr>

<tr>
    <td>366</td>
    <td><a href="/player/660/andrew-alfieri/" target="_blank">andrew alfieri</a></td>
    <td>145.6</td>
    <td>16.6</td>
    <td>9190.3</td>
    <td>sachem north</td>
</tr>

<tr>
    <td>367</td>
    <td><a href="/player/589/norberto-dehoyos/" target="_blank">Norberto Dehoyos</a></td>
    <td>142.0</td>
    <td>15.3</td>
    <td>9188.7</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>368</td>
    <td><a href="/player/1727/thomas-kiernan/" target="_blank">Thomas Kiernan</a></td>
    <td>137.4</td>
    <td>15.1</td>
    <td>9180.2</td>
    <td>Sachem North</td>
</tr>

<tr>
    <td>369</td>
    <td><a href="/player/1574/jake-aldi/" target="_blank">Jake Aldi</a></td>
    <td>129.0</td>
    <td>16.5</td>
    <td>9176.4</td>
    <td>Ascension</td>
</tr>

<tr>
    <td>370</td>
    <td><a href="/player/2907/steve-baughman/" target="_blank">Steve Baughman</a></td>
    <td>132.7</td>
    <td>17.1</td>
    <td>9174.6</td>
    <td>Romulus</td>
</tr>

<tr>
    <td>371</td>
    <td><a href="/player/1431/jake-sollitto/" target="_blank">Jake Sollitto</a></td>
    <td>155.8</td>
    <td>16.3</td>
    <td>9174.3</td>
    <td>Macarthur generals wrestling</td>
</tr>

<tr>
    <td>372</td>
    <td><a href="/player/2082/nate-jordan/" target="_blank">Nate Jordan</a></td>
    <td>141.4</td>
    <td>14.3</td>
    <td>9174.2</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>373</td>
    <td><a href="/player/2423/kwesi-amoa/" target="_blank">Kwesi Amoa</a></td>
    <td>135.0</td>
    <td>18.4</td>
    <td>9169.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>374</td>
    <td><a href="/player/587/israel-aucancela/" target="_blank">Israel Aucancela</a></td>
    <td>130.8</td>
    <td>16.2</td>
    <td>9166.2</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>375</td>
    <td><a href="/player/2553/kwasi-bonsu/" target="_blank">Kwasi Bonsu</a></td>
    <td>173.0</td>
    <td>14.8</td>
    <td>9166.1</td>
    <td>Highlander Wrestling team</td>
</tr>

<tr>
    <td>376</td>
    <td><a href="/player/2821/angelo-migliaccio/" target="_blank">Angelo Migliaccio</a></td>
    <td>133.6</td>
    <td>16.6</td>
    <td>9164.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>377</td>
    <td><a href="/player/1695/ethan-herschander/" target="_blank">Ethan Herschander</a></td>
    <td>137.0</td>
    <td>16.6</td>
    <td>9160.4</td>
    <td>EAST SETAUKET</td>
</tr>

<tr>
    <td>378</td>
    <td><a href="/player/3059/cameron-haslem/" target="_blank">Cameron Haslem</a></td>
    <td>128.3</td>
    <td>19.1</td>
    <td>9156.5</td>
    <td>Team Donahoe</td>
</tr>

<tr>
    <td>379</td>
    <td><a href="/player/2564/tate-klipstein/" target="_blank">Tate Klipstein</a></td>
    <td>140.2</td>
    <td>15.9</td>
    <td>9153.9</td>
    <td>Mattituck</td>
</tr>

<tr>
    <td>380</td>
    <td><a href="/player/800/erik-fennes/" target="_blank">Erik Fennes</a></td>
    <td>143.0</td>
    <td>17.4</td>
    <td>9150.2</td>
    <td>Kingspark</td>
</tr>

<tr>
    <td>381</td>
    <td><a href="/player/806/jason-perkins/" target="_blank">Jason Perkins</a></td>
    <td>151.0</td>
    <td>15.0</td>
    <td>9142.0</td>
    <td>William Floyd</td>
</tr>

<tr>
    <td>382</td>
    <td><a href="/player/1285/christopher-prussen/" target="_blank">Christopher Prussen</a></td>
    <td>148.0</td>
    <td>14.4</td>
    <td>9138.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>383</td>
    <td><a href="/player/1365/malacai-davis/" target="_blank">Malacai Davis</a></td>
    <td>148.0</td>
    <td>17.6</td>
    <td>9138.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>384</td>
    <td><a href="/player/747/julian-garcia/" target="_blank">Julian Garcia</a></td>
    <td>124.0</td>
    <td>16.2</td>
    <td>9136.7</td>
    <td>Olympic</td>
</tr>

<tr>
    <td>385</td>
    <td><a href="/player/3081/adam-purrenhage/" target="_blank">Adam Purrenhage</a></td>
    <td>136.2</td>
    <td>16.1</td>
    <td>9129.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>386</td>
    <td><a href="/player/2554/steven-silipo/" target="_blank">Steven Silipo</a></td>
    <td>140.6</td>
    <td>15.5</td>
    <td>9125.0</td>
    <td>Syosset</td>
</tr>

<tr>
    <td>387</td>
    <td><a href="/player/2792/konstantinos-koufalis/" target="_blank">Konstantinos Koufalis</a></td>
    <td>143.8</td>
    <td>14.0</td>
    <td>9120.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>388</td>
    <td><a href="/player/2072/isabelle-brandt/" target="_blank">isabelle brandt</a></td>
    <td>164.2</td>
    <td>13.0</td>
    <td>9118.2</td>
    <td>nashua bgc</td>
</tr>

<tr>
    <td>389</td>
    <td><a href="/player/2618/micah-disipio/" target="_blank">micah disipio</a></td>
    <td>145.0</td>
    <td>16.6</td>
    <td>9117.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>390</td>
    <td><a href="/player/555/cooper-boyum/" target="_blank">Cooper Boyum</a></td>
    <td>146.4</td>
    <td>16.7</td>
    <td>9115.6</td>
    <td>monroe</td>
</tr>

<tr>
    <td>391</td>
    <td><a href="/player/2819/robert-fattore/" target="_blank">Robert Fattore</a></td>
    <td>130.5</td>
    <td>17.6</td>
    <td>9111.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>392</td>
    <td><a href="/player/551/christopher-bell/" target="_blank">Christopher Bell</a></td>
    <td>156.8</td>
    <td>17.0</td>
    <td>9111.2</td>
    <td>Holmdel</td>
</tr>

<tr>
    <td>393</td>
    <td><a href="/player/3438/hunter-hummel/" target="_blank">Hunter Hummel</a></td>
    <td>148.3</td>
    <td>14.7</td>
    <td>9109.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>394</td>
    <td><a href="/player/1860/michael-suwalski/" target="_blank">Michael Suwalski</a></td>
    <td>178.6</td>
    <td>11.5</td>
    <td>9108.0</td>
    <td>Venom</td>
</tr>

<tr>
    <td>395</td>
    <td><a href="/player/1641/hunter-lundberg/" target="_blank">Hunter Lundberg</a></td>
    <td>124.8</td>
    <td>16.1</td>
    <td>9104.2</td>
    <td>Putnam Valley</td>
</tr>

<tr>
    <td>396</td>
    <td><a href="/player/1614/antonio-nicholas/" target="_blank">Antonio Nicholas</a></td>
    <td>132.0</td>
    <td>16.9</td>
    <td>9102.1</td>
    <td>Ludlowe</td>
</tr>

<tr>
    <td>397</td>
    <td><a href="/player/1458/dylan-page/" target="_blank">Dylan Page</a></td>
    <td>172.2</td>
    <td>14.2</td>
    <td>9099.1</td>
    <td>VSMJHS</td>
</tr>

<tr>
    <td>398</td>
    <td><a href="/player/2860/connor-the-wolf-kiernan/" target="_blank">Connor "The Wolf" Kiernan</a></td>
    <td>134.5</td>
    <td>13.3</td>
    <td>9090.9</td>
    <td>The Clique</td>
</tr>

<tr>
    <td>399</td>
    <td><a href="/player/2556/alex-rodriguez/" target="_blank">Alex Rodriguez</a></td>
    <td>147.6</td>
    <td>15.3</td>
    <td>9090.0</td>
    <td>BRENTWOOD</td>
</tr>

<tr>
    <td>400</td>
    <td><a href="/player/3013/ryan-thompson/" target="_blank">ryan thompson</a></td>
    <td>154.7</td>
    <td>14.4</td>
    <td>9086.9</td>
    <td>thegarage</td>
</tr>

<tr>
    <td>401</td>
    <td><a href="/player/949/waris-jelani-faiz/" target="_blank">Waris Jelani Faiz</a></td>
    <td>139.2</td>
    <td>12.4</td>
    <td>9086.3</td>
    <td>Hauppauge eagles</td>
</tr>

<tr>
    <td>402</td>
    <td><a href="/player/3172/liam-flanigan/" target="_blank">Liam Flanigan</a></td>
    <td>138.0</td>
    <td>15.2</td>
    <td>9081.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>403</td>
    <td><a href="/player/1272/clay-gainer/" target="_blank">Clay Gainer</a></td>
    <td>130.0</td>
    <td>14.6</td>
    <td>9077.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>404</td>
    <td><a href="/player/1818/grayson-smith/" target="_blank">Grayson Smith</a></td>
    <td>130.0</td>
    <td>18.2</td>
    <td>9077.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>405</td>
    <td><a href="/player/807/jared-albert/" target="_blank">Jared Albert</a></td>
    <td>136.4</td>
    <td>17.7</td>
    <td>9073.4</td>
    <td>John glenn</td>
</tr>

<tr>
    <td>406</td>
    <td><a href="/player/811/colby-frunzi/" target="_blank">colby frunzi</a></td>
    <td>137.0</td>
    <td>16.3</td>
    <td>9067.7</td>
    <td>dynamic</td>
</tr>

<tr>
    <td>407</td>
    <td><a href="/player/1974/john-patles/" target="_blank">John Patles</a></td>
    <td>142.2</td>
    <td>14.1</td>
    <td>9060.6</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>408</td>
    <td><a href="/player/3418/alex-messing/" target="_blank">Alex Messing</a></td>
    <td>143.0</td>
    <td>15.5</td>
    <td>9059.0</td>
    <td>Stevenson</td>
</tr>

<tr>
    <td>409</td>
    <td><a href="/player/2986/nathan-hecht/" target="_blank">Nathan Hecht</a></td>
    <td>131.7</td>
    <td>15.4</td>
    <td>9057.3</td>
    <td>Lakeville Falcons</td>
</tr>

<tr>
    <td>410</td>
    <td><a href="/player/2477/jamisen-ohearn/" target="_blank">Jamisen O'Hearn</a></td>
    <td>132.0</td>
    <td>15.5</td>
    <td>9055.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>411</td>
    <td><a href="/player/3225/tristan-pedre/" target="_blank">Tristan Pedre</a></td>
    <td>145.0</td>
    <td>16.0</td>
    <td>9054.2</td>
    <td>Toms River High School North</td>
</tr>

<tr>
    <td>412</td>
    <td><a href="/player/2583/justin-sierra/" target="_blank">Justin Sierra</a></td>
    <td>131.4</td>
    <td>15.7</td>
    <td>9052.6</td>
    <td>Valley Stream central eagles</td>
</tr>

<tr>
    <td>413</td>
    <td><a href="/player/696/zakariya-khwaja/" target="_blank">Zakariya Khwaja</a></td>
    <td>149.6</td>
    <td>15.5</td>
    <td>9052.4</td>
    <td>hills east</td>
</tr>

<tr>
    <td>414</td>
    <td><a href="/player/752/jofrank-torres/" target="_blank">JoFrank Torres</a></td>
    <td>165.0</td>
    <td>17.2</td>
    <td>9047.4</td>
    <td>Anchor</td>
</tr>

<tr>
    <td>415</td>
    <td><a href="/player/1600/lorenzo-caratozzolo/" target="_blank">Lorenzo Caratozzolo</a></td>
    <td>145.6</td>
    <td>13.2</td>
    <td>9047.2</td>
    <td>Norwalk MadBulls</td>
</tr>

<tr>
    <td>416</td>
    <td><a href="/player/1705/james-malvey/" target="_blank">James Malvey</a></td>
    <td>148.0</td>
    <td>16.5</td>
    <td>9045.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>417</td>
    <td><a href="/player/588/medardo-argueta/" target="_blank">medardo argueta</a></td>
    <td>151.0</td>
    <td>16.0</td>
    <td>9041.0</td>
    <td>brentwood</td>
</tr>

<tr>
    <td>418</td>
    <td><a href="/player/2828/jake-aftewicz/" target="_blank">Jake Aftewicz</a></td>
    <td>132.8</td>
    <td>13.6</td>
    <td>9036.4</td>
    <td>Pittston area</td>
</tr>

<tr>
    <td>419</td>
    <td><a href="/player/1292/andrew-dailey/" target="_blank">Andrew Dailey</a></td>
    <td>145.0</td>
    <td>17.3</td>
    <td>9034.2</td>
    <td>smithtown east</td>
</tr>

<tr>
    <td>420</td>
    <td><a href="/player/1717/yany-lin/" target="_blank">Yany Lin</a></td>
    <td>145.0</td>
    <td>14.8</td>
    <td>9034.2</td>
    <td>Wheatley</td>
</tr>

<tr>
    <td>421</td>
    <td><a href="/player/2550/juan-rodriguez/" target="_blank">Juan Rodriguez</a></td>
    <td>145.0</td>
    <td>15.8</td>
    <td>9034.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>422</td>
    <td><a href="/player/2800/brody-kountouris/" target="_blank">Brody Kountouris</a></td>
    <td>145.0</td>
    <td>14.2</td>
    <td>9034.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>423</td>
    <td><a href="/player/2779/piper-hall/" target="_blank">piper hall</a></td>
    <td>154.7</td>
    <td>17.4</td>
    <td>9027.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>424</td>
    <td><a href="/player/1638/jeremy-sanchez/" target="_blank">Jeremy Sanchez</a></td>
    <td>133.8</td>
    <td>17.0</td>
    <td>9027.2</td>
    <td>East stroudsburg  North</td>
</tr>

<tr>
    <td>425</td>
    <td><a href="/player/1432/michael-casey/" target="_blank">Michael Casey</a></td>
    <td>127.0</td>
    <td>16.5</td>
    <td>9020.0</td>
    <td>MacArthur</td>
</tr>

<tr>
    <td>426</td>
    <td><a href="/player/2538/brendan-ridge/" target="_blank">Brendan Ridge</a></td>
    <td>150.4</td>
    <td>13.8</td>
    <td>9012.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>427</td>
    <td><a href="/player/1004/yandel-marcucci/" target="_blank">Yandel Marcucci</a></td>
    <td>131.2</td>
    <td>13.2</td>
    <td>9003.9</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>428</td>
    <td><a href="/player/2486/hugh-bittenbender/" target="_blank">Hugh Bittenbender</a></td>
    <td>135.8</td>
    <td>15.4</td>
    <td>9002.1</td>
    <td></td>
</tr>

<tr>
    <td>429</td>
    <td><a href="/player/1902/nick-pincay/" target="_blank">Nick Pincay</a></td>
    <td>146.6</td>
    <td>14.6</td>
    <td>8997.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>430</td>
    <td><a href="/player/1423/dj-henry/" target="_blank">DJ Henry</a></td>
    <td>140.4</td>
    <td>14.2</td>
    <td>8992.0</td>
    <td>Shore Thing</td>
</tr>

<tr>
    <td>431</td>
    <td><a href="/player/2578/william-henry/" target="_blank">William Henry</a></td>
    <td>149.8</td>
    <td>14.6</td>
    <td>8988.3</td>
    <td>SYOSSET</td>
</tr>

<tr>
    <td>432</td>
    <td><a href="/player/2516/justin-lakeram/" target="_blank">Justin Lakeram</a></td>
    <td>143.0</td>
    <td>17.1</td>
    <td>8988.1</td>
    <td>Highlander</td>
</tr>

<tr>
    <td>433</td>
    <td><a href="/player/1530/griffin-alterio/" target="_blank">Griffin Alterio</a></td>
    <td>139.8</td>
    <td>13.5</td>
    <td>8987.6</td>
    <td>NYWA</td>
</tr>

<tr>
    <td>434</td>
    <td><a href="/player/1659/ashtin-reich/" target="_blank">Ashtin Reich</a></td>
    <td>133.4</td>
    <td>16.2</td>
    <td>8986.7</td>
    <td>Cardozo</td>
</tr>

<tr>
    <td>435</td>
    <td><a href="/player/2062/seth-adams/" target="_blank">Seth Adams</a></td>
    <td>126.8</td>
    <td>14.4</td>
    <td>8983.6</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>436</td>
    <td><a href="/player/2617/cameron-travis/" target="_blank">Cameron Travis</a></td>
    <td>138.0</td>
    <td>14.8</td>
    <td>8981.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>437</td>
    <td><a href="/player/3142/connor-newell/" target="_blank">connor newell</a></td>
    <td>138.0</td>
    <td>16.6</td>
    <td>8981.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>438</td>
    <td><a href="/player/2150/connor-whitman/" target="_blank">Connor Whitman</a></td>
    <td>135.6</td>
    <td>12.5</td>
    <td>8978.7</td>
    <td>Nashua Boys club</td>
</tr>

<tr>
    <td>439</td>
    <td><a href="/player/3129/nicholas-campanella/" target="_blank">Nicholas Campanella</a></td>
    <td>130.0</td>
    <td>16.6</td>
    <td>8977.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>440</td>
    <td><a href="/player/571/jarazell-bull/" target="_blank">Jarazell Bull</a></td>
    <td>145.8</td>
    <td>15.1</td>
    <td>8976.7</td>
    <td>New Brunswick</td>
</tr>

<tr>
    <td>441</td>
    <td><a href="/player/2371/benjamin-mosquera/" target="_blank">Benjamin Mosquera</a></td>
    <td>184.2</td>
    <td>14.6</td>
    <td>8975.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>442</td>
    <td><a href="/player/2479/cormac-ryan/" target="_blank">Cormac Ryan</a></td>
    <td>155.0</td>
    <td>14.3</td>
    <td>8974.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>443</td>
    <td><a href="/player/760/jake-klein/" target="_blank">jake klein</a></td>
    <td>150.8</td>
    <td>14.1</td>
    <td>8971.7</td>
    <td>shore thing</td>
</tr>

<tr>
    <td>444</td>
    <td><a href="/player/1781/david-lindner/" target="_blank">David Lindner</a></td>
    <td>146.2</td>
    <td>16.6</td>
    <td>8970.2</td>
    <td>James Madison Knights</td>
</tr>

<tr>
    <td>445</td>
    <td><a href="/player/3340/reese-greathouse/" target="_blank">Reese Greathouse</a></td>
    <td>135.0</td>
    <td>14.4</td>
    <td>8969.8</td>
    <td>Riwa</td>
</tr>

<tr>
    <td>446</td>
    <td><a href="/player/3413/kendall-drake/" target="_blank">Kendall Drake</a></td>
    <td>141.5</td>
    <td>14.2</td>
    <td>8969.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>447</td>
    <td><a href="/player/3405/braylon-green/" target="_blank">Braylon Green</a></td>
    <td>151.2</td>
    <td>15.6</td>
    <td>8968.4</td>
    <td>Arthur holl</td>
</tr>

<tr>
    <td>448</td>
    <td><a href="/player/480/nick-calderone/" target="_blank">nick calderone</a></td>
    <td>134.5</td>
    <td>17.6</td>
    <td>8963.7</td>
    <td>dynamic</td>
</tr>

<tr>
    <td>449</td>
    <td><a href="/player/2448/daniel-hageman/" target="_blank">Daniel Hageman</a></td>
    <td>143.0</td>
    <td>12.7</td>
    <td>8963.4</td>
    <td>Samoset</td>
</tr>

<tr>
    <td>450</td>
    <td><a href="/player/1658/shane-phillips/" target="_blank">Shane Phillips</a></td>
    <td>154.2</td>
    <td>15.0</td>
    <td>8958.6</td>
    <td>Cardozo</td>
</tr>

<tr>
    <td>451</td>
    <td><a href="/player/2714/jacob-coral/" target="_blank">Jacob Coral</a></td>
    <td>127.0</td>
    <td>16.9</td>
    <td>8958.3</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>452</td>
    <td><a href="/player/1998/caden-butterworth/" target="_blank">Caden Butterworth</a></td>
    <td>170.0</td>
    <td>12.4</td>
    <td>8957.7</td>
    <td>Fitchburg wrestling</td>
</tr>

<tr>
    <td>453</td>
    <td><a href="/player/568/logan-waller/" target="_blank">Logan Waller</a></td>
    <td>131.4</td>
    <td>16.4</td>
    <td>8955.6</td>
    <td>Elite Wrestling</td>
</tr>

<tr>
    <td>454</td>
    <td><a href="/player/2562/john-klepadlo/" target="_blank">John Klepadlo</a></td>
    <td>141.6</td>
    <td>15.3</td>
    <td>8955.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>455</td>
    <td><a href="/player/3334/quinn-bohringer/" target="_blank">Quinn Bohringer</a></td>
    <td>140.0</td>
    <td>16.7</td>
    <td>8955.3</td>
    <td>ELITE WRESTLING</td>
</tr>

<tr>
    <td>456</td>
    <td><a href="/player/2582/nicholas-elliott/" target="_blank">Nicholas Elliott</a></td>
    <td>132.0</td>
    <td>15.0</td>
    <td>8955.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>457</td>
    <td><a href="/player/645/vito-rodriguez-jr/" target="_blank">Vito Rodriguez Jr.</a></td>
    <td>129.0</td>
    <td>16.6</td>
    <td>8954.5</td>
    <td>VHW</td>
</tr>

<tr>
    <td>458</td>
    <td><a href="/player/3169/josiah-schaub/" target="_blank">Josiah Schaub</a></td>
    <td>136.2</td>
    <td>15.6</td>
    <td>8947.8</td>
    <td>ARES</td>
</tr>

<tr>
    <td>459</td>
    <td><a href="/player/1687/daniel-silvia/" target="_blank">Daniel Silvia</a></td>
    <td>160.0</td>
    <td>14.1</td>
    <td>8936.2</td>
    <td>MARLBORO</td>
</tr>

<tr>
    <td>460</td>
    <td><a href="/player/1511/sean-gabrell/" target="_blank">Sean Gabrell</a></td>
    <td>161.4</td>
    <td>15.6</td>
    <td>8935.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>461</td>
    <td><a href="/player/2999/chance-thomas/" target="_blank">Chance Thomas</a></td>
    <td>138.1</td>
    <td>17.1</td>
    <td>8935.1</td>
    <td>LakeVille Falcons</td>
</tr>

<tr>
    <td>462</td>
    <td><a href="/player/1786/julio-martinez/" target="_blank">julio martinez</a></td>
    <td>146.4</td>
    <td>16.1</td>
    <td>8933.4</td>
    <td>brentwood</td>
</tr>

<tr>
    <td>463</td>
    <td><a href="/player/2560/johnathan-wornian/" target="_blank">johnathan wornian</a></td>
    <td>143.0</td>
    <td>14.4</td>
    <td>8933.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>464</td>
    <td><a href="/player/1486/danny-poggi/" target="_blank">Danny Poggi</a></td>
    <td>128.0</td>
    <td>16.9</td>
    <td>8927.5</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>465</td>
    <td><a href="/player/2467/joseph-gervasio/" target="_blank">Joseph Gervasio</a></td>
    <td>136.0</td>
    <td>16.5</td>
    <td>8925.2</td>
    <td>Whitman</td>
</tr>

<tr>
    <td>466</td>
    <td><a href="/player/611/jacob-laroche/" target="_blank">Jacob Laroche</a></td>
    <td>156.2</td>
    <td>15.5</td>
    <td>8918.2</td>
    <td>William Floyd</td>
</tr>

<tr>
    <td>467</td>
    <td><a href="/player/1619/ayham-alardah/" target="_blank">Ayham Alardah</a></td>
    <td>147.2</td>
    <td>15.7</td>
    <td>8911.2</td>
    <td>North Rockland</td>
</tr>

<tr>
    <td>468</td>
    <td><a href="/player/1442/nick-mazza/" target="_blank">Nick Mazza</a></td>
    <td>150.8</td>
    <td>16.8</td>
    <td>8910.8</td>
    <td>Commack</td>
</tr>

<tr>
    <td>469</td>
    <td><a href="/player/651/connor-malley/" target="_blank">Connor Malley</a></td>
    <td>130.8</td>
    <td>16.9</td>
    <td>8906.6</td>
    <td>smithtown east</td>
</tr>

<tr>
    <td>470</td>
    <td><a href="/player/575/bernardo-colmenero/" target="_blank">Bernardo Colmenero</a></td>
    <td>152.0</td>
    <td>16.6</td>
    <td>8905.5</td>
    <td>New Brunswick</td>
</tr>

<tr>
    <td>471</td>
    <td><a href="/player/2492/phillip-damico/" target="_blank">Phillip D’Amico</a></td>
    <td>125.0</td>
    <td>16.8</td>
    <td>8904.9</td>
    <td>North shore high</td>
</tr>

<tr>
    <td>472</td>
    <td><a href="/player/1269/salvatore-brucculeri/" target="_blank">salvatore brucculeri</a></td>
    <td>134.8</td>
    <td>16.3</td>
    <td>8904.6</td>
    <td>smithtown east</td>
</tr>

<tr>
    <td>473</td>
    <td><a href="/player/804/michael-kish/" target="_blank">Michael Kish</a></td>
    <td>143.6</td>
    <td>16.2</td>
    <td>8903.6</td>
    <td>Sachem North</td>
</tr>

<tr>
    <td>474</td>
    <td><a href="/player/1587/edgar-feliciano-jr/" target="_blank">Edgar Feliciano Jr.</a></td>
    <td>132.4</td>
    <td>17.1</td>
    <td>8900.0</td>
    <td>GSR</td>
</tr>

<tr>
    <td>475</td>
    <td><a href="/player/2496/michael-ricciuto/" target="_blank">Michael Ricciuto</a></td>
    <td>149.0</td>
    <td>14.8</td>
    <td>8899.6</td>
    <td>Syosset Varsity Wrestling</td>
</tr>

<tr>
    <td>476</td>
    <td><a href="/player/3057/peyton-lee/" target="_blank">Peyton Lee</a></td>
    <td>128.0</td>
    <td>14.1</td>
    <td>8898.3</td>
    <td>Fox Valley Elite Wrestling</td>
</tr>

<tr>
    <td>477</td>
    <td><a href="/player/1351/anthony-afanador/" target="_blank">Anthony Afanador</a></td>
    <td>133.4</td>
    <td>15.9</td>
    <td>8893.1</td>
    <td>smithtown</td>
</tr>

<tr>
    <td>478</td>
    <td><a href="/player/2548/jordan-osbourne/" target="_blank">Jordan Osbourne</a></td>
    <td>155.0</td>
    <td>13.6</td>
    <td>8893.0</td>
    <td>Ardsley</td>
</tr>

<tr>
    <td>479</td>
    <td><a href="/player/2858/dylan-granger/" target="_blank">Dylan Granger</a></td>
    <td>133.1</td>
    <td>13.8</td>
    <td>8892.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>480</td>
    <td><a href="/player/2060/liam-sweeney/" target="_blank">Liam Sweeney</a></td>
    <td>157.2</td>
    <td>11.5</td>
    <td>8891.7</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>481</td>
    <td><a href="/player/2431/kyle-montreuil/" target="_blank">Kyle Montreuil</a></td>
    <td>151.6</td>
    <td>16.1</td>
    <td>8884.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>482</td>
    <td><a href="/player/3034/lucas-carr/" target="_blank">Lucas Carr</a></td>
    <td>144.7</td>
    <td>13.8</td>
    <td>8880.5</td>
    <td>Linden</td>
</tr>

<tr>
    <td>483</td>
    <td><a href="/player/1722/nicholas-scarandino/" target="_blank">Nicholas Scarandino</a></td>
    <td>142.6</td>
    <td>15.4</td>
    <td>8877.7</td>
    <td>Lindenhurst</td>
</tr>

<tr>
    <td>484</td>
    <td><a href="/player/708/stephen-crisci/" target="_blank">Stephen Crisci</a></td>
    <td>139.6</td>
    <td>16.5</td>
    <td>8876.5</td>
    <td>Dynamic Wrestling</td>
</tr>

<tr>
    <td>485</td>
    <td><a href="/player/646/ryan-eckerle/" target="_blank">Ryan Eckerle</a></td>
    <td>123.8</td>
    <td>15.6</td>
    <td>8874.4</td>
    <td>dynamic</td>
</tr>

<tr>
    <td>486</td>
    <td><a href="/player/1493/anthony-harris/" target="_blank">Anthony Harris</a></td>
    <td>119.0</td>
    <td>13.1</td>
    <td>8870.4</td>
    <td>Salk/MacArthur</td>
</tr>

<tr>
    <td>487</td>
    <td><a href="/player/2948/austin-noe/" target="_blank">Austin Noe</a></td>
    <td>120.4</td>
    <td>14.7</td>
    <td>8870.4</td>
    <td>Red Hawk</td>
</tr>

<tr>
    <td>488</td>
    <td><a href="/player/3143/jake-rosenthal/" target="_blank">Jake Rosenthal</a></td>
    <td>135.0</td>
    <td>16.3</td>
    <td>8869.8</td>
    <td>TR North</td>
</tr>

<tr>
    <td>489</td>
    <td><a href="/player/577/nikita-khremli/" target="_blank">Nikita Khremli</a></td>
    <td>141.0</td>
    <td>17.3</td>
    <td>8865.5</td>
    <td>New Utrecht</td>
</tr>

<tr>
    <td>490</td>
    <td><a href="/player/2884/ryan-ross/" target="_blank">Ryan Ross</a></td>
    <td>128.3</td>
    <td>14.1</td>
    <td>8865.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>491</td>
    <td><a href="/player/1948/hunter-johnson/" target="_blank">Hunter Johnson</a></td>
    <td>127.2</td>
    <td>13.6</td>
    <td>8864.3</td>
    <td>Doughboy</td>
</tr>

<tr>
    <td>492</td>
    <td><a href="/player/1562/xavian-natal/" target="_blank">Xavian Natal</a></td>
    <td>128.8</td>
    <td>15.6</td>
    <td>8864.0</td>
    <td>Doughboy</td>
</tr>

<tr>
    <td>493</td>
    <td><a href="/player/1275/jack-devoe/" target="_blank">Jack DeVoe</a></td>
    <td>129.6</td>
    <td>15.1</td>
    <td>8861.0</td>
    <td>Babylon</td>
</tr>

<tr>
    <td>494</td>
    <td><a href="/player/2637/bryson-gomes/" target="_blank">Bryson Gomes</a></td>
    <td>132.0</td>
    <td>15.7</td>
    <td>8855.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>495</td>
    <td><a href="/player/3278/emmitt-wilton/" target="_blank">Emmitt Wilton</a></td>
    <td>132.0</td>
    <td>17.5</td>
    <td>8855.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>496</td>
    <td><a href="/player/1498/joe-apuzzo/" target="_blank">Joe Apuzzo</a></td>
    <td>140.4</td>
    <td>17.1</td>
    <td>8848.4</td>
    <td>MacArthur</td>
</tr>

<tr>
    <td>497</td>
    <td><a href="/player/2943/ethan-randis/" target="_blank">Ethan Randis</a></td>
    <td>128.0</td>
    <td>14.3</td>
    <td>8848.3</td>
    <td>Chenango Valley Varsity Wrestling</td>
</tr>

<tr>
    <td>498</td>
    <td><a href="/player/3098/kalel-williams/" target="_blank">Kalel Williams</a></td>
    <td>157.9</td>
    <td>11.2</td>
    <td>8844.3</td>
    <td>Western MatCats</td>
</tr>

<tr>
    <td>499</td>
    <td><a href="/player/1633/karriem-hoe/" target="_blank">Karriem Hoe</a></td>
    <td>139.0</td>
    <td>16.7</td>
    <td>8843.9</td>
    <td>Ascension</td>
</tr>

<tr>
    <td>500</td>
    <td><a href="/player/2627/george-chandler/" target="_blank">George Chandler</a></td>
    <td>160.0</td>
    <td>15.8</td>
    <td>8836.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>501</td>
    <td><a href="/player/1281/louis-paradiso/" target="_blank">Louis Paradiso</a></td>
    <td>145.0</td>
    <td>15.5</td>
    <td>8834.2</td>
    <td>Hanover Park</td>
</tr>

<tr>
    <td>502</td>
    <td><a href="/player/2671/jaydon-casey/" target="_blank">Jaydon Casey</a></td>
    <td>127.6</td>
    <td>13.9</td>
    <td>8832.4</td>
    <td>Team casey</td>
</tr>

<tr>
    <td>503</td>
    <td><a href="/player/797/ashton-sylvia/" target="_blank">ashton sylvia</a></td>
    <td>123.0</td>
    <td>15.6</td>
    <td>8828.4</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>504</td>
    <td><a href="/player/1304/michael-lil-mike-hernandez/" target="_blank">Michael "lil Mike" Hernandez</a></td>
    <td>124.8</td>
    <td>16.1</td>
    <td>8825.4</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>505</td>
    <td><a href="/player/2441/wyatt-gentzel/" target="_blank">wyatt gentzel</a></td>
    <td>117.8</td>
    <td>16.3</td>
    <td>8824.8</td>
    <td>dynamic/bellport</td>
</tr>

<tr>
    <td>506</td>
    <td><a href="/player/1815/adam-zarola/" target="_blank">Adam Zarola</a></td>
    <td>135.6</td>
    <td>15.8</td>
    <td>8820.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>507</td>
    <td><a href="/player/2454/anthony-avitabile/" target="_blank">Anthony Avitabile</a></td>
    <td>134.0</td>
    <td>14.0</td>
    <td>8820.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>508</td>
    <td><a href="/player/626/luke-dangelo/" target="_blank">Luke D'Angelo</a></td>
    <td>123.6</td>
    <td>17.1</td>
    <td>8819.8</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>509</td>
    <td><a href="/player/2716/nick-demarco/" target="_blank">Nick Demarco</a></td>
    <td>126.0</td>
    <td>16.9</td>
    <td>8818.0</td>
    <td></td>
</tr>

<tr>
    <td>510</td>
    <td><a href="/player/643/adam-barker/" target="_blank">adam barker</a></td>
    <td>131.0</td>
    <td>17.7</td>
    <td>8817.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>511</td>
    <td><a href="/player/2973/michael-seeger/" target="_blank">Michael Seeger</a></td>
    <td>135.3</td>
    <td>13.1</td>
    <td>8812.3</td>
    <td>Woodmore</td>
</tr>

<tr>
    <td>512</td>
    <td><a href="/player/3401/shade-suess/" target="_blank">Shade Suess</a></td>
    <td>132.4</td>
    <td>14.8</td>
    <td>8808.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>513</td>
    <td><a href="/player/3370/tristin-colon/" target="_blank">Tristin Colon</a></td>
    <td>153.0</td>
    <td>16.4</td>
    <td>8808.1</td>
    <td>Dynamic!!!</td>
</tr>

<tr>
    <td>514</td>
    <td><a href="/player/2574/ryan-lella/" target="_blank">Ryan Lella</a></td>
    <td>140.0</td>
    <td>15.2</td>
    <td>8805.6</td>
    <td>Pro ex</td>
</tr>

<tr>
    <td>515</td>
    <td><a href="/player/3397/isaac-fielder-pierce/" target="_blank">Isaac Fielder-Pierce</a></td>
    <td>130.5</td>
    <td>16.3</td>
    <td>8803.6</td>
    <td>Rev</td>
</tr>

<tr>
    <td>516</td>
    <td><a href="/player/1636/terry-brannigan/" target="_blank">terry brannigan</a></td>
    <td>124.4</td>
    <td>16.1</td>
    <td>8802.5</td>
    <td>westport</td>
</tr>

<tr>
    <td>517</td>
    <td><a href="/player/2182/george-varghese/" target="_blank">George Varghese</a></td>
    <td>130.2</td>
    <td>13.7</td>
    <td>8801.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>518</td>
    <td><a href="/player/3409/kole-katschor/" target="_blank">Kole Katschor</a></td>
    <td>127.4</td>
    <td>14.5</td>
    <td>8801.4</td>
    <td>Dundee</td>
</tr>

<tr>
    <td>519</td>
    <td><a href="/player/2749/selina-moore/" target="_blank">Selina Moore</a></td>
    <td>137.5</td>
    <td>14.8</td>
    <td>8799.7</td>
    <td>Gorilla grapplers</td>
</tr>

<tr>
    <td>520</td>
    <td><a href="/player/1441/gabriel-genna/" target="_blank">Gabriel Genna</a></td>
    <td>151.2</td>
    <td>14.0</td>
    <td>8798.5</td>
    <td>Salk</td>
</tr>

<tr>
    <td>521</td>
    <td><a href="/player/2903/tanner-kirkpatrick/" target="_blank">Tanner Kirkpatrick</a></td>
    <td>135.0</td>
    <td>18.0</td>
    <td>8795.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>522</td>
    <td><a href="/player/1651/aaron-morochoe/" target="_blank">aaron morochoe</a></td>
    <td>123.0</td>
    <td>15.7</td>
    <td>8795.1</td>
    <td>Ascension</td>
</tr>

<tr>
    <td>523</td>
    <td><a href="/player/671/oleg-daniloff/" target="_blank">oleg daniloff</a></td>
    <td>158.2</td>
    <td>12.5</td>
    <td>8793.3</td>
    <td>elite academy</td>
</tr>

<tr>
    <td>524</td>
    <td><a href="/player/1408/gabe-giampietro/" target="_blank">Gabe Giampietro</a></td>
    <td>106.8</td>
    <td>15.6</td>
    <td>8790.5</td>
    <td>Smyrna</td>
</tr>

<tr>
    <td>525</td>
    <td><a href="/player/530/drew-greco/" target="_blank">Drew Greco</a></td>
    <td>130.6</td>
    <td>16.3</td>
    <td>8788.1</td>
    <td>Vision Wrestling</td>
</tr>

<tr>
    <td>526</td>
    <td><a href="/player/1752/lucas-demeo/" target="_blank">Lucas DeMeo</a></td>
    <td>138.8</td>
    <td>17.0</td>
    <td>8788.1</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>527</td>
    <td><a href="/player/1324/dominic-sandt/" target="_blank">Dominic Sandt</a></td>
    <td>138.0</td>
    <td>13.8</td>
    <td>8781.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>528</td>
    <td><a href="/player/1483/christian-menichino/" target="_blank">Christian Menichino</a></td>
    <td>138.0</td>
    <td>14.2</td>
    <td>8781.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>529</td>
    <td><a href="/player/1522/joseph-mattia/" target="_blank">Joseph Mattia</a></td>
    <td>138.0</td>
    <td>16.5</td>
    <td>8781.9</td>
    <td>law</td>
</tr>

<tr>
    <td>530</td>
    <td><a href="/player/2774/nate-shippey/" target="_blank">Nate Shippey</a></td>
    <td>138.0</td>
    <td>16.2</td>
    <td>8781.9</td>
    <td>Internoro</td>
</tr>

<tr>
    <td>531</td>
    <td><a href="/player/2462/maynor-rodriguez/" target="_blank">Maynor Rodriguez</a></td>
    <td>134.0</td>
    <td>15.6</td>
    <td>8781.0</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>532</td>
    <td><a href="/player/2328/anthony-muscolino/" target="_blank">Anthony Muscolino</a></td>
    <td>145.0</td>
    <td>13.0</td>
    <td>8778.3</td>
    <td>Yorktown</td>
</tr>

<tr>
    <td>533</td>
    <td><a href="/player/2513/vincent-zaffarese/" target="_blank">Vincent Zaffarese</a></td>
    <td>125.0</td>
    <td>15.6</td>
    <td>8777.4</td>
    <td>Smithtown West</td>
</tr>

<tr>
    <td>534</td>
    <td><a href="/player/2563/tommy-vlahopoulos/" target="_blank">Tommy Vlahopoulos</a></td>
    <td>130.0</td>
    <td>17.2</td>
    <td>8777.4</td>
    <td>Roslyn High School</td>
</tr>

<tr>
    <td>535</td>
    <td><a href="/player/707/wenchard-pierre/" target="_blank">Wenchard Pierre</a></td>
    <td>134.0</td>
    <td>16.8</td>
    <td>8773.1</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>536</td>
    <td><a href="/player/3070/sal-biscotto/" target="_blank">Sal Biscotto</a></td>
    <td>137.6</td>
    <td>14.7</td>
    <td>8771.6</td>
    <td>PIttston Area</td>
</tr>

<tr>
    <td>537</td>
    <td><a href="/player/1005/daniel-elling/" target="_blank">daniel elling</a></td>
    <td>136.2</td>
    <td>12.8</td>
    <td>8769.8</td>
    <td>blue wave</td>
</tr>

<tr>
    <td>538</td>
    <td><a href="/player/2147/robert-perez/" target="_blank">Robert Perez</a></td>
    <td>122.8</td>
    <td>13.5</td>
    <td>8768.0</td>
    <td>Boys and girls club nashua</td>
</tr>

<tr>
    <td>539</td>
    <td><a href="/player/1622/ronnie-christolin/" target="_blank">Ronnie Christolin</a></td>
    <td>117.0</td>
    <td>14.2</td>
    <td>8754.9</td>
    <td>Madbulls</td>
</tr>

<tr>
    <td>540</td>
    <td><a href="/player/2830/luca-stefanelli/" target="_blank">Luca Stefanelli</a></td>
    <td>132.4</td>
    <td>15.1</td>
    <td>8748.2</td>
    <td></td>
</tr>

<tr>
    <td>541</td>
    <td><a href="/player/990/max-casiano/" target="_blank">Max Casiano</a></td>
    <td>137.0</td>
    <td>13.8</td>
    <td>8744.8</td>
    <td>Blue wave</td>
</tr>

<tr>
    <td>542</td>
    <td><a href="/player/1402/aidan-vargas-colon/" target="_blank">Aidan Vargas-Colon</a></td>
    <td>149.8</td>
    <td>14.4</td>
    <td>8740.8</td>
    <td>MacArthur</td>
</tr>

<tr>
    <td>543</td>
    <td><a href="/player/3220/dylan-winters/" target="_blank">Dylan Winters</a></td>
    <td>124.0</td>
    <td>15.8</td>
    <td>8736.4</td>
    <td>Monroe/ Woodbury</td>
</tr>

<tr>
    <td>544</td>
    <td><a href="/player/2312/george-trimigliozzi/" target="_blank">George Trimigliozzi</a></td>
    <td>145.0</td>
    <td>14.4</td>
    <td>8734.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>545</td>
    <td><a href="/player/697/amin-khwaja/" target="_blank">Amin Khwaja</a></td>
    <td>149.6</td>
    <td>14.4</td>
    <td>8732.5</td>
    <td>quiet storm</td>
</tr>

<tr>
    <td>546</td>
    <td><a href="/player/3305/liam-smith/" target="_blank">Liam Smith</a></td>
    <td>134.0</td>
    <td>16.2</td>
    <td>8731.9</td>
    <td>Yale Street</td>
</tr>

<tr>
    <td>547</td>
    <td><a href="/player/1553/josiah-gomez/" target="_blank">Josiah Gomez</a></td>
    <td>132.6</td>
    <td>14.0</td>
    <td>8731.1</td>
    <td>Fitchburg</td>
</tr>

<tr>
    <td>548</td>
    <td><a href="/player/801/joseph-mattei/" target="_blank">Joseph Mattei</a></td>
    <td>123.6</td>
    <td>13.4</td>
    <td>8730.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>549</td>
    <td><a href="/player/1673/hamza-maiwand/" target="_blank">Hamza Maiwand</a></td>
    <td>133.8</td>
    <td>16.6</td>
    <td>8729.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>550</td>
    <td><a href="/player/3352/jaxon-penrod/" target="_blank">Jaxon Penrod</a></td>
    <td>137.8</td>
    <td>14.3</td>
    <td>8725.5</td>
    <td>MI Revolution</td>
</tr>

<tr>
    <td>551</td>
    <td><a href="/player/2442/troy-gentzel/" target="_blank">troy gentzel</a></td>
    <td>124.8</td>
    <td>16.3</td>
    <td>8702.9</td>
    <td>dynamic/bellport</td>
</tr>

<tr>
    <td>552</td>
    <td><a href="/player/3041/thaddeus-swanigan/" target="_blank">Thaddeus Swanigan</a></td>
    <td>132.9</td>
    <td>16.0</td>
    <td>8700.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>553</td>
    <td><a href="/player/1265/blaise-coppola/" target="_blank">Blaise Coppola</a></td>
    <td>139.8</td>
    <td>14.6</td>
    <td>8700.0</td>
    <td>comsewogue</td>
</tr>

<tr>
    <td>554</td>
    <td><a href="/player/1599/jacob-pressler/" target="_blank">Jacob Pressler</a></td>
    <td>115.6</td>
    <td>17.6</td>
    <td>8692.8</td>
    <td>Fairfield Ludlow HS</td>
</tr>

<tr>
    <td>555</td>
    <td><a href="/player/2824/jackson-maby/" target="_blank">Jackson Maby</a></td>
    <td>115.5</td>
    <td>14.1</td>
    <td>8692.6</td>
    <td>Empire Elite / Iron Horse</td>
</tr>

<tr>
    <td>556</td>
    <td><a href="/player/859/gavin-amato/" target="_blank">Gavin Amato</a></td>
    <td>152.0</td>
    <td>12.9</td>
    <td>8692.2</td>
    <td>Lindenhurst Wrestling Club</td>
</tr>

<tr>
    <td>557</td>
    <td><a href="/player/553/luke-colannino/" target="_blank">Luke Colannino</a></td>
    <td>136.0</td>
    <td>16.9</td>
    <td>8690.5</td>
    <td>mendham</td>
</tr>

<tr>
    <td>558</td>
    <td><a href="/player/2539/eli-rubinstein/" target="_blank">Eli Rubinstein</a></td>
    <td>136.8</td>
    <td>16.5</td>
    <td>8690.4</td>
    <td>Elite Wrestling Academy</td>
</tr>

<tr>
    <td>559</td>
    <td><a href="/player/3339/owen-miller/" target="_blank">Owen Miller</a></td>
    <td>125.0</td>
    <td>14.3</td>
    <td>8688.1</td>
    <td>Grand Blanc</td>
</tr>

<tr>
    <td>560</td>
    <td><a href="/player/1293/samuel-robertson/" target="_blank">Samuel Robertson</a></td>
    <td>138.0</td>
    <td>15.3</td>
    <td>8683.6</td>
    <td>Port Jeff</td>
</tr>

<tr>
    <td>561</td>
    <td><a href="/player/2453/william-regan/" target="_blank">William Regan</a></td>
    <td>143.0</td>
    <td>14.3</td>
    <td>8681.5</td>
    <td>Valley stream central high school</td>
</tr>

<tr>
    <td>562</td>
    <td><a href="/player/3435/ryan-mosher/" target="_blank">Ryan Mosher</a></td>
    <td>119.1</td>
    <td>15.8</td>
    <td>8678.8</td>
    <td>Holt</td>
</tr>

<tr>
    <td>563</td>
    <td><a href="/player/557/joseph-oresto/" target="_blank">Joseph Oresto</a></td>
    <td>147.4</td>
    <td>16.0</td>
    <td>8675.2</td>
    <td>Monroe</td>
</tr>

<tr>
    <td>564</td>
    <td><a href="/player/1435/vinny-milazzo/" target="_blank">Vinny Milazzo</a></td>
    <td>117.8</td>
    <td>16.5</td>
    <td>8671.9</td>
    <td>Commack</td>
</tr>

<tr>
    <td>565</td>
    <td><a href="/player/3153/matteo-carabetta/" target="_blank">Matteo Carabetta</a></td>
    <td>135.0</td>
    <td>14.7</td>
    <td>8669.8</td>
    <td>Pittston Area</td>
</tr>

<tr>
    <td>566</td>
    <td><a href="/player/1321/clay-strausbaugh/" target="_blank">Clay Strausbaugh</a></td>
    <td>120.0</td>
    <td>15.6</td>
    <td>8669.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>567</td>
    <td><a href="/player/2910/sebastian-martinez/" target="_blank">Sebastian Martinez</a></td>
    <td>120.0</td>
    <td>13.4</td>
    <td>8669.2</td>
    <td>South Haven WC</td>
</tr>

<tr>
    <td>568</td>
    <td><a href="/player/769/anthony-obando/" target="_blank">Anthony Obando</a></td>
    <td>133.8</td>
    <td>15.1</td>
    <td>8661.1</td>
    <td>brentwood</td>
</tr>

<tr>
    <td>569</td>
    <td><a href="/player/1467/max-addiego/" target="_blank">Max Addiego</a></td>
    <td>145.4</td>
    <td>13.7</td>
    <td>8660.4</td>
    <td>Seaford</td>
</tr>

<tr>
    <td>570</td>
    <td><a href="/player/1716/jacob-brockey/" target="_blank">Jacob Brockey</a></td>
    <td>127.0</td>
    <td>14.8</td>
    <td>8657.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>571</td>
    <td><a href="/player/3174/joseph-dolci/" target="_blank">Joseph Dolci</a></td>
    <td>132.0</td>
    <td>15.0</td>
    <td>8655.2</td>
    <td>Toms River North</td>
</tr>

<tr>
    <td>572</td>
    <td><a href="/player/754/cj-szotak/" target="_blank">cj szotak</a></td>
    <td>123.8</td>
    <td>17.8</td>
    <td>8655.1</td>
    <td>madison</td>
</tr>

<tr>
    <td>573</td>
    <td><a href="/player/559/zacjary-vasille/" target="_blank">Zacjary Vasille</a></td>
    <td>133.8</td>
    <td>15.7</td>
    <td>8654.0</td>
    <td>Marlboro</td>
</tr>

<tr>
    <td>574</td>
    <td><a href="/player/2877/kenyon-davidson/" target="_blank">Kenyon Davidson</a></td>
    <td>160.8</td>
    <td>10.9</td>
    <td>8648.4</td>
    <td>Anarchy</td>
</tr>

<tr>
    <td>575</td>
    <td><a href="/player/2121/nathaniel-duquette/" target="_blank">Nathaniel Duquette</a></td>
    <td>142.8</td>
    <td>11.2</td>
    <td>8642.7</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>576</td>
    <td><a href="/player/2937/zachary-taylor/" target="_blank">Zachary Taylor</a></td>
    <td>109.6</td>
    <td>13.7</td>
    <td>8635.8</td>
    <td>Clique</td>
</tr>

<tr>
    <td>577</td>
    <td><a href="/player/637/joe-nuzzi/" target="_blank">Joe Nuzzi</a></td>
    <td>131.2</td>
    <td>16.4</td>
    <td>8634.8</td>
    <td>Sachem North</td>
</tr>

<tr>
    <td>578</td>
    <td><a href="/player/2982/liam-wiitanen/" target="_blank">Liam Wiitanen</a></td>
    <td>126.3</td>
    <td>15.3</td>
    <td>8634.4</td>
    <td>Michigan Revolution</td>
</tr>

<tr>
    <td>579</td>
    <td><a href="/player/556/tyler-boyum/" target="_blank">Tyler Boyum</a></td>
    <td>131.4</td>
    <td>15.2</td>
    <td>8629.0</td>
    <td>monroe</td>
</tr>

<tr>
    <td>580</td>
    <td><a href="/player/803/ryan-mezzanotte/" target="_blank">ryan mezzanotte</a></td>
    <td>136.0</td>
    <td>17.0</td>
    <td>8628.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>581</td>
    <td><a href="/player/3387/gideon-kinne/" target="_blank">Gideon Kinne</a></td>
    <td>139.7</td>
    <td>14.3</td>
    <td>8626.1</td>
    <td>MI Revolution</td>
</tr>

<tr>
    <td>582</td>
    <td><a href="/player/2429/tom-corona-fang/" target="_blank">Tom “Corona” Fang</a></td>
    <td>156.8</td>
    <td>15.8</td>
    <td>8622.5</td>
    <td>Commack</td>
</tr>

<tr>
    <td>583</td>
    <td><a href="/player/2542/nachman-salman/" target="_blank">Nachman Salman</a></td>
    <td>138.0</td>
    <td>16.7</td>
    <td>8621.7</td>
    <td>Great neck north high</td>
</tr>

<tr>
    <td>584</td>
    <td><a href="/player/1723/louis-curatola/" target="_blank">Louis Curatola</a></td>
    <td>142.8</td>
    <td>15.9</td>
    <td>8620.8</td>
    <td>Lindenhurst</td>
</tr>

<tr>
    <td>585</td>
    <td><a href="/player/558/cristian-rial/" target="_blank">Cristian Rial</a></td>
    <td>129.8</td>
    <td>17.6</td>
    <td>8619.9</td>
    <td>marlboro</td>
</tr>

<tr>
    <td>586</td>
    <td><a href="/player/548/lucas-steenstra/" target="_blank">Lucas Steenstra</a></td>
    <td>138.6</td>
    <td>15.4</td>
    <td>8616.7</td>
    <td>scorpions</td>
</tr>

<tr>
    <td>587</td>
    <td><a href="/player/1646/luis-zambrano/" target="_blank">luis zambrano</a></td>
    <td>108.6</td>
    <td>16.8</td>
    <td>8616.2</td>
    <td>Fairfield Ludlowe falcons</td>
</tr>

<tr>
    <td>588</td>
    <td><a href="/player/615/vincent-diconza/" target="_blank">vincent diconza</a></td>
    <td>125.6</td>
    <td>16.8</td>
    <td>8611.8</td>
    <td>smithtown east</td>
</tr>

<tr>
    <td>589</td>
    <td><a href="/player/1465/jordan-demarco/" target="_blank">Jordan DeMarco</a></td>
    <td>150.0</td>
    <td>12.9</td>
    <td>8607.1</td>
    <td>Salk</td>
</tr>

<tr>
    <td>590</td>
    <td><a href="/player/1445/junito-palomino/" target="_blank">Junito Palomino</a></td>
    <td>120.0</td>
    <td>14.6</td>
    <td>8604.5</td>
    <td>Salk</td>
</tr>

<tr>
    <td>591</td>
    <td><a href="/player/2834/dominic-innamorati/" target="_blank">Dominic Innamorati</a></td>
    <td>123.9</td>
    <td>13.9</td>
    <td>8599.8</td>
    <td>Pittston area</td>
</tr>

<tr>
    <td>592</td>
    <td><a href="/player/654/nick-vetrano/" target="_blank">Nick Vetrano</a></td>
    <td>138.0</td>
    <td>15.4</td>
    <td>8598.4</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>593</td>
    <td><a href="/player/1762/nolan-ford/" target="_blank">Nolan Ford</a></td>
    <td>130.0</td>
    <td>15.1</td>
    <td>8596.0</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>594</td>
    <td><a href="/player/1531/ray-decamillo-jr/" target="_blank">Ray DeCamillo Jr</a></td>
    <td>124.8</td>
    <td>13.7</td>
    <td>8595.4</td>
    <td>Mad Bulls</td>
</tr>

<tr>
    <td>595</td>
    <td><a href="/player/2256/ryan-terlaga/" target="_blank">ryan terlaga</a></td>
    <td>144.0</td>
    <td>13.0</td>
    <td>8595.3</td>
    <td>Kings park</td>
</tr>

<tr>
    <td>596</td>
    <td><a href="/player/1180/kanyah-williams/" target="_blank">Kanyah Williams</a></td>
    <td>133.0</td>
    <td>13.8</td>
    <td>8593.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>597</td>
    <td><a href="/player/1674/andy-wu/" target="_blank">Andy Wu</a></td>
    <td>140.4</td>
    <td>16.8</td>
    <td>8593.2</td>
    <td>Benjamin Nelson Cardozo</td>
</tr>

<tr>
    <td>598</td>
    <td><a href="/player/2891/cody-richards/" target="_blank">Cody Richards</a></td>
    <td>113.4</td>
    <td>16.5</td>
    <td>8590.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>599</td>
    <td><a href="/player/630/kenny-leverich/" target="_blank">Kenny Leverich</a></td>
    <td>121.4</td>
    <td>15.0</td>
    <td>8588.6</td>
    <td>Smithtown West</td>
</tr>

<tr>
    <td>600</td>
    <td><a href="/player/2841/gage-gwiazdowski/" target="_blank">Gage Gwiazdowski</a></td>
    <td>137.2</td>
    <td>17.1</td>
    <td>8586.3</td>
    <td>Downingtown west high school</td>
</tr>

<tr>
    <td>601</td>
    <td><a href="/player/1653/sahib-buttar/" target="_blank">Sahib Buttar</a></td>
    <td>145.4</td>
    <td>15.2</td>
    <td>8585.8</td>
    <td>Farmingdale</td>
</tr>

<tr>
    <td>602</td>
    <td><a href="/player/877/zachary-engler/" target="_blank">Zachary Engler</a></td>
    <td>156.8</td>
    <td>10.1</td>
    <td>8581.2</td>
    <td>Kings Park</td>
</tr>

<tr>
    <td>603</td>
    <td><a href="/player/3085/conner-canter/" target="_blank">Conner Canter</a></td>
    <td>130.0</td>
    <td>17.1</td>
    <td>8577.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>604</td>
    <td><a href="/player/1941/ronald-boisvert/" target="_blank">Ronald Boisvert</a></td>
    <td>142.2</td>
    <td>11.6</td>
    <td>8575.1</td>
    <td>Timberwolves</td>
</tr>

<tr>
    <td>605</td>
    <td><a href="/player/1709/adam-livingston/" target="_blank">Adam Livingston</a></td>
    <td>155.0</td>
    <td>17.7</td>
    <td>8574.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>606</td>
    <td><a href="/player/3047/elijah-elser/" target="_blank">Elijah Elser</a></td>
    <td>119.9</td>
    <td>12.7</td>
    <td>8570.9</td>
    <td>D1</td>
</tr>

<tr>
    <td>607</td>
    <td><a href="/player/3105/jason-athey/" target="_blank">Jason Athey</a></td>
    <td>120.0</td>
    <td>16.3</td>
    <td>8569.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>608</td>
    <td><a href="/player/1398/shane-holefelder/" target="_blank">Shane Holefelder</a></td>
    <td>128.8</td>
    <td>15.5</td>
    <td>8567.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>609</td>
    <td><a href="/player/1591/colton-pelletier/" target="_blank">Colton Pelletier</a></td>
    <td>121.0</td>
    <td>17.5</td>
    <td>8557.9</td>
    <td>Ascension</td>
</tr>

<tr>
    <td>610</td>
    <td><a href="/player/2143/nicholas-samos/" target="_blank">Nicholas Samos</a></td>
    <td>129.4</td>
    <td>13.2</td>
    <td>8557.8</td>
    <td>Boys and Girls Club of Greater Nashua</td>
</tr>

<tr>
    <td>611</td>
    <td><a href="/player/1500/mason-barany/" target="_blank">Mason Barany</a></td>
    <td>128.4</td>
    <td>15.7</td>
    <td>8557.0</td>
    <td>Pro-ex / West islip</td>
</tr>

<tr>
    <td>612</td>
    <td><a href="/player/1255/jack-schlef/" target="_blank">Jack Schlef</a></td>
    <td>132.0</td>
    <td>16.7</td>
    <td>8555.2</td>
    <td>Plainedge</td>
</tr>

<tr>
    <td>613</td>
    <td><a href="/player/2490/jack-schuster/" target="_blank">Jack Schuster</a></td>
    <td>139.0</td>
    <td>15.8</td>
    <td>8554.7</td>
    <td>Syosset</td>
</tr>

<tr>
    <td>614</td>
    <td><a href="/player/535/brandon-murray/" target="_blank">Brandon Murray</a></td>
    <td>124.2</td>
    <td>19.2</td>
    <td>8553.6</td>
    <td>Triumph</td>
</tr>

<tr>
    <td>615</td>
    <td><a href="/player/1306/arian-parrondo/" target="_blank">Arian Parrondo</a></td>
    <td>118.4</td>
    <td>16.8</td>
    <td>8553.4</td>
    <td>Bay Shore</td>
</tr>

<tr>
    <td>616</td>
    <td><a href="/player/928/jamir-andrieux/" target="_blank">Jamir Andrieux</a></td>
    <td>126.6</td>
    <td>13.0</td>
    <td>8549.6</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>617</td>
    <td><a href="/player/2106/camden-arbogast/" target="_blank">Camden Arbogast</a></td>
    <td>115.4</td>
    <td>12.9</td>
    <td>8548.7</td>
    <td>Smittys</td>
</tr>

<tr>
    <td>618</td>
    <td><a href="/player/2950/dominic-cook/" target="_blank">Dominic Cook</a></td>
    <td>145.7</td>
    <td>11.3</td>
    <td>8544.8</td>
    <td>Swanton</td>
</tr>

<tr>
    <td>619</td>
    <td><a href="/player/1487/devin-binger/" target="_blank">Devin Binger</a></td>
    <td>142.8</td>
    <td>14.6</td>
    <td>8542.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>620</td>
    <td><a href="/player/1670/jack-caravella/" target="_blank">Jack Caravella</a></td>
    <td>127.8</td>
    <td>16.0</td>
    <td>8541.8</td>
    <td>Patchogue Medford</td>
</tr>

<tr>
    <td>621</td>
    <td><a href="/player/601/sean-hauser/" target="_blank">sean hauser</a></td>
    <td>131.0</td>
    <td>19.6</td>
    <td>8539.3</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>622</td>
    <td><a href="/player/2065/tucker-theodore/" target="_blank">Tucker Theodore</a></td>
    <td>124.0</td>
    <td>14.3</td>
    <td>8536.4</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>623</td>
    <td><a href="/player/2461/heider-londono/" target="_blank">Heider Londono</a></td>
    <td>145.0</td>
    <td>15.7</td>
    <td>8534.2</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>624</td>
    <td><a href="/player/531/gaby-miller/" target="_blank">Gaby Miller</a></td>
    <td>136.6</td>
    <td>14.4</td>
    <td>8533.1</td>
    <td>elite</td>
</tr>

<tr>
    <td>625</td>
    <td><a href="/player/1583/dominic-robinson/" target="_blank">Dominic ROBINSON</a></td>
    <td>123.0</td>
    <td>16.8</td>
    <td>8528.6</td>
    <td>GSR Wrestling Academy</td>
</tr>

<tr>
    <td>626</td>
    <td><a href="/player/2934/josh-harkness/" target="_blank">Josh Harkness</a></td>
    <td>134.4</td>
    <td>16.3</td>
    <td>8526.4</td>
    <td>Tecumseh</td>
</tr>

<tr>
    <td>627</td>
    <td><a href="/player/1795/lexia-schechterly/" target="_blank">Lexia Schechterly</a></td>
    <td>109.8</td>
    <td>15.0</td>
    <td>8526.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>628</td>
    <td><a href="/player/505/jason-kwaak/" target="_blank">Jason Kwaak</a></td>
    <td>104.0</td>
    <td>13.3</td>
    <td>8524.3</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>629</td>
    <td><a href="/player/1850/john-shields/" target="_blank">John Shields</a></td>
    <td>125.0</td>
    <td>14.1</td>
    <td>8522.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>630</td>
    <td><a href="/player/1657/andre-long/" target="_blank">Andre Long</a></td>
    <td>147.4</td>
    <td>14.6</td>
    <td>8522.3</td>
    <td>Benjamin Cardozo</td>
</tr>

<tr>
    <td>631</td>
    <td><a href="/player/536/nick-moldaver/" target="_blank">Nick Moldaver</a></td>
    <td>131.4</td>
    <td>14.9</td>
    <td>8519.5</td>
    <td>elite</td>
</tr>

<tr>
    <td>632</td>
    <td><a href="/player/1839/billy-russo/" target="_blank">Billy Russo</a></td>
    <td>139.4</td>
    <td>13.5</td>
    <td>8517.8</td>
    <td>Bluewave</td>
</tr>

<tr>
    <td>633</td>
    <td><a href="/player/1225/dylan-phillips/" target="_blank">Dylan Phillips</a></td>
    <td>115.4</td>
    <td>14.2</td>
    <td>8507.2</td>
    <td>Smithtown</td>
</tr>

<tr>
    <td>634</td>
    <td><a href="/player/1763/jacob-tuzinkiewicz/" target="_blank">Jacob Tuzinkiewicz</a></td>
    <td>128.8</td>
    <td>14.5</td>
    <td>8507.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>635</td>
    <td><a href="/player/3389/mariano-lopez/" target="_blank">Mariano Lopez</a></td>
    <td>112.9</td>
    <td>16.1</td>
    <td>8506.7</td>
    <td>Sunshine</td>
</tr>

<tr>
    <td>636</td>
    <td><a href="/player/1412/abdul-ibraheem/" target="_blank">Abdul Ibraheem</a></td>
    <td>134.4</td>
    <td>16.4</td>
    <td>8506.3</td>
    <td>Prodigy wrestling / Bayonne hs</td>
</tr>

<tr>
    <td>637</td>
    <td><a href="/player/624/samuel-michnik/" target="_blank">Samuel Michnik</a></td>
    <td>128.0</td>
    <td>17.8</td>
    <td>8504.1</td>
    <td>Fight Factory NYC</td>
</tr>

<tr>
    <td>638</td>
    <td><a href="/player/3344/tyler-russ/" target="_blank">Tyler Russ</a></td>
    <td>122.0</td>
    <td>14.3</td>
    <td>8503.5</td>
    <td>Triumph</td>
</tr>

<tr>
    <td>639</td>
    <td><a href="/player/1084/anthony-friedrich/" target="_blank">Anthony Friedrich</a></td>
    <td>134.0</td>
    <td>13.8</td>
    <td>8502.1</td>
    <td>Lindenhurst Bulldogs</td>
</tr>

<tr>
    <td>640</td>
    <td><a href="/player/2985/jon-huggler/" target="_blank">Jon Huggler</a></td>
    <td>119.0</td>
    <td>14.2</td>
    <td>8501.2</td>
    <td>LakeVille Falcons</td>
</tr>

<tr>
    <td>641</td>
    <td><a href="/player/2169/lai-lani-hendricks/" target="_blank">Lai-Lani Hendricks</a></td>
    <td>138.6</td>
    <td>14.6</td>
    <td>8499.7</td>
    <td>Fitchburg Youth</td>
</tr>

<tr>
    <td>642</td>
    <td><a href="/player/2746/alahna-morris/" target="_blank">Alahna Morris</a></td>
    <td>133.4</td>
    <td>13.5</td>
    <td>8496.2</td>
    <td>MisFits</td>
</tr>

<tr>
    <td>643</td>
    <td><a href="/player/796/andrei-dzekhtsiaruk/" target="_blank">Andrei Dzekhtsiaruk</a></td>
    <td>140.0</td>
    <td>12.7</td>
    <td>8493.1</td>
    <td>willpower wresling</td>
</tr>

<tr>
    <td>644</td>
    <td><a href="/player/1437/michael-cassano/" target="_blank">Michael Cassano</a></td>
    <td>124.4</td>
    <td>14.1</td>
    <td>8492.0</td>
    <td>Salk</td>
</tr>

<tr>
    <td>645</td>
    <td><a href="/player/1196/anthony-monniello/" target="_blank">Anthony Monniello</a></td>
    <td>128.4</td>
    <td>16.5</td>
    <td>8489.7</td>
    <td>East Meadow Wrestling Club</td>
</tr>

<tr>
    <td>646</td>
    <td><a href="/player/3329/deon-pleasant/" target="_blank">Deon Pleasant</a></td>
    <td>129.0</td>
    <td>17.5</td>
    <td>8488.0</td>
    <td>CJA</td>
</tr>

<tr>
    <td>647</td>
    <td><a href="/player/2524/henson-romero/" target="_blank">Henson Romero</a></td>
    <td>138.0</td>
    <td>15.1</td>
    <td>8481.9</td>
    <td>5 Points Wrestling</td>
</tr>

<tr>
    <td>648</td>
    <td><a href="/player/3204/ayden-tatum/" target="_blank">Ayden Tatum</a></td>
    <td>127.4</td>
    <td>12.7</td>
    <td>8480.9</td>
    <td>Pontiac Huskies</td>
</tr>

<tr>
    <td>649</td>
    <td><a href="/player/1134/lucas-hayden/" target="_blank">Lucas Hayden</a></td>
    <td>130.0</td>
    <td>9.6</td>
    <td>8477.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>650</td>
    <td><a href="/player/1217/christos-sarris/" target="_blank">Christos Sarris</a></td>
    <td>130.0</td>
    <td>12.5</td>
    <td>8477.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>651</td>
    <td><a href="/player/3426/seth-zimmerman/" target="_blank">seth zimmerman</a></td>
    <td>126.7</td>
    <td>15.8</td>
    <td>8476.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>652</td>
    <td><a href="/player/636/colby-frunzi/" target="_blank">colby frunzi</a></td>
    <td>137.0</td>
    <td>16.2</td>
    <td>8476.5</td>
    <td>dynamic</td>
</tr>

<tr>
    <td>653</td>
    <td><a href="/player/641/nick-marino/" target="_blank">Nick Marino</a></td>
    <td>118.0</td>
    <td>18.6</td>
    <td>8474.0</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>654</td>
    <td><a href="/player/2636/aiden-gomes/" target="_blank">Aiden Gomes</a></td>
    <td>135.0</td>
    <td>14.3</td>
    <td>8469.8</td>
    <td>Patchogue Medford</td>
</tr>

<tr>
    <td>655</td>
    <td><a href="/player/1662/richard-yang/" target="_blank">Richard Yang</a></td>
    <td>129.6</td>
    <td>15.7</td>
    <td>8457.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>656</td>
    <td><a href="/player/584/emerson-ascencio/" target="_blank">Emerson Ascencio</a></td>
    <td>128.0</td>
    <td>16.8</td>
    <td>8455.4</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>657</td>
    <td><a href="/player/2488/mohammad-mohammad/" target="_blank">Mohammad Mohammad</a></td>
    <td>132.0</td>
    <td>16.4</td>
    <td>8455.2</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>658</td>
    <td><a href="/player/2487/anthony-cascio/" target="_blank">Anthony Cascio</a></td>
    <td>134.0</td>
    <td>17.1</td>
    <td>8453.9</td>
    <td>Friars</td>
</tr>

<tr>
    <td>659</td>
    <td><a href="/player/2059/brian-waller-reitano/" target="_blank">Brian Waller-Reitano</a></td>
    <td>128.8</td>
    <td>10.7</td>
    <td>8450.6</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>660</td>
    <td><a href="/player/1761/joel-landry/" target="_blank">Joel Landry</a></td>
    <td>145.4</td>
    <td>14.4</td>
    <td>8449.4</td>
    <td>Gracie NEPA</td>
</tr>

<tr>
    <td>661</td>
    <td><a href="/player/554/evan-mcarthur/" target="_blank">Evan Mcarthur</a></td>
    <td>137.0</td>
    <td>14.7</td>
    <td>8447.0</td>
    <td>Delran</td>
</tr>

<tr>
    <td>662</td>
    <td><a href="/player/2698/kassie-buckner/" target="_blank">Kassie Buckner</a></td>
    <td>133.0</td>
    <td>14.1</td>
    <td>8446.3</td>
    <td>Stanfast</td>
</tr>

<tr>
    <td>663</td>
    <td><a href="/player/1648/abbie-dumont/" target="_blank">Abbie Dumont</a></td>
    <td>146.0</td>
    <td>14.9</td>
    <td>8441.1</td>
    <td>Wonder woman</td>
</tr>

<tr>
    <td>664</td>
    <td><a href="/player/2923/drew-seekman/" target="_blank">Drew Seekman</a></td>
    <td>139.9</td>
    <td>15.7</td>
    <td>8439.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>665</td>
    <td><a href="/player/914/caden-mclaughlin/" target="_blank">caden mclaughlin</a></td>
    <td>118.4</td>
    <td>12.4</td>
    <td>8439.4</td>
    <td>connetquot youth</td>
</tr>

<tr>
    <td>666</td>
    <td><a href="/player/2969/caylynn-chandler/" target="_blank">Caylynn Chandler</a></td>
    <td>129.0</td>
    <td>16.3</td>
    <td>8438.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>667</td>
    <td><a href="/player/950/wally-jelani-faiz/" target="_blank">Wally Jelani Faiz</a></td>
    <td>124.8</td>
    <td>10.5</td>
    <td>8435.9</td>
    <td>Hauppauge eagle</td>
</tr>

<tr>
    <td>668</td>
    <td><a href="/player/658/manuel-canales/" target="_blank">manuel canales</a></td>
    <td>135.0</td>
    <td>16.6</td>
    <td>8430.8</td>
    <td>brentwood</td>
</tr>

<tr>
    <td>669</td>
    <td><a href="/player/1127/nicholas-astuto/" target="_blank">Nicholas Astuto</a></td>
    <td>138.6</td>
    <td>9.0</td>
    <td>8430.2</td>
    <td>Farmingdale</td>
</tr>

<tr>
    <td>670</td>
    <td><a href="/player/1671/aryan-dewan/" target="_blank">Aryan Dewan</a></td>
    <td>141.0</td>
    <td>14.0</td>
    <td>8428.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>671</td>
    <td><a href="/player/2459/brandon-arriaza/" target="_blank">Brandon Arriaza</a></td>
    <td>142.6</td>
    <td>15.5</td>
    <td>8426.1</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>672</td>
    <td><a href="/player/2481/aaron-asherian/" target="_blank">Aaron Asherian</a></td>
    <td>131.8</td>
    <td>16.1</td>
    <td>8423.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>673</td>
    <td><a href="/player/2988/brett-raible/" target="_blank">Brett Raible</a></td>
    <td>131.8</td>
    <td>16.0</td>
    <td>8420.9</td>
    <td>LakeVille Falcons</td>
</tr>

<tr>
    <td>674</td>
    <td><a href="/player/3168/nicholas-weeden/" target="_blank">Nicholas Weeden</a></td>
    <td>113.9</td>
    <td>15.4</td>
    <td>8419.1</td>
    <td>Deep Roots</td>
</tr>

<tr>
    <td>675</td>
    <td><a href="/player/1342/jason-singer/" target="_blank">Jason Singer</a></td>
    <td>127.2</td>
    <td>12.4</td>
    <td>8414.0</td>
    <td>Mad Bulls</td>
</tr>

<tr>
    <td>676</td>
    <td><a href="/player/1712/thomas-bock/" target="_blank">Thomas Bock</a></td>
    <td>116.0</td>
    <td>14.2</td>
    <td>8412.5</td>
    <td>Beast Training</td>
</tr>

<tr>
    <td>677</td>
    <td><a href="/player/765/michael-pestana/" target="_blank">Michael Pestana</a></td>
    <td>125.0</td>
    <td>15.3</td>
    <td>8412.1</td>
    <td>Cordoba Trained</td>
</tr>

<tr>
    <td>678</td>
    <td><a href="/player/2308/jonathan-knoll/" target="_blank">Jonathan Knoll</a></td>
    <td>150.0</td>
    <td>12.6</td>
    <td>8407.1</td>
    <td>Smithtown East</td>
</tr>

<tr>
    <td>679</td>
    <td><a href="/player/1328/tucker-milligan/" target="_blank">Tucker Milligan</a></td>
    <td>128.0</td>
    <td>15.4</td>
    <td>8398.3</td>
    <td>New Canaan CT</td>
</tr>

<tr>
    <td>680</td>
    <td><a href="/player/3186/peter-berlin/" target="_blank">Peter Berlin</a></td>
    <td>128.0</td>
    <td>17.1</td>
    <td>8398.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>681</td>
    <td><a href="/player/2740/lucas-macking/" target="_blank">Lucas Macking</a></td>
    <td>127.0</td>
    <td>15.5</td>
    <td>8397.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>682</td>
    <td><a href="/player/1130/justin-depietro/" target="_blank">Justin DePietro</a></td>
    <td>128.2</td>
    <td>10.7</td>
    <td>8396.7</td>
    <td>School of Grappling</td>
</tr>

<tr>
    <td>683</td>
    <td><a href="/player/1120/james-horodyski/" target="_blank">James Horodyski</a></td>
    <td>128.8</td>
    <td>13.9</td>
    <td>8387.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>684</td>
    <td><a href="/player/3251/vince-barton/" target="_blank">Vince Barton</a></td>
    <td>112.7</td>
    <td>15.1</td>
    <td>8382.4</td>
    <td>Kodiak Attack</td>
</tr>

<tr>
    <td>685</td>
    <td><a href="/player/685/selvin-maldonado/" target="_blank">Selvin Maldonado</a></td>
    <td>137.6</td>
    <td>17.1</td>
    <td>8380.8</td>
    <td>Centereach</td>
</tr>

<tr>
    <td>686</td>
    <td><a href="/player/622/garrett-davis/" target="_blank">garrett davis</a></td>
    <td>134.2</td>
    <td>16.8</td>
    <td>8378.7</td>
    <td>smithtown east</td>
</tr>

<tr>
    <td>687</td>
    <td><a href="/player/3106/mackenna-webster/" target="_blank">Mackenna Webster</a></td>
    <td>130.0</td>
    <td>12.6</td>
    <td>8377.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>688</td>
    <td><a href="/player/3125/chris-wolf/" target="_blank">chris wolf</a></td>
    <td>125.0</td>
    <td>15.9</td>
    <td>8377.4</td>
    <td>Elite</td>
</tr>

<tr>
    <td>689</td>
    <td><a href="/player/3144/cole-anderson/" target="_blank">Cole Anderson</a></td>
    <td>125.0</td>
    <td>17.0</td>
    <td>8377.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>690</td>
    <td><a href="/player/682/rob-mankowich/" target="_blank">Rob Mankowich</a></td>
    <td>128.0</td>
    <td>17.0</td>
    <td>8375.5</td>
    <td>sachem north</td>
</tr>

<tr>
    <td>691</td>
    <td><a href="/player/1668/nicolas-roxas/" target="_blank">Nicolas Roxas</a></td>
    <td>132.8</td>
    <td>15.5</td>
    <td>8370.6</td>
    <td>Cardozo</td>
</tr>

<tr>
    <td>692</td>
    <td><a href="/player/836/trevor-barrett/" target="_blank">Trevor Barrett</a></td>
    <td>137.6</td>
    <td>11.4</td>
    <td>8367.2</td>
    <td>Rocky Point</td>
</tr>

<tr>
    <td>693</td>
    <td><a href="/player/3368/gabrial-sarabia/" target="_blank">Gabrial Sarabia</a></td>
    <td>139.5</td>
    <td>12.5</td>
    <td>8359.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>694</td>
    <td><a href="/player/2569/chris-massett/" target="_blank">Chris Massett</a></td>
    <td>132.0</td>
    <td>14.7</td>
    <td>8355.2</td>
    <td>Patchogue Medford</td>
</tr>

<tr>
    <td>695</td>
    <td><a href="/player/3303/oscar-tejada/" target="_blank">Oscar Tejada</a></td>
    <td>132.0</td>
    <td>17.2</td>
    <td>8355.2</td>
    <td>Laurel High School Wrestling</td>
</tr>

<tr>
    <td>696</td>
    <td><a href="/player/2928/chris-guarascio/" target="_blank">chris guarascio</a></td>
    <td>125.2</td>
    <td>16.3</td>
    <td>8354.0</td>
    <td>mepham</td>
</tr>

<tr>
    <td>697</td>
    <td><a href="/player/2291/thomas-bennett/" target="_blank">Thomas Bennett</a></td>
    <td>127.2</td>
    <td>12.9</td>
    <td>8351.1</td>
    <td>Five star</td>
</tr>

<tr>
    <td>698</td>
    <td><a href="/player/2586/joe-steimel/" target="_blank">Joe Steimel</a></td>
    <td>118.2</td>
    <td>14.4</td>
    <td>8351.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>699</td>
    <td><a href="/player/2822/jacob-schweigard/" target="_blank">Jacob Schweigard</a></td>
    <td>127.8</td>
    <td>13.4</td>
    <td>8344.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>700</td>
    <td><a href="/player/1609/yuri-case/" target="_blank">Yuri Case</a></td>
    <td>121.4</td>
    <td>17.1</td>
    <td>8343.9</td>
    <td>Fairfield Ludlowe High School</td>
</tr>

<tr>
    <td>701</td>
    <td><a href="/player/2468/mathew-gervasio/" target="_blank">Mathew Gervasio</a></td>
    <td>125.8</td>
    <td>13.9</td>
    <td>8342.1</td>
    <td>wildcats</td>
</tr>

<tr>
    <td>702</td>
    <td><a href="/player/3051/cecilia-williams/" target="_blank">Cecilia Williams</a></td>
    <td>112.6</td>
    <td>13.9</td>
    <td>8341.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>703</td>
    <td><a href="/player/1610/bobby-depolito/" target="_blank">Bobby Depolito</a></td>
    <td>116.0</td>
    <td>13.8</td>
    <td>8337.2</td>
    <td>Raiders mat club</td>
</tr>

<tr>
    <td>704</td>
    <td><a href="/player/3135/cristian-cruz/" target="_blank">Cristian Cruz</a></td>
    <td>124.0</td>
    <td>14.6</td>
    <td>8336.4</td>
    <td>Elite Wrestling Academy</td>
</tr>

<tr>
    <td>705</td>
    <td><a href="/player/2432/eric-rossi/" target="_blank">Eric Rossi</a></td>
    <td>134.0</td>
    <td>15.1</td>
    <td>8333.2</td>
    <td>East Islip</td>
</tr>

<tr>
    <td>706</td>
    <td><a href="/player/3325/jacob-levin/" target="_blank">Jacob Levin</a></td>
    <td>108.0</td>
    <td>16.2</td>
    <td>8331.9</td>
    <td>CJA Wrestling</td>
</tr>

<tr>
    <td>707</td>
    <td><a href="/player/1744/sean-campbell/" target="_blank">Sean Campbell</a></td>
    <td>100.2</td>
    <td>15.1</td>
    <td>8330.5</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>708</td>
    <td><a href="/player/2472/javier-figueroa/" target="_blank">Javier Figueroa</a></td>
    <td>144.8</td>
    <td>15.0</td>
    <td>8327.9</td>
    <td>Whiman wildcats</td>
</tr>

<tr>
    <td>709</td>
    <td><a href="/player/2872/alex-schram/" target="_blank">Alex Schram</a></td>
    <td>121.2</td>
    <td>13.3</td>
    <td>8326.3</td>
    <td></td>
</tr>

<tr>
    <td>710</td>
    <td><a href="/player/2925/salvador-sanchez/" target="_blank">Salvador Sanchez</a></td>
    <td>132.9</td>
    <td>15.9</td>
    <td>8322.6</td>
    <td>Romulus</td>
</tr>

<tr>
    <td>711</td>
    <td><a href="/player/1125/justin-golden/" target="_blank">Justin Golden</a></td>
    <td>126.6</td>
    <td>8.5</td>
    <td>8321.1</td>
    <td>Valley Stream Youth Wrestling</td>
</tr>

<tr>
    <td>712</td>
    <td><a href="/player/2252/cadman-frederick/" target="_blank">Cadman Frederick</a></td>
    <td>133.4</td>
    <td>13.9</td>
    <td>8320.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>713</td>
    <td><a href="/player/628/paul-zummo/" target="_blank">Paul Zummo</a></td>
    <td>127.4</td>
    <td>16.2</td>
    <td>8319.8</td>
    <td>William Floyd</td>
</tr>

<tr>
    <td>714</td>
    <td><a href="/player/2977/jason-downs/" target="_blank">Jason Downs</a></td>
    <td>120.3</td>
    <td>13.4</td>
    <td>8319.4</td>
    <td>Huron wrestling club</td>
</tr>

<tr>
    <td>715</td>
    <td><a href="/player/3301/anthony-serkov/" target="_blank">Anthony Serkov</a></td>
    <td>120.0</td>
    <td>16.3</td>
    <td>8319.2</td>
    <td>Elite Wrestling Academy</td>
</tr>

<tr>
    <td>716</td>
    <td><a href="/player/1447/ryan-labonte/" target="_blank">Ryan LaBonte</a></td>
    <td>126.0</td>
    <td>14.7</td>
    <td>8318.0</td>
    <td>MacArthur</td>
</tr>

<tr>
    <td>717</td>
    <td><a href="/player/1552/keegan-gagnon/" target="_blank">Keegan Gagnon</a></td>
    <td>141.4</td>
    <td>14.9</td>
    <td>8315.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>718</td>
    <td><a href="/player/1312/gabriel-cubero/" target="_blank">Gabriel Cubero</a></td>
    <td>113.0</td>
    <td>16.8</td>
    <td>8309.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>719</td>
    <td><a href="/player/1261/robert-flaherty/" target="_blank">Robert Flaherty</a></td>
    <td>135.0</td>
    <td>15.1</td>
    <td>8309.2</td>
    <td>Comsewogue</td>
</tr>

<tr>
    <td>720</td>
    <td><a href="/player/2173/kast-chek/" target="_blank">Kast Chek</a></td>
    <td>125.0</td>
    <td>13.0</td>
    <td>8308.0</td>
    <td>Conval</td>
</tr>

<tr>
    <td>721</td>
    <td><a href="/player/758/james-lynch/" target="_blank">james lynch</a></td>
    <td>132.4</td>
    <td>11.4</td>
    <td>8305.3</td>
    <td>elite</td>
</tr>

<tr>
    <td>722</td>
    <td><a href="/player/2466/jensen-offerman/" target="_blank">Jensen Offerman</a></td>
    <td>121.0</td>
    <td>15.6</td>
    <td>8305.2</td>
    <td>Wildcats</td>
</tr>

<tr>
    <td>723</td>
    <td><a href="/player/653/jake-eckerle/" target="_blank">Jake Eckerle</a></td>
    <td>120.0</td>
    <td>16.8</td>
    <td>8298.0</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>724</td>
    <td><a href="/player/913/kyle-mclaughlin/" target="_blank">kyle mclaughlin</a></td>
    <td>126.6</td>
    <td>12.4</td>
    <td>8296.9</td>
    <td>connetquot youth</td>
</tr>

<tr>
    <td>725</td>
    <td><a href="/player/1682/nicholas-chin/" target="_blank">Nicholas Chin</a></td>
    <td>120.6</td>
    <td>15.3</td>
    <td>8296.0</td>
    <td>Cardozo</td>
</tr>

<tr>
    <td>726</td>
    <td><a href="/player/471/gianni-mamani/" target="_blank">Gianni Mamani</a></td>
    <td>135.0</td>
    <td>15.4</td>
    <td>8290.4</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>727</td>
    <td><a href="/player/688/marcus-akbar/" target="_blank">marcus akbar</a></td>
    <td>127.6</td>
    <td>14.9</td>
    <td>8289.8</td>
    <td>floyd</td>
</tr>

<tr>
    <td>728</td>
    <td><a href="/player/1515/joseph-davanzo/" target="_blank">Joseph D'avanzo</a></td>
    <td>125.0</td>
    <td>15.9</td>
    <td>8282.8</td>
    <td>West Islip / pro ex</td>
</tr>

<tr>
    <td>729</td>
    <td><a href="/player/1009/dylan-vanegas/" target="_blank">Dylan Vanegas</a></td>
    <td>112.2</td>
    <td>12.9</td>
    <td>8282.1</td>
    <td></td>
</tr>

<tr>
    <td>730</td>
    <td><a href="/player/1144/robert-hernandez/" target="_blank">Robert Hernandez</a></td>
    <td>125.0</td>
    <td>11.0</td>
    <td>8277.4</td>
    <td>East Hampton</td>
</tr>

<tr>
    <td>731</td>
    <td><a href="/player/3104/jake-boldi/" target="_blank">Jake Boldi</a></td>
    <td>125.0</td>
    <td>13.7</td>
    <td>8277.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>732</td>
    <td><a href="/player/3279/nick-floody/" target="_blank">Nick Floody</a></td>
    <td>125.0</td>
    <td>15.4</td>
    <td>8277.4</td>
    <td>Mayo Quanchi</td>
</tr>

<tr>
    <td>733</td>
    <td><a href="/player/826/timothy-pescatore/" target="_blank">Timothy Pescatore</a></td>
    <td>114.5</td>
    <td>14.1</td>
    <td>8277.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>734</td>
    <td><a href="/player/1691/robert-stone/" target="_blank">Robert Stone</a></td>
    <td>109.0</td>
    <td>15.8</td>
    <td>8276.6</td>
    <td>HHH HSW</td>
</tr>

<tr>
    <td>735</td>
    <td><a href="/player/2694/beana-peterson/" target="_blank">Beana Peterson</a></td>
    <td>126.8</td>
    <td>13.8</td>
    <td>8275.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>736</td>
    <td><a href="/player/1283/justin-marino/" target="_blank">Justin Marino</a></td>
    <td>110.4</td>
    <td>16.0</td>
    <td>8272.7</td>
    <td>West Islip</td>
</tr>

<tr>
    <td>737</td>
    <td><a href="/player/1844/caleb-hamada/" target="_blank">Caleb Hamada</a></td>
    <td>120.8</td>
    <td>14.5</td>
    <td>8267.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>738</td>
    <td><a href="/player/1721/abhiram-thotkura/" target="_blank">Abhiram Thotkura</a></td>
    <td>119.0</td>
    <td>15.2</td>
    <td>8267.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>739</td>
    <td><a href="/player/2063/kiaben-kennedy/" target="_blank">Kiaben Kennedy</a></td>
    <td>123.0</td>
    <td>13.5</td>
    <td>8267.3</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>740</td>
    <td><a href="/player/780/matthew-corbett/" target="_blank">Matthew Corbett</a></td>
    <td>120.0</td>
    <td>15.1</td>
    <td>8263.5</td>
    <td>Lindenhurst</td>
</tr>

<tr>
    <td>741</td>
    <td><a href="/player/3192/trey-friedman/" target="_blank">Trey Friedman</a></td>
    <td>113.0</td>
    <td>15.4</td>
    <td>8262.7</td>
    <td>American</td>
</tr>

<tr>
    <td>742</td>
    <td><a href="/player/1934/adler-moura/" target="_blank">Adler Moura</a></td>
    <td>113.4</td>
    <td>13.9</td>
    <td>8258.6</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>743</td>
    <td><a href="/player/579/joe-volm/" target="_blank">Joe Volm</a></td>
    <td>132.6</td>
    <td>18.2</td>
    <td>8253.7</td>
    <td>Shore Thing</td>
</tr>

<tr>
    <td>744</td>
    <td><a href="/player/3079/noah-benore/" target="_blank">Noah Benore</a></td>
    <td>115.3</td>
    <td>14.6</td>
    <td>8253.5</td>
    <td>Kodiak</td>
</tr>

<tr>
    <td>745</td>
    <td><a href="/player/1554/henry-villodas/" target="_blank">Henry Villodas</a></td>
    <td>124.4</td>
    <td>15.4</td>
    <td>8246.2</td>
    <td>Goshen Wrestling</td>
</tr>

<tr>
    <td>746</td>
    <td><a href="/player/532/matteo-pinnero/" target="_blank">Matteo Pinnero</a></td>
    <td>123.0</td>
    <td>15.1</td>
    <td>8239.7</td>
    <td>Holmdel</td>
</tr>

<tr>
    <td>747</td>
    <td><a href="/player/1186/nicholas-pincay/" target="_blank">Nicholas Pincay</a></td>
    <td>145.8</td>
    <td>13.8</td>
    <td>8239.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>748</td>
    <td><a href="/player/787/miguel-lozano/" target="_blank">Miguel Lozano</a></td>
    <td>119.8</td>
    <td>14.7</td>
    <td>8237.9</td>
    <td>connetquot</td>
</tr>

<tr>
    <td>749</td>
    <td><a href="/player/3212/jaiden-mendez/" target="_blank">Jaiden Mendez</a></td>
    <td>124.0</td>
    <td>15.2</td>
    <td>8236.4</td>
    <td>Edge</td>
</tr>

<tr>
    <td>750</td>
    <td><a href="/player/3328/desmond-pleasant/" target="_blank">Desmond Pleasant</a></td>
    <td>124.0</td>
    <td>17.5</td>
    <td>8236.4</td>
    <td>CJA</td>
</tr>

<tr>
    <td>751</td>
    <td><a href="/player/1734/jordan-zerby/" target="_blank">Jordan Zerby</a></td>
    <td>110.0</td>
    <td>14.9</td>
    <td>8225.5</td>
    <td>Upper Dauphin</td>
</tr>

<tr>
    <td>752</td>
    <td><a href="/player/3380/tomah-gummow/" target="_blank">Tomah Gummow</a></td>
    <td>110.0</td>
    <td>14.3</td>
    <td>8225.5</td>
    <td>Black Belt Wrestling Academy</td>
</tr>

<tr>
    <td>753</td>
    <td><a href="/player/2705/samuel-iturrino/" target="_blank">Samuel Iturrino</a></td>
    <td>124.0</td>
    <td>15.2</td>
    <td>8223.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>754</td>
    <td><a href="/player/2119/teghan-mcconnell/" target="_blank">Teghan McConnell</a></td>
    <td>118.0</td>
    <td>13.8</td>
    <td>8222.7</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>755</td>
    <td><a href="/player/692/mikel-vasquez/" target="_blank">mikel vasquez</a></td>
    <td>123.8</td>
    <td>17.7</td>
    <td>8222.4</td>
    <td>brentwood</td>
</tr>

<tr>
    <td>756</td>
    <td><a href="/player/1748/jason-euceda/" target="_blank">jason euceda</a></td>
    <td>102.4</td>
    <td>14.2</td>
    <td>8221.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>757</td>
    <td><a href="/player/534/nicholas-ammirati/" target="_blank">Nicholas Ammirati</a></td>
    <td>117.8</td>
    <td>18.3</td>
    <td>8211.0</td>
    <td>Holmdel</td>
</tr>

<tr>
    <td>758</td>
    <td><a href="/player/2163/scot-harris/" target="_blank">Scot Harris</a></td>
    <td>133.0</td>
    <td>13.2</td>
    <td>8210.8</td>
    <td>Scarlet Knights</td>
</tr>

<tr>
    <td>759</td>
    <td><a href="/player/2896/ryder-mulherin/" target="_blank">Ryder Mulherin</a></td>
    <td>104.4</td>
    <td>13.4</td>
    <td>8205.4</td>
    <td>LEWC (Lake Erie wrestling club)</td>
</tr>

<tr>
    <td>760</td>
    <td><a href="/player/3043/easton-dickerson/" target="_blank">Easton Dickerson</a></td>
    <td>128.5</td>
    <td>14.6</td>
    <td>8203.7</td>
    <td>MI Rev</td>
</tr>

<tr>
    <td>761</td>
    <td><a href="/player/543/benny-bautista/" target="_blank">Benny Bautista</a></td>
    <td>115.4</td>
    <td>15.3</td>
    <td>8203.0</td>
    <td>Unnattached</td>
</tr>

<tr>
    <td>762</td>
    <td><a href="/player/476/francisco-gonzalez/" target="_blank">Francisco Gonzalez</a></td>
    <td>123.0</td>
    <td>14.7</td>
    <td>8200.5</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>763</td>
    <td><a href="/player/1703/ryan-obert-thorn/" target="_blank">ryan obert-thorn</a></td>
    <td>113.8</td>
    <td>16.0</td>
    <td>8197.6</td>
    <td>ronkonkoma</td>
</tr>

<tr>
    <td>764</td>
    <td><a href="/player/2902/nathaniel-carter/" target="_blank">Nathaniel Carter</a></td>
    <td>102.7</td>
    <td>12.0</td>
    <td>8196.9</td>
    <td>Donahoe</td>
</tr>

<tr>
    <td>765</td>
    <td><a href="/player/690/daler-durdimamedov/" target="_blank">Daler Durdimamedov</a></td>
    <td>132.6</td>
    <td>14.4</td>
    <td>8196.5</td>
    <td>Elite Wrestling Academy</td>
</tr>

<tr>
    <td>766</td>
    <td><a href="/player/1655/billy-russo/" target="_blank">billy russo</a></td>
    <td>123.0</td>
    <td>12.8</td>
    <td>8195.1</td>
    <td>bluewave</td>
</tr>

<tr>
    <td>767</td>
    <td><a href="/player/3349/tj-bodei/" target="_blank">T.J. Bodei</a></td>
    <td>123.0</td>
    <td>18.1</td>
    <td>8195.1</td>
    <td>Shore Thing</td>
</tr>

<tr>
    <td>768</td>
    <td><a href="/player/1118/richie-patanjo/" target="_blank">Richie Patanjo</a></td>
    <td>120.0</td>
    <td>15.1</td>
    <td>8194.9</td>
    <td>sachem east</td>
</tr>

<tr>
    <td>769</td>
    <td><a href="/player/1411/ryan-arbeit/" target="_blank">Ryan Arbeit</a></td>
    <td>111.4</td>
    <td>14.1</td>
    <td>8192.0</td>
    <td>wantagh</td>
</tr>

<tr>
    <td>770</td>
    <td><a href="/player/3304/terek-engelter/" target="_blank">Terek Engelter</a></td>
    <td>121.2</td>
    <td>16.6</td>
    <td>8190.7</td>
    <td>Grand Blanc</td>
</tr>

<tr>
    <td>771</td>
    <td><a href="/player/1849/andrew-white/" target="_blank">Andrew White</a></td>
    <td>120.6</td>
    <td>14.0</td>
    <td>8190.5</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>772</td>
    <td><a href="/player/2437/jayden-salti/" target="_blank">Jayden Salti</a></td>
    <td>133.4</td>
    <td>14.4</td>
    <td>8181.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>773</td>
    <td><a href="/player/2908/brennen-riquier/" target="_blank">Brennen Riquier</a></td>
    <td>136.8</td>
    <td>11.5</td>
    <td>8179.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>774</td>
    <td><a href="/player/632/matt-cracchiola/" target="_blank">matt cracchiola</a></td>
    <td>113.0</td>
    <td>15.2</td>
    <td>8177.2</td>
    <td>ward melville</td>
</tr>

<tr>
    <td>775</td>
    <td><a href="/player/1564/salvatore-spillane/" target="_blank">Salvatore Spillane</a></td>
    <td>129.0</td>
    <td>14.6</td>
    <td>8176.2</td>
    <td>Fordham</td>
</tr>

<tr>
    <td>776</td>
    <td><a href="/player/1301/christian-lievano/" target="_blank">Christian Lievano</a></td>
    <td>108.6</td>
    <td>14.9</td>
    <td>8175.9</td>
    <td>Ward Melville</td>
</tr>

<tr>
    <td>777</td>
    <td><a href="/player/1585/oliver-danna/" target="_blank">Oliver D'Anna</a></td>
    <td>118.4</td>
    <td>14.8</td>
    <td>8174.8</td>
    <td>Staples</td>
</tr>

<tr>
    <td>778</td>
    <td><a href="/player/2646/joey-miccio/" target="_blank">Joey Miccio</a></td>
    <td>118.8</td>
    <td>13.6</td>
    <td>8173.8</td>
    <td>Bulldogs</td>
</tr>

<tr>
    <td>779</td>
    <td><a href="/player/2484/devon-enayatian/" target="_blank">Devon Enayatian</a></td>
    <td>122.8</td>
    <td>16.2</td>
    <td>8172.9</td>
    <td>Great Neck North High School</td>
</tr>

<tr>
    <td>780</td>
    <td><a href="/player/702/jack-forte/" target="_blank">jack forte</a></td>
    <td>116.6</td>
    <td>13.8</td>
    <td>8170.3</td>
    <td>clarke</td>
</tr>

<tr>
    <td>781</td>
    <td><a href="/player/2114/dylan-gravallese/" target="_blank">Dylan Gravallese</a></td>
    <td>126.2</td>
    <td>12.4</td>
    <td>8170.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>782</td>
    <td><a href="/player/2584/ivan-garcia/" target="_blank">Ivan Garcia</a></td>
    <td>123.8</td>
    <td>16.4</td>
    <td>8165.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>783</td>
    <td><a href="/player/659/myan-batson/" target="_blank">Myan Batson</a></td>
    <td>128.0</td>
    <td>14.8</td>
    <td>8165.2</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>784</td>
    <td><a href="/player/2518/jamari-etheridge/" target="_blank">Jamari Etheridge</a></td>
    <td>113.0</td>
    <td>14.8</td>
    <td>8162.7</td>
    <td>5 Points Wrestling</td>
</tr>

<tr>
    <td>785</td>
    <td><a href="/player/1449/allan-fernandez/" target="_blank">Allan Fernandez</a></td>
    <td>139.0</td>
    <td>14.0</td>
    <td>8158.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>786</td>
    <td><a href="/player/3412/austin-pieper/" target="_blank">Austin Pieper</a></td>
    <td>135.9</td>
    <td>15.2</td>
    <td>8155.6</td>
    <td>Michigan Revolution</td>
</tr>

<tr>
    <td>787</td>
    <td><a href="/player/2529/jasai-mckay/" target="_blank">Jasai McKay</a></td>
    <td>143.0</td>
    <td>14.0</td>
    <td>8155.3</td>
    <td>Pitbull</td>
</tr>

<tr>
    <td>788</td>
    <td><a href="/player/1548/christian-bolde/" target="_blank">Christian bolde</a></td>
    <td>144.6</td>
    <td>10.5</td>
    <td>8155.0</td>
    <td>NYWA</td>
</tr>

<tr>
    <td>789</td>
    <td><a href="/player/516/killian-foy/" target="_blank">Killian Foy</a></td>
    <td>111.6</td>
    <td>14.9</td>
    <td>8152.4</td>
    <td>Macarthur</td>
</tr>

<tr>
    <td>790</td>
    <td><a href="/player/2660/trevor-tewell/" target="_blank">Trevor Tewell</a></td>
    <td>115.0</td>
    <td>15.6</td>
    <td>8152.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>791</td>
    <td><a href="/player/713/andrew-demarco/" target="_blank">Andrew Demarco</a></td>
    <td>129.6</td>
    <td>16.2</td>
    <td>8150.9</td>
    <td>Willam Floyd</td>
</tr>

<tr>
    <td>792</td>
    <td><a href="/player/2690/temprence-watson/" target="_blank">Temprence Watson</a></td>
    <td>126.8</td>
    <td>9.5</td>
    <td>8150.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>793</td>
    <td><a href="/player/689/michael-reynolds/" target="_blank">Michael Reynolds</a></td>
    <td>124.8</td>
    <td>15.9</td>
    <td>8149.7</td>
    <td>Dynamic Wrestling</td>
</tr>

<tr>
    <td>794</td>
    <td><a href="/player/1475/chris-viera/" target="_blank">Chris Viera</a></td>
    <td>125.2</td>
    <td>15.4</td>
    <td>8147.6</td>
    <td>Wm floyd</td>
</tr>

<tr>
    <td>795</td>
    <td><a href="/player/2972/perrin-dimmitt/" target="_blank">Perrin Dimmitt</a></td>
    <td>122.7</td>
    <td>13.2</td>
    <td>8141.1</td>
    <td>Bay County Road Runners</td>
</tr>

<tr>
    <td>796</td>
    <td><a href="/player/1394/thomas-madorno/" target="_blank">Thomas Madorno</a></td>
    <td>132.0</td>
    <td>16.2</td>
    <td>8139.5</td>
    <td>CCHS</td>
</tr>

<tr>
    <td>797</td>
    <td><a href="/player/3052/dominic-bernardi/" target="_blank">Dominic Bernardi</a></td>
    <td>107.2</td>
    <td>14.9</td>
    <td>8138.6</td>
    <td>Pittston</td>
</tr>

<tr>
    <td>798</td>
    <td><a href="/player/1218/nick-zins/" target="_blank">Nick Zins</a></td>
    <td>127.2</td>
    <td>13.0</td>
    <td>8135.9</td>
    <td>Smithtown West</td>
</tr>

<tr>
    <td>799</td>
    <td><a href="/player/2361/isaiah-wilson/" target="_blank">Isaiah Wilson</a></td>
    <td>126.5</td>
    <td>13.8</td>
    <td>8128.8</td>
    <td>Longwood coach Emman</td>
</tr>

<tr>
    <td>800</td>
    <td><a href="/player/805/jacob-kurtz/" target="_blank">Jacob Kurtz</a></td>
    <td>126.4</td>
    <td>16.5</td>
    <td>8128.7</td>
    <td>N/dynamic</td>
</tr>

<tr>
    <td>801</td>
    <td><a href="/player/2604/ben-marmor/" target="_blank">Ben Marmor</a></td>
    <td>110.0</td>
    <td>15.2</td>
    <td>8125.5</td>
    <td>Syosset</td>
</tr>

<tr>
    <td>802</td>
    <td><a href="/player/3209/logan-sichelstiel/" target="_blank">Logan Sichelstiel</a></td>
    <td>110.0</td>
    <td>14.4</td>
    <td>8125.5</td>
    <td>Paulsboro High School</td>
</tr>

<tr>
    <td>803</td>
    <td><a href="/player/1381/somaia-elokda/" target="_blank">somaia elokda</a></td>
    <td>133.6</td>
    <td>14.8</td>
    <td>8124.6</td>
    <td></td>
</tr>

<tr>
    <td>804</td>
    <td><a href="/player/604/thomas-volpe/" target="_blank">Thomas Volpe</a></td>
    <td>125.0</td>
    <td>16.4</td>
    <td>8113.2</td>
    <td>Hauppauge</td>
</tr>

<tr>
    <td>805</td>
    <td><a href="/player/2812/jonathan-fox/" target="_blank">Jonathan Fox</a></td>
    <td>110.9</td>
    <td>13.0</td>
    <td>8112.5</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>806</td>
    <td><a href="/player/738/nico-diaz/" target="_blank">Nico Diaz</a></td>
    <td>109.8</td>
    <td>14.3</td>
    <td>8112.4</td>
    <td>CJA</td>
</tr>

<tr>
    <td>807</td>
    <td><a href="/player/2216/nicky-reilly/" target="_blank">nicky reilly</a></td>
    <td>123.6</td>
    <td>13.4</td>
    <td>8110.3</td>
    <td>mount sinai</td>
</tr>

<tr>
    <td>808</td>
    <td><a href="/player/1661/eric-yu/" target="_blank">Eric Yu</a></td>
    <td>121.6</td>
    <td>14.5</td>
    <td>8110.1</td>
    <td>Cardozo</td>
</tr>

<tr>
    <td>809</td>
    <td><a href="/player/946/tommaso-clarke/" target="_blank">Tommaso Clarke</a></td>
    <td>128.0</td>
    <td>14.1</td>
    <td>8109.3</td>
    <td>hauppauge</td>
</tr>

<tr>
    <td>810</td>
    <td><a href="/player/2074/sadie-nadeau/" target="_blank">Sadie Nadeau</a></td>
    <td>123.8</td>
    <td>12.1</td>
    <td>8099.3</td>
    <td>Rochester Middle School</td>
</tr>

<tr>
    <td>811</td>
    <td><a href="/player/2521/jason-canales/" target="_blank">Jason Canales</a></td>
    <td>130.0</td>
    <td>15.4</td>
    <td>8097.0</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>812</td>
    <td><a href="/player/3357/lyla-hensen/" target="_blank">Lyla Hensen</a></td>
    <td>116.2</td>
    <td>10.0</td>
    <td>8093.8</td>
    <td>SAW</td>
</tr>

<tr>
    <td>813</td>
    <td><a href="/player/3022/sullivan-haas/" target="_blank">Sullivan Haas</a></td>
    <td>117.5</td>
    <td>11.8</td>
    <td>8093.2</td>
    <td>Michigan Matcats</td>
</tr>

<tr>
    <td>814</td>
    <td><a href="/player/3198/bryan-arevalo/" target="_blank">Bryan Arevalo</a></td>
    <td>135.0</td>
    <td>16.9</td>
    <td>8084.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>815</td>
    <td><a href="/player/1685/danny-zamroz/" target="_blank">Danny Zamroz</a></td>
    <td>122.2</td>
    <td>13.6</td>
    <td>8084.7</td>
    <td>South Shore Wrestling</td>
</tr>

<tr>
    <td>816</td>
    <td><a href="/player/999/chase-renna/" target="_blank">Chase Renna</a></td>
    <td>129.4</td>
    <td>11.4</td>
    <td>8076.8</td>
    <td>Kings Park</td>
</tr>

<tr>
    <td>817</td>
    <td><a href="/player/1287/anthony-annunziata/" target="_blank">Anthony Annunziata</a></td>
    <td>120.0</td>
    <td>13.4</td>
    <td>8069.2</td>
    <td>Huntington</td>
</tr>

<tr>
    <td>818</td>
    <td><a href="/player/3124/ryan-wolf/" target="_blank">Ryan Wolf</a></td>
    <td>120.0</td>
    <td>14.1</td>
    <td>8069.2</td>
    <td>Elite</td>
</tr>

<tr>
    <td>819</td>
    <td><a href="/player/3149/ryan-mansueto/" target="_blank">Ryan Mansueto</a></td>
    <td>120.0</td>
    <td>15.1</td>
    <td>8069.2</td>
    <td>Rhino</td>
</tr>

<tr>
    <td>820</td>
    <td><a href="/player/618/charlie-olaechea/" target="_blank">Charlie Olaechea</a></td>
    <td>105.4</td>
    <td>14.0</td>
    <td>8068.0</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>821</td>
    <td><a href="/player/2495/ricky-cook/" target="_blank">Ricky Cook</a></td>
    <td>120.8</td>
    <td>15.2</td>
    <td>8066.8</td>
    <td>North Shore</td>
</tr>

<tr>
    <td>822</td>
    <td><a href="/player/2987/skylynn-picarski/" target="_blank">SkyLynn Picarski</a></td>
    <td>117.0</td>
    <td>13.4</td>
    <td>8064.8</td>
    <td>Lakeville Falcons</td>
</tr>

<tr>
    <td>823</td>
    <td><a href="/player/2842/emily-murphy/" target="_blank">Emily Murphy</a></td>
    <td>125.2</td>
    <td>14.3</td>
    <td>8063.8</td>
    <td>Bvrt</td>
</tr>

<tr>
    <td>824</td>
    <td><a href="/player/741/salvatore-palmeri/" target="_blank">Salvatore Palmeri</a></td>
    <td>112.2</td>
    <td>15.6</td>
    <td>8061.7</td>
    <td>The Room</td>
</tr>

<tr>
    <td>825</td>
    <td><a href="/player/1540/linda-holeman/" target="_blank">Linda Holeman</a></td>
    <td>117.6</td>
    <td>14.1</td>
    <td>8061.4</td>
    <td>Roughhouse</td>
</tr>

<tr>
    <td>826</td>
    <td><a href="/player/1525/francisco-gonzalez/" target="_blank">Francisco Gonzalez</a></td>
    <td>122.1</td>
    <td>15.5</td>
    <td>8056.3</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>827</td>
    <td><a href="/player/468/johnny-tietjen/" target="_blank">Johnny Tietjen</a></td>
    <td>103.6</td>
    <td>15.8</td>
    <td>8054.8</td>
    <td>Barn Brothers</td>
</tr>

<tr>
    <td>828</td>
    <td><a href="/player/1535/jeremiah-irizarry/" target="_blank">Jeremiah Irizarry</a></td>
    <td>108.0</td>
    <td>14.7</td>
    <td>8054.0</td>
    <td>Roughhouse</td>
</tr>

<tr>
    <td>829</td>
    <td><a href="/player/1142/daniel-johnson/" target="_blank">Daniel Johnson</a></td>
    <td>119.6</td>
    <td>14.2</td>
    <td>8052.2</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>830</td>
    <td><a href="/player/1797/thomas-schechterly/" target="_blank">Thomas Schechterly</a></td>
    <td>108.2</td>
    <td>12.0</td>
    <td>8051.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>831</td>
    <td><a href="/player/2601/marco-liverman/" target="_blank">Marco Liverman</a></td>
    <td>132.0</td>
    <td>17.0</td>
    <td>8051.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>832</td>
    <td><a href="/player/560/anthony-motard/" target="_blank">Anthony Motard</a></td>
    <td>129.2</td>
    <td>15.3</td>
    <td>8048.5</td>
    <td>Monroe</td>
</tr>

<tr>
    <td>833</td>
    <td><a href="/player/2480/matt-odonnell/" target="_blank">Matt O'Donnell</a></td>
    <td>107.4</td>
    <td>15.3</td>
    <td>8047.8</td>
    <td>North Shore Vikings</td>
</tr>

<tr>
    <td>834</td>
    <td><a href="/player/3128/zephan-catalina/" target="_blank">Zephan Catalina</a></td>
    <td>119.7</td>
    <td>15.1</td>
    <td>8047.1</td>
    <td>Plymouth Canton Wrestling Club</td>
</tr>

<tr>
    <td>835</td>
    <td><a href="/player/1058/anthony-whitcomb/" target="_blank">anthony whitcomb</a></td>
    <td>121.2</td>
    <td>13.1</td>
    <td>8039.3</td>
    <td>blue wave</td>
</tr>

<tr>
    <td>836</td>
    <td><a href="/player/2944/rory-dixon/" target="_blank">Rory Dixon</a></td>
    <td>100.9</td>
    <td>11.9</td>
    <td>8036.2</td>
    <td>Mat Assassins</td>
</tr>

<tr>
    <td>837</td>
    <td><a href="/player/546/andrew-di-liberto/" target="_blank">Andrew Di Liberto</a></td>
    <td>122.0</td>
    <td>15.3</td>
    <td>8030.5</td>
    <td>marlboro</td>
</tr>

<tr>
    <td>838</td>
    <td><a href="/player/1567/tyce-vandergoot/" target="_blank">Tyce VanderGoot</a></td>
    <td>118.2</td>
    <td>14.0</td>
    <td>8028.1</td>
    <td>Raiders Mat Club</td>
</tr>

<tr>
    <td>839</td>
    <td><a href="/player/683/frankie-thristino/" target="_blank">frankie thristino</a></td>
    <td>131.4</td>
    <td>14.9</td>
    <td>8023.4</td>
    <td>centereach</td>
</tr>

<tr>
    <td>840</td>
    <td><a href="/player/757/tyler-palumbo/" target="_blank">Tyler Palumbo</a></td>
    <td>123.2</td>
    <td>11.2</td>
    <td>8023.3</td>
    <td>Triumph</td>
</tr>

<tr>
    <td>841</td>
    <td><a href="/player/817/michael-mahosky/" target="_blank">Michael Mahosky</a></td>
    <td>117.8</td>
    <td>11.8</td>
    <td>8023.1</td>
    <td>Rocky Point</td>
</tr>

<tr>
    <td>842</td>
    <td><a href="/player/1433/jonathan-agnoli/" target="_blank">Jonathan Agnoli</a></td>
    <td>118.4</td>
    <td>15.4</td>
    <td>8021.3</td>
    <td>MacArthur</td>
</tr>

<tr>
    <td>843</td>
    <td><a href="/player/2570/brandon-reinoso/" target="_blank">Brandon Reinoso</a></td>
    <td>126.0</td>
    <td>16.0</td>
    <td>8018.0</td>
    <td>BRENTWOOD</td>
</tr>

<tr>
    <td>844</td>
    <td><a href="/player/610/jacob-sheiner/" target="_blank">Jacob Sheiner</a></td>
    <td>121.6</td>
    <td>17.0</td>
    <td>8013.7</td>
    <td>Fair Lawn</td>
</tr>

<tr>
    <td>845</td>
    <td><a href="/player/810/ayman-choriyev/" target="_blank">Ayman Choriyev</a></td>
    <td>124.4</td>
    <td>17.2</td>
    <td>8009.8</td>
    <td>Brooklyn</td>
</tr>

<tr>
    <td>846</td>
    <td><a href="/player/2458/kendricks-pellicci/" target="_blank">Kendricks Pellicci</a></td>
    <td>112.2</td>
    <td>14.9</td>
    <td>8009.7</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>847</td>
    <td><a href="/player/1689/frank-indelicato/" target="_blank">Frank Indelicato</a></td>
    <td>123.8</td>
    <td>13.2</td>
    <td>8004.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>848</td>
    <td><a href="/player/3015/garrison-weisner/" target="_blank">Garrison Weisner</a></td>
    <td>96.4</td>
    <td>13.9</td>
    <td>8002.3</td>
    <td>Kodiak Attack</td>
</tr>

<tr>
    <td>849</td>
    <td><a href="/player/3289/noah-bard/" target="_blank">Noah Bard</a></td>
    <td>115.0</td>
    <td>15.2</td>
    <td>8002.2</td>
    <td>Ocean Twp. HS</td>
</tr>

<tr>
    <td>850</td>
    <td><a href="/player/1501/ryan-fitzsimons/" target="_blank">Ryan Fitzsimons</a></td>
    <td>122.4</td>
    <td>14.3</td>
    <td>8000.7</td>
    <td></td>
</tr>

<tr>
    <td>851</td>
    <td><a href="/player/1864/logan-arcuri/" target="_blank">Logan Arcuri</a></td>
    <td>128.6</td>
    <td>13.7</td>
    <td>7994.2</td>
    <td>Farmingdale</td>
</tr>

<tr>
    <td>852</td>
    <td><a href="/player/2532/edual-reyes/" target="_blank">Edual Reyes</a></td>
    <td>103.0</td>
    <td>16.5</td>
    <td>7990.2</td>
    <td>5 Points Wrestling</td>
</tr>

<tr>
    <td>853</td>
    <td><a href="/player/1713/michael-caliendo/" target="_blank">Michael Caliendo</a></td>
    <td>117.6</td>
    <td>15.9</td>
    <td>7989.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>854</td>
    <td><a href="/player/1792/pj-henry/" target="_blank">PJ Henry</a></td>
    <td>123.2</td>
    <td>17.7</td>
    <td>7987.4</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>855</td>
    <td><a href="/player/1719/john-pappas/" target="_blank">John Pappas</a></td>
    <td>121.8</td>
    <td>17.2</td>
    <td>7981.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>856</td>
    <td><a href="/player/2826/carson-killenberger/" target="_blank">Carson Killenberger</a></td>
    <td>118.9</td>
    <td>13.9</td>
    <td>7980.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>857</td>
    <td><a href="/player/3371/madden-michalko/" target="_blank">Madden Michalko</a></td>
    <td>122.6</td>
    <td>13.1</td>
    <td>7978.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>858</td>
    <td><a href="/player/2603/johnny-coutard/" target="_blank">Johnny Coutard</a></td>
    <td>125.0</td>
    <td>14.3</td>
    <td>7977.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>859</td>
    <td><a href="/player/2863/blaine-anspaugh/" target="_blank">Blaine Anspaugh</a></td>
    <td>106.9</td>
    <td>14.0</td>
    <td>7977.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>860</td>
    <td><a href="/player/2600/jordan-lozano/" target="_blank">Jordan Lozano</a></td>
    <td>119.8</td>
    <td>16.0</td>
    <td>7975.2</td>
    <td>VSC eagles</td>
</tr>

<tr>
    <td>861</td>
    <td><a href="/player/2192/landon-lee/" target="_blank">Landon Lee</a></td>
    <td>111.0</td>
    <td>10.9</td>
    <td>7971.6</td>
    <td>VHW</td>
</tr>

<tr>
    <td>862</td>
    <td><a href="/player/1480/james-pace/" target="_blank">James Pace</a></td>
    <td>137.6</td>
    <td>13.5</td>
    <td>7967.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>863</td>
    <td><a href="/player/2307/steven-martinez/" target="_blank">Steven Martinez</a></td>
    <td>123.0</td>
    <td>11.0</td>
    <td>7965.4</td>
    <td>School of grappling</td>
</tr>

<tr>
    <td>864</td>
    <td><a href="/player/2781/liam-evanko/" target="_blank">Liam Evanko</a></td>
    <td>111.1</td>
    <td>12.0</td>
    <td>7964.6</td>
    <td>Altered Beast Wrestling Academy</td>
</tr>

<tr>
    <td>865</td>
    <td><a href="/player/1249/ethan-weiss/" target="_blank">Ethan Weiss</a></td>
    <td>119.8</td>
    <td>17.0</td>
    <td>7964.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>866</td>
    <td><a href="/player/1122/chase-catalano/" target="_blank">Chase Catalano</a></td>
    <td>89.2</td>
    <td>11.2</td>
    <td>7961.4</td>
    <td>MarcAurele Wrestling</td>
</tr>

<tr>
    <td>867</td>
    <td><a href="/player/638/matthew-keegan/" target="_blank">Matthew Keegan</a></td>
    <td>122.6</td>
    <td>15.6</td>
    <td>7955.7</td>
    <td>Sachem North</td>
</tr>

<tr>
    <td>868</td>
    <td><a href="/player/2502/nick-filocamo/" target="_blank">Nick Filocamo</a></td>
    <td>116.4</td>
    <td>13.5</td>
    <td>7952.9</td>
    <td>Island trees</td>
</tr>

<tr>
    <td>869</td>
    <td><a href="/player/1628/xaedyn-natal/" target="_blank">Xaedyn Natal</a></td>
    <td>97.0</td>
    <td>13.8</td>
    <td>7952.8</td>
    <td>Fitchburg</td>
</tr>

<tr>
    <td>870</td>
    <td><a href="/player/750/nicholas-bottazzi/" target="_blank">Nicholas Bottazzi</a></td>
    <td>114.6</td>
    <td>17.1</td>
    <td>7951.9</td>
    <td>cordoba</td>
</tr>

<tr>
    <td>871</td>
    <td><a href="/player/3199/aj-gray-ii/" target="_blank">AJ Gray II</a></td>
    <td>107.7</td>
    <td>15.2</td>
    <td>7951.3</td>
    <td>G.B. Wrestling</td>
</tr>

<tr>
    <td>872</td>
    <td><a href="/player/1195/aj-lent-adjami/" target="_blank">A.J. Lent Adjami</a></td>
    <td>131.4</td>
    <td>16.4</td>
    <td>7947.2</td>
    <td>ASCEND</td>
</tr>

<tr>
    <td>873</td>
    <td><a href="/player/1779/stefan-krompier/" target="_blank">Stefan Krompier</a></td>
    <td>109.2</td>
    <td>16.9</td>
    <td>7946.7</td>
    <td>Saint Johns</td>
</tr>

<tr>
    <td>874</td>
    <td><a href="/player/1867/preston-biedenkapp/" target="_blank">Preston Biedenkapp</a></td>
    <td>113.2</td>
    <td>14.1</td>
    <td>7942.8</td>
    <td>Port Jeff Nation</td>
</tr>

<tr>
    <td>875</td>
    <td><a href="/player/2696/jordan-blair/" target="_blank">Jordan Blair</a></td>
    <td>117.0</td>
    <td>16.1</td>
    <td>7940.1</td>
    <td>Standfast</td>
</tr>

<tr>
    <td>876</td>
    <td><a href="/player/1387/chris-siller/" target="_blank">Chris Siller</a></td>
    <td>112.6</td>
    <td>15.1</td>
    <td>7938.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>877</td>
    <td><a href="/player/1446/james-jennison/" target="_blank">James Jennison</a></td>
    <td>108.0</td>
    <td>14.3</td>
    <td>7938.0</td>
    <td>Salk</td>
</tr>

<tr>
    <td>878</td>
    <td><a href="/player/1303/jack-fantigrossi/" target="_blank">Jack Fantigrossi</a></td>
    <td>113.8</td>
    <td>14.5</td>
    <td>7935.7</td>
    <td>Comsewogue</td>
</tr>

<tr>
    <td>879</td>
    <td><a href="/player/529/gavin-paolone/" target="_blank">Gavin Paolone</a></td>
    <td>113.6</td>
    <td>15.7</td>
    <td>7931.3</td>
    <td>Spartan Wrestling</td>
</tr>

<tr>
    <td>880</td>
    <td><a href="/player/2747/brooks-fordyce/" target="_blank">Brooks Fordyce</a></td>
    <td>116.3</td>
    <td>11.1</td>
    <td>7930.2</td>
    <td>Young Guns</td>
</tr>

<tr>
    <td>881</td>
    <td><a href="/player/1462/dylan-labonte/" target="_blank">Dylan LaBonte</a></td>
    <td>132.2</td>
    <td>13.2</td>
    <td>7926.5</td>
    <td>Salk</td>
</tr>

<tr>
    <td>882</td>
    <td><a href="/player/1259/juan-mejia/" target="_blank">Juan Mejia</a></td>
    <td>113.4</td>
    <td>14.9</td>
    <td>7925.7</td>
    <td>Brentwood South Middle school</td>
</tr>

<tr>
    <td>883</td>
    <td><a href="/player/2697/lillian-rose-jones/" target="_blank">Lillian Rose Jones</a></td>
    <td>110.0</td>
    <td>16.2</td>
    <td>7921.7</td>
    <td>Lady Outlaws</td>
</tr>

<tr>
    <td>884</td>
    <td><a href="/player/2076/james-cappiello/" target="_blank">James Cappiello</a></td>
    <td>115.2</td>
    <td>14.2</td>
    <td>7921.5</td>
    <td>Tewksbury Redmen</td>
</tr>

<tr>
    <td>885</td>
    <td><a href="/player/703/jacob-coniker/" target="_blank">Jacob Coniker</a></td>
    <td>111.6</td>
    <td>16.3</td>
    <td>7921.0</td>
    <td>Pro Ex</td>
</tr>

<tr>
    <td>886</td>
    <td><a href="/player/1299/jayden-berrios/" target="_blank">Jayden Berrios</a></td>
    <td>117.8</td>
    <td>13.8</td>
    <td>7919.5</td>
    <td>Sachem North</td>
</tr>

<tr>
    <td>887</td>
    <td><a href="/player/1766/ian-searing/" target="_blank">ian searing</a></td>
    <td>118.4</td>
    <td>13.2</td>
    <td>7913.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>888</td>
    <td><a href="/player/1617/jordan-brown/" target="_blank">Jordan Brown</a></td>
    <td>100.6</td>
    <td>14.1</td>
    <td>7912.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>889</td>
    <td><a href="/player/1085/jared-marine/" target="_blank">Jared Marine</a></td>
    <td>99.8</td>
    <td>11.8</td>
    <td>7907.8</td>
    <td>Gladiators</td>
</tr>

<tr>
    <td>890</td>
    <td><a href="/player/3137/alex-dewitt/" target="_blank">Alex DeWitt</a></td>
    <td>131.4</td>
    <td>15.9</td>
    <td>7904.0</td>
    <td>Zeeland East</td>
</tr>

<tr>
    <td>891</td>
    <td><a href="/player/657/jason-vetrano/" target="_blank">jason Vetrano</a></td>
    <td>131.0</td>
    <td>13.8</td>
    <td>7901.3</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>892</td>
    <td><a href="/player/1900/xavier-sierra/" target="_blank">xavier sierra</a></td>
    <td>134.2</td>
    <td>13.3</td>
    <td>7899.1</td>
    <td>west hollow middle school</td>
</tr>

<tr>
    <td>893</td>
    <td><a href="/player/1969/seth-brown/" target="_blank">Seth Brown</a></td>
    <td>124.0</td>
    <td>14.5</td>
    <td>7890.0</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>894</td>
    <td><a href="/player/2533/jonray-perez/" target="_blank">Jonray Perez</a></td>
    <td>105.0</td>
    <td>14.3</td>
    <td>7888.3</td>
    <td>Pitbull</td>
</tr>

<tr>
    <td>895</td>
    <td><a href="/player/1791/connor-henry/" target="_blank">Connor Henry</a></td>
    <td>123.4</td>
    <td>16.9</td>
    <td>7887.3</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>896</td>
    <td><a href="/player/2339/ethan-alvarado/" target="_blank">Ethan Alvarado</a></td>
    <td>110.0</td>
    <td>13.3</td>
    <td>7882.9</td>
    <td>AMS</td>
</tr>

<tr>
    <td>897</td>
    <td><a href="/player/2465/nick-campanelli/" target="_blank">Nick Campanelli</a></td>
    <td>108.2</td>
    <td>15.3</td>
    <td>7878.9</td>
    <td>Walt Whitman Wildcats</td>
</tr>

<tr>
    <td>898</td>
    <td><a href="/player/2272/jack-orlando/" target="_blank">Jack Orlando</a></td>
    <td>130.0</td>
    <td>12.2</td>
    <td>7877.4</td>
    <td>Five Star</td>
</tr>

<tr>
    <td>899</td>
    <td><a href="/player/3166/joshua-flores/" target="_blank">Joshua Flores</a></td>
    <td>125.0</td>
    <td>13.5</td>
    <td>7877.4</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>900</td>
    <td><a href="/player/1504/philip-dellacroce/" target="_blank">Philip DellaCroce</a></td>
    <td>110.4</td>
    <td>14.5</td>
    <td>7875.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>901</td>
    <td><a href="/player/2703/claribel-kirk/" target="_blank">Claribel Kirk</a></td>
    <td>115.2</td>
    <td>13.9</td>
    <td>7873.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>902</td>
    <td><a href="/player/552/landon-kearns/" target="_blank">Landon Kearns</a></td>
    <td>102.6</td>
    <td>13.9</td>
    <td>7869.8</td>
    <td>EBWC</td>
</tr>

<tr>
    <td>903</td>
    <td><a href="/player/3421/traelin-white/" target="_blank">Traelin White</a></td>
    <td>118.8</td>
    <td>9.2</td>
    <td>7868.8</td>
    <td>Pontiac Huskies</td>
</tr>

<tr>
    <td>904</td>
    <td><a href="/player/561/harrison-gordon/" target="_blank">Harrison Gordon</a></td>
    <td>104.8</td>
    <td>14.8</td>
    <td>7866.9</td>
    <td>marlboro</td>
</tr>

<tr>
    <td>905</td>
    <td><a href="/player/1814/liam-evanko/" target="_blank">Liam Evanko</a></td>
    <td>114.7</td>
    <td>12.2</td>
    <td>7866.3</td>
    <td>Altered Beast</td>
</tr>

<tr>
    <td>906</td>
    <td><a href="/player/1875/dean-sitler/" target="_blank">Dean Sitler</a></td>
    <td>109.4</td>
    <td>13.4</td>
    <td>7864.8</td>
    <td>RaZor</td>
</tr>

<tr>
    <td>907</td>
    <td><a href="/player/2916/james-moore/" target="_blank">James Moore</a></td>
    <td>99.7</td>
    <td>12.5</td>
    <td>7856.2</td>
    <td>Michigan Revolution</td>
</tr>

<tr>
    <td>908</td>
    <td><a href="/player/1645/travis-appell/" target="_blank">Travis Appell</a></td>
    <td>117.6</td>
    <td>13.6</td>
    <td>7855.3</td>
    <td>Putnam Valley</td>
</tr>

<tr>
    <td>909</td>
    <td><a href="/player/1536/patrick-vanroten/" target="_blank">Patrick VanRoten</a></td>
    <td>134.4</td>
    <td>14.8</td>
    <td>7855.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>910</td>
    <td><a href="/player/1590/joe-castellone/" target="_blank">Joe Castellone</a></td>
    <td>116.8</td>
    <td>14.8</td>
    <td>7852.7</td>
    <td>Mayo Quanchi</td>
</tr>

<tr>
    <td>911</td>
    <td><a href="/player/1427/dylan-collins/" target="_blank">Dylan Collins</a></td>
    <td>115.0</td>
    <td>15.7</td>
    <td>7852.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>912</td>
    <td><a href="/player/2736/brian-colandino/" target="_blank">Brian Colandino</a></td>
    <td>115.0</td>
    <td>12.3</td>
    <td>7852.2</td>
    <td>Pleasant Valley</td>
</tr>

<tr>
    <td>913</td>
    <td><a href="/player/3114/volodymyr-gnatiuk/" target="_blank">Volodymyr Gnatiuk</a></td>
    <td>115.0</td>
    <td>12.5</td>
    <td>7852.2</td>
    <td>Elite Wrestling Academy</td>
</tr>

<tr>
    <td>914</td>
    <td><a href="/player/1803/troy-jones/" target="_blank">Troy Jones</a></td>
    <td>101.6</td>
    <td>13.0</td>
    <td>7852.1</td>
    <td>Lake Lehman</td>
</tr>

<tr>
    <td>915</td>
    <td><a href="/player/2759/sierra-ripka/" target="_blank">Sierra Ripka</a></td>
    <td>134.9</td>
    <td>12.3</td>
    <td>7845.3</td>
    <td>Altered Beast</td>
</tr>

<tr>
    <td>916</td>
    <td><a href="/player/1452/maynor-milian/" target="_blank">Maynor Milian</a></td>
    <td>142.2</td>
    <td>15.1</td>
    <td>7844.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>917</td>
    <td><a href="/player/2118/jimmy-lally/" target="_blank">Jimmy Lally</a></td>
    <td>99.6</td>
    <td>13.0</td>
    <td>7842.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>918</td>
    <td><a href="/player/1652/ryan-schimpf/" target="_blank">Ryan Schimpf</a></td>
    <td>102.0</td>
    <td>14.2</td>
    <td>7840.5</td>
    <td>Cherry Hill</td>
</tr>

<tr>
    <td>919</td>
    <td><a href="/player/3177/patrick-sharkey/" target="_blank">Patrick Sharkey</a></td>
    <td>117.0</td>
    <td>14.7</td>
    <td>7840.1</td>
    <td>Hammers</td>
</tr>

<tr>
    <td>920</td>
    <td><a href="/player/748/erik-stromberg/" target="_blank">Erik Stromberg</a></td>
    <td>111.8</td>
    <td>15.5</td>
    <td>7839.8</td>
    <td>Monroe Township</td>
</tr>

<tr>
    <td>921</td>
    <td><a href="/player/2130/johnna-romanek/" target="_blank">Johnna Romanek</a></td>
    <td>142.2</td>
    <td>16.0</td>
    <td>7839.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>922</td>
    <td><a href="/player/1660/brandon-massey/" target="_blank">Brandon Massey</a></td>
    <td>104.0</td>
    <td>15.1</td>
    <td>7836.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>923</td>
    <td><a href="/player/1073/enoch-rowley/" target="_blank">Enoch Rowley</a></td>
    <td>118.4</td>
    <td>12.6</td>
    <td>7829.7</td>
    <td>UFC Worriers</td>
</tr>

<tr>
    <td>924</td>
    <td><a href="/player/3396/kamia-fielder-pierce/" target="_blank">Kamia Fielder-Pierce</a></td>
    <td>106.0</td>
    <td>14.7</td>
    <td>7827.7</td>
    <td>Rev</td>
</tr>

<tr>
    <td>925</td>
    <td><a href="/player/1925/michael-schnyer/" target="_blank">Michael Schnyer</a></td>
    <td>119.6</td>
    <td>14.2</td>
    <td>7824.1</td>
    <td>ProEx</td>
</tr>

<tr>
    <td>926</td>
    <td><a href="/player/3351/ryan-kantola/" target="_blank">Ryan Kantola</a></td>
    <td>119.4</td>
    <td>14.9</td>
    <td>7822.7</td>
    <td>REV</td>
</tr>

<tr>
    <td>927</td>
    <td><a href="/player/1575/michael-simpfenderfer/" target="_blank">Michael Simpfenderfer</a></td>
    <td>131.0</td>
    <td>14.3</td>
    <td>7814.2</td>
    <td>Wappingersfalls</td>
</tr>

<tr>
    <td>928</td>
    <td><a href="/player/538/logan-alfalla/" target="_blank">Logan Alfalla</a></td>
    <td>98.4</td>
    <td>13.1</td>
    <td>7809.7</td>
    <td>dynamic</td>
</tr>

<tr>
    <td>929</td>
    <td><a href="/player/3116/luke-humphrey/" target="_blank">Luke Humphrey</a></td>
    <td>114.0</td>
    <td>12.8</td>
    <td>7807.6</td>
    <td>Raw 241</td>
</tr>

<tr>
    <td>930</td>
    <td><a href="/player/951/lee-faber/" target="_blank">Lee Faber</a></td>
    <td>104.8</td>
    <td>13.3</td>
    <td>7803.6</td>
    <td>Blue  Wave Wrestling Club</td>
</tr>

<tr>
    <td>931</td>
    <td><a href="/player/2956/jacob-chase/" target="_blank">Jacob Chase</a></td>
    <td>107.1</td>
    <td>14.1</td>
    <td>7799.8</td>
    <td>Hawkeyes W/C</td>
</tr>

<tr>
    <td>932</td>
    <td><a href="/player/3024/rafe-fonte/" target="_blank">Rafe Fonte</a></td>
    <td>104.4</td>
    <td>13.8</td>
    <td>7798.7</td>
    <td>Buxton</td>
</tr>

<tr>
    <td>933</td>
    <td><a href="/player/474/billy-colloca/" target="_blank">Billy colloca</a></td>
    <td>106.8</td>
    <td>13.4</td>
    <td>7795.2</td>
    <td>West Babylon</td>
</tr>

<tr>
    <td>934</td>
    <td><a href="/player/2959/landon-rich/" target="_blank">Landon Rich</a></td>
    <td>126.4</td>
    <td>12.6</td>
    <td>7793.0</td>
    <td>Woodmore Wildcats</td>
</tr>

<tr>
    <td>935</td>
    <td><a href="/player/2778/liam-english/" target="_blank">Liam English</a></td>
    <td>94.1</td>
    <td>13.3</td>
    <td>7789.7</td>
    <td>Journeymen</td>
</tr>

<tr>
    <td>936</td>
    <td><a href="/player/1033/vasili-ragavanis/" target="_blank">Vasili Ragavanis</a></td>
    <td>99.6</td>
    <td>13.5</td>
    <td>7788.1</td>
    <td>Blue Wave</td>
</tr>

<tr>
    <td>937</td>
    <td><a href="/player/684/kevin-ciosek/" target="_blank">Kevin Ciosek</a></td>
    <td>121.6</td>
    <td>17.0</td>
    <td>7781.6</td>
    <td>centereach</td>
</tr>

<tr>
    <td>938</td>
    <td><a href="/player/2364/wyatt-milich/" target="_blank">wyatt milich</a></td>
    <td>141.2</td>
    <td>12.8</td>
    <td>7775.1</td>
    <td>accomsett middle school</td>
</tr>

<tr>
    <td>939</td>
    <td><a href="/player/620/isaiah-jackson/" target="_blank">Isaiah Jackson</a></td>
    <td>109.0</td>
    <td>16.5</td>
    <td>7774.5</td>
    <td>Glen Cove</td>
</tr>

<tr>
    <td>940</td>
    <td><a href="/player/1064/yurii-sheremet/" target="_blank">Yurii Sheremet</a></td>
    <td>120.6</td>
    <td>12.3</td>
    <td>7767.9</td>
    <td>Lindenhurst Wrestling Club</td>
</tr>

<tr>
    <td>941</td>
    <td><a href="/player/1171/ismael-ali-barreto/" target="_blank">Ismael Ali-Barreto</a></td>
    <td>127.2</td>
    <td>9.9</td>
    <td>7766.3</td>
    <td>Valley stream youth wrestling club</td>
</tr>

<tr>
    <td>942</td>
    <td><a href="/player/1374/tanner-bucher/" target="_blank">Tanner Bucher</a></td>
    <td>113.0</td>
    <td>15.6</td>
    <td>7762.7</td>
    <td>Rocky point</td>
</tr>

<tr>
    <td>943</td>
    <td><a href="/player/1970/dino-savvas/" target="_blank">Dino Savvas</a></td>
    <td>117.4</td>
    <td>13.2</td>
    <td>7762.7</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>944</td>
    <td><a href="/player/1666/danny-ou/" target="_blank">Danny Ou</a></td>
    <td>108.4</td>
    <td>15.5</td>
    <td>7761.0</td>
    <td>Fresh Meadows</td>
</tr>

<tr>
    <td>945</td>
    <td><a href="/player/1512/jack-coffey/" target="_blank">Jack Coffey</a></td>
    <td>119.8</td>
    <td>14.8</td>
    <td>7757.1</td>
    <td>East Meadow</td>
</tr>

<tr>
    <td>946</td>
    <td><a href="/player/1702/ilir-pasholli/" target="_blank">ilir pasholli</a></td>
    <td>106.0</td>
    <td>15.9</td>
    <td>7756.0</td>
    <td>smithtown west</td>
</tr>

<tr>
    <td>947</td>
    <td><a href="/player/1459/james-toscano/" target="_blank">James Toscano</a></td>
    <td>124.8</td>
    <td>13.3</td>
    <td>7755.4</td>
    <td>Seaford</td>
</tr>

<tr>
    <td>948</td>
    <td><a href="/player/3411/michael-cappellano/" target="_blank">Michael Cappellano</a></td>
    <td>124.1</td>
    <td>15.0</td>
    <td>7755.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>949</td>
    <td><a href="/player/3009/dylan-evitts/" target="_blank">Dylan Evitts</a></td>
    <td>117.0</td>
    <td>13.4</td>
    <td>7752.6</td>
    <td>Dearborn</td>
</tr>

<tr>
    <td>950</td>
    <td><a href="/player/2489/matias-galarza/" target="_blank">Matias Galarza</a></td>
    <td>112.4</td>
    <td>14.5</td>
    <td>7750.7</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>951</td>
    <td><a href="/player/1945/thaddeus-saunders/" target="_blank">Thaddeus Saunders</a></td>
    <td>142.2</td>
    <td>10.7</td>
    <td>7747.0</td>
    <td>Rochester Middle School</td>
</tr>

<tr>
    <td>952</td>
    <td><a href="/player/3182/travis-baker/" target="_blank">Travis Baker</a></td>
    <td>128.5</td>
    <td>9.3</td>
    <td>7746.6</td>
    <td>Dearborn Heights Wildcats</td>
</tr>

<tr>
    <td>953</td>
    <td><a href="/player/2117/vincent-grant/" target="_blank">Vincent Grant</a></td>
    <td>117.8</td>
    <td>13.1</td>
    <td>7742.4</td>
    <td>Nashua BAGC</td>
</tr>

<tr>
    <td>954</td>
    <td><a href="/player/2249/kyle-weeks/" target="_blank">Kyle Weeks</a></td>
    <td>125.2</td>
    <td>14.0</td>
    <td>7741.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>955</td>
    <td><a href="/player/2262/bobby-gammons/" target="_blank">Bobby Gammons</a></td>
    <td>130.2</td>
    <td>13.8</td>
    <td>7740.6</td>
    <td>Port Washington PYA</td>
</tr>

<tr>
    <td>956</td>
    <td><a href="/player/2886/deacon-macneill/" target="_blank">Deacon MacNeill</a></td>
    <td>102.0</td>
    <td>12.3</td>
    <td>7740.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>957</td>
    <td><a href="/player/1939/kayden-cole/" target="_blank">Kayden Cole</a></td>
    <td>106.0</td>
    <td>14.1</td>
    <td>7736.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>958</td>
    <td><a href="/player/2540/mattie-mccarthy/" target="_blank">Mattie McCarthy</a></td>
    <td>106.0</td>
    <td>15.3</td>
    <td>7736.6</td>
    <td></td>
</tr>

<tr>
    <td>959</td>
    <td><a href="/player/1205/javen-taff/" target="_blank">Javen Taff</a></td>
    <td>108.0</td>
    <td>9.9</td>
    <td>7731.9</td>
    <td>Sayville WC</td>
</tr>

<tr>
    <td>960</td>
    <td><a href="/player/1414/bavly-halaka/" target="_blank">Bavly Halaka</a></td>
    <td>112.6</td>
    <td>15.8</td>
    <td>7723.7</td>
    <td>Bayonne</td>
</tr>

<tr>
    <td>961</td>
    <td><a href="/player/2639/michael-guida/" target="_blank">Michael Guida</a></td>
    <td>104.6</td>
    <td>13.6</td>
    <td>7722.0</td>
    <td>Samoset</td>
</tr>

<tr>
    <td>962</td>
    <td><a href="/player/2075/emanuel-perez/" target="_blank">Emanuel Perez</a></td>
    <td>106.0</td>
    <td>12.7</td>
    <td>7720.6</td>
    <td>londonderry storm</td>
</tr>

<tr>
    <td>963</td>
    <td><a href="/player/3356/landon-musgrave/" target="_blank">Landon Musgrave</a></td>
    <td>97.2</td>
    <td>14.2</td>
    <td>7720.0</td>
    <td>Lowell</td>
</tr>

<tr>
    <td>964</td>
    <td><a href="/player/2083/jack-okeefe/" target="_blank">Jack O'Keefe</a></td>
    <td>112.0</td>
    <td>13.4</td>
    <td>7717.4</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>965</td>
    <td><a href="/player/3117/kylie-gudewitz/" target="_blank">Kylie Gudewitz</a></td>
    <td>112.0</td>
    <td>12.6</td>
    <td>7717.4</td>
    <td>Predators</td>
</tr>

<tr>
    <td>966</td>
    <td><a href="/player/2625/jayden-burney/" target="_blank">Jayden Burney</a></td>
    <td>114.0</td>
    <td>13.7</td>
    <td>7715.6</td>
    <td>East Hartford Stingers</td>
</tr>

<tr>
    <td>967</td>
    <td><a href="/player/1640/carlo-tucci/" target="_blank">Carlo Tucci</a></td>
    <td>102.0</td>
    <td>11.3</td>
    <td>7710.8</td>
    <td>Norwalk MadBulls</td>
</tr>

<tr>
    <td>968</td>
    <td><a href="/player/838/luca-turano/" target="_blank">Luca Turano</a></td>
    <td>120.0</td>
    <td>10.0</td>
    <td>7709.3</td>
    <td>North Babylon</td>
</tr>

<tr>
    <td>969</td>
    <td><a href="/player/2017/mason-mizula/" target="_blank">Mason Mizula</a></td>
    <td>105.6</td>
    <td>13.8</td>
    <td>7707.6</td>
    <td>BGCGN</td>
</tr>

<tr>
    <td>970</td>
    <td><a href="/player/2843/carden-wagner/" target="_blank">Carden Wagner</a></td>
    <td>102.4</td>
    <td>13.1</td>
    <td>7702.1</td>
    <td>Bvrtc</td>
</tr>

<tr>
    <td>971</td>
    <td><a href="/player/612/luke-inzirillo/" target="_blank">Luke Inzirillo</a></td>
    <td>106.2</td>
    <td>17.1</td>
    <td>7699.0</td>
    <td>Pro-Ex</td>
</tr>

<tr>
    <td>972</td>
    <td><a href="/player/1343/nicholas-singer/" target="_blank">Nicholas Singer</a></td>
    <td>87.6</td>
    <td>11.0</td>
    <td>7697.0</td>
    <td>Mad Bulls</td>
</tr>

<tr>
    <td>973</td>
    <td><a href="/player/2575/anthony-araque/" target="_blank">Anthony Araque</a></td>
    <td>118.6</td>
    <td>15.0</td>
    <td>7692.9</td>
    <td>5PointsWrestleing</td>
</tr>

<tr>
    <td>974</td>
    <td><a href="/player/2309/xandder-ky/" target="_blank">Xandder Ky</a></td>
    <td>135.4</td>
    <td>12.9</td>
    <td>7692.5</td>
    <td>Smithtown East</td>
</tr>

<tr>
    <td>975</td>
    <td><a href="/player/719/ciro-perrone/" target="_blank">Ciro Perrone</a></td>
    <td>118.4</td>
    <td>9.9</td>
    <td>7691.8</td>
    <td>Gladiators</td>
</tr>

<tr>
    <td>976</td>
    <td><a href="/player/1469/carmine-dinovi/" target="_blank">Carmine DiNovi</a></td>
    <td>84.4</td>
    <td>12.8</td>
    <td>7691.6</td>
    <td>Salk Middle Schook</td>
</tr>

<tr>
    <td>977</td>
    <td><a href="/player/3002/matthew-mercado/" target="_blank">Matthew Mercado</a></td>
    <td>126.9</td>
    <td>13.3</td>
    <td>7690.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>978</td>
    <td><a href="/player/2975/robert-seeger/" target="_blank">Robert Seeger</a></td>
    <td>134.7</td>
    <td>11.2</td>
    <td>7689.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>979</td>
    <td><a href="/player/2511/manny-delgado/" target="_blank">Manny Delgado</a></td>
    <td>108.8</td>
    <td>15.4</td>
    <td>7687.2</td>
    <td>Highlanders</td>
</tr>

<tr>
    <td>980</td>
    <td><a href="/player/2780/gabriel-english/" target="_blank">Gabriel English</a></td>
    <td>94.2</td>
    <td>13.3</td>
    <td>7686.3</td>
    <td>Journeymen</td>
</tr>

<tr>
    <td>981</td>
    <td><a href="/player/2104/levi-locke/" target="_blank">Levi Locke</a></td>
    <td>110.6</td>
    <td>11.5</td>
    <td>7684.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>982</td>
    <td><a href="/player/639/joe-campanile/" target="_blank">joe campanile</a></td>
    <td>121.0</td>
    <td>16.0</td>
    <td>7683.0</td>
    <td>smithtown east</td>
</tr>

<tr>
    <td>983</td>
    <td><a href="/player/1280/luke-ruiz/" target="_blank">Luke Ruiz</a></td>
    <td>120.6</td>
    <td>13.4</td>
    <td>7675.6</td>
    <td>UFC</td>
</tr>

<tr>
    <td>984</td>
    <td><a href="/player/2597/justyce-midgett/" target="_blank">Justyce Midgett</a></td>
    <td>124.2</td>
    <td>13.6</td>
    <td>7672.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>985</td>
    <td><a href="/player/768/edgar-moreno/" target="_blank">Edgar Moreno</a></td>
    <td>118.0</td>
    <td>16.6</td>
    <td>7671.6</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>986</td>
    <td><a href="/player/2428/colin-donovan/" target="_blank">colin donovan</a></td>
    <td>135.0</td>
    <td>8.1</td>
    <td>7669.8</td>
    <td>NYWA</td>
</tr>

<tr>
    <td>987</td>
    <td><a href="/player/3374/carter-cichocki/" target="_blank">Carter Cichocki</a></td>
    <td>101.7</td>
    <td>14.2</td>
    <td>7669.2</td>
    <td>Lowell Wrestling Club</td>
</tr>

<tr>
    <td>988</td>
    <td><a href="/player/988/blake-bender/" target="_blank">blake bender</a></td>
    <td>112.8</td>
    <td>9.7</td>
    <td>7667.7</td>
    <td>huntington station</td>
</tr>

<tr>
    <td>989</td>
    <td><a href="/player/2990/melvin-dbrewer/" target="_blank">Melvin Dbrewer</a></td>
    <td>111.4</td>
    <td>17.7</td>
    <td>7650.0</td>
    <td>Arthur hill</td>
</tr>

<tr>
    <td>990</td>
    <td><a href="/player/2794/mariella-koufalis/" target="_blank">Mariella Koufalis</a></td>
    <td>118.9</td>
    <td>15.2</td>
    <td>7641.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>991</td>
    <td><a href="/player/1728/vinny-milito/" target="_blank">Vinny Milito</a></td>
    <td>112.2</td>
    <td>15.1</td>
    <td>7636.6</td>
    <td>Sachem north</td>
</tr>

<tr>
    <td>992</td>
    <td><a href="/player/788/jace-yannucciello/" target="_blank">Jace Yannucciello</a></td>
    <td>110.0</td>
    <td>14.4</td>
    <td>7632.6</td>
    <td>Ascend</td>
</tr>

<tr>
    <td>993</td>
    <td><a href="/player/1767/sean-searing/" target="_blank">Sean Searing</a></td>
    <td>113.0</td>
    <td>12.1</td>
    <td>7632.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>994</td>
    <td><a href="/player/3012/michael-versailles/" target="_blank">Michael Versailles</a></td>
    <td>116.7</td>
    <td>14.5</td>
    <td>7632.3</td>
    <td>Lakeville Falcons</td>
</tr>

<tr>
    <td>995</td>
    <td><a href="/player/3307/maximus-kern/" target="_blank">maximus kern</a></td>
    <td>108.0</td>
    <td>13.2</td>
    <td>7631.9</td>
    <td>yale street</td>
</tr>

<tr>
    <td>996</td>
    <td><a href="/player/948/greyson-meak/" target="_blank">Greyson Meak</a></td>
    <td>110.0</td>
    <td>11.9</td>
    <td>7625.5</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>997</td>
    <td><a href="/player/1368/michael-kummerer/" target="_blank">Michael Kummerer</a></td>
    <td>110.0</td>
    <td>12.8</td>
    <td>7625.5</td>
    <td>Oley</td>
</tr>

<tr>
    <td>998</td>
    <td><a href="/player/2720/christian-tagliati/" target="_blank">Christian Tagliati</a></td>
    <td>110.0</td>
    <td>11.9</td>
    <td>7625.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>999</td>
    <td><a href="/player/2515/anthony-stanco/" target="_blank">Anthony Stanco</a></td>
    <td>128.4</td>
    <td>13.0</td>
    <td>7623.8</td>
    <td>self</td>
</tr>

<tr>
    <td>1000</td>
    <td><a href="/player/2503/joseph-filocamo/" target="_blank">Joseph Filocamo</a></td>
    <td>114.2</td>
    <td>12.4</td>
    <td>7615.3</td>
    <td>Island trees</td>
</tr>

<tr>
    <td>1001</td>
    <td><a href="/player/2509/matthew-walsh/" target="_blank">Matthew Walsh</a></td>
    <td>111.2</td>
    <td>15.2</td>
    <td>7612.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1002</td>
    <td><a href="/player/495/camryn-howard/" target="_blank">Camryn Howard</a></td>
    <td>89.5</td>
    <td>11.4</td>
    <td>7610.3</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1003</td>
    <td><a href="/player/2815/gyonni-gordon/" target="_blank">Gyonni Gordon</a></td>
    <td>109.6</td>
    <td>11.7</td>
    <td>7606.9</td>
    <td>Overbrook</td>
</tr>

<tr>
    <td>1004</td>
    <td><a href="/player/1542/jackson-brady/" target="_blank">Jackson Brady</a></td>
    <td>111.6</td>
    <td>14.0</td>
    <td>7606.8</td>
    <td>Goshen, Hudson Valley Wrestling Academy</td>
</tr>

<tr>
    <td>1005</td>
    <td><a href="/player/2357/markus-walker/" target="_blank">Markus Walker</a></td>
    <td>118.2</td>
    <td>12.1</td>
    <td>7604.6</td>
    <td>VHW</td>
</tr>

<tr>
    <td>1006</td>
    <td><a href="/player/1774/jake-bohm/" target="_blank">Jake Bohm</a></td>
    <td>106.8</td>
    <td>14.0</td>
    <td>7602.1</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1007</td>
    <td><a href="/player/2092/peter-suozzo/" target="_blank">Peter Suozzo</a></td>
    <td>111.6</td>
    <td>13.3</td>
    <td>7591.2</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>1008</td>
    <td><a href="/player/944/vince-marshall/" target="_blank">Vince Marshall</a></td>
    <td>119.6</td>
    <td>10.9</td>
    <td>7585.2</td>
    <td>Connetquot</td>
</tr>

<tr>
    <td>1009</td>
    <td><a href="/player/1310/nicholas-sevilla/" target="_blank">Nicholas sevilla</a></td>
    <td>103.4</td>
    <td>11.7</td>
    <td>7582.5</td>
    <td>Huntington</td>
</tr>

<tr>
    <td>1010</td>
    <td><a href="/player/1140/tekayla-jerrick/" target="_blank">Tekayla Jerrick</a></td>
    <td>111.2</td>
    <td>13.4</td>
    <td>7582.0</td>
    <td>Copiague</td>
</tr>

<tr>
    <td>1011</td>
    <td><a href="/player/739/alfonso-di-liberto/" target="_blank">alfonso di liberto</a></td>
    <td>109.0</td>
    <td>13.0</td>
    <td>7578.9</td>
    <td>ELITE</td>
</tr>

<tr>
    <td>1012</td>
    <td><a href="/player/1532/stanley-grom/" target="_blank">Stanley Grom</a></td>
    <td>110.2</td>
    <td>12.9</td>
    <td>7569.6</td>
    <td>North Rockland Mat Club</td>
</tr>

<tr>
    <td>1013</td>
    <td><a href="/player/656/anthony-gentile/" target="_blank">Anthony Gentile</a></td>
    <td>113.0</td>
    <td>16.0</td>
    <td>7567.9</td>
    <td>Quiet Storm East</td>
</tr>

<tr>
    <td>1014</td>
    <td><a href="/player/2367/jayden-medina/" target="_blank">Jayden Medina</a></td>
    <td>108.4</td>
    <td>13.6</td>
    <td>7567.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1015</td>
    <td><a href="/player/1784/levi-landry/" target="_blank">Levi Landry</a></td>
    <td>128.6</td>
    <td>11.4</td>
    <td>7565.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1016</td>
    <td><a href="/player/2827/ethan-aftewicz/" target="_blank">Ethan Aftewicz</a></td>
    <td>87.5</td>
    <td>11.4</td>
    <td>7563.7</td>
    <td>Pittston area</td>
</tr>

<tr>
    <td>1017</td>
    <td><a href="/player/3107/gabriel-gibbons/" target="_blank">Gabriel Gibbons</a></td>
    <td>106.1</td>
    <td>13.4</td>
    <td>7557.0</td>
    <td>NBWC</td>
</tr>

<tr>
    <td>1018</td>
    <td><a href="/player/2520/kobe-mejia/" target="_blank">Kobe Mejia</a></td>
    <td>118.2</td>
    <td>15.6</td>
    <td>7556.9</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>1019</td>
    <td><a href="/player/1378/alex-greco/" target="_blank">alex greco</a></td>
    <td>102.0</td>
    <td>13.8</td>
    <td>7551.2</td>
    <td>vision</td>
</tr>

<tr>
    <td>1020</td>
    <td><a href="/player/2527/angel-banegas/" target="_blank">Angel Banegas</a></td>
    <td>98.0</td>
    <td>14.6</td>
    <td>7548.1</td>
    <td>5 Points Wrestling</td>
</tr>

<tr>
    <td>1021</td>
    <td><a href="/player/1045/deen-khwaja/" target="_blank">Deen Khwaja</a></td>
    <td>117.8</td>
    <td>11.1</td>
    <td>7547.0</td>
    <td>Quiet Storm</td>
</tr>

<tr>
    <td>1022</td>
    <td><a href="/player/1238/connor-marchione/" target="_blank">Connor Marchione</a></td>
    <td>116.6</td>
    <td>13.5</td>
    <td>7545.2</td>
    <td>smithtown</td>
</tr>

<tr>
    <td>1023</td>
    <td><a href="/player/2247/brandon-hauk/" target="_blank">Brandon Hauk</a></td>
    <td>127.4</td>
    <td>14.2</td>
    <td>7543.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1024</td>
    <td><a href="/player/1503/craig-mangio/" target="_blank">Craig Mangio</a></td>
    <td>115.4</td>
    <td>13.9</td>
    <td>7543.3</td>
    <td>Farmingdale</td>
</tr>

<tr>
    <td>1025</td>
    <td><a href="/player/1793/ayushman-choudhury/" target="_blank">Ayushman Choudhury</a></td>
    <td>109.6</td>
    <td>15.9</td>
    <td>7542.1</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1026</td>
    <td><a href="/player/1386/christian-pareja/" target="_blank">Christian Pareja</a></td>
    <td>110.8</td>
    <td>13.0</td>
    <td>7540.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1027</td>
    <td><a href="/player/742/brandon-bayer/" target="_blank">Brandon Bayer</a></td>
    <td>104.0</td>
    <td>15.0</td>
    <td>7540.0</td>
    <td>Rhino Wrestling</td>
</tr>

<tr>
    <td>1028</td>
    <td><a href="/player/2675/aiden-kirk/" target="_blank">Aiden Kirk</a></td>
    <td>97.6</td>
    <td>12.3</td>
    <td>7536.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1029</td>
    <td><a href="/player/1377/robert-mcdowell/" target="_blank">Robert McDowell</a></td>
    <td>115.8</td>
    <td>13.4</td>
    <td>7534.2</td>
    <td>Gloucester City</td>
</tr>

<tr>
    <td>1030</td>
    <td><a href="/player/1559/seth-frendel/" target="_blank">Seth Frendel</a></td>
    <td>109.0</td>
    <td>13.9</td>
    <td>7532.9</td>
    <td></td>
</tr>

<tr>
    <td>1031</td>
    <td><a href="/player/1634/benjahmin-wilcox/" target="_blank">Benjahmin Wilcox</a></td>
    <td>124.6</td>
    <td>12.0</td>
    <td>7531.2</td>
    <td>Top Flight</td>
</tr>

<tr>
    <td>1032</td>
    <td><a href="/player/687/william-winter/" target="_blank">William Winter</a></td>
    <td>113.6</td>
    <td>14.1</td>
    <td>7530.2</td>
    <td>william floyd</td>
</tr>

<tr>
    <td>1033</td>
    <td><a href="/player/2906/max-rosen/" target="_blank">Max Rosen</a></td>
    <td>107.9</td>
    <td>13.8</td>
    <td>7522.2</td>
    <td>Addison Street Wrestling Cllub</td>
</tr>

<tr>
    <td>1034</td>
    <td><a href="/player/547/michael-bruno/" target="_blank">Michael Bruno</a></td>
    <td>114.6</td>
    <td>14.3</td>
    <td>7521.7</td>
    <td>Marlboro</td>
</tr>

<tr>
    <td>1035</td>
    <td><a href="/player/1482/steven-clark-jr/" target="_blank">Steven Clark jr</a></td>
    <td>131.2</td>
    <td>13.6</td>
    <td>7520.5</td>
    <td>Wantagh warriors</td>
</tr>

<tr>
    <td>1036</td>
    <td><a href="/player/2535/matteo-kanakaris/" target="_blank">Matteo Kanakaris</a></td>
    <td>100.6</td>
    <td>16.1</td>
    <td>7519.3</td>
    <td>North Shore Vikings</td>
</tr>

<tr>
    <td>1037</td>
    <td><a href="/player/1768/jared-chuquilin/" target="_blank">Jared Chuquilin</a></td>
    <td>101.4</td>
    <td>15.4</td>
    <td>7518.1</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1038</td>
    <td><a href="/player/2024/caden-bruseo/" target="_blank">Caden Bruseo</a></td>
    <td>92.2</td>
    <td>13.5</td>
    <td>7515.3</td>
    <td>BGCGN</td>
</tr>

<tr>
    <td>1039</td>
    <td><a href="/player/3094/kaeden-hubbard/" target="_blank">Kaeden Hubbard</a></td>
    <td>95.2</td>
    <td>13.0</td>
    <td>7511.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1040</td>
    <td><a href="/player/2695/aubrey-brown/" target="_blank">Aubrey Brown</a></td>
    <td>114.0</td>
    <td>12.1</td>
    <td>7510.7</td>
    <td>Standfast</td>
</tr>

<tr>
    <td>1041</td>
    <td><a href="/player/1464/ralph-boccio/" target="_blank">Ralph Boccio</a></td>
    <td>102.8</td>
    <td>12.9</td>
    <td>7508.8</td>
    <td>Salk</td>
</tr>

<tr>
    <td>1042</td>
    <td><a href="/player/850/thomas-charlwood/" target="_blank">THOMAS CHARLWOOD</a></td>
    <td>104.2</td>
    <td>13.4</td>
    <td>7505.6</td>
    <td>Lindenhurst</td>
</tr>

<tr>
    <td>1043</td>
    <td><a href="/player/2322/daniel-dobbs/" target="_blank">Daniel Dobbs</a></td>
    <td>128.0</td>
    <td>13.6</td>
    <td>7505.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1044</td>
    <td><a href="/player/2464/frankie-kessner/" target="_blank">Frankie Kessner</a></td>
    <td>102.0</td>
    <td>15.4</td>
    <td>7493.2</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>1045</td>
    <td><a href="/player/3053/bryce-mosher/" target="_blank">Bryce Mosher</a></td>
    <td>103.2</td>
    <td>12.9</td>
    <td>7490.3</td>
    <td>Extreme Wrestling Club</td>
</tr>

<tr>
    <td>1046</td>
    <td><a href="/player/2674/drake-kirk/" target="_blank">Drake Kirk</a></td>
    <td>113.6</td>
    <td>13.8</td>
    <td>7489.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1047</td>
    <td><a href="/player/744/ricardo-balanzategui/" target="_blank">ricardo balanzategui</a></td>
    <td>97.8</td>
    <td>13.6</td>
    <td>7487.6</td>
    <td>bitetto trained</td>
</tr>

<tr>
    <td>1048</td>
    <td><a href="/player/2785/sofia-holodick/" target="_blank">Sofia Holodick</a></td>
    <td>123.4</td>
    <td>13.9</td>
    <td>7483.2</td>
    <td>Altered Beast</td>
</tr>

<tr>
    <td>1049</td>
    <td><a href="/player/942/peter-banculli/" target="_blank">Peter Banculli</a></td>
    <td>99.6</td>
    <td>11.5</td>
    <td>7481.9</td>
    <td>Lindenhurst</td>
</tr>

<tr>
    <td>1050</td>
    <td><a href="/player/614/andre-mcgraime/" target="_blank">Andre Mcgraime</a></td>
    <td>106.4</td>
    <td>13.2</td>
    <td>7480.2</td>
    <td>Smithtown</td>
</tr>

<tr>
    <td>1051</td>
    <td><a href="/player/2606/vincent-amato/" target="_blank">Vincent Amato</a></td>
    <td>125.0</td>
    <td>10.0</td>
    <td>7477.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1052</td>
    <td><a href="/player/617/anthony-diconza/" target="_blank">anthony diconza</a></td>
    <td>113.4</td>
    <td>15.0</td>
    <td>7476.2</td>
    <td>smithtown east</td>
</tr>

<tr>
    <td>1053</td>
    <td><a href="/player/2748/lane-fordyce/" target="_blank">Lane Fordyce</a></td>
    <td>103.7</td>
    <td>12.8</td>
    <td>7468.4</td>
    <td>Compound Ridge</td>
</tr>

<tr>
    <td>1054</td>
    <td><a href="/player/1220/marko-tricarico/" target="_blank">Marko Tricarico</a></td>
    <td>127.6</td>
    <td>11.1</td>
    <td>7466.5</td>
    <td>Longwood</td>
</tr>

<tr>
    <td>1055</td>
    <td><a href="/player/1014/ason-richards/" target="_blank">Ason Richards</a></td>
    <td>92.2</td>
    <td>12.7</td>
    <td>7461.8</td>
    <td>Copiague</td>
</tr>

<tr>
    <td>1056</td>
    <td><a href="/player/1760/jack-cunningham/" target="_blank">Jack Cunningham</a></td>
    <td>115.0</td>
    <td>14.9</td>
    <td>7460.2</td>
    <td>Harborfields</td>
</tr>

<tr>
    <td>1057</td>
    <td><a href="/player/2241/christopher-coluccio/" target="_blank">Christopher Coluccio</a></td>
    <td>109.0</td>
    <td>13.1</td>
    <td>7458.9</td>
    <td>BBP Phantoms</td>
</tr>

<tr>
    <td>1058</td>
    <td><a href="/player/2497/giovanni-troia/" target="_blank">Giovanni Troia</a></td>
    <td>106.6</td>
    <td>14.5</td>
    <td>7458.9</td>
    <td>North Shore</td>
</tr>

<tr>
    <td>1059</td>
    <td><a href="/player/1484/joseph-walsh/" target="_blank">Joseph Walsh</a></td>
    <td>111.6</td>
    <td>13.8</td>
    <td>7457.7</td>
    <td>Dalers</td>
</tr>

<tr>
    <td>1060</td>
    <td><a href="/player/1909/eric-wolf/" target="_blank">eric wolf</a></td>
    <td>108.0</td>
    <td>13.0</td>
    <td>7457.7</td>
    <td>Venom</td>
</tr>

<tr>
    <td>1061</td>
    <td><a href="/player/2471/michael-sales/" target="_blank">Michael Sales</a></td>
    <td>113.6</td>
    <td>15.0</td>
    <td>7457.3</td>
    <td>Wildcats</td>
</tr>

<tr>
    <td>1062</td>
    <td><a href="/player/1052/jovanny-pagan/" target="_blank">Jovanny Pagan</a></td>
    <td>126.0</td>
    <td>10.6</td>
    <td>7456.9</td>
    <td>Gladitators</td>
</tr>

<tr>
    <td>1063</td>
    <td><a href="/player/979/dylan-bulger/" target="_blank">Dylan Bulger</a></td>
    <td>98.8</td>
    <td>12.5</td>
    <td>7455.1</td>
    <td>Bluewave</td>
</tr>

<tr>
    <td>1064</td>
    <td><a href="/player/1050/joseph-viscusi/" target="_blank">Joseph Viscusi</a></td>
    <td>110.0</td>
    <td>13.9</td>
    <td>7455.0</td>
    <td>Blue wave</td>
</tr>

<tr>
    <td>1065</td>
    <td><a href="/player/3039/mason-haines/" target="_blank">Mason Haines</a></td>
    <td>82.5</td>
    <td>12.6</td>
    <td>7452.1</td>
    <td>Dundee</td>
</tr>

<tr>
    <td>1066</td>
    <td><a href="/player/2626/colby-houle/" target="_blank">Colby Houle</a></td>
    <td>84.0</td>
    <td>12.3</td>
    <td>7450.4</td>
    <td>Empire Wrestling Academy</td>
</tr>

<tr>
    <td>1067</td>
    <td><a href="/player/1334/anthony-jackson/" target="_blank">Anthony Jackson</a></td>
    <td>95.6</td>
    <td>11.5</td>
    <td>7449.5</td>
    <td>Spazz</td>
</tr>

<tr>
    <td>1068</td>
    <td><a href="/player/1110/kiani-fauntleroy/" target="_blank">Kiani Fauntleroy</a></td>
    <td>117.6</td>
    <td>10.0</td>
    <td>7449.2</td>
    <td>NESTMADE/COPIAGUE</td>
</tr>

<tr>
    <td>1069</td>
    <td><a href="/player/2699/ava-ward/" target="_blank">ava ward</a></td>
    <td>102.2</td>
    <td>13.6</td>
    <td>7449.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1070</td>
    <td><a href="/player/1874/thomas-smith/" target="_blank">Thomas Smith</a></td>
    <td>106.6</td>
    <td>12.9</td>
    <td>7447.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1071</td>
    <td><a href="/player/2624/cooper-theriault-dinielli/" target="_blank">Cooper Theriault-Dinielli</a></td>
    <td>110.0</td>
    <td>12.2</td>
    <td>7439.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1072</td>
    <td><a href="/player/1502/john-reynolds/" target="_blank">John Reynolds</a></td>
    <td>104.4</td>
    <td>14.5</td>
    <td>7438.9</td>
    <td>kellenberg</td>
</tr>

<tr>
    <td>1073</td>
    <td><a href="/player/2974/meyer-murray/" target="_blank">MEYER MURRAY</a></td>
    <td>92.5</td>
    <td>12.2</td>
    <td>7437.1</td>
    <td>BTWC</td>
</tr>

<tr>
    <td>1074</td>
    <td><a href="/player/1568/ben-davoli/" target="_blank">Ben Davoli</a></td>
    <td>106.0</td>
    <td>15.7</td>
    <td>7436.6</td>
    <td>Haverhill &amp; Smitty’sBarn</td>
</tr>

<tr>
    <td>1075</td>
    <td><a href="/player/3210/zackary-kerico/" target="_blank">Zackary Kerico</a></td>
    <td>106.0</td>
    <td>14.6</td>
    <td>7436.6</td>
    <td>Elite</td>
</tr>

<tr>
    <td>1076</td>
    <td><a href="/player/2730/talan-hubbard/" target="_blank">Talan Hubbard</a></td>
    <td>98.0</td>
    <td>14.2</td>
    <td>7436.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1077</td>
    <td><a href="/player/2645/dylan-walker/" target="_blank">Dylan Walker</a></td>
    <td>117.0</td>
    <td>11.2</td>
    <td>7436.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1078</td>
    <td><a href="/player/2933/connor-mika/" target="_blank">Connor Mika</a></td>
    <td>92.8</td>
    <td>12.0</td>
    <td>7434.6</td>
    <td>APEX wrestling club</td>
</tr>

<tr>
    <td>1079</td>
    <td><a href="/player/668/michael-hernandez/" target="_blank">Michael Hernandez</a></td>
    <td>110.6</td>
    <td>18.3</td>
    <td>7433.4</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>1080</td>
    <td><a href="/player/1676/leonardo-mancini/" target="_blank">Leonardo Mancini</a></td>
    <td>118.6</td>
    <td>13.7</td>
    <td>7432.5</td>
    <td>Salk</td>
</tr>

<tr>
    <td>1081</td>
    <td><a href="/player/2232/joseph-wolk/" target="_blank">Joseph Wolk</a></td>
    <td>134.0</td>
    <td>10.3</td>
    <td>7431.9</td>
    <td>Lynbrook Titan’s</td>
</tr>

<tr>
    <td>1082</td>
    <td><a href="/player/1647/justin-monge/" target="_blank">Justin Monge</a></td>
    <td>109.6</td>
    <td>16.2</td>
    <td>7419.5</td>
    <td>Putnam Valley</td>
</tr>

<tr>
    <td>1083</td>
    <td><a href="/player/1986/abigail-alicandro/" target="_blank">Abigail Alicandro</a></td>
    <td>105.0</td>
    <td>13.9</td>
    <td>7418.5</td>
    <td>Fitchburg Youth</td>
</tr>

<tr>
    <td>1084</td>
    <td><a href="/player/1481/matt-martorana/" target="_blank">Matt Martorana</a></td>
    <td>115.8</td>
    <td>14.5</td>
    <td>7418.0</td>
    <td>Seaford</td>
</tr>

<tr>
    <td>1085</td>
    <td><a href="/player/1771/luke-brazanskas/" target="_blank">Luke Brazanskas</a></td>
    <td>97.4</td>
    <td>13.0</td>
    <td>7412.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1086</td>
    <td><a href="/player/1067/evan-durinick/" target="_blank">Evan Durinick</a></td>
    <td>111.4</td>
    <td>10.7</td>
    <td>7405.9</td>
    <td>Pat-Med</td>
</tr>

<tr>
    <td>1087</td>
    <td><a href="/player/2145/kaiden-gray/" target="_blank">Kaiden Gray</a></td>
    <td>125.0</td>
    <td>11.6</td>
    <td>7405.4</td>
    <td>RMS</td>
</tr>

<tr>
    <td>1088</td>
    <td><a href="/player/730/andrew-davies/" target="_blank">Andrew Davies</a></td>
    <td>104.6</td>
    <td>14.7</td>
    <td>7403.3</td>
    <td>Kinnelon</td>
</tr>

<tr>
    <td>1089</td>
    <td><a href="/player/2806/jaxon-garner/" target="_blank">Jaxon Garner</a></td>
    <td>107.2</td>
    <td>11.9</td>
    <td>7402.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1090</td>
    <td><a href="/player/1664/ryan-bakhshoudeh/" target="_blank">Ryan Bakhshoudeh</a></td>
    <td>104.8</td>
    <td>13.9</td>
    <td>7401.3</td>
    <td>Blue Wave</td>
</tr>

<tr>
    <td>1091</td>
    <td><a href="/player/3431/braydan-lombreglia/" target="_blank">Braydan Lombreglia</a></td>
    <td>90.1</td>
    <td>12.6</td>
    <td>7400.4</td>
    <td>Iron Horse</td>
</tr>

<tr>
    <td>1092</td>
    <td><a href="/player/2178/jackson-gearin/" target="_blank">Jackson Gearin</a></td>
    <td>92.6</td>
    <td>11.3</td>
    <td>7399.3</td>
    <td>Billerica</td>
</tr>

<tr>
    <td>1093</td>
    <td><a href="/player/905/max-heitner/" target="_blank">Max Heitner</a></td>
    <td>110.4</td>
    <td>12.0</td>
    <td>7399.2</td>
    <td>Bethpage</td>
</tr>

<tr>
    <td>1094</td>
    <td><a href="/player/952/chris-holm/" target="_blank">Chris Holm</a></td>
    <td>90.8</td>
    <td>12.8</td>
    <td>7397.4</td>
    <td>Blue Wave</td>
</tr>

<tr>
    <td>1095</td>
    <td><a href="/player/743/stephen-numme/" target="_blank">Stephen Numme</a></td>
    <td>95.8</td>
    <td>12.4</td>
    <td>7396.3</td>
    <td>GPS</td>
</tr>

<tr>
    <td>1096</td>
    <td><a href="/player/2319/nicholas-gesualdi/" target="_blank">Nicholas Gesualdi</a></td>
    <td>123.0</td>
    <td>13.6</td>
    <td>7393.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1097</td>
    <td><a href="/player/2128/avery-gallagher/" target="_blank">Avery Gallagher</a></td>
    <td>109.0</td>
    <td>14.0</td>
    <td>7392.5</td>
    <td>Boys and Girls Club Nashua</td>
</tr>

<tr>
    <td>1098</td>
    <td><a href="/player/1139/david-dones/" target="_blank">David Dones</a></td>
    <td>105.0</td>
    <td>11.4</td>
    <td>7388.3</td>
    <td>RV Wrestling</td>
</tr>

<tr>
    <td>1099</td>
    <td><a href="/player/1773/charlie-gessford/" target="_blank">Charlie Gessford</a></td>
    <td>105.0</td>
    <td>13.5</td>
    <td>7388.3</td>
    <td>Navy jr</td>
</tr>

<tr>
    <td>1100</td>
    <td><a href="/player/2920/wyatt-cross/" target="_blank">Wyatt Cross</a></td>
    <td>89.8</td>
    <td>11.3</td>
    <td>7388.3</td>
    <td>Team Donahoe</td>
</tr>

<tr>
    <td>1101</td>
    <td><a href="/player/2930/blake-israel/" target="_blank">Blake Israel</a></td>
    <td>114.0</td>
    <td>13.1</td>
    <td>7386.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1102</td>
    <td><a href="/player/3082/nas-taalib-deen/" target="_blank">Nas Taalib-Deen</a></td>
    <td>117.0</td>
    <td>10.7</td>
    <td>7386.6</td>
    <td>Junior Panthers</td>
</tr>

<tr>
    <td>1103</td>
    <td><a href="/player/3067/joey-dare/" target="_blank">Joey Dare</a></td>
    <td>99.4</td>
    <td>12.5</td>
    <td>7385.4</td>
    <td>Extreme Wrestling</td>
</tr>

<tr>
    <td>1104</td>
    <td><a href="/player/2587/ethan-becker/" target="_blank">Ethan Becker</a></td>
    <td>125.0</td>
    <td>13.9</td>
    <td>7384.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1105</td>
    <td><a href="/player/2507/logan-williamson/" target="_blank">Logan Williamson</a></td>
    <td>113.0</td>
    <td>13.4</td>
    <td>7380.9</td>
    <td>Sachem / Dynamic</td>
</tr>

<tr>
    <td>1106</td>
    <td><a href="/player/3320/chase-martino/" target="_blank">Chase Martino</a></td>
    <td>95.0</td>
    <td>12.5</td>
    <td>7377.9</td>
    <td>Pride WC</td>
</tr>

<tr>
    <td>1107</td>
    <td><a href="/player/1859/carlo-napolitano/" target="_blank">Carlo Napolitano</a></td>
    <td>108.0</td>
    <td>14.2</td>
    <td>7367.3</td>
    <td>Pro X</td>
</tr>

<tr>
    <td>1108</td>
    <td><a href="/player/616/jonathan-agnoli/" target="_blank">jonathan agnoli</a></td>
    <td>113.0</td>
    <td>14.9</td>
    <td>7362.0</td>
    <td>Macarthur</td>
</tr>

<tr>
    <td>1109</td>
    <td><a href="/player/1894/matthew-ippoliti/" target="_blank">Matthew Ippoliti</a></td>
    <td>116.8</td>
    <td>12.4</td>
    <td>7361.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1110</td>
    <td><a href="/player/2222/ken-vatalaro/" target="_blank">Ken Vatalaro</a></td>
    <td>125.6</td>
    <td>13.0</td>
    <td>7360.7</td>
    <td>Phantoms</td>
</tr>

<tr>
    <td>1111</td>
    <td><a href="/player/3373/cole-cichocki/" target="_blank">Cole Cichocki</a></td>
    <td>92.6</td>
    <td>12.2</td>
    <td>7359.7</td>
    <td>Lowell Wrestling Club</td>
</tr>

<tr>
    <td>1112</td>
    <td><a href="/player/2141/noah-murray/" target="_blank">Noah Murray</a></td>
    <td>114.2</td>
    <td>9.4</td>
    <td>7356.8</td>
    <td>Methuen</td>
</tr>

<tr>
    <td>1113</td>
    <td><a href="/player/3026/nathan-walkowiak/" target="_blank">Nathan Walkowiak</a></td>
    <td>86.2</td>
    <td>13.4</td>
    <td>7355.9</td>
    <td>Shamrock Select</td>
</tr>

<tr>
    <td>1114</td>
    <td><a href="/player/1973/nels-dealmeida/" target="_blank">Nels Dealmeida</a></td>
    <td>102.0</td>
    <td>14.6</td>
    <td>7355.6</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>1115</td>
    <td><a href="/player/3191/jake-olson/" target="_blank">Jake Olson</a></td>
    <td>107.6</td>
    <td>16.0</td>
    <td>7344.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1116</td>
    <td><a href="/player/3108/cameron-bates/" target="_blank">cameron bates</a></td>
    <td>106.7</td>
    <td>12.9</td>
    <td>7343.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1117</td>
    <td><a href="/player/2086/ryan-prentice/" target="_blank">Ryan Prentice</a></td>
    <td>118.6</td>
    <td>10.2</td>
    <td>7343.2</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>1118</td>
    <td><a href="/player/1372/giovanni-duany/" target="_blank">Giovanni Duany</a></td>
    <td>104.0</td>
    <td>13.5</td>
    <td>7339.5</td>
    <td>MPR</td>
</tr>

<tr>
    <td>1119</td>
    <td><a href="/player/834/timothy-mclam/" target="_blank">Timothy McLam</a></td>
    <td>91.4</td>
    <td>13.2</td>
    <td>7332.3</td>
    <td>Bluewave</td>
</tr>

<tr>
    <td>1120</td>
    <td><a href="/player/2777/scott-rider/" target="_blank">Scott Rider</a></td>
    <td>102.2</td>
    <td>12.1</td>
    <td>7331.6</td>
    <td>QYC Wrestling</td>
</tr>

<tr>
    <td>1121</td>
    <td><a href="/player/2469/connor-laregina/" target="_blank">Connor LaRegina</a></td>
    <td>108.2</td>
    <td>14.8</td>
    <td>7331.2</td>
    <td>Whitman</td>
</tr>

<tr>
    <td>1122</td>
    <td><a href="/player/1096/kevin-ray/" target="_blank">Kevin Ray</a></td>
    <td>97.2</td>
    <td>12.2</td>
    <td>7330.8</td>
    <td>Lindenhurst</td>
</tr>

<tr>
    <td>1123</td>
    <td><a href="/player/1601/joseph-stoerzinger/" target="_blank">Joseph Stoerzinger</a></td>
    <td>92.2</td>
    <td>13.5</td>
    <td>7327.4</td>
    <td>MarcAurele</td>
</tr>

<tr>
    <td>1124</td>
    <td><a href="/player/3437/christian-preston/" target="_blank">Christian Preston</a></td>
    <td>107.4</td>
    <td>13.3</td>
    <td>7326.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1125</td>
    <td><a href="/player/2857/ashton-dack/" target="_blank">Ashton Dack</a></td>
    <td>101.6</td>
    <td>11.9</td>
    <td>7315.4</td>
    <td>Northwest Red Crushers</td>
</tr>

<tr>
    <td>1126</td>
    <td><a href="/player/1896/nicholas-fiorentino/" target="_blank">Nicholas Fiorentino</a></td>
    <td>113.0</td>
    <td>12.8</td>
    <td>7309.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1127</td>
    <td><a href="/player/1308/michael-saintecroix/" target="_blank">Michael SainteCroix</a></td>
    <td>102.0</td>
    <td>13.6</td>
    <td>7308.8</td>
    <td>Pitbulls</td>
</tr>

<tr>
    <td>1128</td>
    <td><a href="/player/1632/noah-simard/" target="_blank">Noah Simard</a></td>
    <td>109.6</td>
    <td>10.7</td>
    <td>7305.5</td>
    <td>Bay State Wrestling</td>
</tr>

<tr>
    <td>1129</td>
    <td><a href="/player/2945/christian-kurzeja/" target="_blank">Christian Kurzeja</a></td>
    <td>124.3</td>
    <td>11.9</td>
    <td>7298.5</td>
    <td>Kraken</td>
</tr>

<tr>
    <td>1130</td>
    <td><a href="/player/1714/daniel-ragusa/" target="_blank">Daniel Ragusa</a></td>
    <td>110.6</td>
    <td>16.7</td>
    <td>7298.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1131</td>
    <td><a href="/player/2377/giovanni-dominguez/" target="_blank">giovanni dominguez</a></td>
    <td>92.0</td>
    <td>13.5</td>
    <td>7293.5</td>
    <td>longwood</td>
</tr>

<tr>
    <td>1132</td>
    <td><a href="/player/1836/bobby-constantatos/" target="_blank">Bobby Constantatos</a></td>
    <td>126.6</td>
    <td>13.9</td>
    <td>7291.9</td>
    <td>bluewave</td>
</tr>

<tr>
    <td>1133</td>
    <td><a href="/player/847/tyler-barrero/" target="_blank">Tyler Barrero</a></td>
    <td>103.0</td>
    <td>13.6</td>
    <td>7290.2</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1134</td>
    <td><a href="/player/2549/jesse-osbourne/" target="_blank">Jesse Osbourne</a></td>
    <td>113.0</td>
    <td>12.4</td>
    <td>7287.4</td>
    <td>Ardsley</td>
</tr>

<tr>
    <td>1135</td>
    <td><a href="/player/1082/matthew-pernicone/" target="_blank">Matthew Pernicone</a></td>
    <td>102.6</td>
    <td>12.9</td>
    <td>7280.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1136</td>
    <td><a href="/player/829/joseph-fioravanti/" target="_blank">Joseph Fioravanti</a></td>
    <td>94.4</td>
    <td>14.7</td>
    <td>7276.4</td>
    <td>Dynamic wresteling</td>
</tr>

<tr>
    <td>1137</td>
    <td><a href="/player/533/austin-miller/" target="_blank">Austin Miller</a></td>
    <td>113.2</td>
    <td>13.3</td>
    <td>7273.8</td>
    <td>elite</td>
</tr>

<tr>
    <td>1138</td>
    <td><a href="/player/2688/thomas-redeau/" target="_blank">Thomas Redeau</a></td>
    <td>102.6</td>
    <td>9.4</td>
    <td>7270.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1139</td>
    <td><a href="/player/1586/tristian-braxton/" target="_blank">Tristian Braxton</a></td>
    <td>104.8</td>
    <td>12.2</td>
    <td>7265.6</td>
    <td>Drillmasters</td>
</tr>

<tr>
    <td>1140</td>
    <td><a href="/player/3324/brock-frederick/" target="_blank">Brock Frederick</a></td>
    <td>84.2</td>
    <td>12.4</td>
    <td>7262.5</td>
    <td>Black Belt Wrestling</td>
</tr>

<tr>
    <td>1141</td>
    <td><a href="/player/2450/kenny-sessler/" target="_blank">Kenny Sessler</a></td>
    <td>103.6</td>
    <td>14.8</td>
    <td>7260.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1142</td>
    <td><a href="/player/1895/lucas-vultaggio/" target="_blank">Lucas Vultaggio</a></td>
    <td>129.8</td>
    <td>10.8</td>
    <td>7259.7</td>
    <td>Kings Park</td>
</tr>

<tr>
    <td>1143</td>
    <td><a href="/player/2310/christian-horeis/" target="_blank">Christian Horeis</a></td>
    <td>123.0</td>
    <td>12.3</td>
    <td>7258.2</td>
    <td>Pro EX</td>
</tr>

<tr>
    <td>1144</td>
    <td><a href="/player/2140/james-chaplick/" target="_blank">James Chaplick</a></td>
    <td>92.2</td>
    <td>13.9</td>
    <td>7255.1</td>
    <td>Rawhide</td>
</tr>

<tr>
    <td>1145</td>
    <td><a href="/player/1507/matthew-cangelosi/" target="_blank">matthew cangelosi</a></td>
    <td>119.0</td>
    <td>13.8</td>
    <td>7254.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1146</td>
    <td><a href="/player/2340/david-youngwood/" target="_blank">David Youngwood</a></td>
    <td>110.4</td>
    <td>13.2</td>
    <td>7253.4</td>
    <td>NYC</td>
</tr>

<tr>
    <td>1147</td>
    <td><a href="/player/1361/tyler-verge/" target="_blank">Tyler Verge</a></td>
    <td>93.6</td>
    <td>14.1</td>
    <td>7252.8</td>
    <td>Southern</td>
</tr>

<tr>
    <td>1148</td>
    <td><a href="/player/2198/justin-dvorak/" target="_blank">Justin Dvorak</a></td>
    <td>92.0</td>
    <td>13.5</td>
    <td>7252.6</td>
    <td>Locust Valley Falcons</td>
</tr>

<tr>
    <td>1149</td>
    <td><a href="/player/1868/nicholas-flaherty/" target="_blank">Nicholas Flaherty</a></td>
    <td>97.4</td>
    <td>11.3</td>
    <td>7251.4</td>
    <td>Razor</td>
</tr>

<tr>
    <td>1150</td>
    <td><a href="/player/2769/tyler-ritter/" target="_blank">Tyler Ritter</a></td>
    <td>108.8</td>
    <td>10.5</td>
    <td>7251.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1151</td>
    <td><a href="/player/1353/gavin-wisotsky/" target="_blank">Gavin Wisotsky</a></td>
    <td>98.0</td>
    <td>14.3</td>
    <td>7246.8</td>
    <td>Pro-Ex</td>
</tr>

<tr>
    <td>1152</td>
    <td><a href="/player/1362/dylan-verge/" target="_blank">Dylan Verge</a></td>
    <td>100.4</td>
    <td>12.6</td>
    <td>7243.6</td>
    <td>Southern</td>
</tr>

<tr>
    <td>1153</td>
    <td><a href="/player/3056/grayson-eggleston/" target="_blank">Grayson Eggleston</a></td>
    <td>97.5</td>
    <td>13.3</td>
    <td>7241.3</td>
    <td>Extreme Wrestling</td>
</tr>

<tr>
    <td>1154</td>
    <td><a href="/player/549/dylan-mackie/" target="_blank">Dylan Mackie</a></td>
    <td>110.0</td>
    <td>13.5</td>
    <td>7241.2</td>
    <td>Sayreville</td>
</tr>

<tr>
    <td>1155</td>
    <td><a href="/player/1267/brandon-karwoski/" target="_blank">Brandon Karwoski</a></td>
    <td>102.0</td>
    <td>11.8</td>
    <td>7240.5</td>
    <td>Cordoba Trained</td>
</tr>

<tr>
    <td>1156</td>
    <td><a href="/player/2837/anthony-barra/" target="_blank">Anthony Barra</a></td>
    <td>96.7</td>
    <td>12.3</td>
    <td>7238.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1157</td>
    <td><a href="/player/2094/nasr-abbari/" target="_blank">Nasr Abbari</a></td>
    <td>97.0</td>
    <td>10.9</td>
    <td>7223.4</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>1158</td>
    <td><a href="/player/2594/dominic-repetti/" target="_blank">Dominic Repetti</a></td>
    <td>99.4</td>
    <td>14.4</td>
    <td>7215.5</td>
    <td>Whitman</td>
</tr>

<tr>
    <td>1159</td>
    <td><a href="/player/1399/meral-wadea/" target="_blank">Meral Wadea</a></td>
    <td>114.4</td>
    <td>17.1</td>
    <td>7214.3</td>
    <td>Bayonne High School</td>
</tr>

<tr>
    <td>1160</td>
    <td><a href="/player/932/zachary-rothenberg/" target="_blank">Zachary Rothenberg</a></td>
    <td>95.8</td>
    <td>11.7</td>
    <td>7214.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1161</td>
    <td><a href="/player/1589/elijah-wood/" target="_blank">Elijah Wood</a></td>
    <td>113.8</td>
    <td>11.1</td>
    <td>7209.0</td>
    <td>Mayo Quanchi</td>
</tr>

<tr>
    <td>1162</td>
    <td><a href="/player/1297/ibrahim-khan/" target="_blank">Ibrahim Khan</a></td>
    <td>104.8</td>
    <td>14.7</td>
    <td>7203.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1163</td>
    <td><a href="/player/2184/elizabeth-donovan/" target="_blank">Elizabeth Donovan</a></td>
    <td>93.0</td>
    <td>12.4</td>
    <td>7202.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1164</td>
    <td><a href="/player/2712/charlie-wylie/" target="_blank">Charlie Wylie</a></td>
    <td>84.3</td>
    <td>12.6</td>
    <td>7195.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1165</td>
    <td><a href="/player/1053/evan-thompson/" target="_blank">Evan Thompson</a></td>
    <td>101.0</td>
    <td>13.3</td>
    <td>7190.2</td>
    <td>Eclipse</td>
</tr>

<tr>
    <td>1166</td>
    <td><a href="/player/1104/joe-mervine/" target="_blank">Joe Mervine</a></td>
    <td>101.0</td>
    <td>9.9</td>
    <td>7190.2</td>
    <td>Bts</td>
</tr>

<tr>
    <td>1167</td>
    <td><a href="/player/3189/ryan-maiorana/" target="_blank">Ryan Maiorana</a></td>
    <td>101.0</td>
    <td>13.8</td>
    <td>7190.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1168</td>
    <td><a href="/player/1311/kanye-king/" target="_blank">Kanye King</a></td>
    <td>97.4</td>
    <td>14.3</td>
    <td>7188.2</td>
    <td>Pitbulls</td>
</tr>

<tr>
    <td>1169</td>
    <td><a href="/player/3050/bryan-sterling/" target="_blank">Bryan Sterling</a></td>
    <td>79.3</td>
    <td>13.3</td>
    <td>7188.0</td>
    <td>Dundee</td>
</tr>

<tr>
    <td>1170</td>
    <td><a href="/player/2676/jaxon-foote/" target="_blank">Jaxon Foote</a></td>
    <td>98.2</td>
    <td>12.5</td>
    <td>7181.2</td>
    <td>Pontiac Huskies</td>
</tr>

<tr>
    <td>1171</td>
    <td><a href="/player/2846/malachi-kapenga/" target="_blank">Malachi Kapenga</a></td>
    <td>90.9</td>
    <td>14.3</td>
    <td>7180.6</td>
    <td>Hamilton Hawkeyes</td>
</tr>

<tr>
    <td>1172</td>
    <td><a href="/player/994/michael-mastriano/" target="_blank">Michael Mastriano</a></td>
    <td>122.6</td>
    <td>12.2</td>
    <td>7178.5</td>
    <td>Connetquot</td>
</tr>

<tr>
    <td>1173</td>
    <td><a href="/player/2164/kyle-rhoton/" target="_blank">Kyle Rhoton</a></td>
    <td>100.8</td>
    <td>13.7</td>
    <td>7173.6</td>
    <td>North Andover</td>
</tr>

<tr>
    <td>1174</td>
    <td><a href="/player/2240/jesse-seder/" target="_blank">Jesse Seder</a></td>
    <td>113.0</td>
    <td>12.8</td>
    <td>7172.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1175</td>
    <td><a href="/player/1750/johnrussell-stokes/" target="_blank">JohnRussell Stokes</a></td>
    <td>127.6</td>
    <td>14.9</td>
    <td>7172.2</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1176</td>
    <td><a href="/player/3178/luke-harrington/" target="_blank">Luke Harrington</a></td>
    <td>86.0</td>
    <td>12.0</td>
    <td>7170.4</td>
    <td>NBWC</td>
</tr>

<tr>
    <td>1177</td>
    <td><a href="/player/2614/chase-bolum/" target="_blank">Chase Bolum</a></td>
    <td>120.0</td>
    <td>12.3</td>
    <td>7169.2</td>
    <td>Connetquot middle school</td>
</tr>

<tr>
    <td>1178</td>
    <td><a href="/player/1294/luke-nieto/" target="_blank">Luke Nieto</a></td>
    <td>89.2</td>
    <td>12.0</td>
    <td>7166.0</td>
    <td>LAW Wrestling Academy</td>
</tr>

<tr>
    <td>1179</td>
    <td><a href="/player/1523/jayden-ramirez/" target="_blank">jayden ramirez</a></td>
    <td>112.4</td>
    <td>12.6</td>
    <td>7165.2</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>1180</td>
    <td><a href="/player/745/alexander-palagano/" target="_blank">alexander palagano</a></td>
    <td>106.6</td>
    <td>16.2</td>
    <td>7147.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1181</td>
    <td><a href="/player/1263/andrew-perez/" target="_blank">Andrew Perez</a></td>
    <td>99.8</td>
    <td>13.5</td>
    <td>7144.0</td>
    <td>Shore Thing</td>
</tr>

<tr>
    <td>1182</td>
    <td><a href="/player/1252/jt-odonnell/" target="_blank">JT O'Donnell</a></td>
    <td>100.0</td>
    <td>12.9</td>
    <td>7139.5</td>
    <td>Severna Park</td>
</tr>

<tr>
    <td>1183</td>
    <td><a href="/player/1429/jackson-meehan/" target="_blank">Jackson Meehan</a></td>
    <td>106.4</td>
    <td>11.4</td>
    <td>7133.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1184</td>
    <td><a href="/player/2873/preston-lefevre/" target="_blank">Preston LeFevre</a></td>
    <td>87.6</td>
    <td>13.4</td>
    <td>7129.4</td>
    <td>Donahoe</td>
</tr>

<tr>
    <td>1185</td>
    <td><a href="/player/2370/kiernan-bradley/" target="_blank">Kiernan Bradley</a></td>
    <td>109.2</td>
    <td>11.2</td>
    <td>7128.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1186</td>
    <td><a href="/player/1679/ricky-soldinger/" target="_blank">Ricky Soldinger</a></td>
    <td>97.4</td>
    <td>14.1</td>
    <td>7125.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1187</td>
    <td><a href="/player/3266/preston-vamvas/" target="_blank">Preston Vamvas</a></td>
    <td>110.0</td>
    <td>10.8</td>
    <td>7125.5</td>
    <td>Capac Warriors</td>
</tr>

<tr>
    <td>1188</td>
    <td><a href="/player/2589/christopher-coleman/" target="_blank">Christopher Coleman</a></td>
    <td>110.0</td>
    <td>12.7</td>
    <td>7122.1</td>
    <td>East Islip</td>
</tr>

<tr>
    <td>1189</td>
    <td><a href="/player/1006/quinn-donoghue/" target="_blank">Quinn Donoghue</a></td>
    <td>99.4</td>
    <td>13.5</td>
    <td>7118.5</td>
    <td>Blue wave</td>
</tr>

<tr>
    <td>1190</td>
    <td><a href="/player/1861/aidan-lee/" target="_blank">Aidan Lee</a></td>
    <td>98.0</td>
    <td>12.0</td>
    <td>7117.4</td>
    <td>Blue Wave Wrestling</td>
</tr>

<tr>
    <td>1191</td>
    <td><a href="/player/2064/brady-jackson/" target="_blank">Brady Jackson</a></td>
    <td>96.2</td>
    <td>12.8</td>
    <td>7117.2</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>1192</td>
    <td><a href="/player/3175/jeremy-negron/" target="_blank">Jeremy Negron</a></td>
    <td>90.0</td>
    <td>12.4</td>
    <td>7102.2</td>
    <td>Yale st. Wrestling club</td>
</tr>

<tr>
    <td>1193</td>
    <td><a href="/player/3427/tannerre-cathey/" target="_blank">tannerre cathey</a></td>
    <td>106.3</td>
    <td>11.6</td>
    <td>7101.4</td>
    <td>Pontiac huskies</td>
</tr>

<tr>
    <td>1194</td>
    <td><a href="/player/2379/dylan-kinsella/" target="_blank">Dylan Kinsella</a></td>
    <td>114.2</td>
    <td>11.0</td>
    <td>7099.8</td>
    <td>Blue Wave</td>
</tr>

<tr>
    <td>1195</td>
    <td><a href="/player/2504/dylan-levine/" target="_blank">Dylan Levine</a></td>
    <td>112.0</td>
    <td>15.1</td>
    <td>7099.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1196</td>
    <td><a href="/player/466/matt-mcdermott/" target="_blank">Matt McDermott</a></td>
    <td>80.0</td>
    <td>10.5</td>
    <td>7098.3</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1197</td>
    <td><a href="/player/1455/luke-burke/" target="_blank">Luke Burke</a></td>
    <td>95.6</td>
    <td>13.0</td>
    <td>7095.8</td>
    <td>MacArthur</td>
</tr>

<tr>
    <td>1198</td>
    <td><a href="/player/2451/patrick-holland/" target="_blank">Patrick Holland</a></td>
    <td>98.0</td>
    <td>15.2</td>
    <td>7090.3</td>
    <td>Plainview old bethpage</td>
</tr>

<tr>
    <td>1199</td>
    <td><a href="/player/2704/kadence-williams/" target="_blank">Kadence Williams</a></td>
    <td>99.0</td>
    <td>12.4</td>
    <td>7088.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1200</td>
    <td><a href="/player/1573/andre-morero/" target="_blank">Andre Morero</a></td>
    <td>88.0</td>
    <td>12.6</td>
    <td>7087.6</td>
    <td>Scorpions</td>
</tr>

<tr>
    <td>1201</td>
    <td><a href="/player/498/amari-murray/" target="_blank">Amari Murray</a></td>
    <td>100.8</td>
    <td>11.1</td>
    <td>7073.7</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1202</td>
    <td><a href="/player/1577/jaiden-james/" target="_blank">Jaiden James</a></td>
    <td>83.4</td>
    <td>14.1</td>
    <td>7071.2</td>
    <td>Smith funk academy</td>
</tr>

<tr>
    <td>1203</td>
    <td><a href="/player/1611/jackson-sorel/" target="_blank">Jackson Sorel</a></td>
    <td>91.2</td>
    <td>12.3</td>
    <td>7069.5</td>
    <td>Wolfgang</td>
</tr>

<tr>
    <td>1204</td>
    <td><a href="/player/1667/conor-poitras/" target="_blank">Conor Poitras</a></td>
    <td>114.6</td>
    <td>14.0</td>
    <td>7067.6</td>
    <td>Rocky Point</td>
</tr>

<tr>
    <td>1205</td>
    <td><a href="/player/2978/chase-utley/" target="_blank">Chase Utley</a></td>
    <td>95.8</td>
    <td>13.4</td>
    <td>7067.6</td>
    <td>Michigan Revolution</td>
</tr>

<tr>
    <td>1206</td>
    <td><a href="/player/1822/xxavior-pabon/" target="_blank">Xxavior Pabon</a></td>
    <td>100.0</td>
    <td>11.6</td>
    <td>7062.0</td>
    <td>Altered Beast</td>
</tr>

<tr>
    <td>1207</td>
    <td><a href="/player/2277/alex-aramini/" target="_blank">Alex Aramini</a></td>
    <td>94.8</td>
    <td>12.6</td>
    <td>7060.9</td>
    <td>Five Star</td>
</tr>

<tr>
    <td>1208</td>
    <td><a href="/player/1453/jack-longobucco/" target="_blank">Jack Longobucco</a></td>
    <td>112.4</td>
    <td>13.4</td>
    <td>7060.8</td>
    <td>Jonas Salk Middle School</td>
</tr>

<tr>
    <td>1209</td>
    <td><a href="/player/2701/raquel-iturrino/" target="_blank">Raquel Iturrino</a></td>
    <td>102.4</td>
    <td>13.5</td>
    <td>7059.4</td>
    <td>Texas pride</td>
</tr>

<tr>
    <td>1210</td>
    <td><a href="/player/676/dash-cosaboomson/" target="_blank">Dash Cosaboomson</a></td>
    <td>105.0</td>
    <td>11.8</td>
    <td>7059.3</td>
    <td>Lrei</td>
</tr>

<tr>
    <td>1211</td>
    <td><a href="/player/2620/isaac-quiles/" target="_blank">Isaac Quiles</a></td>
    <td>78.0</td>
    <td>12.4</td>
    <td>7052.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1212</td>
    <td><a href="/player/1813/jake-paull/" target="_blank">Jake Paull</a></td>
    <td>103.2</td>
    <td>9.5</td>
    <td>7050.2</td>
    <td>Lake Lehman</td>
</tr>

<tr>
    <td>1213</td>
    <td><a href="/player/2131/giselle-piedrahita/" target="_blank">Giselle Piedrahita</a></td>
    <td>113.0</td>
    <td>14.9</td>
    <td>7049.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1214</td>
    <td><a href="/player/1627/casey-phelan/" target="_blank">Casey Phelan</a></td>
    <td>107.2</td>
    <td>14.7</td>
    <td>7049.3</td>
    <td>GSR Wrestling Academy</td>
</tr>

<tr>
    <td>1215</td>
    <td><a href="/player/1450/nolan-tordy/" target="_blank">Nolan Tordy</a></td>
    <td>116.2</td>
    <td>12.5</td>
    <td>7047.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1216</td>
    <td><a href="/player/3060/mario-casilio/" target="_blank">Mario Casilio</a></td>
    <td>95.1</td>
    <td>11.4</td>
    <td>7046.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1217</td>
    <td><a href="/player/746/vincent-diliberto/" target="_blank">Vincent Diliberto</a></td>
    <td>108.4</td>
    <td>12.7</td>
    <td>7037.4</td>
    <td>Elite</td>
</tr>

<tr>
    <td>1218</td>
    <td><a href="/player/1972/erik-bognar/" target="_blank">Erik Bognar</a></td>
    <td>98.0</td>
    <td>14.2</td>
    <td>7036.5</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>1219</td>
    <td><a href="/player/906/shea-santiago/" target="_blank">Shea Santiago</a></td>
    <td>101.6</td>
    <td>11.4</td>
    <td>7034.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1220</td>
    <td><a href="/player/2243/julien-maki/" target="_blank">Julien Maki</a></td>
    <td>104.2</td>
    <td>13.8</td>
    <td>7030.4</td>
    <td>NYC</td>
</tr>

<tr>
    <td>1221</td>
    <td><a href="/player/2352/finn-mcintyre/" target="_blank">Finn McIntyre</a></td>
    <td>101.9</td>
    <td>13.0</td>
    <td>7030.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1222</td>
    <td><a href="/player/1270/nicolas-greco/" target="_blank">Nicolas Greco</a></td>
    <td>77.6</td>
    <td>13.2</td>
    <td>7028.6</td>
    <td>Mahopac Wrestling Club</td>
</tr>

<tr>
    <td>1223</td>
    <td><a href="/player/3327/tristan-levin/" target="_blank">Tristan Levin</a></td>
    <td>82.0</td>
    <td>12.4</td>
    <td>7027.5</td>
    <td>CJA Wrestling</td>
</tr>

<tr>
    <td>1224</td>
    <td><a href="/player/2000/faith-maldonado/" target="_blank">Faith Maldonado</a></td>
    <td>93.4</td>
    <td>14.2</td>
    <td>7024.1</td>
    <td>Fitchburg wrestling</td>
</tr>

<tr>
    <td>1225</td>
    <td><a href="/player/1476/charlie-bergonzi/" target="_blank">Charlie Bergonzi</a></td>
    <td>84.0</td>
    <td>13.7</td>
    <td>7014.6</td>
    <td></td>
</tr>

<tr>
    <td>1226</td>
    <td><a href="/player/2120/charlie-bartolone/" target="_blank">Charlie Bartolone</a></td>
    <td>115.6</td>
    <td>13.9</td>
    <td>7011.5</td>
    <td>Tewksbury</td>
</tr>

<tr>
    <td>1227</td>
    <td><a href="/player/3077/anthony-valls/" target="_blank">Anthony Valls</a></td>
    <td>89.6</td>
    <td>11.8</td>
    <td>7010.0</td>
    <td>Apex</td>
</tr>

<tr>
    <td>1228</td>
    <td><a href="/player/976/christian-caccavale/" target="_blank">Christian Caccavale</a></td>
    <td>102.0</td>
    <td>11.8</td>
    <td>7006.1</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1229</td>
    <td><a href="/player/1233/nicholas-flaherty/" target="_blank">Nicholas Flaherty</a></td>
    <td>97.6</td>
    <td>11.4</td>
    <td>7002.4</td>
    <td>port  jefferson station</td>
</tr>

<tr>
    <td>1230</td>
    <td><a href="/player/2672/steven-robles/" target="_blank">Steven Robles</a></td>
    <td>90.2</td>
    <td>11.0</td>
    <td>6998.4</td>
    <td>RoughRider's</td>
</tr>

<tr>
    <td>1231</td>
    <td><a href="/player/2066/theron-patrick/" target="_blank">Theron Patrick</a></td>
    <td>109.0</td>
    <td>8.9</td>
    <td>6996.7</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>1232</td>
    <td><a href="/player/3298/gavin-martin/" target="_blank">Gavin Martin</a></td>
    <td>88.0</td>
    <td>13.4</td>
    <td>6987.6</td>
    <td>Shore Thing WC</td>
</tr>

<tr>
    <td>1233</td>
    <td><a href="/player/2810/ryan-maiorana/" target="_blank">Ryan Maiorana</a></td>
    <td>97.0</td>
    <td>13.6</td>
    <td>6984.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1234</td>
    <td><a href="/player/1062/cooper-grossi/" target="_blank">Cooper Grossi</a></td>
    <td>81.0</td>
    <td>13.2</td>
    <td>6983.1</td>
    <td>Gladiators</td>
</tr>

<tr>
    <td>1235</td>
    <td><a href="/player/2013/charlie-maynard/" target="_blank">Charlie Maynard</a></td>
    <td>106.4</td>
    <td>11.2</td>
    <td>6980.4</td>
    <td>Litchfield</td>
</tr>

<tr>
    <td>1236</td>
    <td><a href="/player/2725/luke-conte/" target="_blank">Luke Conte</a></td>
    <td>111.0</td>
    <td>10.6</td>
    <td>6977.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1237</td>
    <td><a href="/player/465/jackson-ainsley/" target="_blank">Jackson Ainsley</a></td>
    <td>95.0</td>
    <td>10.1</td>
    <td>6975.1</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1238</td>
    <td><a href="/player/2078/william-riley/" target="_blank">William Riley</a></td>
    <td>93.0</td>
    <td>8.7</td>
    <td>6969.2</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>1239</td>
    <td><a href="/player/2181/tristan-lane/" target="_blank">Tristan Lane</a></td>
    <td>84.6</td>
    <td>10.4</td>
    <td>6964.3</td>
    <td>N/ADoughynoy</td>
</tr>

<tr>
    <td>1240</td>
    <td><a href="/player/3179/jacob-ward/" target="_blank">Jacob Ward</a></td>
    <td>113.8</td>
    <td>16.2</td>
    <td>6964.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1241</td>
    <td><a href="/player/2457/dario-leighton/" target="_blank">Dario Leighton</a></td>
    <td>99.2</td>
    <td>14.6</td>
    <td>6961.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1242</td>
    <td><a href="/player/2257/alejandro-rodriguez/" target="_blank">Alejandro Rodriguez</a></td>
    <td>106.4</td>
    <td>14.3</td>
    <td>6955.9</td>
    <td>NYC Wrestling Club</td>
</tr>

<tr>
    <td>1243</td>
    <td><a href="/player/1215/ethan-arita/" target="_blank">Ethan Arita</a></td>
    <td>99.2</td>
    <td>9.8</td>
    <td>6937.3</td>
    <td>Mt Sinai</td>
</tr>

<tr>
    <td>1244</td>
    <td><a href="/player/619/jt-mankowich/" target="_blank">JT Mankowich</a></td>
    <td>89.8</td>
    <td>15.2</td>
    <td>6937.2</td>
    <td>Barn Brothers</td>
</tr>

<tr>
    <td>1245</td>
    <td><a href="/player/1557/christopher-dellabella/" target="_blank">Christopher DellaBella</a></td>
    <td>99.4</td>
    <td>12.5</td>
    <td>6932.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1246</td>
    <td><a href="/player/1379/connor-kubasek/" target="_blank">Connor Kubasek</a></td>
    <td>108.0</td>
    <td>9.7</td>
    <td>6931.9</td>
    <td>Rhino</td>
</tr>

<tr>
    <td>1247</td>
    <td><a href="/player/1436/patrick-mcclernon/" target="_blank">Patrick McClernon</a></td>
    <td>98.8</td>
    <td>13.5</td>
    <td>6926.8</td>
    <td>Seaford</td>
</tr>

<tr>
    <td>1248</td>
    <td><a href="/player/1872/jose-figueroa/" target="_blank">Jose Figueroa</a></td>
    <td>98.8</td>
    <td>13.7</td>
    <td>6925.9</td>
    <td>School of grappling</td>
</tr>

<tr>
    <td>1249</td>
    <td><a href="/player/681/william-fried/" target="_blank">William Fried</a></td>
    <td>92.0</td>
    <td>13.0</td>
    <td>6922.7</td>
    <td>School of Grappling</td>
</tr>

<tr>
    <td>1250</td>
    <td><a href="/player/2775/dylan-gappa/" target="_blank">Dylan Gappa</a></td>
    <td>89.4</td>
    <td>11.9</td>
    <td>6920.7</td>
    <td>Quakertown</td>
</tr>

<tr>
    <td>1251</td>
    <td><a href="/player/1495/teddy-harris/" target="_blank">Teddy Harris</a></td>
    <td>87.4</td>
    <td>10.2</td>
    <td>6919.3</td>
    <td>VHW</td>
</tr>

<tr>
    <td>1252</td>
    <td><a href="/player/1316/cain-joynes/" target="_blank">Cain Joynes</a></td>
    <td>110.6</td>
    <td>13.9</td>
    <td>6912.6</td>
    <td>Spazz Wrestling</td>
</tr>

<tr>
    <td>1253</td>
    <td><a href="/player/1737/william-ackley/" target="_blank">William Ackley</a></td>
    <td>85.0</td>
    <td>11.8</td>
    <td>6910.7</td>
    <td>Bombsquad</td>
</tr>

<tr>
    <td>1254</td>
    <td><a href="/player/2526/eduardo-leon/" target="_blank">Eduardo Leon</a></td>
    <td>103.6</td>
    <td>14.7</td>
    <td>6910.2</td>
    <td>5 Points Wrestling</td>
</tr>

<tr>
    <td>1255</td>
    <td><a href="/player/3058/cristian-haslem/" target="_blank">Cristian Haslem</a></td>
    <td>82.6</td>
    <td>13.3</td>
    <td>6909.8</td>
    <td>Team Donahoe</td>
</tr>

<tr>
    <td>1256</td>
    <td><a href="/player/2783/evelyn-sheer/" target="_blank">Evelyn Sheer</a></td>
    <td>126.2</td>
    <td>9.3</td>
    <td>6909.5</td>
    <td>Altered Beast Wrestling Academy</td>
</tr>

<tr>
    <td>1257</td>
    <td><a href="/player/677/xander-musso/" target="_blank">Xander Musso</a></td>
    <td>98.0</td>
    <td>12.1</td>
    <td>6907.7</td>
    <td>lrei</td>
</tr>

<tr>
    <td>1258</td>
    <td><a href="/player/515/kevin-segali/" target="_blank">Kevin Segali</a></td>
    <td>103.8</td>
    <td>13.2</td>
    <td>6904.7</td>
    <td>Hudson Wrestling Academy</td>
</tr>

<tr>
    <td>1259</td>
    <td><a href="/player/483/niason-dacosta/" target="_blank">Niason Dacosta</a></td>
    <td>74.0</td>
    <td>12.8</td>
    <td>6899.4</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1260</td>
    <td><a href="/player/793/ian-karlin/" target="_blank">Ian Karlin</a></td>
    <td>96.8</td>
    <td>11.8</td>
    <td>6899.4</td>
    <td>newtown nywa</td>
</tr>

<tr>
    <td>1261</td>
    <td><a href="/player/2237/naim-wallace/" target="_blank">Naim Wallace</a></td>
    <td>99.0</td>
    <td>11.7</td>
    <td>6899.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1262</td>
    <td><a href="/player/881/cole-stuhler/" target="_blank">Cole Stuhler</a></td>
    <td>98.8</td>
    <td>10.1</td>
    <td>6899.0</td>
    <td>Pat Med Raiders</td>
</tr>

<tr>
    <td>1263</td>
    <td><a href="/player/2938/brenden-taylor/" target="_blank">Brenden Taylor</a></td>
    <td>103.3</td>
    <td>10.5</td>
    <td>6898.4</td>
    <td>Clique</td>
</tr>

<tr>
    <td>1264</td>
    <td><a href="/player/1017/aiden-martinez/" target="_blank">Aiden Martinez</a></td>
    <td>106.0</td>
    <td>11.0</td>
    <td>6881.7</td>
    <td>UFC</td>
</tr>

<tr>
    <td>1265</td>
    <td><a href="/player/2894/darius-ambs/" target="_blank">darius ambs</a></td>
    <td>83.3</td>
    <td>13.3</td>
    <td>6879.7</td>
    <td>northwest</td>
</tr>

<tr>
    <td>1266</td>
    <td><a href="/player/1376/gianvito-coyne/" target="_blank">Gianvito Coyne</a></td>
    <td>100.8</td>
    <td>15.3</td>
    <td>6878.9</td>
    <td></td>
</tr>

<tr>
    <td>1267</td>
    <td><a href="/player/1100/hayden-stezenko/" target="_blank">Hayden Stezenko</a></td>
    <td>95.0</td>
    <td>13.4</td>
    <td>6877.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1268</td>
    <td><a href="/player/1102/zach-dresch/" target="_blank">Zach Dresch</a></td>
    <td>95.0</td>
    <td>12.7</td>
    <td>6877.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1269</td>
    <td><a href="/player/1393/noah-madorno/" target="_blank">Noah Madorno</a></td>
    <td>97.0</td>
    <td>12.3</td>
    <td>6876.5</td>
    <td>Marlton</td>
</tr>

<tr>
    <td>1270</td>
    <td><a href="/player/2022/braydon-white/" target="_blank">Braydon White</a></td>
    <td>104.2</td>
    <td>12.2</td>
    <td>6859.8</td>
    <td>Litchfield</td>
</tr>

<tr>
    <td>1271</td>
    <td><a href="/player/1681/devin-downes/" target="_blank">Devin Downes</a></td>
    <td>90.8</td>
    <td>10.9</td>
    <td>6856.2</td>
    <td>VHW</td>
</tr>

<tr>
    <td>1272</td>
    <td><a href="/player/980/ryan-bulger/" target="_blank">Ryan Bulger</a></td>
    <td>93.8</td>
    <td>10.1</td>
    <td>6855.5</td>
    <td>Bluewave</td>
</tr>

<tr>
    <td>1273</td>
    <td><a href="/player/2290/neil-reichman/" target="_blank">Neil Reichman</a></td>
    <td>103.0</td>
    <td>12.2</td>
    <td>6854.5</td>
    <td>Five Star</td>
</tr>

<tr>
    <td>1274</td>
    <td><a href="/player/2008/james-algeo/" target="_blank">James Algeo</a></td>
    <td>94.6</td>
    <td>10.6</td>
    <td>6853.7</td>
    <td>litchfield</td>
</tr>

<tr>
    <td>1275</td>
    <td><a href="/player/3332/josh-pfeiffer/" target="_blank">Josh pfeiffer</a></td>
    <td>98.1</td>
    <td>13.4</td>
    <td>6847.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1276</td>
    <td><a href="/player/770/erick-canales/" target="_blank">erick canales</a></td>
    <td>101.0</td>
    <td>13.0</td>
    <td>6843.1</td>
    <td>brentwood</td>
</tr>

<tr>
    <td>1277</td>
    <td><a href="/player/674/aliaksandr-kikiniou/" target="_blank">Aliaksandr Kikiniou</a></td>
    <td>93.4</td>
    <td>12.5</td>
    <td>6842.5</td>
    <td>Elite Wrestling</td>
</tr>

<tr>
    <td>1278</td>
    <td><a href="/player/2709/tristin-fryer/" target="_blank">Tristin Fryer</a></td>
    <td>90.6</td>
    <td>11.8</td>
    <td>6835.3</td>
    <td>TYWC</td>
</tr>

<tr>
    <td>1279</td>
    <td><a href="/player/1516/antonio-mazza/" target="_blank">Antonio Mazza</a></td>
    <td>109.4</td>
    <td>13.6</td>
    <td>6832.9</td>
    <td>Commack</td>
</tr>

<tr>
    <td>1280</td>
    <td><a href="/player/693/ava-capogna/" target="_blank">ava capogna</a></td>
    <td>88.2</td>
    <td>13.2</td>
    <td>6832.0</td>
    <td>dynamic</td>
</tr>

<tr>
    <td>1281</td>
    <td><a href="/player/1003/nicolas-barber/" target="_blank">Nicolas Barber</a></td>
    <td>79.8</td>
    <td>11.4</td>
    <td>6830.8</td>
    <td>Bluewave</td>
</tr>

<tr>
    <td>1282</td>
    <td><a href="/player/887/sean-lynn/" target="_blank">Sean Lynn</a></td>
    <td>108.2</td>
    <td>9.1</td>
    <td>6830.1</td>
    <td>Bethpage</td>
</tr>

<tr>
    <td>1283</td>
    <td><a href="/player/1302/mikey-tietjen/" target="_blank">Mikey Tietjen</a></td>
    <td>92.2</td>
    <td>13.7</td>
    <td>6828.5</td>
    <td>sachem</td>
</tr>

<tr>
    <td>1284</td>
    <td><a href="/player/1637/ryan-schneider/" target="_blank">Ryan Schneider</a></td>
    <td>94.6</td>
    <td>11.3</td>
    <td>6827.1</td>
    <td>Norwalk Madbulls</td>
</tr>

<tr>
    <td>1285</td>
    <td><a href="/player/1580/phoenix-gardella/" target="_blank">Phoenix Gardella</a></td>
    <td>89.2</td>
    <td>13.1</td>
    <td>6825.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1286</td>
    <td><a href="/player/3275/michael-manganiello/" target="_blank">Michael Manganiello</a></td>
    <td>110.0</td>
    <td>13.5</td>
    <td>6825.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1287</td>
    <td><a href="/player/1877/austin-jackson/" target="_blank">Austin Jackson</a></td>
    <td>104.2</td>
    <td>12.7</td>
    <td>6823.5</td>
    <td>East Meadow</td>
</tr>

<tr>
    <td>1288</td>
    <td><a href="/player/1936/sullivan-conley/" target="_blank">Sullivan Conley</a></td>
    <td>98.2</td>
    <td>11.4</td>
    <td>6819.9</td>
    <td>Goffstown Youth Wrestling Club</td>
</tr>

<tr>
    <td>1289</td>
    <td><a href="/player/1457/manaen-capellan/" target="_blank">manaen capellan</a></td>
    <td>112.6</td>
    <td>11.6</td>
    <td>6817.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1290</td>
    <td><a href="/player/929/jordan-trimis/" target="_blank">Jordan Trimis</a></td>
    <td>91.0</td>
    <td>10.9</td>
    <td>6806.4</td>
    <td>Connequat</td>
</tr>

<tr>
    <td>1291</td>
    <td><a href="/player/1077/ari-kaye/" target="_blank">Ari Kaye</a></td>
    <td>97.2</td>
    <td>11.6</td>
    <td>6799.9</td>
    <td>Long Beach gladiators</td>
</tr>

<tr>
    <td>1292</td>
    <td><a href="/player/1012/emir-dasdemir/" target="_blank">Emir Dasdemir</a></td>
    <td>87.0</td>
    <td>12.3</td>
    <td>6798.2</td>
    <td></td>
</tr>

<tr>
    <td>1293</td>
    <td><a href="/player/2356/aaron-huether/" target="_blank">Aaron Huether</a></td>
    <td>113.0</td>
    <td>10.9</td>
    <td>6797.0</td>
    <td>Vougars</td>
</tr>

<tr>
    <td>1294</td>
    <td><a href="/player/1424/dean-crovatto/" target="_blank">Dean Crovatto</a></td>
    <td>101.8</td>
    <td>14.5</td>
    <td>6796.8</td>
    <td>New Rocehlle</td>
</tr>

<tr>
    <td>1295</td>
    <td><a href="/player/2724/cole-vanderah/" target="_blank">Cole Vanderah</a></td>
    <td>86.9</td>
    <td>11.2</td>
    <td>6792.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1296</td>
    <td><a href="/player/1024/elias-vanegas/" target="_blank">Elias vanegas</a></td>
    <td>99.0</td>
    <td>11.6</td>
    <td>6792.5</td>
    <td>Ly titans/ UFC</td>
</tr>

<tr>
    <td>1297</td>
    <td><a href="/player/1289/devin-greene/" target="_blank">Devin Greene</a></td>
    <td>97.2</td>
    <td>13.1</td>
    <td>6789.1</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1298</td>
    <td><a href="/player/2125/matthew-kupfer/" target="_blank">Matthew Kupfer</a></td>
    <td>89.8</td>
    <td>14.1</td>
    <td>6789.0</td>
    <td>Fitchburg Youth Wrestling</td>
</tr>

<tr>
    <td>1299</td>
    <td><a href="/player/1477/jimmy-moore/" target="_blank">Jimmy Moore</a></td>
    <td>105.0</td>
    <td>13.1</td>
    <td>6788.3</td>
    <td>Salk</td>
</tr>

<tr>
    <td>1300</td>
    <td><a href="/player/1883/kevin-vasquez/" target="_blank">Kevin Vasquez</a></td>
    <td>108.8</td>
    <td>12.0</td>
    <td>6787.9</td>
    <td>Kings Park</td>
</tr>

<tr>
    <td>1301</td>
    <td><a href="/player/691/blase-mele/" target="_blank">Blase Mele</a></td>
    <td>96.0</td>
    <td>12.5</td>
    <td>6787.4</td>
    <td>Princeton</td>
</tr>

<tr>
    <td>1302</td>
    <td><a href="/player/1025/lucas-cortazar/" target="_blank">Lucas Cortazar</a></td>
    <td>87.2</td>
    <td>12.7</td>
    <td>6784.4</td>
    <td>Lynbrook titans/ufc</td>
</tr>

<tr>
    <td>1303</td>
    <td><a href="/player/2482/eden-zipori/" target="_blank">Eden Zipori</a></td>
    <td>112.8</td>
    <td>15.4</td>
    <td>6777.5</td>
    <td>Great neck north</td>
</tr>

<tr>
    <td>1304</td>
    <td><a href="/player/1107/william-leischner/" target="_blank">William Leischner</a></td>
    <td>82.2</td>
    <td>11.5</td>
    <td>6776.0</td>
    <td>Roughhouse</td>
</tr>

<tr>
    <td>1305</td>
    <td><a href="/player/2766/travis-white/" target="_blank">Travis White</a></td>
    <td>84.4</td>
    <td>11.8</td>
    <td>6775.8</td>
    <td>Apex/chenango valley</td>
</tr>

<tr>
    <td>1306</td>
    <td><a href="/player/918/tyler-picone/" target="_blank">Tyler Picone</a></td>
    <td>93.0</td>
    <td>8.9</td>
    <td>6769.4</td>
    <td>Red Team- Blue Wave</td>
</tr>

<tr>
    <td>1307</td>
    <td><a href="/player/1882/wyatt-lewis/" target="_blank">Wyatt Lewis</a></td>
    <td>100.0</td>
    <td>10.6</td>
    <td>6763.1</td>
    <td>Triumph</td>
</tr>

<tr>
    <td>1308</td>
    <td><a href="/player/1183/aidan-barry/" target="_blank">Aidan Barry</a></td>
    <td>87.2</td>
    <td>11.9</td>
    <td>6760.4</td>
    <td>Rocky Point</td>
</tr>

<tr>
    <td>1309</td>
    <td><a href="/player/1996/caleigh-cooper/" target="_blank">Caleigh Cooper</a></td>
    <td>105.4</td>
    <td>12.4</td>
    <td>6758.1</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>1310</td>
    <td><a href="/player/2287/joshua-santiago/" target="_blank">Joshua Santiago</a></td>
    <td>117.6</td>
    <td>13.0</td>
    <td>6757.1</td>
    <td>Hempstead</td>
</tr>

<tr>
    <td>1311</td>
    <td><a href="/player/3040/bryce-pass/" target="_blank">Bryce Pass</a></td>
    <td>99.7</td>
    <td>12.7</td>
    <td>6750.9</td>
    <td>Clarkston</td>
</tr>

<tr>
    <td>1312</td>
    <td><a href="/player/644/anthony-severino/" target="_blank">Anthony Severino</a></td>
    <td>97.0</td>
    <td>11.9</td>
    <td>6749.7</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1313</td>
    <td><a href="/player/2197/leo-tansey/" target="_blank">Leo Tansey</a></td>
    <td>100.6</td>
    <td>12.7</td>
    <td>6746.4</td>
    <td>NYC Wrestling Club</td>
</tr>

<tr>
    <td>1314</td>
    <td><a href="/player/2865/alex-billmeyer/" target="_blank">Alex Billmeyer</a></td>
    <td>85.6</td>
    <td>12.3</td>
    <td>6744.1</td>
    <td>Bloomsburg</td>
</tr>

<tr>
    <td>1315</td>
    <td><a href="/player/3048/avery-lane/" target="_blank">Avery Lane</a></td>
    <td>87.6</td>
    <td>12.4</td>
    <td>6743.6</td>
    <td>Dundee Wrestling</td>
</tr>

<tr>
    <td>1316</td>
    <td><a href="/player/1755/michael-cea/" target="_blank">Michael Cea</a></td>
    <td>108.6</td>
    <td>13.0</td>
    <td>6740.7</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1317</td>
    <td><a href="/player/3007/gage-turnblom/" target="_blank">Gage Turnblom</a></td>
    <td>87.5</td>
    <td>10.4</td>
    <td>6736.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1318</td>
    <td><a href="/player/2989/raymond-picarski/" target="_blank">Raymond Picarski</a></td>
    <td>93.5</td>
    <td>15.4</td>
    <td>6728.6</td>
    <td>Lakeville Falcons</td>
</tr>

<tr>
    <td>1319</td>
    <td><a href="/player/840/braiden-houghtaling/" target="_blank">Braiden Houghtaling</a></td>
    <td>92.2</td>
    <td>12.1</td>
    <td>6725.4</td>
    <td>OAK NECK FALCONS</td>
</tr>

<tr>
    <td>1320</td>
    <td><a href="/player/1569/jay-chase-jr/" target="_blank">Jay Chase Jr.</a></td>
    <td>85.4</td>
    <td>13.0</td>
    <td>6724.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1321</td>
    <td><a href="/player/1799/brady-bucher/" target="_blank">Brady Bucher</a></td>
    <td>90.2</td>
    <td>12.1</td>
    <td>6722.2</td>
    <td>State College</td>
</tr>

<tr>
    <td>1322</td>
    <td><a href="/player/3270/tommy-gorman/" target="_blank">Tommy Gorman</a></td>
    <td>92.0</td>
    <td>13.1</td>
    <td>6714.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1323</td>
    <td><a href="/player/2424/zane-edwards/" target="_blank">Zane Edwards</a></td>
    <td>103.8</td>
    <td>13.2</td>
    <td>6713.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1324</td>
    <td><a href="/player/1680/aidan-brancaccio/" target="_blank">Aidan Brancaccio</a></td>
    <td>99.4</td>
    <td>14.3</td>
    <td>6706.6</td>
    <td>Blue Wave</td>
</tr>

<tr>
    <td>1325</td>
    <td><a href="/player/968/sam-nicotra/" target="_blank">Sam Nicotra</a></td>
    <td>88.6</td>
    <td>12.4</td>
    <td>6698.1</td>
    <td>bluewave</td>
</tr>

<tr>
    <td>1326</td>
    <td><a href="/player/504/kenny-sorto/" target="_blank">Kenny Sorto</a></td>
    <td>120.6</td>
    <td>9.2</td>
    <td>6694.6</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1327</td>
    <td><a href="/player/1221/ronald-munoz/" target="_blank">Ronald Munoz</a></td>
    <td>91.8</td>
    <td>13.2</td>
    <td>6688.2</td>
    <td>Sachet East</td>
</tr>

<tr>
    <td>1328</td>
    <td><a href="/player/1470/jake-giunta/" target="_blank">Jake Giunta</a></td>
    <td>95.4</td>
    <td>8.6</td>
    <td>6685.5</td>
    <td>Bethpage PAL</td>
</tr>

<tr>
    <td>1329</td>
    <td><a href="/player/2901/benjamin-nocella/" target="_blank">Benjamin Nocella</a></td>
    <td>90.5</td>
    <td>11.0</td>
    <td>6682.5</td>
    <td>Huron</td>
</tr>

<tr>
    <td>1330</td>
    <td><a href="/player/3196/sam-stewart/" target="_blank">Sam Stewart</a></td>
    <td>86.9</td>
    <td>13.2</td>
    <td>6679.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1331</td>
    <td><a href="/player/1545/ryan-taggart/" target="_blank">Ryan Taggart</a></td>
    <td>89.4</td>
    <td>12.1</td>
    <td>6678.8</td>
    <td>Roughhouse</td>
</tr>

<tr>
    <td>1332</td>
    <td><a href="/player/2099/john-forcier/" target="_blank">John Forcier</a></td>
    <td>93.4</td>
    <td>13.5</td>
    <td>6676.6</td>
    <td>Boys &amp; Girls Club of Nashua</td>
</tr>

<tr>
    <td>1333</td>
    <td><a href="/player/1479/eric-lesak/" target="_blank">eric lesak</a></td>
    <td>95.2</td>
    <td>12.8</td>
    <td>6674.8</td>
    <td>Salk</td>
</tr>

<tr>
    <td>1334</td>
    <td><a href="/player/3062/jonathan-healey/" target="_blank">Jonathan Healey</a></td>
    <td>96.6</td>
    <td>14.7</td>
    <td>6672.7</td>
    <td>Pittston</td>
</tr>

<tr>
    <td>1335</td>
    <td><a href="/player/1061/joshua-aviles/" target="_blank">Joshua Aviles</a></td>
    <td>87.8</td>
    <td>12.3</td>
    <td>6667.3</td>
    <td>school of Grappling</td>
</tr>

<tr>
    <td>1336</td>
    <td><a href="/player/1109/jake-zerden/" target="_blank">Jake Zerden</a></td>
    <td>75.2</td>
    <td>12.8</td>
    <td>6663.8</td>
    <td>Pope John</td>
</tr>

<tr>
    <td>1337</td>
    <td><a href="/player/1921/nicholas-vasaturo/" target="_blank">Nicholas Vasaturo</a></td>
    <td>100.0</td>
    <td>11.9</td>
    <td>6660.6</td>
    <td>Brentwood Kid Wrestling</td>
</tr>

<tr>
    <td>1338</td>
    <td><a href="/player/1245/collin-oden/" target="_blank">Collin oden</a></td>
    <td>91.0</td>
    <td>13.4</td>
    <td>6658.6</td>
    <td>middletown</td>
</tr>

<tr>
    <td>1339</td>
    <td><a href="/player/2596/karahn-king/" target="_blank">KaRahn King</a></td>
    <td>86.8</td>
    <td>12.8</td>
    <td>6653.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1340</td>
    <td><a href="/player/749/nicholas-chetta/" target="_blank">nicholas chetta</a></td>
    <td>98.2</td>
    <td>8.9</td>
    <td>6650.0</td>
    <td>teamtugman</td>
</tr>

<tr>
    <td>1341</td>
    <td><a href="/player/2337/sienna-kateridge/" target="_blank">Sienna Kateridge</a></td>
    <td>106.4</td>
    <td>13.4</td>
    <td>6642.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1342</td>
    <td><a href="/player/1888/ashton-frazier/" target="_blank">Ashton Frazier</a></td>
    <td>102.0</td>
    <td>12.6</td>
    <td>6640.5</td>
    <td>Bluewave</td>
</tr>

<tr>
    <td>1343</td>
    <td><a href="/player/3073/wyatt-eggleston/" target="_blank">Wyatt Eggleston</a></td>
    <td>96.4</td>
    <td>11.3</td>
    <td>6634.9</td>
    <td>Extreme Wrestling</td>
</tr>

<tr>
    <td>1344</td>
    <td><a href="/player/1544/tarah-krupa/" target="_blank">Tarah Krupa</a></td>
    <td>103.0</td>
    <td>14.7</td>
    <td>6633.5</td>
    <td>Wonder Women</td>
</tr>

<tr>
    <td>1345</td>
    <td><a href="/player/1829/eriq-polanco-dellauniversita/" target="_blank">Eriq Polanco DellaUniversita</a></td>
    <td>89.8</td>
    <td>13.7</td>
    <td>6631.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1346</td>
    <td><a href="/player/1088/dylan-aristides/" target="_blank">Dylan Aristides</a></td>
    <td>80.8</td>
    <td>13.0</td>
    <td>6625.5</td>
    <td>Barn Bros</td>
</tr>

<tr>
    <td>1347</td>
    <td><a href="/player/2239/otto-ort/" target="_blank">Otto Ort</a></td>
    <td>90.6</td>
    <td>13.6</td>
    <td>6622.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1348</td>
    <td><a href="/player/1295/jake-nieto/" target="_blank">Jake Nieto</a></td>
    <td>96.0</td>
    <td>9.8</td>
    <td>6621.0</td>
    <td>LAW Wrestling Academy</td>
</tr>

<tr>
    <td>1349</td>
    <td><a href="/player/1074/allan-profeta/" target="_blank">Allan Profeta</a></td>
    <td>97.6</td>
    <td>9.3</td>
    <td>6620.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1350</td>
    <td><a href="/player/2107/dominic-colarusso/" target="_blank">Dominic Colarusso</a></td>
    <td>101.6</td>
    <td>11.7</td>
    <td>6612.2</td>
    <td>Goffstown</td>
</tr>

<tr>
    <td>1351</td>
    <td><a href="/player/1203/tristan-bausenwein/" target="_blank">Tristan Bausenwein</a></td>
    <td>87.6</td>
    <td>11.6</td>
    <td>6611.5</td>
    <td>MSWC</td>
</tr>

<tr>
    <td>1352</td>
    <td><a href="/player/3248/dominic-dorrman/" target="_blank">Dominic Dorrman</a></td>
    <td>85.0</td>
    <td>10.5</td>
    <td>6610.7</td>
    <td>Basking Ridge</td>
</tr>

<tr>
    <td>1353</td>
    <td><a href="/player/1136/connor-kerwin/" target="_blank">Connor Kerwin</a></td>
    <td>90.0</td>
    <td>14.7</td>
    <td>6602.2</td>
    <td>Unattached</td>
</tr>

<tr>
    <td>1354</td>
    <td><a href="/player/3272/mason-tettambel/" target="_blank">Mason Tettambel</a></td>
    <td>90.0</td>
    <td>11.5</td>
    <td>6602.2</td>
    <td>Rhino</td>
</tr>

<tr>
    <td>1355</td>
    <td><a href="/player/3140/donovan-quinn/" target="_blank">Donovan Quinn</a></td>
    <td>80.0</td>
    <td>11.2</td>
    <td>6601.6</td>
    <td>Simmons Academy of Wrestling</td>
</tr>

<tr>
    <td>1356</td>
    <td><a href="/player/731/julian-dawson/" target="_blank">Julian dawson</a></td>
    <td>91.4</td>
    <td>13.6</td>
    <td>6598.1</td>
    <td>joker</td>
</tr>

<tr>
    <td>1357</td>
    <td><a href="/player/1991/benjamin-byrne/" target="_blank">Benjamin Byrne</a></td>
    <td>87.6</td>
    <td>11.9</td>
    <td>6596.1</td>
    <td>Greater Nashua Boys and Girls Club</td>
</tr>

<tr>
    <td>1358</td>
    <td><a href="/player/1592/aiden-lamarre/" target="_blank">aiden lamarre</a></td>
    <td>91.4</td>
    <td>12.3</td>
    <td>6595.9</td>
    <td>ascension</td>
</tr>

<tr>
    <td>1359</td>
    <td><a href="/player/511/richie-daibes/" target="_blank">Richie Daibes</a></td>
    <td>87.8</td>
    <td>11.0</td>
    <td>6594.9</td>
    <td>Red Nose</td>
</tr>

<tr>
    <td>1360</td>
    <td><a href="/player/1615/joseph-singer/" target="_blank">Joseph Singer</a></td>
    <td>110.6</td>
    <td>10.1</td>
    <td>6592.4</td>
    <td>Madbulls</td>
</tr>

<tr>
    <td>1361</td>
    <td><a href="/player/2605/alexander-cekada/" target="_blank">Alexander Cekada</a></td>
    <td>101.0</td>
    <td>12.7</td>
    <td>6590.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1362</td>
    <td><a href="/player/2171/juliusz-raczkowski/" target="_blank">Juliusz Raczkowski</a></td>
    <td>103.4</td>
    <td>10.2</td>
    <td>6590.1</td>
    <td>Woburn Tanners</td>
</tr>

<tr>
    <td>1363</td>
    <td><a href="/player/2958/cody-duvendack/" target="_blank">Cody Duvendack</a></td>
    <td>79.0</td>
    <td>11.8</td>
    <td>6587.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1364</td>
    <td><a href="/player/2831/william-soto/" target="_blank">William Soto</a></td>
    <td>66.9</td>
    <td>11.3</td>
    <td>6586.4</td>
    <td></td>
</tr>

<tr>
    <td>1365</td>
    <td><a href="/player/3065/james-belleville/" target="_blank">James Belleville</a></td>
    <td>78.4</td>
    <td>11.7</td>
    <td>6584.3</td>
    <td>Team Donahoe</td>
</tr>

<tr>
    <td>1366</td>
    <td><a href="/player/1971/anthony-borbone/" target="_blank">Anthony Borbone</a></td>
    <td>92.6</td>
    <td>13.4</td>
    <td>6583.6</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>1367</td>
    <td><a href="/player/916/thomas-keegan/" target="_blank">Thomas Keegan</a></td>
    <td>80.4</td>
    <td>12.2</td>
    <td>6574.7</td>
    <td>Sachem North</td>
</tr>

<tr>
    <td>1368</td>
    <td><a href="/player/2205/oliver-dostalek/" target="_blank">Oliver Dostalek</a></td>
    <td>96.2</td>
    <td>10.2</td>
    <td>6573.2</td>
    <td>Locust Valley Falcons</td>
</tr>

<tr>
    <td>1369</td>
    <td><a href="/player/2101/isaac-wadleigh/" target="_blank">Isaac Wadleigh</a></td>
    <td>99.8</td>
    <td>14.1</td>
    <td>6568.7</td>
    <td>RMS Timberwolves</td>
</tr>

<tr>
    <td>1370</td>
    <td><a href="/player/2914/hayden-masserant/" target="_blank">Hayden Masserant</a></td>
    <td>91.6</td>
    <td>12.9</td>
    <td>6565.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1371</td>
    <td><a href="/player/1421/jayla-hale/" target="_blank">Jayla Hale</a></td>
    <td>113.2</td>
    <td>12.2</td>
    <td>6560.5</td>
    <td>Strong branch</td>
</tr>

<tr>
    <td>1372</td>
    <td><a href="/player/821/riley-starace/" target="_blank">Riley Starace</a></td>
    <td>96.2</td>
    <td>13.0</td>
    <td>6558.5</td>
    <td>Rocky Point</td>
</tr>

<tr>
    <td>1373</td>
    <td><a href="/player/1023/fabian-vanegas/" target="_blank">Fabian Vanegas</a></td>
    <td>91.6</td>
    <td>9.6</td>
    <td>6557.1</td>
    <td>Ly titans/ UFC</td>
</tr>

<tr>
    <td>1374</td>
    <td><a href="/player/2098/peter-rincan/" target="_blank">Peter Rincan</a></td>
    <td>78.0</td>
    <td>12.9</td>
    <td>6555.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1375</td>
    <td><a href="/player/1197/bennie-franquiz/" target="_blank">Bennie Franquiz</a></td>
    <td>82.2</td>
    <td>11.9</td>
    <td>6550.6</td>
    <td>MSWC</td>
</tr>

<tr>
    <td>1376</td>
    <td><a href="/player/1047/devin-downes/" target="_blank">Devin Downes</a></td>
    <td>89.0</td>
    <td>10.6</td>
    <td>6545.2</td>
    <td>VHW</td>
</tr>

<tr>
    <td>1377</td>
    <td><a href="/player/1246/alexander-mcdowell/" target="_blank">Alexander McDowell</a></td>
    <td>100.0</td>
    <td>9.5</td>
    <td>6539.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1378</td>
    <td><a href="/player/1701/greyson-cirolli/" target="_blank">Greyson Cirolli</a></td>
    <td>100.0</td>
    <td>12.5</td>
    <td>6539.5</td>
    <td>Miller Place</td>
</tr>

<tr>
    <td>1379</td>
    <td><a href="/player/2443/jesse-riekert/" target="_blank">Jesse Riekert</a></td>
    <td>98.0</td>
    <td>14.2</td>
    <td>6536.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1380</td>
    <td><a href="/player/1152/kyon-sarwari/" target="_blank">Kyon Sarwari</a></td>
    <td>84.4</td>
    <td>10.9</td>
    <td>6536.0</td>
    <td>Coram</td>
</tr>

<tr>
    <td>1381</td>
    <td><a href="/player/2071/cole-brandt/" target="_blank">cole brandt</a></td>
    <td>77.4</td>
    <td>10.0</td>
    <td>6536.0</td>
    <td>nashua bgc</td>
</tr>

<tr>
    <td>1382</td>
    <td><a href="/player/2097/noah-lake/" target="_blank">Noah Lake</a></td>
    <td>78.8</td>
    <td>11.6</td>
    <td>6524.8</td>
    <td>BGCGN</td>
</tr>

<tr>
    <td>1383</td>
    <td><a href="/player/987/henry-barbagallo/" target="_blank">Henry Barbagallo</a></td>
    <td>80.8</td>
    <td>13.2</td>
    <td>6522.5</td>
    <td>Blue Wave Wrestling</td>
</tr>

<tr>
    <td>1384</td>
    <td><a href="/player/917/trey-oppedisano/" target="_blank">Trey Oppedisano</a></td>
    <td>95.6</td>
    <td>12.7</td>
    <td>6521.1</td>
    <td>Pat med raiders</td>
</tr>

<tr>
    <td>1385</td>
    <td><a href="/player/3003/bronson-shinkonis/" target="_blank">Bronson Shinkonis</a></td>
    <td>78.3</td>
    <td>11.1</td>
    <td>6521.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1386</td>
    <td><a href="/player/2214/ryan-hannaford/" target="_blank">Ryan Hannaford</a></td>
    <td>80.0</td>
    <td>13.4</td>
    <td>6520.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1387</td>
    <td><a href="/player/3230/alexander-mainz/" target="_blank">Alexander Mainz</a></td>
    <td>95.2</td>
    <td>11.4</td>
    <td>6520.4</td>
    <td>jpw</td>
</tr>

<tr>
    <td>1388</td>
    <td><a href="/player/1211/jack-dimaggio/" target="_blank">Jack Dimaggio</a></td>
    <td>83.0</td>
    <td>13.0</td>
    <td>6514.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1389</td>
    <td><a href="/player/1961/luke-berini/" target="_blank">Luke Berini</a></td>
    <td>111.0</td>
    <td>10.0</td>
    <td>6514.2</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>1390</td>
    <td><a href="/player/2199/ryan-ok/" target="_blank">Ryan Ok</a></td>
    <td>92.0</td>
    <td>11.2</td>
    <td>6512.1</td>
    <td>Locust Valley Falcons</td>
</tr>

<tr>
    <td>1391</td>
    <td><a href="/player/1555/trevin-guardarrama/" target="_blank">Trevin Guardarrama</a></td>
    <td>85.0</td>
    <td>10.8</td>
    <td>6500.0</td>
    <td>Ascension Wrestling Academy</td>
</tr>

<tr>
    <td>1392</td>
    <td><a href="/player/1753/michael-kerr/" target="_blank">Michael Kerr</a></td>
    <td>76.0</td>
    <td>14.3</td>
    <td>6498.0</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1393</td>
    <td><a href="/player/2019/ben-rakiey/" target="_blank">Ben Rakiey</a></td>
    <td>85.0</td>
    <td>10.9</td>
    <td>6497.4</td>
    <td>Litchfield</td>
</tr>

<tr>
    <td>1394</td>
    <td><a href="/player/997/dominic-ziccardi/" target="_blank">Dominic Ziccardi</a></td>
    <td>98.6</td>
    <td>12.4</td>
    <td>6494.1</td>
    <td>Kings Park</td>
</tr>

<tr>
    <td>1395</td>
    <td><a href="/player/912/jack-cusumano/" target="_blank">Jack Cusumano</a></td>
    <td>80.0</td>
    <td>12.0</td>
    <td>6492.0</td>
    <td>Sachem</td>
</tr>

<tr>
    <td>1396</td>
    <td><a href="/player/1241/declan-meehan/" target="_blank">Declan Meehan</a></td>
    <td>98.0</td>
    <td>12.5</td>
    <td>6492.0</td>
    <td>Blue Wave</td>
</tr>

<tr>
    <td>1397</td>
    <td><a href="/player/2833/nicholas-innamorati/" target="_blank">Nicholas Innamorati</a></td>
    <td>83.4</td>
    <td>11.2</td>
    <td>6490.4</td>
    <td>Pittston area</td>
</tr>

<tr>
    <td>1398</td>
    <td><a href="/player/1231/vincent-aprigliano/" target="_blank">Vincent Aprigliano</a></td>
    <td>99.0</td>
    <td>13.8</td>
    <td>6488.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1399</td>
    <td><a href="/player/2485/jesse-bittenbender/" target="_blank">Jesse Bittenbender</a></td>
    <td>102.8</td>
    <td>12.4</td>
    <td>6485.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1400</td>
    <td><a href="/player/2893/braydon-tougas/" target="_blank">Braydon Tougas</a></td>
    <td>83.4</td>
    <td>12.4</td>
    <td>6484.8</td>
    <td>Michigan Revolution</td>
</tr>

<tr>
    <td>1401</td>
    <td><a href="/player/2955/gage-rothman/" target="_blank">Gage Rothman</a></td>
    <td>83.7</td>
    <td>12.2</td>
    <td>6483.6</td>
    <td>Kodiak attack</td>
</tr>

<tr>
    <td>1402</td>
    <td><a href="/player/1415/will-zerden/" target="_blank">will zerden</a></td>
    <td>84.0</td>
    <td>13.4</td>
    <td>6480.4</td>
    <td></td>
</tr>

<tr>
    <td>1403</td>
    <td><a href="/player/1980/caleb-holden/" target="_blank">Caleb Holden</a></td>
    <td>91.8</td>
    <td>11.0</td>
    <td>6480.1</td>
    <td>Raptors</td>
</tr>

<tr>
    <td>1404</td>
    <td><a href="/player/1893/teddy-christensen/" target="_blank">Teddy Christensen</a></td>
    <td>112.8</td>
    <td>9.4</td>
    <td>6479.0</td>
    <td>Bethpage PAL</td>
</tr>

<tr>
    <td>1405</td>
    <td><a href="/player/1777/xavier-guerrier/" target="_blank">Xavier Guerrier</a></td>
    <td>106.8</td>
    <td>9.7</td>
    <td>6475.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1406</td>
    <td><a href="/player/1057/konnor-rosenzweig/" target="_blank">Konnor Rosenzweig</a></td>
    <td>75.0</td>
    <td>12.3</td>
    <td>6472.5</td>
    <td>Lb gladiators</td>
</tr>

<tr>
    <td>1407</td>
    <td><a href="/player/1318/vinny-dick-iii/" target="_blank">Vinny Dick III</a></td>
    <td>78.0</td>
    <td>13.2</td>
    <td>6472.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1408</td>
    <td><a href="/player/1806/maksim-pandorf/" target="_blank">Maksim Pandorf</a></td>
    <td>97.0</td>
    <td>11.2</td>
    <td>6467.5</td>
    <td>Olympic</td>
</tr>

<tr>
    <td>1409</td>
    <td><a href="/player/2726/mikey-good/" target="_blank">Mikey Good</a></td>
    <td>92.5</td>
    <td>11.8</td>
    <td>6465.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1410</td>
    <td><a href="/player/1049/anthony-noonan/" target="_blank">Anthony Noonan</a></td>
    <td>100.8</td>
    <td>14.2</td>
    <td>6461.7</td>
    <td>Lindenhurst</td>
</tr>

<tr>
    <td>1411</td>
    <td><a href="/player/1124/taiyo-gemme/" target="_blank">Taiyo Gemme</a></td>
    <td>71.6</td>
    <td>9.7</td>
    <td>6456.0</td>
    <td>MarcAurele Wrestling</td>
</tr>

<tr>
    <td>1412</td>
    <td><a href="/player/3265/nicholas-alcini/" target="_blank">Nicholas Alcini</a></td>
    <td>107.8</td>
    <td>9.2</td>
    <td>6454.8</td>
    <td>Capac Warriors</td>
</tr>

<tr>
    <td>1413</td>
    <td><a href="/player/833/jeremy-cruz/" target="_blank">Jeremy Cruz</a></td>
    <td>90.6</td>
    <td>14.1</td>
    <td>6453.9</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1414</td>
    <td><a href="/player/2085/sawyer-ray/" target="_blank">Sawyer Ray</a></td>
    <td>97.0</td>
    <td>9.5</td>
    <td>6452.5</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>1415</td>
    <td><a href="/player/1184/michael-mais/" target="_blank">Michael Mais</a></td>
    <td>81.2</td>
    <td>12.5</td>
    <td>6452.2</td>
    <td>Copiague</td>
</tr>

<tr>
    <td>1416</td>
    <td><a href="/player/621/vincent-romano/" target="_blank">Vincent Romano</a></td>
    <td>86.0</td>
    <td>15.5</td>
    <td>6452.1</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1417</td>
    <td><a href="/player/2470/jayson-savage/" target="_blank">Jayson Savage</a></td>
    <td>90.0</td>
    <td>14.5</td>
    <td>6451.0</td>
    <td>wildcats</td>
</tr>

<tr>
    <td>1418</td>
    <td><a href="/player/542/tyler-venet/" target="_blank">Tyler Venet</a></td>
    <td>80.2</td>
    <td>12.0</td>
    <td>6444.1</td>
    <td>Elite</td>
</tr>

<tr>
    <td>1419</td>
    <td><a href="/player/2667/mario-del-vecchio/" target="_blank">Mario Del Vecchio</a></td>
    <td>85.2</td>
    <td>12.1</td>
    <td>6443.0</td>
    <td>Olympic Wrestling Club</td>
</tr>

<tr>
    <td>1420</td>
    <td><a href="/player/2136/brandon-gray/" target="_blank">Brandon Gray</a></td>
    <td>93.6</td>
    <td>9.9</td>
    <td>6442.5</td>
    <td>Newport Tigers</td>
</tr>

<tr>
    <td>1421</td>
    <td><a href="/player/935/tommy-aiello/" target="_blank">Tommy Aiello</a></td>
    <td>80.8</td>
    <td>11.1</td>
    <td>6440.2</td>
    <td>Bluewave</td>
</tr>

<tr>
    <td>1422</td>
    <td><a href="/player/870/james-dauch/" target="_blank">James Dauch</a></td>
    <td>82.4</td>
    <td>11.3</td>
    <td>6439.6</td>
    <td>Lindenhurst Wrestling Club</td>
</tr>

<tr>
    <td>1423</td>
    <td><a href="/player/3127/luciano-luna/" target="_blank">Luciano Luna</a></td>
    <td>79.0</td>
    <td>10.4</td>
    <td>6437.4</td>
    <td>Summit</td>
</tr>

<tr>
    <td>1424</td>
    <td><a href="/player/790/sergio-sokoluk/" target="_blank">sergio sokoluk</a></td>
    <td>83.0</td>
    <td>11.6</td>
    <td>6437.3</td>
    <td>will power</td>
</tr>

<tr>
    <td>1425</td>
    <td><a href="/player/1816/robert-fahey/" target="_blank">Robert Fahey</a></td>
    <td>85.8</td>
    <td>10.7</td>
    <td>6437.3</td>
    <td>X-Caliber</td>
</tr>

<tr>
    <td>1426</td>
    <td><a href="/player/2100/jayson-brucato/" target="_blank">Jayson Brucato</a></td>
    <td>98.0</td>
    <td>9.4</td>
    <td>6436.5</td>
    <td>Bull dogs</td>
</tr>

<tr>
    <td>1427</td>
    <td><a href="/player/2229/oliver-goldin/" target="_blank">Oliver Goldin</a></td>
    <td>95.0</td>
    <td>13.0</td>
    <td>6435.0</td>
    <td>NYC Wrestling Club</td>
</tr>

<tr>
    <td>1428</td>
    <td><a href="/player/2449/jay-klampfer/" target="_blank">Jay Klampfer</a></td>
    <td>88.8</td>
    <td>14.8</td>
    <td>6434.7</td>
    <td>Harborfields</td>
</tr>

<tr>
    <td>1429</td>
    <td><a href="/player/2659/william-hepler/" target="_blank">William Hepler</a></td>
    <td>87.0</td>
    <td>11.6</td>
    <td>6429.3</td>
    <td>Ironman</td>
</tr>

<tr>
    <td>1430</td>
    <td><a href="/player/2223/jack-miller/" target="_blank">Jack Miller</a></td>
    <td>112.0</td>
    <td>10.1</td>
    <td>6428.3</td>
    <td>Miller Place Kid Wrestling</td>
</tr>

<tr>
    <td>1431</td>
    <td><a href="/player/2165/aiden-thomas/" target="_blank">Aiden Thomas</a></td>
    <td>77.6</td>
    <td>12.0</td>
    <td>6428.2</td>
    <td>St. johnsbury Prospectors</td>
</tr>

<tr>
    <td>1432</td>
    <td><a href="/player/3046/drake-pollins/" target="_blank">Drake Pollins</a></td>
    <td>86.8</td>
    <td>12.4</td>
    <td>6428.1</td>
    <td>Michigan Matcats</td>
</tr>

<tr>
    <td>1433</td>
    <td><a href="/player/908/ryan-tesler/" target="_blank">Ryan Tesler</a></td>
    <td>82.8</td>
    <td>11.9</td>
    <td>6421.5</td>
    <td>Bethpage PAL</td>
</tr>

<tr>
    <td>1434</td>
    <td><a href="/player/3408/mason-katschor/" target="_blank">Mason Katschor</a></td>
    <td>81.6</td>
    <td>11.9</td>
    <td>6416.4</td>
    <td>Dundee</td>
</tr>

<tr>
    <td>1435</td>
    <td><a href="/player/1382/justin-riello/" target="_blank">Justin Riello</a></td>
    <td>89.8</td>
    <td>12.6</td>
    <td>6411.7</td>
    <td>Stony Point</td>
</tr>

<tr>
    <td>1436</td>
    <td><a href="/player/3080/maxim-benore/" target="_blank">Maxim Benore</a></td>
    <td>78.9</td>
    <td>13.0</td>
    <td>6411.7</td>
    <td>Kodiak</td>
</tr>

<tr>
    <td>1437</td>
    <td><a href="/player/3180/samuel-ward/" target="_blank">Samuel Ward</a></td>
    <td>88.7</td>
    <td>14.1</td>
    <td>6411.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1438</td>
    <td><a href="/player/3282/johnny-manganiello/" target="_blank">Johnny Manganiello</a></td>
    <td>90.0</td>
    <td>11.7</td>
    <td>6402.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1439</td>
    <td><a href="/player/2871/jamison-gregory/" target="_blank">Jamison Gregory</a></td>
    <td>80.8</td>
    <td>11.7</td>
    <td>6401.2</td>
    <td>Pinckney Wrestling Club</td>
</tr>

<tr>
    <td>1440</td>
    <td><a href="/player/541/gryffin-alfalla/" target="_blank">Gryffin Alfalla</a></td>
    <td>81.0</td>
    <td>11.4</td>
    <td>6397.3</td>
    <td>dynamic</td>
</tr>

<tr>
    <td>1441</td>
    <td><a href="/player/2678/rhyan-gallaway/" target="_blank">Rhyan Gallaway</a></td>
    <td>103.4</td>
    <td>11.0</td>
    <td>6394.5</td>
    <td>Amherst Wrestling Club</td>
</tr>

<tr>
    <td>1442</td>
    <td><a href="/player/2991/bradley-bauman/" target="_blank">Bradley Bauman</a></td>
    <td>69.4</td>
    <td>11.0</td>
    <td>6394.1</td>
    <td>Kodiak Attack</td>
</tr>

<tr>
    <td>1443</td>
    <td><a href="/player/2929/chase-godwin/" target="_blank">Chase Godwin</a></td>
    <td>88.3</td>
    <td>12.5</td>
    <td>6391.0</td>
    <td>Swanton wrestling club</td>
</tr>

<tr>
    <td>1444</td>
    <td><a href="/player/789/jake-caffrey/" target="_blank">Jake Caffrey</a></td>
    <td>84.4</td>
    <td>9.9</td>
    <td>6380.7</td>
    <td>Dynamic Wrestling</td>
</tr>

<tr>
    <td>1445</td>
    <td><a href="/player/1878/liam-cusack/" target="_blank">Liam Cusack</a></td>
    <td>78.2</td>
    <td>10.2</td>
    <td>6380.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1446</td>
    <td><a href="/player/1159/tanner-tutku/" target="_blank">Tanner Tutku</a></td>
    <td>88.6</td>
    <td>8.9</td>
    <td>6378.0</td>
    <td>Massapequa</td>
</tr>

<tr>
    <td>1447</td>
    <td><a href="/player/1669/nick-surdo/" target="_blank">Nick Surdo</a></td>
    <td>84.2</td>
    <td>12.8</td>
    <td>6360.1</td>
    <td>Salk</td>
</tr>

<tr>
    <td>1448</td>
    <td><a href="/player/1769/anthony-chuquilin/" target="_blank">Anthony Chuquilin</a></td>
    <td>93.2</td>
    <td>13.7</td>
    <td>6360.1</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1449</td>
    <td><a href="/player/3321/christopher-kelesidis/" target="_blank">Christopher Kelesidis</a></td>
    <td>84.0</td>
    <td>10.5</td>
    <td>6350.4</td>
    <td>Ocean Wrestling</td>
</tr>

<tr>
    <td>1450</td>
    <td><a href="/player/1054/christopher-ferranti/" target="_blank">Christopher Ferranti</a></td>
    <td>89.6</td>
    <td>11.1</td>
    <td>6347.9</td>
    <td>Long Beach Gladiators</td>
</tr>

<tr>
    <td>1451</td>
    <td><a href="/player/2079/dylan-seaburg/" target="_blank">Dylan Seaburg</a></td>
    <td>86.0</td>
    <td>11.3</td>
    <td>6345.2</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>1452</td>
    <td><a href="/player/461/tyler-conzo/" target="_blank">Tyler Conzo</a></td>
    <td>68.5</td>
    <td>10.3</td>
    <td>6341.7</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1453</td>
    <td><a href="/player/1639/amari-payton/" target="_blank">Amari Payton</a></td>
    <td>80.4</td>
    <td>13.0</td>
    <td>6338.8</td>
    <td>North rockland</td>
</tr>

<tr>
    <td>1454</td>
    <td><a href="/player/1081/michael-scarandino/" target="_blank">michael scarandino</a></td>
    <td>81.2</td>
    <td>11.5</td>
    <td>6338.5</td>
    <td>lindenhurst</td>
</tr>

<tr>
    <td>1455</td>
    <td><a href="/player/2561/natan-babaev/" target="_blank">Natan Babaev</a></td>
    <td>98.0</td>
    <td>12.6</td>
    <td>6336.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1456</td>
    <td><a href="/player/1030/conner-meehan/" target="_blank">Conner Meehan</a></td>
    <td>83.4</td>
    <td>14.3</td>
    <td>6333.1</td>
    <td>Blue Wave</td>
</tr>

<tr>
    <td>1457</td>
    <td><a href="/player/599/raymond-mcnulty/" target="_blank">Raymond McNulty</a></td>
    <td>80.0</td>
    <td>12.7</td>
    <td>6332.4</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1458</td>
    <td><a href="/player/1751/anthony-sisco/" target="_blank">anthony sisco</a></td>
    <td>83.0</td>
    <td>13.1</td>
    <td>6328.1</td>
    <td>delaware valley middle school</td>
</tr>

<tr>
    <td>1459</td>
    <td><a href="/player/1216/shane-wells/" target="_blank">Shane Wells</a></td>
    <td>83.2</td>
    <td>11.6</td>
    <td>6326.6</td>
    <td>Mt. Sinai.</td>
</tr>

<tr>
    <td>1460</td>
    <td><a href="/player/1733/cj-caines/" target="_blank">CJ Caines</a></td>
    <td>69.8</td>
    <td>10.6</td>
    <td>6321.2</td>
    <td>Altered Beast</td>
</tr>

<tr>
    <td>1461</td>
    <td><a href="/player/1307/khaleif-anthony/" target="_blank">Khaleif Anthony</a></td>
    <td>88.0</td>
    <td>13.5</td>
    <td>6317.9</td>
    <td>The pitbulls</td>
</tr>

<tr>
    <td>1462</td>
    <td><a href="/player/1517/john-cuddy/" target="_blank">John Cuddy</a></td>
    <td>99.0</td>
    <td>14.1</td>
    <td>6314.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1463</td>
    <td><a href="/player/1154/matthew-reehil/" target="_blank">Matthew Reehil</a></td>
    <td>85.0</td>
    <td>12.4</td>
    <td>6310.7</td>
    <td>Massapequa</td>
</tr>

<tr>
    <td>1464</td>
    <td><a href="/player/2191/anthony-pica/" target="_blank">Anthony Pica</a></td>
    <td>85.0</td>
    <td>12.1</td>
    <td>6310.7</td>
    <td>Law academy</td>
</tr>

<tr>
    <td>1465</td>
    <td><a href="/player/3160/wyatt-kramarczyk/" target="_blank">Wyatt Kramarczyk</a></td>
    <td>85.0</td>
    <td>12.9</td>
    <td>6310.7</td>
    <td>Michigan rev</td>
</tr>

<tr>
    <td>1466</td>
    <td><a href="/player/3233/caden-merritt/" target="_blank">Caden Merritt</a></td>
    <td>85.0</td>
    <td>10.9</td>
    <td>6310.7</td>
    <td>Junior Panthers</td>
</tr>

<tr>
    <td>1467</td>
    <td><a href="/player/1341/brooke-lightfoot/" target="_blank">Brooke Lightfoot</a></td>
    <td>89.0</td>
    <td>11.9</td>
    <td>6308.5</td>
    <td>Doughgirl</td>
</tr>

<tr>
    <td>1468</td>
    <td><a href="/player/3120/gavin-kirsch/" target="_blank">Gavin Kirsch</a></td>
    <td>83.3</td>
    <td>10.1</td>
    <td>6307.7</td>
    <td>GLWC</td>
</tr>

<tr>
    <td>1469</td>
    <td><a href="/player/3382/kymah-gummow/" target="_blank">Kymah Gummow</a></td>
    <td>77.0</td>
    <td>10.6</td>
    <td>6306.7</td>
    <td>Black Belt Wrestling Academy</td>
</tr>

<tr>
    <td>1470</td>
    <td><a href="/player/1825/caleb-kosko/" target="_blank">Caleb Kosko</a></td>
    <td>76.3</td>
    <td>10.4</td>
    <td>6306.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1471</td>
    <td><a href="/player/1069/maceo-eramo/" target="_blank">Maceo Eramo</a></td>
    <td>90.0</td>
    <td>12.7</td>
    <td>6302.2</td>
    <td>Long Beach Gladiators</td>
</tr>

<tr>
    <td>1472</td>
    <td><a href="/player/1237/tyler-tuckey/" target="_blank">Tyler Tuckey</a></td>
    <td>88.4</td>
    <td>14.3</td>
    <td>6289.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1473</td>
    <td><a href="/player/694/chase-legler/" target="_blank">Chase Legler</a></td>
    <td>86.2</td>
    <td>12.0</td>
    <td>6286.7</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1474</td>
    <td><a href="/player/2324/jack-meyer/" target="_blank">Jack Meyer</a></td>
    <td>84.2</td>
    <td>11.3</td>
    <td>6281.6</td>
    <td>Intermediate</td>
</tr>

<tr>
    <td>1475</td>
    <td><a href="/player/1597/jakob-soyka/" target="_blank">jakob soyka</a></td>
    <td>95.0</td>
    <td>9.8</td>
    <td>6277.9</td>
    <td>gladiator</td>
</tr>

<tr>
    <td>1476</td>
    <td><a href="/player/3312/brice-woodruff/" target="_blank">Brice Woodruff</a></td>
    <td>78.4</td>
    <td>12.5</td>
    <td>6273.7</td>
    <td>IronHorse</td>
</tr>

<tr>
    <td>1477</td>
    <td><a href="/player/2363/dylan-mueller/" target="_blank">Dylan Mueller</a></td>
    <td>88.8</td>
    <td>12.3</td>
    <td>6268.4</td>
    <td>Locust Valley</td>
</tr>

<tr>
    <td>1478</td>
    <td><a href="/player/1746/jake-pecorella/" target="_blank">Jake Pecorella</a></td>
    <td>110.0</td>
    <td>12.3</td>
    <td>6266.3</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1479</td>
    <td><a href="/player/3347/gavin-young/" target="_blank">Gavin Young</a></td>
    <td>72.0</td>
    <td>11.7</td>
    <td>6264.3</td>
    <td>Old Bridge</td>
</tr>

<tr>
    <td>1480</td>
    <td><a href="/player/1072/raynaldo-dejesus/" target="_blank">Raynaldo DeJesus</a></td>
    <td>77.4</td>
    <td>12.6</td>
    <td>6261.6</td>
    <td>Lindenhurst</td>
</tr>

<tr>
    <td>1481</td>
    <td><a href="/player/1339/jakobi-hagar/" target="_blank">Jakobi Hagar</a></td>
    <td>81.6</td>
    <td>10.4</td>
    <td>6260.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1482</td>
    <td><a href="/player/1541/lanah-holeman/" target="_blank">Lanah Holeman</a></td>
    <td>91.6</td>
    <td>9.4</td>
    <td>6258.3</td>
    <td>Roughhouse</td>
</tr>

<tr>
    <td>1483</td>
    <td><a href="/player/933/rocco-destefano/" target="_blank">Rocco DeStefano</a></td>
    <td>69.0</td>
    <td>10.6</td>
    <td>6257.7</td>
    <td>Barn Brothers</td>
</tr>

<tr>
    <td>1484</td>
    <td><a href="/player/2998/logan-mazur/" target="_blank">Logan Mazur</a></td>
    <td>95.2</td>
    <td>9.2</td>
    <td>6254.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1485</td>
    <td><a href="/player/2823/grady-moore/" target="_blank">Grady Moore</a></td>
    <td>77.8</td>
    <td>11.3</td>
    <td>6253.6</td>
    <td>MPR</td>
</tr>

<tr>
    <td>1486</td>
    <td><a href="/player/1373/dario-duany/" target="_blank">Dario Duany</a></td>
    <td>84.0</td>
    <td>12.6</td>
    <td>6250.4</td>
    <td>MPR</td>
</tr>

<tr>
    <td>1487</td>
    <td><a href="/player/2021/christian-kuilan/" target="_blank">Christian Kuilan</a></td>
    <td>84.0</td>
    <td>11.6</td>
    <td>6250.4</td>
    <td>Litchfield</td>
</tr>

<tr>
    <td>1488</td>
    <td><a href="/player/2760/weston-borgers/" target="_blank">Weston Borgers</a></td>
    <td>85.1</td>
    <td>11.3</td>
    <td>6245.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1489</td>
    <td><a href="/player/3033/braydon-crow/" target="_blank">Braydon Crow</a></td>
    <td>80.0</td>
    <td>10.9</td>
    <td>6237.5</td>
    <td>Kodiak attack</td>
</tr>

<tr>
    <td>1490</td>
    <td><a href="/player/2313/elijah-khan/" target="_blank">Elijah Khan</a></td>
    <td>85.0</td>
    <td>13.9</td>
    <td>6233.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1491</td>
    <td><a href="/player/931/christopher-fick/" target="_blank">Christopher Fick</a></td>
    <td>104.4</td>
    <td>11.2</td>
    <td>6233.1</td>
    <td>Kings Park</td>
</tr>

<tr>
    <td>1492</td>
    <td><a href="/player/1887/benjamin-freudenberg/" target="_blank">Benjamin Freudenberg</a></td>
    <td>80.6</td>
    <td>10.2</td>
    <td>6230.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1493</td>
    <td><a href="/player/1454/luke-neuer/" target="_blank">luke Neuer</a></td>
    <td>90.0</td>
    <td>14.1</td>
    <td>6228.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1494</td>
    <td><a href="/player/3217/daniel-berardi/" target="_blank">Daniel Berardi</a></td>
    <td>82.0</td>
    <td>13.9</td>
    <td>6227.5</td>
    <td></td>
</tr>

<tr>
    <td>1495</td>
    <td><a href="/player/1929/aiden-langlois/" target="_blank">Aiden Langlois</a></td>
    <td>91.4</td>
    <td>11.4</td>
    <td>6223.4</td>
    <td>Goffstown</td>
</tr>

<tr>
    <td>1496</td>
    <td><a href="/player/3211/jack-olive/" target="_blank">Jack Olive</a></td>
    <td>78.0</td>
    <td>13.0</td>
    <td>6222.5</td>
    <td>Ocean Township/Triumph</td>
</tr>

<tr>
    <td>1497</td>
    <td><a href="/player/822/talen-russell/" target="_blank">Talen Russell</a></td>
    <td>93.0</td>
    <td>11.9</td>
    <td>6217.0</td>
    <td>Rocky point</td>
</tr>

<tr>
    <td>1498</td>
    <td><a href="/player/2904/connor-berden/" target="_blank">Connor Berden</a></td>
    <td>85.0</td>
    <td>11.0</td>
    <td>6210.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1499</td>
    <td><a href="/player/3181/armani-mccann/" target="_blank">Armani McCann</a></td>
    <td>85.0</td>
    <td>12.2</td>
    <td>6210.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1500</td>
    <td><a href="/player/2621/riley-storozuk/" target="_blank">Riley Storozuk</a></td>
    <td>77.0</td>
    <td>10.6</td>
    <td>6206.7</td>
    <td>Fiaheye</td>
</tr>

<tr>
    <td>1501</td>
    <td><a href="/player/3432/zack-lombreglia/" target="_blank">Zack Lombreglia</a></td>
    <td>83.3</td>
    <td>10.9</td>
    <td>6204.8</td>
    <td>Iron Horse</td>
</tr>

<tr>
    <td>1502</td>
    <td><a href="/player/3157/alex-provines/" target="_blank">Alex Provines</a></td>
    <td>80.0</td>
    <td>13.1</td>
    <td>6201.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1503</td>
    <td><a href="/player/2807/brady-full/" target="_blank">Brady Full</a></td>
    <td>77.6</td>
    <td>11.0</td>
    <td>6198.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1504</td>
    <td><a href="/player/1551/kaleb-keckler/" target="_blank">Kaleb Keckler</a></td>
    <td>77.8</td>
    <td>10.3</td>
    <td>6195.5</td>
    <td>Doughboy</td>
</tr>

<tr>
    <td>1505</td>
    <td><a href="/player/1899/seamus-cusack/" target="_blank">Seamus Cusack</a></td>
    <td>80.4</td>
    <td>12.8</td>
    <td>6191.0</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1506</td>
    <td><a href="/player/2320/adriel-stevens/" target="_blank">Adriel Stevens</a></td>
    <td>83.0</td>
    <td>11.9</td>
    <td>6189.3</td>
    <td>Wantagh Warriors</td>
</tr>

<tr>
    <td>1507</td>
    <td><a href="/player/2555/aidan-kessler/" target="_blank">Aidan Kessler</a></td>
    <td>83.0</td>
    <td>14.5</td>
    <td>6189.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1508</td>
    <td><a href="/player/3130/ivan-rego/" target="_blank">Ivan Rego</a></td>
    <td>83.0</td>
    <td>11.5</td>
    <td>6189.3</td>
    <td>Yale Street Wrestling</td>
</tr>

<tr>
    <td>1509</td>
    <td><a href="/player/3318/tristan-rosemeyer/" target="_blank">Tristan Rosemeyer</a></td>
    <td>83.0</td>
    <td>11.3</td>
    <td>6189.3</td>
    <td>Orchard South</td>
</tr>

<tr>
    <td>1510</td>
    <td><a href="/player/1155/anthony-la-gala-ryan/" target="_blank">Anthony La Gala-Ryan</a></td>
    <td>69.0</td>
    <td>11.1</td>
    <td>6180.9</td>
    <td>Longwood</td>
</tr>

<tr>
    <td>1511</td>
    <td><a href="/player/867/christopher-pacilio/" target="_blank">Christopher Pacilio</a></td>
    <td>76.2</td>
    <td>11.2</td>
    <td>6171.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1512</td>
    <td><a href="/player/963/jack-rowland/" target="_blank">Jack Rowland</a></td>
    <td>70.6</td>
    <td>11.6</td>
    <td>6170.7</td>
    <td>Barn Brothers</td>
</tr>

<tr>
    <td>1513</td>
    <td><a href="/player/740/isa-hernandez/" target="_blank">Isa Hernandez</a></td>
    <td>78.0</td>
    <td>10.4</td>
    <td>6169.6</td>
    <td>North Plainfield</td>
</tr>

<tr>
    <td>1514</td>
    <td><a href="/player/3083/kenny-brewer/" target="_blank">Kenny Brewer</a></td>
    <td>90.7</td>
    <td>10.6</td>
    <td>6166.9</td>
    <td>Whitmer Junior Panthers</td>
</tr>

<tr>
    <td>1515</td>
    <td><a href="/player/1606/ava-guilmette/" target="_blank">Ava Guilmette</a></td>
    <td>84.0</td>
    <td>9.1</td>
    <td>6165.5</td>
    <td>Ascension wrestling academy</td>
</tr>

<tr>
    <td>1516</td>
    <td><a href="/player/664/ricardo-sanchez/" target="_blank">ricardo sanchez</a></td>
    <td>85.0</td>
    <td>14.1</td>
    <td>6162.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1517</td>
    <td><a href="/player/1856/joseph-traversa/" target="_blank">Joseph Traversa</a></td>
    <td>85.4</td>
    <td>11.6</td>
    <td>6157.0</td>
    <td>Bethpage</td>
</tr>

<tr>
    <td>1518</td>
    <td><a href="/player/3263/jason-mifsud/" target="_blank">Jason Mifsud</a></td>
    <td>91.1</td>
    <td>10.6</td>
    <td>6156.5</td>
    <td>N/a</td>
</tr>

<tr>
    <td>1519</td>
    <td><a href="/player/779/james-baggiano/" target="_blank">James Baggiano</a></td>
    <td>80.6</td>
    <td>7.8</td>
    <td>6154.3</td>
    <td>shoreham</td>
</tr>

<tr>
    <td>1520</td>
    <td><a href="/player/1602/matthew-stoerzinger/" target="_blank">Matthew Stoerzinger</a></td>
    <td>72.2</td>
    <td>9.3</td>
    <td>6153.4</td>
    <td>MarcAurele</td>
</tr>

<tr>
    <td>1521</td>
    <td><a href="/player/3299/logan-christopher/" target="_blank">Logan Christopher</a></td>
    <td>77.5</td>
    <td>11.2</td>
    <td>6153.0</td>
    <td>Fenton</td>
</tr>

<tr>
    <td>1522</td>
    <td><a href="/player/3227/cooper-lawrence/" target="_blank">Cooper Lawrence</a></td>
    <td>88.7</td>
    <td>10.5</td>
    <td>6152.5</td>
    <td>JPW</td>
</tr>

<tr>
    <td>1523</td>
    <td><a href="/player/1028/ryan-young/" target="_blank">Ryan Young</a></td>
    <td>85.6</td>
    <td>12.7</td>
    <td>6150.7</td>
    <td>Wantagh</td>
</tr>

<tr>
    <td>1524</td>
    <td><a href="/player/1478/domenic-devuono/" target="_blank">Domenic DeVuono</a></td>
    <td>98.4</td>
    <td>10.3</td>
    <td>6150.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1525</td>
    <td><a href="/player/2849/ryan-totten/" target="_blank">Ryan Totten</a></td>
    <td>69.9</td>
    <td>11.3</td>
    <td>6149.8</td>
    <td>Michigan Revolution</td>
</tr>

<tr>
    <td>1526</td>
    <td><a href="/player/1228/peyton-hamada/" target="_blank">Peyton Hamada</a></td>
    <td>85.6</td>
    <td>10.5</td>
    <td>6147.3</td>
    <td>Bluewave</td>
</tr>

<tr>
    <td>1527</td>
    <td><a href="/player/778/zukhriddin-majidov/" target="_blank">zukhriddin majidov</a></td>
    <td>76.0</td>
    <td>10.8</td>
    <td>6147.0</td>
    <td>will power</td>
</tr>

<tr>
    <td>1528</td>
    <td><a href="/player/2885/levi-richmond/" target="_blank">Levi Richmond</a></td>
    <td>86.6</td>
    <td>13.6</td>
    <td>6145.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1529</td>
    <td><a href="/player/2359/landon-podrang/" target="_blank">Landon Podrang</a></td>
    <td>95.8</td>
    <td>8.4</td>
    <td>6140.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1530</td>
    <td><a href="/player/1148/caleb-mott/" target="_blank">Caleb Mott</a></td>
    <td>76.0</td>
    <td>9.6</td>
    <td>6140.3</td>
    <td>Bonac Wrestling</td>
</tr>

<tr>
    <td>1531</td>
    <td><a href="/player/3111/eric-ivry/" target="_blank">Eric Ivry</a></td>
    <td>100.0</td>
    <td>11.9</td>
    <td>6139.5</td>
    <td>Elite Wrestling Academy</td>
</tr>

<tr>
    <td>1532</td>
    <td><a href="/player/3188/jazleene-mattingly/" target="_blank">Jazleene Mattingly</a></td>
    <td>100.0</td>
    <td>12.1</td>
    <td>6139.5</td>
    <td>Fisheye</td>
</tr>

<tr>
    <td>1533</td>
    <td><a href="/player/1521/josh-zinkin/" target="_blank">Josh Zinkin</a></td>
    <td>90.0</td>
    <td>13.1</td>
    <td>6136.5</td>
    <td>Highland Park</td>
</tr>

<tr>
    <td>1534</td>
    <td><a href="/player/2702/marisa-iturrino/" target="_blank">Marisa Iturrino</a></td>
    <td>78.4</td>
    <td>10.8</td>
    <td>6128.2</td>
    <td>texas pride</td>
</tr>

<tr>
    <td>1535</td>
    <td><a href="/player/852/cody-popp/" target="_blank">Cody Popp</a></td>
    <td>85.0</td>
    <td>10.8</td>
    <td>6128.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1536</td>
    <td><a href="/player/2446/joshua-la-gala/" target="_blank">Joshua La Gala</a></td>
    <td>82.0</td>
    <td>14.2</td>
    <td>6127.5</td>
    <td>Longwood</td>
</tr>

<tr>
    <td>1537</td>
    <td><a href="/player/2817/michael-keilyk/" target="_blank">Michael Keilyk</a></td>
    <td>82.0</td>
    <td>9.5</td>
    <td>6127.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1538</td>
    <td><a href="/player/2917/richie-harrod-jr/" target="_blank">Richie Harrod Jr.</a></td>
    <td>82.0</td>
    <td>10.6</td>
    <td>6127.5</td>
    <td>lake orion</td>
</tr>

<tr>
    <td>1539</td>
    <td><a href="/player/911/nicolas-mastriano/" target="_blank">Nicolás Mastriano</a></td>
    <td>84.8</td>
    <td>8.7</td>
    <td>6127.1</td>
    <td>Connequot</td>
</tr>

<tr>
    <td>1540</td>
    <td><a href="/player/2829/chase-mancini/" target="_blank">Chase Mancini</a></td>
    <td>76.1</td>
    <td>11.6</td>
    <td>6124.4</td>
    <td>MPR</td>
</tr>

<tr>
    <td>1541</td>
    <td><a href="/player/3415/lucas-maynard/" target="_blank">Lucas Maynard</a></td>
    <td>87.1</td>
    <td>11.1</td>
    <td>6123.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1542</td>
    <td><a href="/player/943/matteo-arbia/" target="_blank">Matteo Arbia</a></td>
    <td>85.0</td>
    <td>9.0</td>
    <td>6121.0</td>
    <td>Kings Park</td>
</tr>

<tr>
    <td>1543</td>
    <td><a href="/player/1978/conner-jackson/" target="_blank">Conner Jackson</a></td>
    <td>86.0</td>
    <td>10.2</td>
    <td>6120.6</td>
    <td>Timberwolves</td>
</tr>

<tr>
    <td>1544</td>
    <td><a href="/player/2103/charles-hendricks/" target="_blank">Charles Hendricks</a></td>
    <td>84.6</td>
    <td>10.8</td>
    <td>6115.2</td>
    <td>Fitchburg Youth</td>
</tr>

<tr>
    <td>1545</td>
    <td><a href="/player/1635/jt-schneider/" target="_blank">JT Schneider</a></td>
    <td>77.6</td>
    <td>14.2</td>
    <td>6114.2</td>
    <td>Norwalk Madbulls</td>
</tr>

<tr>
    <td>1546</td>
    <td><a href="/player/2330/lucas-rivera/" target="_blank">Lucas Rivera</a></td>
    <td>104.6</td>
    <td>11.3</td>
    <td>6114.2</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>1547</td>
    <td><a href="/player/2752/kelly-sullivan/" target="_blank">Kelly Sullivan</a></td>
    <td>73.5</td>
    <td>11.7</td>
    <td>6112.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1548</td>
    <td><a href="/player/2067/summer-callahan/" target="_blank">Summer Callahan</a></td>
    <td>76.0</td>
    <td>9.2</td>
    <td>6111.5</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>1549</td>
    <td><a href="/player/669/hutch-hutchins/" target="_blank">Hutch Hutchins</a></td>
    <td>88.4</td>
    <td>11.9</td>
    <td>6110.7</td>
    <td>lrei</td>
</tr>

<tr>
    <td>1550</td>
    <td><a href="/player/2032/jayson-brucato/" target="_blank">Jayson Brucato</a></td>
    <td>98.2</td>
    <td>9.4</td>
    <td>6109.6</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>1551</td>
    <td><a href="/player/2657/cortez-plowman/" target="_blank">Cortez Plowman</a></td>
    <td>82.6</td>
    <td>9.9</td>
    <td>6106.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1552</td>
    <td><a href="/player/1002/tommy-chiofalo/" target="_blank">Tommy Chiofalo</a></td>
    <td>88.2</td>
    <td>11.3</td>
    <td>6105.2</td>
    <td>North Babylon</td>
</tr>

<tr>
    <td>1553</td>
    <td><a href="/player/2269/jordan-levine/" target="_blank">Jordan Levine</a></td>
    <td>96.8</td>
    <td>12.1</td>
    <td>6104.5</td>
    <td>PYA</td>
</tr>

<tr>
    <td>1554</td>
    <td><a href="/player/2642/chase-williams/" target="_blank">Chase Williams</a></td>
    <td>74.0</td>
    <td>11.3</td>
    <td>6104.0</td>
    <td>Broad Axe</td>
</tr>

<tr>
    <td>1555</td>
    <td><a href="/player/1958/cody-fox/" target="_blank">Cody Fox</a></td>
    <td>94.2</td>
    <td>11.0</td>
    <td>6102.9</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>1556</td>
    <td><a href="/player/886/william-lynn/" target="_blank">William Lynn</a></td>
    <td>83.8</td>
    <td>11.0</td>
    <td>6102.8</td>
    <td>Bethpage</td>
</tr>

<tr>
    <td>1557</td>
    <td><a href="/player/1236/christopher-gould/" target="_blank">Christopher Gould</a></td>
    <td>97.0</td>
    <td>11.2</td>
    <td>6094.1</td>
    <td>Miller Place</td>
</tr>

<tr>
    <td>1558</td>
    <td><a href="/player/1314/dante-geanoules/" target="_blank">Dante Geanoules</a></td>
    <td>85.6</td>
    <td>11.9</td>
    <td>6088.2</td>
    <td>Cordoba Trained</td>
</tr>

<tr>
    <td>1559</td>
    <td><a href="/player/915/rickson-vallejo/" target="_blank">Rickson Vallejo</a></td>
    <td>82.4</td>
    <td>8.2</td>
    <td>6086.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1560</td>
    <td><a href="/player/1131/michael-grossman/" target="_blank">Michael Grossman</a></td>
    <td>70.0</td>
    <td>10.6</td>
    <td>6085.2</td>
    <td>Longwood</td>
</tr>

<tr>
    <td>1561</td>
    <td><a href="/player/1598/franco-arduino/" target="_blank">Franco Arduino</a></td>
    <td>97.2</td>
    <td>11.7</td>
    <td>6076.9</td>
    <td>Stamford  Srestling</td>
</tr>

<tr>
    <td>1562</td>
    <td><a href="/player/2669/madison-clark/" target="_blank">Madison Clark</a></td>
    <td>112.8</td>
    <td>9.9</td>
    <td>6071.8</td>
    <td>Norwalk Youth Wrestling</td>
</tr>

<tr>
    <td>1563</td>
    <td><a href="/player/667/ethan-de-la-cruz/" target="_blank">ethan de la cruz</a></td>
    <td>72.8</td>
    <td>9.9</td>
    <td>6070.7</td>
    <td>rhino</td>
</tr>

<tr>
    <td>1564</td>
    <td><a href="/player/1596/alex-lamarre/" target="_blank">alex lamarre</a></td>
    <td>73.6</td>
    <td>9.8</td>
    <td>6066.1</td>
    <td>ascension</td>
</tr>

<tr>
    <td>1565</td>
    <td><a href="/player/1323/kristofer-oesterle-jr/" target="_blank">Kristofer Oesterle Jr.</a></td>
    <td>81.0</td>
    <td>9.8</td>
    <td>6064.9</td>
    <td>Rancocas Valley</td>
</tr>

<tr>
    <td>1566</td>
    <td><a href="/player/2631/gunnar-castle/" target="_blank">Gunnar Castle</a></td>
    <td>77.0</td>
    <td>10.4</td>
    <td>6056.7</td>
    <td>Fisheye</td>
</tr>

<tr>
    <td>1567</td>
    <td><a href="/player/1032/brody-richert/" target="_blank">Brody Richert</a></td>
    <td>85.2</td>
    <td>10.3</td>
    <td>6047.8</td>
    <td>Mattituck</td>
</tr>

<tr>
    <td>1568</td>
    <td><a href="/player/2116/mitchell-clark/" target="_blank">Mitchell Clark</a></td>
    <td>79.0</td>
    <td>9.3</td>
    <td>6044.8</td>
    <td>Independent</td>
</tr>

<tr>
    <td>1569</td>
    <td><a href="/player/1927/michael-variano/" target="_blank">Michael Variano</a></td>
    <td>85.4</td>
    <td>10.7</td>
    <td>6039.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1570</td>
    <td><a href="/player/1210/lucas-diamond/" target="_blank">Lucas Diamond</a></td>
    <td>75.0</td>
    <td>10.2</td>
    <td>6037.8</td>
    <td>SWR</td>
</tr>

<tr>
    <td>1571</td>
    <td><a href="/player/3293/thomas-dinorscio/" target="_blank">Thomas DiNorscio</a></td>
    <td>79.0</td>
    <td>12.7</td>
    <td>6037.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1572</td>
    <td><a href="/player/1880/cooper-savage/" target="_blank">Cooper Savage</a></td>
    <td>83.0</td>
    <td>11.0</td>
    <td>6034.2</td>
    <td>Triumph</td>
</tr>

<tr>
    <td>1573</td>
    <td><a href="/player/2264/matt-lichter/" target="_blank">Matt Lichter</a></td>
    <td>75.0</td>
    <td>12.8</td>
    <td>6033.7</td>
    <td>FIVE STAR</td>
</tr>

<tr>
    <td>1574</td>
    <td><a href="/player/875/dominick-papa/" target="_blank">Dominick Papa</a></td>
    <td>95.8</td>
    <td>10.9</td>
    <td>6032.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1575</td>
    <td><a href="/player/1340/jack-lightfoot/" target="_blank">Jack Lightfoot</a></td>
    <td>70.8</td>
    <td>11.9</td>
    <td>6023.4</td>
    <td>Doughboy</td>
</tr>

<tr>
    <td>1576</td>
    <td><a href="/player/1976/kaiden-adams/" target="_blank">Kaiden Adams</a></td>
    <td>80.0</td>
    <td>13.3</td>
    <td>6022.1</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>1577</td>
    <td><a href="/player/1594/justin-reiss/" target="_blank">Justin Reiss</a></td>
    <td>84.0</td>
    <td>12.5</td>
    <td>6019.4</td>
    <td>RIWA</td>
</tr>

<tr>
    <td>1578</td>
    <td><a href="/player/2685/urijah-courter/" target="_blank">Urijah Courter</a></td>
    <td>69.4</td>
    <td>11.7</td>
    <td>6019.3</td>
    <td>ECS</td>
</tr>

<tr>
    <td>1579</td>
    <td><a href="/player/520/kyle-von-schmidt/" target="_blank">Kyle von Schmidt</a></td>
    <td>70.0</td>
    <td>11.4</td>
    <td>6011.4</td>
    <td>MPR</td>
</tr>

<tr>
    <td>1580</td>
    <td><a href="/player/992/aidan-seaton/" target="_blank">Aidan Seaton</a></td>
    <td>88.0</td>
    <td>10.3</td>
    <td>6010.9</td>
    <td>Shorem</td>
</tr>

<tr>
    <td>1581</td>
    <td><a href="/player/3078/angelo-bowman/" target="_blank">Angelo Bowman</a></td>
    <td>86.1</td>
    <td>9.5</td>
    <td>6007.7</td>
    <td>Junior Panther Wrestling</td>
</tr>

<tr>
    <td>1582</td>
    <td><a href="/player/2122/wilson-harvey/" target="_blank">Wilson Harvey</a></td>
    <td>88.8</td>
    <td>8.0</td>
    <td>6004.5</td>
    <td>Goffstown Youth Wrestling</td>
</tr>

<tr>
    <td>1583</td>
    <td><a href="/player/2175/gavin-lane/" target="_blank">Gavin Lane</a></td>
    <td>65.6</td>
    <td>9.1</td>
    <td>6003.4</td>
    <td>Doughyboy</td>
</tr>

<tr>
    <td>1584</td>
    <td><a href="/player/1984/giovanni-ricci/" target="_blank">Giovanni Ricci</a></td>
    <td>90.0</td>
    <td>8.6</td>
    <td>6002.2</td>
    <td>methuen youth wresteling</td>
</tr>

<tr>
    <td>1585</td>
    <td><a href="/player/1126/grady-brown/" target="_blank">Grady Brown</a></td>
    <td>80.0</td>
    <td>11.5</td>
    <td>6001.6</td>
    <td>Seneca</td>
</tr>

<tr>
    <td>1586</td>
    <td><a href="/player/1772/henry-gessford/" target="_blank">Henry Gessford</a></td>
    <td>80.0</td>
    <td>12.2</td>
    <td>6001.6</td>
    <td>Navy jr</td>
</tr>

<tr>
    <td>1587</td>
    <td><a href="/player/2848/dillon-vandyke/" target="_blank">Dillon VanDyke</a></td>
    <td>80.0</td>
    <td>9.3</td>
    <td>6001.6</td>
    <td>Cedar Springs Wrestling Club</td>
</tr>

<tr>
    <td>1588</td>
    <td><a href="/player/3032/jtest-hauser/" target="_blank">jtest hauser</a></td>
    <td>80.0</td>
    <td>11.6</td>
    <td>6001.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1589</td>
    <td><a href="/player/3103/brian-boldi/" target="_blank">Brian Boldi</a></td>
    <td>80.0</td>
    <td>11.7</td>
    <td>6001.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1590</td>
    <td><a href="/player/936/vincent-pupillo/" target="_blank">Vincent Pupillo</a></td>
    <td>84.0</td>
    <td>11.9</td>
    <td>5997.2</td>
    <td>Bluewave</td>
</tr>

<tr>
    <td>1591</td>
    <td><a href="/player/1143/christian-annibourne/" target="_blank">Christian Annibourne</a></td>
    <td>91.2</td>
    <td>12.3</td>
    <td>5993.4</td>
    <td>Copiague</td>
</tr>

<tr>
    <td>1592</td>
    <td><a href="/player/2512/kyle-francis/" target="_blank">Kyle Francis</a></td>
    <td>79.4</td>
    <td>10.6</td>
    <td>5992.0</td>
    <td>East Meadow</td>
</tr>

<tr>
    <td>1593</td>
    <td><a href="/player/1375/jaclyn-mcdowell/" target="_blank">Jaclyn McDowell</a></td>
    <td>82.6</td>
    <td>13.4</td>
    <td>5991.4</td>
    <td>Gloucester City</td>
</tr>

<tr>
    <td>1594</td>
    <td><a href="/player/2499/peter-orlando/" target="_blank">Peter Orlando</a></td>
    <td>88.2</td>
    <td>12.3</td>
    <td>5990.1</td>
    <td>RIWA</td>
</tr>

<tr>
    <td>1595</td>
    <td><a href="/player/2286/eddie-lovos/" target="_blank">Eddie Lovos</a></td>
    <td>102.2</td>
    <td>11.3</td>
    <td>5989.9</td>
    <td>Hempstead</td>
</tr>

<tr>
    <td>1596</td>
    <td><a href="/player/1572/ethan-mastrole/" target="_blank">Ethan Mastrole</a></td>
    <td>93.8</td>
    <td>12.7</td>
    <td>5989.1</td>
    <td>n/a</td>
</tr>

<tr>
    <td>1597</td>
    <td><a href="/player/1783/marcus-heck/" target="_blank">Marcus Heck</a></td>
    <td>75.4</td>
    <td>12.0</td>
    <td>5981.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1598</td>
    <td><a href="/player/2048/liam-mcgrail/" target="_blank">Liam McGrail</a></td>
    <td>75.2</td>
    <td>12.3</td>
    <td>5981.1</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>1599</td>
    <td><a href="/player/3257/grady-kromrei/" target="_blank">Grady Kromrei</a></td>
    <td>71.8</td>
    <td>10.1</td>
    <td>5980.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1600</td>
    <td><a href="/player/970/thomas-stazzone/" target="_blank">Thomas Stazzone</a></td>
    <td>80.2</td>
    <td>11.9</td>
    <td>5977.5</td>
    <td>Kings Park</td>
</tr>

<tr>
    <td>1601</td>
    <td><a href="/player/3361/gavin-rodriguez/" target="_blank">Gavin Rodriguez</a></td>
    <td>82.0</td>
    <td>7.9</td>
    <td>5977.5</td>
    <td>Elite</td>
</tr>

<tr>
    <td>1602</td>
    <td><a href="/player/734/jonathon-dalessandro/" target="_blank">Jonathon Dalessandro</a></td>
    <td>75.6</td>
    <td>10.2</td>
    <td>5977.4</td>
    <td>bangor</td>
</tr>

<tr>
    <td>1603</td>
    <td><a href="/player/2047/christian-mcgrail/" target="_blank">Christian McGrail</a></td>
    <td>75.2</td>
    <td>10.9</td>
    <td>5969.9</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>1604</td>
    <td><a href="/player/2619/aidan-rose/" target="_blank">Aidan Rose</a></td>
    <td>93.0</td>
    <td>13.6</td>
    <td>5969.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1605</td>
    <td><a href="/player/3300/lucas-christopher/" target="_blank">Lucas Christopher</a></td>
    <td>71.0</td>
    <td>11.2</td>
    <td>5965.9</td>
    <td>Fenton</td>
</tr>

<tr>
    <td>1606</td>
    <td><a href="/player/3087/alex-marchetti/" target="_blank">Alex Marchetti</a></td>
    <td>70.4</td>
    <td>10.4</td>
    <td>5965.3</td>
    <td>Mat Assassins</td>
</tr>

<tr>
    <td>1607</td>
    <td><a href="/player/1271/lilah-greco/" target="_blank">Lilah Greco</a></td>
    <td>81.6</td>
    <td>11.3</td>
    <td>5964.5</td>
    <td>Mahopac Wrestling Club</td>
</tr>

<tr>
    <td>1608</td>
    <td><a href="/player/2258/anthony-rodriguez/" target="_blank">Anthony Rodriguez</a></td>
    <td>87.4</td>
    <td>12.9</td>
    <td>5963.7</td>
    <td>Falcons</td>
</tr>

<tr>
    <td>1609</td>
    <td><a href="/player/1156/jake-dorsa/" target="_blank">Jake D'Orsa</a></td>
    <td>88.4</td>
    <td>8.9</td>
    <td>5960.6</td>
    <td>LAW Wrestling Academy</td>
</tr>

<tr>
    <td>1610</td>
    <td><a href="/player/2961/jase-sensor/" target="_blank">Jase Sensor</a></td>
    <td>78.3</td>
    <td>11.3</td>
    <td>5960.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1611</td>
    <td><a href="/player/1202/colton-bausenwein/" target="_blank">Colton Bausenwein</a></td>
    <td>83.0</td>
    <td>11.6</td>
    <td>5959.6</td>
    <td>MSWC</td>
</tr>

<tr>
    <td>1612</td>
    <td><a href="/player/969/tommy-nicotra/" target="_blank">tommy nicotra</a></td>
    <td>87.6</td>
    <td>10.7</td>
    <td>5952.0</td>
    <td>bluewave</td>
</tr>

<tr>
    <td>1613</td>
    <td><a href="/player/486/nikita-grigoryan/" target="_blank">Nikita Grigoryan</a></td>
    <td>67.8</td>
    <td>11.3</td>
    <td>5950.4</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1614</td>
    <td><a href="/player/3121/landen-chapman/" target="_blank">Landen Chapman</a></td>
    <td>84.0</td>
    <td>10.5</td>
    <td>5950.4</td>
    <td>Elite wrestling</td>
</tr>

<tr>
    <td>1615</td>
    <td><a href="/player/3100/franklin-banister/" target="_blank">Franklin Banister</a></td>
    <td>79.4</td>
    <td>11.5</td>
    <td>5948.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1616</td>
    <td><a href="/player/1913/kael-mcaloon/" target="_blank">Kael McAloon</a></td>
    <td>82.0</td>
    <td>10.4</td>
    <td>5946.9</td>
    <td>NHWAY</td>
</tr>

<tr>
    <td>1617</td>
    <td><a href="/player/2139/christopher-chaplick/" target="_blank">Christopher Chaplick</a></td>
    <td>70.4</td>
    <td>12.4</td>
    <td>5945.9</td>
    <td>Rawhide</td>
</tr>

<tr>
    <td>1618</td>
    <td><a href="/player/2333/anthony-caputo/" target="_blank">Anthony Caputo</a></td>
    <td>81.0</td>
    <td>11.8</td>
    <td>5945.9</td>
    <td>VHW</td>
</tr>

<tr>
    <td>1619</td>
    <td><a href="/player/2957/brayden-mclaughlin/" target="_blank">brayden mclaughlin</a></td>
    <td>78.3</td>
    <td>10.5</td>
    <td>5945.9</td>
    <td>Bulldogs</td>
</tr>

<tr>
    <td>1620</td>
    <td><a href="/player/2426/tim-gsell/" target="_blank">Tim Gsell</a></td>
    <td>84.0</td>
    <td>12.1</td>
    <td>5944.6</td>
    <td>Samoset MS</td>
</tr>

<tr>
    <td>1621</td>
    <td><a href="/player/893/adam-chambers/" target="_blank">Adam Chambers</a></td>
    <td>83.8</td>
    <td>9.2</td>
    <td>5942.3</td>
    <td>VHW</td>
</tr>

<tr>
    <td>1622</td>
    <td><a href="/player/841/marcus-houghtaling/" target="_blank">Marcus Houghtaling</a></td>
    <td>76.0</td>
    <td>9.7</td>
    <td>5940.0</td>
    <td>OAK NECK FALCONS</td>
</tr>

<tr>
    <td>1623</td>
    <td><a href="/player/1833/marc-brigham/" target="_blank">Marc Brigham</a></td>
    <td>82.4</td>
    <td>9.6</td>
    <td>5932.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1624</td>
    <td><a href="/player/1041/antonio-faldetta/" target="_blank">Antonio Faldetta</a></td>
    <td>71.0</td>
    <td>12.0</td>
    <td>5928.7</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1625</td>
    <td><a href="/player/1968/destiny-mckinnon/" target="_blank">Destiny Mckinnon</a></td>
    <td>98.0</td>
    <td>9.4</td>
    <td>5924.8</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>1626</td>
    <td><a href="/player/1537/calvin-carmody/" target="_blank">Calvin Carmody</a></td>
    <td>89.0</td>
    <td>7.8</td>
    <td>5923.5</td>
    <td>New London Youth Wrestling</td>
</tr>

<tr>
    <td>1627</td>
    <td><a href="/player/2882/brendon-tavani/" target="_blank">Brendon Tavani</a></td>
    <td>80.4</td>
    <td>10.7</td>
    <td>5920.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1628</td>
    <td><a href="/player/652/mert-ozturk/" target="_blank">Mert Ozturk</a></td>
    <td>66.8</td>
    <td>10.3</td>
    <td>5917.9</td>
    <td>Lindenhurst Wrestling Club</td>
</tr>

<tr>
    <td>1629</td>
    <td><a href="/player/1150/octavio-campisi/" target="_blank">Octavio Campisi</a></td>
    <td>92.0</td>
    <td>10.5</td>
    <td>5914.2</td>
    <td>Razor</td>
</tr>

<tr>
    <td>1630</td>
    <td><a href="/player/2968/jonah-mcpherson/" target="_blank">Jonah McPherson</a></td>
    <td>72.7</td>
    <td>10.5</td>
    <td>5913.3</td>
    <td>Hartland Wrestling Club</td>
</tr>

<tr>
    <td>1631</td>
    <td><a href="/player/2167/gabriel-young/" target="_blank">Gabriel Young</a></td>
    <td>83.2</td>
    <td>10.9</td>
    <td>5911.0</td>
    <td>Goffstown Youth Wrestling</td>
</tr>

<tr>
    <td>1632</td>
    <td><a href="/player/2743/micah-engelman/" target="_blank">Micah Engelman</a></td>
    <td>81.0</td>
    <td>10.4</td>
    <td>5908.5</td>
    <td>Altered Beast</td>
</tr>

<tr>
    <td>1633</td>
    <td><a href="/player/1068/john-murphy/" target="_blank">John Murphy</a></td>
    <td>83.8</td>
    <td>11.0</td>
    <td>5907.9</td>
    <td>Manhasset</td>
</tr>

<tr>
    <td>1634</td>
    <td><a href="/player/467/lukas-ryan/" target="_blank">Lukas Ryan</a></td>
    <td>80.0</td>
    <td>10.3</td>
    <td>5904.8</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1635</td>
    <td><a href="/player/1798/burton-smith/" target="_blank">Burton Smith</a></td>
    <td>93.0</td>
    <td>10.0</td>
    <td>5904.8</td>
    <td>Altered  Beast</td>
</tr>

<tr>
    <td>1636</td>
    <td><a href="/player/2123/joe-gosselin/" target="_blank">Joe Gosselin</a></td>
    <td>67.8</td>
    <td>8.6</td>
    <td>5902.5</td>
    <td>Newport Youth</td>
</tr>

<tr>
    <td>1637</td>
    <td><a href="/player/2649/jekobian-davis/" target="_blank">Jekobian Davis</a></td>
    <td>90.0</td>
    <td>10.5</td>
    <td>5902.2</td>
    <td>Pontiac jr. Huskies</td>
</tr>

<tr>
    <td>1638</td>
    <td><a href="/player/1903/will-roof/" target="_blank">Will Roof</a></td>
    <td>92.0</td>
    <td>12.8</td>
    <td>5893.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1639</td>
    <td><a href="/player/868/dimitri-mouzakitis/" target="_blank">Dimitri Mouzakitis</a></td>
    <td>82.6</td>
    <td>11.9</td>
    <td>5893.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1640</td>
    <td><a href="/player/2245/niranjan-deshpande/" target="_blank">NIRANJAN DESHPANDE</a></td>
    <td>90.6</td>
    <td>14.1</td>
    <td>5892.9</td>
    <td>NYC Wrestling Club</td>
</tr>

<tr>
    <td>1641</td>
    <td><a href="/player/2343/dominic-prestano/" target="_blank">Dominic Prestano</a></td>
    <td>85.0</td>
    <td>11.0</td>
    <td>5886.6</td>
    <td>North babylon bulldogs</td>
</tr>

<tr>
    <td>1642</td>
    <td><a href="/player/837/nate-greene/" target="_blank">Nate Greene</a></td>
    <td>79.8</td>
    <td>9.7</td>
    <td>5878.6</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1643</td>
    <td><a href="/player/2369/julian-medina/" target="_blank">Julian Medina</a></td>
    <td>76.0</td>
    <td>12.5</td>
    <td>5873.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1644</td>
    <td><a href="/player/1823/aidan-hilburt/" target="_blank">Aidan Hilburt</a></td>
    <td>80.0</td>
    <td>11.1</td>
    <td>5873.4</td>
    <td>BMWC</td>
</tr>

<tr>
    <td>1645</td>
    <td><a href="/player/2681/luke-gorski/" target="_blank">Luke Gorski</a></td>
    <td>78.0</td>
    <td>12.4</td>
    <td>5872.5</td>
    <td>Westshore- Cleveland</td>
</tr>

<tr>
    <td>1646</td>
    <td><a href="/player/2856/gavin-culloty/" target="_blank">Gavin Culloty</a></td>
    <td>78.0</td>
    <td>12.0</td>
    <td>5872.5</td>
    <td>Michigan Revolution</td>
</tr>

<tr>
    <td>1647</td>
    <td><a href="/player/2878/danny-vaneeckhoutte/" target="_blank">Danny VanEeckhoutte</a></td>
    <td>65.1</td>
    <td>10.9</td>
    <td>5869.9</td>
    <td>Kodiak Attack</td>
</tr>

<tr>
    <td>1648</td>
    <td><a href="/player/1608/mark-pietruszka/" target="_blank">Mark Pietruszka</a></td>
    <td>77.6</td>
    <td>11.6</td>
    <td>5864.4</td>
    <td>MarcAurele</td>
</tr>

<tr>
    <td>1649</td>
    <td><a href="/player/2899/bryson-streeter/" target="_blank">Bryson Streeter</a></td>
    <td>72.0</td>
    <td>10.0</td>
    <td>5864.3</td>
    <td>Cedar Springs</td>
</tr>

<tr>
    <td>1650</td>
    <td><a href="/player/1098/luke-bartolo/" target="_blank">Luke Bartolo</a></td>
    <td>80.8</td>
    <td>12.0</td>
    <td>5864.2</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1651</td>
    <td><a href="/player/786/yerik-guardado/" target="_blank">Yerik Guardado</a></td>
    <td>93.4</td>
    <td>10.6</td>
    <td>5864.1</td>
    <td>Dynamic wrestling</td>
</tr>

<tr>
    <td>1652</td>
    <td><a href="/player/2298/reid-fioresi/" target="_blank">Reid Fioresi</a></td>
    <td>93.8</td>
    <td>8.9</td>
    <td>5863.1</td>
    <td>East Islip Wrestling</td>
</tr>

<tr>
    <td>1653</td>
    <td><a href="/player/1852/andrew-dengate/" target="_blank">Andrew Dengate</a></td>
    <td>86.6</td>
    <td>11.4</td>
    <td>5860.9</td>
    <td>Venom</td>
</tr>

<tr>
    <td>1654</td>
    <td><a href="/player/3288/auggie-cox/" target="_blank">Auggie Cox</a></td>
    <td>83.5</td>
    <td>7.2</td>
    <td>5860.5</td>
    <td>Downriver Wrestling Club</td>
</tr>

<tr>
    <td>1655</td>
    <td><a href="/player/861/dominic-colavito/" target="_blank">Dominic Colavito</a></td>
    <td>89.8</td>
    <td>13.7</td>
    <td>5859.5</td>
    <td>Lindenhurst</td>
</tr>

<tr>
    <td>1656</td>
    <td><a href="/player/537/john-pinkney/" target="_blank">John Pinkney</a></td>
    <td>70.8</td>
    <td>10.8</td>
    <td>5848.9</td>
    <td>SMWC Wolfpack</td>
</tr>

<tr>
    <td>1657</td>
    <td><a href="/player/1805/johnathan-coates/" target="_blank">Johnathan Coates</a></td>
    <td>79.2</td>
    <td>12.8</td>
    <td>5847.8</td>
    <td>State College</td>
</tr>

<tr>
    <td>1658</td>
    <td><a href="/player/3236/elijah-blair/" target="_blank">Elijah Blair</a></td>
    <td>80.2</td>
    <td>11.5</td>
    <td>5845.5</td>
    <td>Jpw</td>
</tr>

<tr>
    <td>1659</td>
    <td><a href="/player/3064/calin-poniedzialek/" target="_blank">Calin Poniedzialek</a></td>
    <td>89.0</td>
    <td>8.2</td>
    <td>5845.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1660</td>
    <td><a href="/player/2476/gary-fleischer/" target="_blank">Gary Fleischer</a></td>
    <td>97.4</td>
    <td>12.5</td>
    <td>5844.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1661</td>
    <td><a href="/player/2963/dreyton-turner/" target="_blank">Dreyton Turner</a></td>
    <td>86.6</td>
    <td>9.7</td>
    <td>5843.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1662</td>
    <td><a href="/player/1765/dominic-brogan/" target="_blank">Dominic Brogan</a></td>
    <td>76.6</td>
    <td>9.8</td>
    <td>5842.5</td>
    <td>Aanthracite elite</td>
</tr>

<tr>
    <td>1663</td>
    <td><a href="/player/3353/kaiden-skodak/" target="_blank">Kaiden Skodak</a></td>
    <td>73.9</td>
    <td>8.5</td>
    <td>5842.1</td>
    <td>Skodak</td>
</tr>

<tr>
    <td>1664</td>
    <td><a href="/player/675/arseni-kikiniou/" target="_blank">arseni kikiniou</a></td>
    <td>67.8</td>
    <td>9.7</td>
    <td>5838.9</td>
    <td>elite</td>
</tr>

<tr>
    <td>1665</td>
    <td><a href="/player/920/charles-haniquet/" target="_blank">Charles Haniquet</a></td>
    <td>75.6</td>
    <td>10.8</td>
    <td>5837.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1666</td>
    <td><a href="/player/1932/marco-concialdi/" target="_blank">Marco Concialdi</a></td>
    <td>97.8</td>
    <td>9.7</td>
    <td>5833.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1667</td>
    <td><a href="/player/672/alex-amorosino/" target="_blank">Alex Amorosino</a></td>
    <td>81.4</td>
    <td>12.4</td>
    <td>5829.9</td>
    <td>lrei</td>
</tr>

<tr>
    <td>1668</td>
    <td><a href="/player/1686/andrew-silvia/" target="_blank">Andrew Silvia</a></td>
    <td>87.0</td>
    <td>12.0</td>
    <td>5829.3</td>
    <td>MARLBORO</td>
</tr>

<tr>
    <td>1669</td>
    <td><a href="/player/1040/jack-lorper/" target="_blank">Jack Lorper</a></td>
    <td>71.0</td>
    <td>11.3</td>
    <td>5822.8</td>
    <td>Hawthorne</td>
</tr>

<tr>
    <td>1670</td>
    <td><a href="/player/528/jack-baron/" target="_blank">Jack Baron</a></td>
    <td>70.0</td>
    <td>11.0</td>
    <td>5821.5</td>
    <td>north penn</td>
</tr>

<tr>
    <td>1671</td>
    <td><a href="/player/1605/aiden-gilmore/" target="_blank">Aiden Gilmore</a></td>
    <td>81.2</td>
    <td>9.1</td>
    <td>5820.7</td>
    <td>Hanover Hawkeyes</td>
</tr>

<tr>
    <td>1672</td>
    <td><a href="/player/3249/lucas-dorrman/" target="_blank">Lucas Dorrman</a></td>
    <td>70.0</td>
    <td>8.8</td>
    <td>5820.7</td>
    <td>Basking Ridge</td>
</tr>

<tr>
    <td>1673</td>
    <td><a href="/player/2183/logan-souza/" target="_blank">Logan Souza</a></td>
    <td>73.4</td>
    <td>10.9</td>
    <td>5813.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1674</td>
    <td><a href="/player/882/luke-stuhler/" target="_blank">Luke Stuhler</a></td>
    <td>82.8</td>
    <td>7.9</td>
    <td>5810.4</td>
    <td>Pat Med Raiders</td>
</tr>

<tr>
    <td>1675</td>
    <td><a href="/player/1200/tommy-massaro/" target="_blank">Tommy Massaro</a></td>
    <td>77.0</td>
    <td>9.8</td>
    <td>5806.7</td>
    <td>Mount Sinai</td>
</tr>

<tr>
    <td>1676</td>
    <td><a href="/player/1794/derek-winseman/" target="_blank">Derek Winseman</a></td>
    <td>77.0</td>
    <td>11.1</td>
    <td>5806.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1677</td>
    <td><a href="/player/2616/ayden-brandl/" target="_blank">Ayden Brandl</a></td>
    <td>77.0</td>
    <td>13.1</td>
    <td>5806.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1678</td>
    <td><a href="/player/784/gavin-mahepath/" target="_blank">Gavin mahepath</a></td>
    <td>84.0</td>
    <td>12.0</td>
    <td>5806.4</td>
    <td>dynamic</td>
</tr>

<tr>
    <td>1679</td>
    <td><a href="/player/1242/alesandro-restrepo/" target="_blank">Alesandro Restrepo</a></td>
    <td>64.0</td>
    <td>10.0</td>
    <td>5806.1</td>
    <td>VHW</td>
</tr>

<tr>
    <td>1680</td>
    <td><a href="/player/1055/chace-morris/" target="_blank">Chace Morris</a></td>
    <td>70.2</td>
    <td>9.7</td>
    <td>5796.5</td>
    <td>LB Gladiators</td>
</tr>

<tr>
    <td>1681</td>
    <td><a href="/player/2713/gail-sullivan/" target="_blank">Gail Sullivan</a></td>
    <td>67.4</td>
    <td>10.1</td>
    <td>5795.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1682</td>
    <td><a href="/player/2351/tj-visciano/" target="_blank">TJ Visciano</a></td>
    <td>78.0</td>
    <td>13.6</td>
    <td>5785.9</td>
    <td>Smithtown</td>
</tr>

<tr>
    <td>1683</td>
    <td><a href="/player/491/vincent-orandello/" target="_blank">Vincent Orandello</a></td>
    <td>68.2</td>
    <td>12.3</td>
    <td>5782.4</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1684</td>
    <td><a href="/player/1031/tyler-paris/" target="_blank">Tyler Paris</a></td>
    <td>79.0</td>
    <td>15.0</td>
    <td>5778.5</td>
    <td>SWR Wildcats</td>
</tr>

<tr>
    <td>1685</td>
    <td><a href="/player/2142/brian-murray/" target="_blank">Brian Murray</a></td>
    <td>87.4</td>
    <td>12.5</td>
    <td>5777.6</td>
    <td>Methuen</td>
</tr>

<tr>
    <td>1686</td>
    <td><a href="/player/1834/brycen-flewelling/" target="_blank">Brycen Flewelling</a></td>
    <td>76.0</td>
    <td>11.1</td>
    <td>5777.2</td>
    <td>Newport Rec</td>
</tr>

<tr>
    <td>1687</td>
    <td><a href="/player/726/sean-bayer/" target="_blank">sean bayer</a></td>
    <td>70.2</td>
    <td>13.3</td>
    <td>5769.7</td>
    <td>rhino</td>
</tr>

<tr>
    <td>1688</td>
    <td><a href="/player/2347/jaden-judge/" target="_blank">Jaden Judge</a></td>
    <td>97.0</td>
    <td>10.2</td>
    <td>5768.5</td>
    <td>Smithtown east</td>
</tr>

<tr>
    <td>1689</td>
    <td><a href="/player/2915/brock-shank/" target="_blank">Brock Shank</a></td>
    <td>90.7</td>
    <td>8.0</td>
    <td>5768.2</td>
    <td>Dewitt youth Wrestling</td>
</tr>

<tr>
    <td>1690</td>
    <td><a href="/player/2342/jake-miccio/" target="_blank">Jake Miccio</a></td>
    <td>79.4</td>
    <td>11.1</td>
    <td>5767.2</td>
    <td>North Babylon Bulldogs</td>
</tr>

<tr>
    <td>1691</td>
    <td><a href="/player/490/xavier-seabury/" target="_blank">Xavier Seabury</a></td>
    <td>65.0</td>
    <td>10.3</td>
    <td>5767.1</td>
    <td>north babylon</td>
</tr>

<tr>
    <td>1692</td>
    <td><a href="/player/2734/james-stipeck/" target="_blank">James Stipeck</a></td>
    <td>83.8</td>
    <td>10.0</td>
    <td>5763.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1693</td>
    <td><a href="/player/3216/aj-dubendorfer/" target="_blank">AJ Dubendorfer</a></td>
    <td>77.9</td>
    <td>11.5</td>
    <td>5758.9</td>
    <td>JPW</td>
</tr>

<tr>
    <td>1694</td>
    <td><a href="/player/1846/cody-stebbins/" target="_blank">Cody Stebbins</a></td>
    <td>91.0</td>
    <td>8.7</td>
    <td>5757.2</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1695</td>
    <td><a href="/player/3281/liam-gaetz/" target="_blank">Liam Gaetz</a></td>
    <td>88.2</td>
    <td>10.3</td>
    <td>5756.3</td>
    <td>Michigan MatCats</td>
</tr>

<tr>
    <td>1696</td>
    <td><a href="/player/3221/jason-grimmett-jr/" target="_blank">Jason Grimmett Jr</a></td>
    <td>74.7</td>
    <td>9.1</td>
    <td>5755.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1697</td>
    <td><a href="/player/2161/benjamin-walton/" target="_blank">Benjamin Walton</a></td>
    <td>75.8</td>
    <td>10.8</td>
    <td>5754.0</td>
    <td>Goffstown Youth Wrestling</td>
</tr>

<tr>
    <td>1698</td>
    <td><a href="/player/737/xavier-thuman/" target="_blank">Xavier Thuman</a></td>
    <td>75.8</td>
    <td>8.0</td>
    <td>5753.6</td>
    <td>Lakeshore</td>
</tr>

<tr>
    <td>1699</td>
    <td><a href="/player/2010/michael-dickerson/" target="_blank">Michael Dickerson</a></td>
    <td>81.8</td>
    <td>11.2</td>
    <td>5746.0</td>
    <td>Litchfield</td>
</tr>

<tr>
    <td>1700</td>
    <td><a href="/player/1345/ben-barrasso/" target="_blank">Ben Barrasso</a></td>
    <td>80.2</td>
    <td>11.0</td>
    <td>5744.4</td>
    <td>Tewksbury</td>
</tr>

<tr>
    <td>1701</td>
    <td><a href="/player/2036/nicolas-cirella/" target="_blank">Nicolas Cirella</a></td>
    <td>84.2</td>
    <td>9.0</td>
    <td>5742.8</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>1702</td>
    <td><a href="/player/526/will-sakoutis/" target="_blank">Will Sakoutis</a></td>
    <td>80.0</td>
    <td>11.8</td>
    <td>5741.2</td>
    <td>rhino</td>
</tr>

<tr>
    <td>1703</td>
    <td><a href="/player/1101/johnny-chirico/" target="_blank">Johnny Chirico</a></td>
    <td>76.0</td>
    <td>9.7</td>
    <td>5740.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1704</td>
    <td><a href="/player/2654/thomas-gorski/" target="_blank">Thomas Gorski</a></td>
    <td>76.0</td>
    <td>10.4</td>
    <td>5740.0</td>
    <td>Westshore</td>
</tr>

<tr>
    <td>1705</td>
    <td><a href="/player/2228/max-dorazio/" target="_blank">Max D’Orazio</a></td>
    <td>92.8</td>
    <td>12.0</td>
    <td>5739.3</td>
    <td>Bethpage</td>
</tr>

<tr>
    <td>1706</td>
    <td><a href="/player/2630/joel-rivera/" target="_blank">Joel Rivera</a></td>
    <td>88.0</td>
    <td>12.7</td>
    <td>5737.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1707</td>
    <td><a href="/player/2850/gable-majcher/" target="_blank">Gable Majcher</a></td>
    <td>79.0</td>
    <td>12.5</td>
    <td>5735.3</td>
    <td>Yale</td>
</tr>

<tr>
    <td>1708</td>
    <td><a href="/player/3261/maxx-latshaw/" target="_blank">Maxx Latshaw</a></td>
    <td>75.0</td>
    <td>11.0</td>
    <td>5733.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1709</td>
    <td><a href="/player/2765/luke-oconnor/" target="_blank">Luke OConnor</a></td>
    <td>68.4</td>
    <td>9.4</td>
    <td>5731.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1710</td>
    <td><a href="/player/1093/niko-marnika/" target="_blank">Niko Marnika</a></td>
    <td>70.2</td>
    <td>10.1</td>
    <td>5728.6</td>
    <td>Blue wave</td>
</tr>

<tr>
    <td>1711</td>
    <td><a href="/player/2666/breidyn-ralls/" target="_blank">Breidyn Ralls</a></td>
    <td>73.8</td>
    <td>10.9</td>
    <td>5726.8</td>
    <td>Buckeye Roughriders</td>
</tr>

<tr>
    <td>1712</td>
    <td><a href="/player/1417/aiden-binns/" target="_blank">Aiden Binns</a></td>
    <td>76.0</td>
    <td>9.7</td>
    <td>5724.9</td>
    <td>Rancocas Valley</td>
</tr>

<tr>
    <td>1713</td>
    <td><a href="/player/1029/brett-crawford/" target="_blank">Brett Crawford</a></td>
    <td>73.6</td>
    <td>11.3</td>
    <td>5723.0</td>
    <td>Barn Brothers</td>
</tr>

<tr>
    <td>1714</td>
    <td><a href="/player/2706/benjamin-iturrino/" target="_blank">Benjamin Iturrino</a></td>
    <td>79.2</td>
    <td>8.8</td>
    <td>5720.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1715</td>
    <td><a href="/player/1988/francisco-juvera/" target="_blank">Francisco Juvera</a></td>
    <td>80.8</td>
    <td>9.5</td>
    <td>5720.4</td>
    <td>Fitchburg Youth</td>
</tr>

<tr>
    <td>1716</td>
    <td><a href="/player/1094/david-sanchez/" target="_blank">David Sanchez</a></td>
    <td>81.4</td>
    <td>10.5</td>
    <td>5715.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1717</td>
    <td><a href="/player/1621/angelo-desisto/" target="_blank">Angelo Desisto</a></td>
    <td>72.2</td>
    <td>11.3</td>
    <td>5714.2</td>
    <td>Doughboy</td>
</tr>

<tr>
    <td>1718</td>
    <td><a href="/player/503/ethan-hauser/" target="_blank">ethan hauser</a></td>
    <td>62.7</td>
    <td>11.4</td>
    <td>5711.9</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1719</td>
    <td><a href="/player/1886/joshua-bender/" target="_blank">Joshua Bender</a></td>
    <td>76.4</td>
    <td>11.1</td>
    <td>5709.7</td>
    <td>Longwood</td>
</tr>

<tr>
    <td>1720</td>
    <td><a href="/player/3165/alexander-sharkey/" target="_blank">Alexander Sharkey</a></td>
    <td>77.0</td>
    <td>12.9</td>
    <td>5706.7</td>
    <td>Hammers</td>
</tr>

<tr>
    <td>1721</td>
    <td><a href="/player/627/brett-levine/" target="_blank">Brett Levine</a></td>
    <td>68.0</td>
    <td>10.2</td>
    <td>5703.9</td>
    <td>dynamic</td>
</tr>

<tr>
    <td>1722</td>
    <td><a href="/player/1325/william-green/" target="_blank">William Green</a></td>
    <td>80.0</td>
    <td>9.1</td>
    <td>5701.6</td>
    <td>Pemberton</td>
</tr>

<tr>
    <td>1723</td>
    <td><a href="/player/1776/madison-healey/" target="_blank">Madison Healey</a></td>
    <td>57.4</td>
    <td>11.0</td>
    <td>5693.0</td>
    <td>Altered Beast Wrestling Academy</td>
</tr>

<tr>
    <td>1724</td>
    <td><a href="/player/1080/nico-scarlatos/" target="_blank">Nico Scarlatos</a></td>
    <td>87.4</td>
    <td>9.1</td>
    <td>5692.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1725</td>
    <td><a href="/player/2335/guy-baker/" target="_blank">Guy Baker</a></td>
    <td>82.0</td>
    <td>13.1</td>
    <td>5689.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1726</td>
    <td><a href="/player/1227/thomas-berge/" target="_blank">Thomas Berge</a></td>
    <td>89.2</td>
    <td>8.7</td>
    <td>5687.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1727</td>
    <td><a href="/player/1262/brice-difilippo/" target="_blank">Brice DiFilippo</a></td>
    <td>72.0</td>
    <td>11.4</td>
    <td>5681.6</td>
    <td>Blue Devils</td>
</tr>

<tr>
    <td>1728</td>
    <td><a href="/player/1959/kylee-fox/" target="_blank">Kylee Fox</a></td>
    <td>100.0</td>
    <td>9.4</td>
    <td>5681.0</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>1729</td>
    <td><a href="/player/736/alexiya-thuman/" target="_blank">Alexiya Thuman</a></td>
    <td>80.2</td>
    <td>11.4</td>
    <td>5679.3</td>
    <td>Lakeshore</td>
</tr>

<tr>
    <td>1730</td>
    <td><a href="/player/2397/devon-filippone/" target="_blank">Devon Filippone</a></td>
    <td>86.0</td>
    <td>6.5</td>
    <td>5679.3</td>
    <td>Connetquot</td>
</tr>

<tr>
    <td>1731</td>
    <td><a href="/player/2144/eli-gagnon/" target="_blank">Eli Gagnon</a></td>
    <td>76.2</td>
    <td>9.9</td>
    <td>5677.1</td>
    <td>Nashua</td>
</tr>

<tr>
    <td>1732</td>
    <td><a href="/player/497/kymani-batson/" target="_blank">Kymani Batson</a></td>
    <td>81.2</td>
    <td>12.9</td>
    <td>5675.8</td>
    <td>dynamic</td>
</tr>

<tr>
    <td>1733</td>
    <td><a href="/player/1389/nico-zecchino/" target="_blank">Nico Zecchino</a></td>
    <td>68.4</td>
    <td>10.8</td>
    <td>5675.8</td>
    <td>elite</td>
</tr>

<tr>
    <td>1734</td>
    <td><a href="/player/1735/julian-craig/" target="_blank">Julian Craig</a></td>
    <td>88.6</td>
    <td>8.7</td>
    <td>5672.8</td>
    <td>Drexel Hill Raiders</td>
</tr>

<tr>
    <td>1735</td>
    <td><a href="/player/3119/luke-brown/" target="_blank">Luke Brown</a></td>
    <td>68.0</td>
    <td>9.1</td>
    <td>5672.8</td>
    <td>DeWitt WC</td>
</tr>

<tr>
    <td>1736</td>
    <td><a href="/player/981/sean-mcneill/" target="_blank">Sean McNeill</a></td>
    <td>75.0</td>
    <td>9.7</td>
    <td>5672.5</td>
    <td>Shoreham Wading River</td>
</tr>

<tr>
    <td>1737</td>
    <td><a href="/player/2721/alexander-tagliati/" target="_blank">Alexander Tagliati</a></td>
    <td>75.0</td>
    <td>11.9</td>
    <td>5672.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1738</td>
    <td><a href="/player/965/kai-shapiro/" target="_blank">kai shapiro</a></td>
    <td>74.2</td>
    <td>11.0</td>
    <td>5671.0</td>
    <td>Connetquot</td>
</tr>

<tr>
    <td>1739</td>
    <td><a href="/player/890/aiden-schweigert/" target="_blank">Aiden Schweigert</a></td>
    <td>85.2</td>
    <td>11.6</td>
    <td>5670.8</td>
    <td>West Babylon</td>
</tr>

<tr>
    <td>1740</td>
    <td><a href="/player/3205/mason-aluia/" target="_blank">Mason Aluia</a></td>
    <td>65.6</td>
    <td>9.8</td>
    <td>5669.6</td>
    <td>Michigan Matcats</td>
</tr>

<tr>
    <td>1741</td>
    <td><a href="/player/1091/dunia-sibomana/" target="_blank">Dunia Sibomana</a></td>
    <td>70.0</td>
    <td>11.5</td>
    <td>5666.4</td>
    <td>Long Beach Gladiators</td>
</tr>

<tr>
    <td>1742</td>
    <td><a href="/player/2037/eli-dague/" target="_blank">Eli Dague</a></td>
    <td>86.0</td>
    <td>8.4</td>
    <td>5665.5</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>1743</td>
    <td><a href="/player/1623/evan-christianson/" target="_blank">Evan Christianson</a></td>
    <td>78.8</td>
    <td>11.5</td>
    <td>5661.7</td>
    <td>Wilton</td>
</tr>

<tr>
    <td>1744</td>
    <td><a href="/player/825/connor-sheridan/" target="_blank">Connor Sheridan</a></td>
    <td>66.0</td>
    <td>12.1</td>
    <td>5661.2</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1745</td>
    <td><a href="/player/2028/christopher-godfrey-jr/" target="_blank">Christopher Godfrey Jr</a></td>
    <td>69.8</td>
    <td>9.6</td>
    <td>5659.8</td>
    <td>Fitchburg Youth Wrestling</td>
</tr>

<tr>
    <td>1746</td>
    <td><a href="/player/1226/marcus-ortiz/" target="_blank">Marcus Ortiz</a></td>
    <td>80.8</td>
    <td>12.1</td>
    <td>5657.7</td>
    <td>Warriors</td>
</tr>

<tr>
    <td>1747</td>
    <td><a href="/player/2027/aiden-smith-nightingale/" target="_blank">Aiden Smith-Nightingale</a></td>
    <td>76.4</td>
    <td>10.9</td>
    <td>5653.0</td>
    <td>Boys &amp; Girls Club if Greater Nashua</td>
</tr>

<tr>
    <td>1748</td>
    <td><a href="/player/1286/kevin-schneider/" target="_blank">Kevin Schneider</a></td>
    <td>84.0</td>
    <td>8.0</td>
    <td>5650.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1749</td>
    <td><a href="/player/1756/william-russell/" target="_blank">William Russell</a></td>
    <td>72.4</td>
    <td>12.0</td>
    <td>5648.4</td>
    <td>Manhasset</td>
</tr>

<tr>
    <td>1750</td>
    <td><a href="/player/3400/cohen-dangcil/" target="_blank">Cohen Dangcil</a></td>
    <td>74.5</td>
    <td>12.4</td>
    <td>5644.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1751</td>
    <td><a href="/player/1043/evan-nunez/" target="_blank">Evan Nunez</a></td>
    <td>80.0</td>
    <td>9.6</td>
    <td>5642.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1752</td>
    <td><a href="/player/1460/matthew-calvo/" target="_blank">Matthew Calvo</a></td>
    <td>89.8</td>
    <td>12.5</td>
    <td>5641.4</td>
    <td>Salk middle school</td>
</tr>

<tr>
    <td>1753</td>
    <td><a href="/player/2996/nicholas-wade/" target="_blank">Nicholas Wade</a></td>
    <td>70.8</td>
    <td>10.7</td>
    <td>5639.3</td>
    <td>SAW</td>
</tr>

<tr>
    <td>1754</td>
    <td><a href="/player/2045/jackson-lemire/" target="_blank">Jackson Lemire</a></td>
    <td>88.2</td>
    <td>8.2</td>
    <td>5628.3</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>1755</td>
    <td><a href="/player/2113/bryce-palmer/" target="_blank">Bryce Palmer</a></td>
    <td>74.0</td>
    <td>11.8</td>
    <td>5627.3</td>
    <td>Newport Rec</td>
</tr>

<tr>
    <td>1756</td>
    <td><a href="/player/2641/sebastian-mosquera/" target="_blank">Sebastian Mosquera</a></td>
    <td>87.2</td>
    <td>10.6</td>
    <td>5626.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1757</td>
    <td><a href="/player/576/owen-martin/" target="_blank">Owen Martin</a></td>
    <td>81.4</td>
    <td>10.4</td>
    <td>5626.4</td>
    <td>Edge</td>
</tr>

<tr>
    <td>1758</td>
    <td><a href="/player/823/aiden-morin/" target="_blank">Aiden Morin</a></td>
    <td>75.8</td>
    <td>11.6</td>
    <td>5624.0</td>
    <td>PAT-Med</td>
</tr>

<tr>
    <td>1759</td>
    <td><a href="/player/2194/jayden-radow/" target="_blank">Jayden Radow</a></td>
    <td>67.6</td>
    <td>10.6</td>
    <td>5622.1</td>
    <td>School of Grapping</td>
</tr>

<tr>
    <td>1760</td>
    <td><a href="/player/1051/jett-gillis/" target="_blank">Jett Gillis</a></td>
    <td>73.2</td>
    <td>12.1</td>
    <td>5619.2</td>
    <td>School of Grappling</td>
</tr>

<tr>
    <td>1761</td>
    <td><a href="/player/1440/luca-paletta/" target="_blank">Luca Paletta</a></td>
    <td>80.0</td>
    <td>12.7</td>
    <td>5618.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1762</td>
    <td><a href="/player/2737/anthony-gatto/" target="_blank">anthony gatto</a></td>
    <td>62.5</td>
    <td>11.7</td>
    <td>5617.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1763</td>
    <td><a href="/player/1910/chace-marksberry/" target="_blank">Chace Marksberry</a></td>
    <td>80.0</td>
    <td>10.2</td>
    <td>5612.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1764</td>
    <td><a href="/player/3259/joshua-martinez/" target="_blank">Joshua Martinez</a></td>
    <td>77.0</td>
    <td>10.9</td>
    <td>5606.7</td>
    <td>Pride</td>
</tr>

<tr>
    <td>1765</td>
    <td><a href="/player/1570/chase-kastner/" target="_blank">Chase Kastner</a></td>
    <td>61.8</td>
    <td>10.8</td>
    <td>5606.1</td>
    <td>Ascension</td>
</tr>

<tr>
    <td>1766</td>
    <td><a href="/player/2250/chandlar-dickinson/" target="_blank">Chandlar Dickinson</a></td>
    <td>93.0</td>
    <td>12.3</td>
    <td>5604.8</td>
    <td>Bayport Blue point</td>
</tr>

<tr>
    <td>1767</td>
    <td><a href="/player/824/enzo-koch/" target="_blank">Enzo Koch</a></td>
    <td>74.0</td>
    <td>13.9</td>
    <td>5604.0</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1768</td>
    <td><a href="/player/1198/dylan-vallone/" target="_blank">Dylan Vallone</a></td>
    <td>74.0</td>
    <td>12.6</td>
    <td>5604.0</td>
    <td>N/a</td>
</tr>

<tr>
    <td>1769</td>
    <td><a href="/player/1254/jackson-hersh/" target="_blank">Jackson Hersh</a></td>
    <td>74.0</td>
    <td>12.6</td>
    <td>5604.0</td>
    <td>Upper Dublin</td>
</tr>

<tr>
    <td>1770</td>
    <td><a href="/player/2634/nathan-jacoby/" target="_blank">Nathan Jacoby</a></td>
    <td>74.0</td>
    <td>10.0</td>
    <td>5604.0</td>
    <td>New York City Wrestling</td>
</tr>

<tr>
    <td>1771</td>
    <td><a href="/player/1884/bobby-strittmatter/" target="_blank">Bobby Strittmatter</a></td>
    <td>75.4</td>
    <td>10.1</td>
    <td>5602.4</td>
    <td>Thunderbirds</td>
</tr>

<tr>
    <td>1772</td>
    <td><a href="/player/2004/colton-richard/" target="_blank">Colton Richard</a></td>
    <td>85.0</td>
    <td>8.3</td>
    <td>5602.4</td>
    <td>Boys Club Nashua NH</td>
</tr>

<tr>
    <td>1773</td>
    <td><a href="/player/2498/milo-mccaughey/" target="_blank">Milo McCaughey</a></td>
    <td>80.0</td>
    <td>10.6</td>
    <td>5601.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1774</td>
    <td><a href="/player/3031/wes-honiss/" target="_blank">Wes Honiss</a></td>
    <td>69.5</td>
    <td>11.5</td>
    <td>5598.0</td>
    <td>Michigan Matcats</td>
</tr>

<tr>
    <td>1775</td>
    <td><a href="/player/1863/christopher-weidman/" target="_blank">Christopher Weidman</a></td>
    <td>65.0</td>
    <td>7.8</td>
    <td>5597.5</td>
    <td>Longo and weidman wrestling academy (LAW)</td>
</tr>

<tr>
    <td>1776</td>
    <td><a href="/player/983/andrew-dibenedetto/" target="_blank">Andrew DiBenedetto</a></td>
    <td>77.8</td>
    <td>11.4</td>
    <td>5594.3</td>
    <td>Hauppauge</td>
</tr>

<tr>
    <td>1777</td>
    <td><a href="/player/1843/ben-drucker/" target="_blank">Ben Drucker</a></td>
    <td>85.0</td>
    <td>12.3</td>
    <td>5593.2</td>
    <td>School of Grappling</td>
</tr>

<tr>
    <td>1778</td>
    <td><a href="/player/1979/dylan-nadeau/" target="_blank">Dylan Nadeau</a></td>
    <td>69.6</td>
    <td>11.0</td>
    <td>5588.5</td>
    <td>Raptors</td>
</tr>

<tr>
    <td>1779</td>
    <td><a href="/player/2323/keith-mccann/" target="_blank">Keith Mccann</a></td>
    <td>85.0</td>
    <td>9.4</td>
    <td>5588.2</td>
    <td>East islip</td>
</tr>

<tr>
    <td>1780</td>
    <td><a href="/player/2348/callum-rodin/" target="_blank">Callum Rodin</a></td>
    <td>88.4</td>
    <td>13.1</td>
    <td>5586.5</td>
    <td>NYC Wrestling Club</td>
</tr>

<tr>
    <td>1781</td>
    <td><a href="/player/3433/ryan-lombreglia/" target="_blank">Ryan Lombreglia</a></td>
    <td>73.4</td>
    <td>8.8</td>
    <td>5583.2</td>
    <td>Iron Horse</td>
</tr>

<tr>
    <td>1782</td>
    <td><a href="/player/3222/kylee-grimmett/" target="_blank">Kylee Grimmett</a></td>
    <td>77.5</td>
    <td>12.2</td>
    <td>5577.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1783</td>
    <td><a href="/player/2558/jahari-lloyd/" target="_blank">Jahari Lloyd</a></td>
    <td>68.8</td>
    <td>12.9</td>
    <td>5577.4</td>
    <td>5points</td>
</tr>

<tr>
    <td>1784</td>
    <td><a href="/player/2663/christopher-mckeel/" target="_blank">Christopher McKeel</a></td>
    <td>83.2</td>
    <td>11.8</td>
    <td>5577.1</td>
    <td>Oakleaf Knights Attack Wrestling Club</td>
</tr>

<tr>
    <td>1785</td>
    <td><a href="/player/732/shane-sullivan/" target="_blank">Shane Sullivan</a></td>
    <td>76.8</td>
    <td>12.9</td>
    <td>5572.1</td>
    <td>Rhyno</td>
</tr>

<tr>
    <td>1786</td>
    <td><a href="/player/3378/griffin-tibai/" target="_blank">Griffin Tibai</a></td>
    <td>78.0</td>
    <td>11.6</td>
    <td>5571.3</td>
    <td>GLWC</td>
</tr>

<tr>
    <td>1787</td>
    <td><a href="/player/514/ned-kauffman/" target="_blank">Ned Kauffman</a></td>
    <td>77.2</td>
    <td>11.0</td>
    <td>5570.8</td>
    <td>weiser</td>
</tr>

<tr>
    <td>1788</td>
    <td><a href="/player/2677/alexis-lazar/" target="_blank">Alexis Lazar</a></td>
    <td>86.0</td>
    <td>12.5</td>
    <td>5570.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1789</td>
    <td><a href="/player/2126/luke-emond/" target="_blank">Luke Emond</a></td>
    <td>88.0</td>
    <td>10.7</td>
    <td>5565.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1790</td>
    <td><a href="/player/3276/sam-floody/" target="_blank">Sam Floody</a></td>
    <td>64.0</td>
    <td>10.7</td>
    <td>5563.7</td>
    <td>Mayo Quanchi</td>
</tr>

<tr>
    <td>1791</td>
    <td><a href="/player/2638/axel-mosquera/" target="_blank">AXEL Mosquera</a></td>
    <td>91.2</td>
    <td>8.7</td>
    <td>5562.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1792</td>
    <td><a href="/player/1824/emily-kivler/" target="_blank">Emily Kivler</a></td>
    <td>83.5</td>
    <td>10.8</td>
    <td>5557.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1793</td>
    <td><a href="/player/1390/eddie-george/" target="_blank">Eddie George</a></td>
    <td>63.0</td>
    <td>10.4</td>
    <td>5553.6</td>
    <td>Delran</td>
</tr>

<tr>
    <td>1794</td>
    <td><a href="/player/1046/jaylin-smith/" target="_blank">Jaylin Smith</a></td>
    <td>83.0</td>
    <td>7.7</td>
    <td>5552.6</td>
    <td>Lindenhurst</td>
</tr>

<tr>
    <td>1795</td>
    <td><a href="/player/2941/kayden-robinette/" target="_blank">Kayden Robinette</a></td>
    <td>70.6</td>
    <td>10.3</td>
    <td>5551.7</td>
    <td>Kodiak Attack</td>
</tr>

<tr>
    <td>1796</td>
    <td><a href="/player/1189/omar-mercado/" target="_blank">Omar mercado</a></td>
    <td>77.8</td>
    <td>8.4</td>
    <td>5549.7</td>
    <td>Copiage</td>
</tr>

<tr>
    <td>1797</td>
    <td><a href="/player/2301/paul-rodriguez/" target="_blank">Paul Rodriguez</a></td>
    <td>76.0</td>
    <td>11.6</td>
    <td>5543.7</td>
    <td>Five Stars</td>
</tr>

<tr>
    <td>1798</td>
    <td><a href="/player/2869/ryan-mckelvey/" target="_blank">Ryan mckelvey</a></td>
    <td>63.8</td>
    <td>11.2</td>
    <td>5538.8</td>
    <td>Saw</td>
</tr>

<tr>
    <td>1799</td>
    <td><a href="/player/1992/owen-gagnon/" target="_blank">Owen Gagnon</a></td>
    <td>67.2</td>
    <td>11.3</td>
    <td>5537.1</td>
    <td>Nashua</td>
</tr>

<tr>
    <td>1800</td>
    <td><a href="/player/1013/maceo-blumberg/" target="_blank">Maceo Blumberg</a></td>
    <td>73.0</td>
    <td>12.7</td>
    <td>5534.7</td>
    <td>n/a</td>
</tr>

<tr>
    <td>1801</td>
    <td><a href="/player/3237/richie-davis/" target="_blank">Richie Davis</a></td>
    <td>73.0</td>
    <td>12.5</td>
    <td>5534.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1802</td>
    <td><a href="/player/2276/arlo-scherr/" target="_blank">Arlo Scherr</a></td>
    <td>73.0</td>
    <td>11.7</td>
    <td>5534.2</td>
    <td>LREI</td>
</tr>

<tr>
    <td>1803</td>
    <td><a href="/player/1732/chase-morgan/" target="_blank">Chase Morgan</a></td>
    <td>61.4</td>
    <td>9.1</td>
    <td>5532.3</td>
    <td>Altered Beast</td>
</tr>

<tr>
    <td>1804</td>
    <td><a href="/player/1097/michael-catalano/" target="_blank">Michael Catalano</a></td>
    <td>77.2</td>
    <td>12.3</td>
    <td>5529.7</td>
    <td>North babylon</td>
</tr>

<tr>
    <td>1805</td>
    <td><a href="/player/2879/justin-jones/" target="_blank">Justin Jones</a></td>
    <td>70.6</td>
    <td>9.7</td>
    <td>5527.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1806</td>
    <td><a href="/player/1239/drew-delargy/" target="_blank">Drew Delargy</a></td>
    <td>74.2</td>
    <td>10.9</td>
    <td>5527.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1807</td>
    <td><a href="/player/947/frankie-servidio/" target="_blank">Frankie Servidio</a></td>
    <td>80.8</td>
    <td>8.7</td>
    <td>5527.0</td>
    <td>Blue wave</td>
</tr>

<tr>
    <td>1808</td>
    <td><a href="/player/1191/savannah-andrieux/" target="_blank">Savannah Andrieux</a></td>
    <td>88.6</td>
    <td>7.6</td>
    <td>5522.3</td>
    <td>Bay Shore</td>
</tr>

<tr>
    <td>1809</td>
    <td><a href="/player/3306/tyson-kern/" target="_blank">Tyson Kern</a></td>
    <td>70.0</td>
    <td>11.2</td>
    <td>5520.7</td>
    <td>Yale Street</td>
</tr>

<tr>
    <td>1810</td>
    <td><a href="/player/3239/conner-haslett/" target="_blank">Conner Haslett</a></td>
    <td>77.0</td>
    <td>12.0</td>
    <td>5519.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1811</td>
    <td><a href="/player/1907/aiden-squitieri/" target="_blank">aiden squitieri</a></td>
    <td>71.4</td>
    <td>11.0</td>
    <td>5518.6</td>
    <td>venom</td>
</tr>

<tr>
    <td>1812</td>
    <td><a href="/player/2816/mikey-schuda/" target="_blank">Mikey Schuda</a></td>
    <td>74.8</td>
    <td>9.5</td>
    <td>5514.9</td>
    <td>Overbrook</td>
</tr>

<tr>
    <td>1813</td>
    <td><a href="/player/897/anthony-mauro/" target="_blank">Anthony Mauro</a></td>
    <td>78.4</td>
    <td>8.7</td>
    <td>5512.7</td>
    <td>Blue Wave</td>
</tr>

<tr>
    <td>1814</td>
    <td><a href="/player/937/dylan-tuthill/" target="_blank">Dylan Tuthill</a></td>
    <td>69.8</td>
    <td>9.8</td>
    <td>5502.4</td>
    <td>Blue wave</td>
</tr>

<tr>
    <td>1815</td>
    <td><a href="/player/2061/bradley-bettez/" target="_blank">Bradley Bettez</a></td>
    <td>74.2</td>
    <td>12.0</td>
    <td>5499.6</td>
    <td>Fitchburg Youth Wrestling</td>
</tr>

<tr>
    <td>1816</td>
    <td><a href="/player/1736/chase-smith/" target="_blank">Chase Smith</a></td>
    <td>69.9</td>
    <td>10.1</td>
    <td>5499.4</td>
    <td>Altered Beast</td>
</tr>

<tr>
    <td>1817</td>
    <td><a href="/player/985/kenny-gein/" target="_blank">Kenny Gein</a></td>
    <td>76.4</td>
    <td>13.3</td>
    <td>5496.3</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1818</td>
    <td><a href="/player/783/alihan-keldibaev/" target="_blank">alihan keldibaev</a></td>
    <td>72.0</td>
    <td>9.5</td>
    <td>5494.4</td>
    <td>will power</td>
</tr>

<tr>
    <td>1819</td>
    <td><a href="/player/510/nicholas-raptis/" target="_blank">Nicholas RAPTIS</a></td>
    <td>75.0</td>
    <td>9.8</td>
    <td>5488.1</td>
    <td>Elite Wrestling</td>
</tr>

<tr>
    <td>1820</td>
    <td><a href="/player/2825/gabriel-maby/" target="_blank">Gabriel Maby</a></td>
    <td>68.6</td>
    <td>10.8</td>
    <td>5476.2</td>
    <td>Iron Horse</td>
</tr>

<tr>
    <td>1821</td>
    <td><a href="/player/1782/zachary-gevinski/" target="_blank">Zachary Gevinski</a></td>
    <td>69.8</td>
    <td>10.7</td>
    <td>5475.5</td>
    <td>Barn Brothers</td>
</tr>

<tr>
    <td>1822</td>
    <td><a href="/player/2665/avery-heineman/" target="_blank">Avery Heineman</a></td>
    <td>78.0</td>
    <td>11.3</td>
    <td>5472.5</td>
    <td>Contenders Wrestling Academy</td>
</tr>

<tr>
    <td>1823</td>
    <td><a href="/player/2632/landon-lill/" target="_blank">Landon Lill</a></td>
    <td>70.0</td>
    <td>9.6</td>
    <td>5470.7</td>
    <td>Manalapan</td>
</tr>

<tr>
    <td>1824</td>
    <td><a href="/player/973/ryan-muller/" target="_blank">Ryan Muller</a></td>
    <td>78.4</td>
    <td>10.5</td>
    <td>5470.1</td>
    <td>Bluewave</td>
</tr>

<tr>
    <td>1825</td>
    <td><a href="/player/955/ryan-posselt/" target="_blank">Ryan Posselt</a></td>
    <td>72.0</td>
    <td>8.7</td>
    <td>5465.9</td>
    <td>Blue Wave</td>
</tr>

<tr>
    <td>1826</td>
    <td><a href="/player/1044/nicholas-bellay/" target="_blank">Nicholas Bellay</a></td>
    <td>72.0</td>
    <td>8.7</td>
    <td>5464.3</td>
    <td>PatMed</td>
</tr>

<tr>
    <td>1827</td>
    <td><a href="/player/2650/ryker-schingeck/" target="_blank">Ryker Schingeck</a></td>
    <td>72.0</td>
    <td>10.6</td>
    <td>5464.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1828</td>
    <td><a href="/player/2711/eric-bocanegra/" target="_blank">Eric Bocanegra</a></td>
    <td>61.5</td>
    <td>12.2</td>
    <td>5460.5</td>
    <td>Empire Wrestling Academy</td>
</tr>

<tr>
    <td>1829</td>
    <td><a href="/player/785/kyle-yannucciello/" target="_blank">Kyle Yannucciello</a></td>
    <td>63.6</td>
    <td>10.4</td>
    <td>5460.0</td>
    <td>VHW</td>
</tr>

<tr>
    <td>1830</td>
    <td><a href="/player/2235/jocelyn-rojas/" target="_blank">Jocelyn Rojas</a></td>
    <td>72.0</td>
    <td>12.6</td>
    <td>5457.4</td>
    <td>Brentwood/Alpha</td>
</tr>

<tr>
    <td>1831</td>
    <td><a href="/player/2931/zachary-keller/" target="_blank">Zachary Keller</a></td>
    <td>93.9</td>
    <td>10.1</td>
    <td>5453.0</td>
    <td>Takedown WC</td>
</tr>

<tr>
    <td>1832</td>
    <td><a href="/player/1363/john-rosas/" target="_blank">John Rosas</a></td>
    <td>77.2</td>
    <td>8.0</td>
    <td>5449.0</td>
    <td>New Brunswick</td>
</tr>

<tr>
    <td>1833</td>
    <td><a href="/player/2321/carter-lupo/" target="_blank">Carter Lupo</a></td>
    <td>96.0</td>
    <td>9.7</td>
    <td>5448.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1834</td>
    <td><a href="/player/2687/macy-schaefer/" target="_blank">Macy Schaefer</a></td>
    <td>72.2</td>
    <td>11.5</td>
    <td>5448.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1835</td>
    <td><a href="/player/972/sean-aebly/" target="_blank">Sean Aebly</a></td>
    <td>72.0</td>
    <td>8.6</td>
    <td>5445.3</td>
    <td>West Babylon</td>
</tr>

<tr>
    <td>1836</td>
    <td><a href="/player/2847/colton-drinkwine/" target="_blank">Colton Drinkwine</a></td>
    <td>65.0</td>
    <td>10.6</td>
    <td>5442.8</td>
    <td>NWO Wrestling Club</td>
</tr>

<tr>
    <td>1837</td>
    <td><a href="/player/3255/logan-carreira/" target="_blank">Logan Carreira</a></td>
    <td>65.0</td>
    <td>11.1</td>
    <td>5442.8</td>
    <td>Pride</td>
</tr>

<tr>
    <td>1838</td>
    <td><a href="/player/3314/trinitilaine-bechstein/" target="_blank">Trinitilaine Bechstein</a></td>
    <td>69.4</td>
    <td>10.8</td>
    <td>5442.8</td>
    <td>Kodiak Attack</td>
</tr>

<tr>
    <td>1839</td>
    <td><a href="/player/2790/gianni-mehmeti/" target="_blank">Gianni Mehmeti</a></td>
    <td>71.6</td>
    <td>9.6</td>
    <td>5442.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1840</td>
    <td><a href="/player/899/lucas-rodriguez/" target="_blank">Lucas Rodriguez</a></td>
    <td>83.8</td>
    <td>8.7</td>
    <td>5438.2</td>
    <td>Thunderbirds</td>
</tr>

<tr>
    <td>1841</td>
    <td><a href="/player/2981/daniel-peterson/" target="_blank">Daniel Peterson</a></td>
    <td>73.8</td>
    <td>9.1</td>
    <td>5438.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1842</td>
    <td><a href="/player/1739/johnathan-castro/" target="_blank">johnathan castro</a></td>
    <td>81.4</td>
    <td>9.0</td>
    <td>5435.4</td>
    <td>dynamic</td>
</tr>

<tr>
    <td>1843</td>
    <td><a href="/player/966/max-granville/" target="_blank">Max Granville</a></td>
    <td>76.0</td>
    <td>9.7</td>
    <td>5434.2</td>
    <td>Blue Wave</td>
</tr>

<tr>
    <td>1844</td>
    <td><a href="/player/3074/justin-bennethum/" target="_blank">Justin Bennethum</a></td>
    <td>85.4</td>
    <td>9.9</td>
    <td>5433.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1845</td>
    <td><a href="/player/2242/matthew-tucci/" target="_blank">Matthew Tucci</a></td>
    <td>67.2</td>
    <td>13.8</td>
    <td>5432.9</td>
    <td>Bayport Bluepoint Phantoms</td>
</tr>

<tr>
    <td>1846</td>
    <td><a href="/player/1079/giovanni-dejesus/" target="_blank">Giovanni DeJesus</a></td>
    <td>73.8</td>
    <td>8.0</td>
    <td>5430.8</td>
    <td>Lindenhurst</td>
</tr>

<tr>
    <td>1847</td>
    <td><a href="/player/662/travis-smith/" target="_blank">Travis Smith</a></td>
    <td>87.0</td>
    <td>11.1</td>
    <td>5430.3</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1848</td>
    <td><a href="/player/3260/henry-kromrei/" target="_blank">Henry Kromrei</a></td>
    <td>83.3</td>
    <td>8.0</td>
    <td>5429.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1849</td>
    <td><a href="/player/1518/brayden-labonte/" target="_blank">Brayden LaBonte</a></td>
    <td>73.8</td>
    <td>10.1</td>
    <td>5428.8</td>
    <td>Five Star</td>
</tr>

<tr>
    <td>1850</td>
    <td><a href="/player/1123/mason-catalano/" target="_blank">Mason Catalano</a></td>
    <td>53.0</td>
    <td>8.2</td>
    <td>5426.3</td>
    <td>MarcAurele Wrestling</td>
</tr>

<tr>
    <td>1851</td>
    <td><a href="/player/2051/william-murray/" target="_blank">William Murray</a></td>
    <td>74.6</td>
    <td>8.6</td>
    <td>5423.4</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>1852</td>
    <td><a href="/player/1528/cole-sanderson/" target="_blank">Cole Sanderson</a></td>
    <td>75.2</td>
    <td>11.1</td>
    <td>5418.7</td>
    <td>Mayo quanchi</td>
</tr>

<tr>
    <td>1853</td>
    <td><a href="/player/871/paul-alongi/" target="_blank">Paul Alongi</a></td>
    <td>69.8</td>
    <td>10.5</td>
    <td>5417.5</td>
    <td>LINDENHURST</td>
</tr>

<tr>
    <td>1854</td>
    <td><a href="/player/1076/duke-trieste/" target="_blank">Duke Trieste</a></td>
    <td>74.2</td>
    <td>11.1</td>
    <td>5416.7</td>
    <td>Manhasset Youth</td>
</tr>

<tr>
    <td>1855</td>
    <td><a href="/player/2874/jonathon-shinn/" target="_blank">Jonathon Shinn</a></td>
    <td>70.4</td>
    <td>10.6</td>
    <td>5415.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1856</td>
    <td><a href="/player/1629/reese-fusaro/" target="_blank">Reese Fusaro</a></td>
    <td>74.8</td>
    <td>10.9</td>
    <td>5413.2</td>
    <td>Ascension</td>
</tr>

<tr>
    <td>1857</td>
    <td><a href="/player/3163/marty-foley/" target="_blank">Marty Foley</a></td>
    <td>79.8</td>
    <td>10.1</td>
    <td>5412.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1858</td>
    <td><a href="/player/3030/lindley-crow/" target="_blank">Lindley Crow</a></td>
    <td>60.4</td>
    <td>9.6</td>
    <td>5410.2</td>
    <td>Kodiak attack</td>
</tr>

<tr>
    <td>1859</td>
    <td><a href="/player/1151/matt-marker/" target="_blank">Matt Marker</a></td>
    <td>81.0</td>
    <td>10.5</td>
    <td>5406.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1860</td>
    <td><a href="/player/3138/jeffrey-dewitt/" target="_blank">Jeffrey DeWitt</a></td>
    <td>84.0</td>
    <td>13.7</td>
    <td>5402.6</td>
    <td>Zeeland East</td>
</tr>

<tr>
    <td>1861</td>
    <td><a href="/player/1234/jack-reinard/" target="_blank">Jack Reinard</a></td>
    <td>80.0</td>
    <td>12.8</td>
    <td>5401.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1862</td>
    <td><a href="/player/3366/mason-furst/" target="_blank">Mason Furst</a></td>
    <td>80.0</td>
    <td>9.5</td>
    <td>5401.6</td>
    <td>Pride wrestling club</td>
</tr>

<tr>
    <td>1863</td>
    <td><a href="/player/3367/rolan-furst/" target="_blank">Rolan Furst</a></td>
    <td>80.0</td>
    <td>7.1</td>
    <td>5401.6</td>
    <td>Pride wrestling club</td>
</tr>

<tr>
    <td>1864</td>
    <td><a href="/player/3254/owen-gardner/" target="_blank">Owen Gardner</a></td>
    <td>71.8</td>
    <td>11.2</td>
    <td>5400.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1865</td>
    <td><a href="/player/1578/kyle-ward/" target="_blank">Kyle Ward</a></td>
    <td>79.0</td>
    <td>9.6</td>
    <td>5394.3</td>
    <td>Red Nose</td>
</tr>

<tr>
    <td>1866</td>
    <td><a href="/player/1576/jax-sgrulletta/" target="_blank">Jax Sgrulletta</a></td>
    <td>64.0</td>
    <td>9.0</td>
    <td>5389.6</td>
    <td>RIDGEFIELD</td>
</tr>

<tr>
    <td>1867</td>
    <td><a href="/player/1931/cole-walters/" target="_blank">Cole Walters</a></td>
    <td>86.6</td>
    <td>9.1</td>
    <td>5387.2</td>
    <td>Longwood</td>
</tr>

<tr>
    <td>1868</td>
    <td><a href="/player/1240/aiden-mcdaniel/" target="_blank">Aiden Mcdaniel</a></td>
    <td>76.8</td>
    <td>10.0</td>
    <td>5384.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1869</td>
    <td><a href="/player/2023/matt-briand/" target="_blank">Matt Briand</a></td>
    <td>81.8</td>
    <td>10.6</td>
    <td>5381.8</td>
    <td>Litchfield</td>
</tr>

<tr>
    <td>1870</td>
    <td><a href="/player/1175/danny-curich/" target="_blank">Danny Curich</a></td>
    <td>65.6</td>
    <td>10.2</td>
    <td>5379.7</td>
    <td>LAW</td>
</tr>

<tr>
    <td>1871</td>
    <td><a href="/player/3045/gunnar-pollins/" target="_blank">Gunnar Pollins</a></td>
    <td>83.3</td>
    <td>9.4</td>
    <td>5379.6</td>
    <td>Michigan Matcats</td>
</tr>

<tr>
    <td>1872</td>
    <td><a href="/player/2750/brin-zehmisch/" target="_blank">Brin Zehmisch</a></td>
    <td>72.5</td>
    <td>11.8</td>
    <td>5379.0</td>
    <td>Butler Golden Tornado</td>
</tr>

<tr>
    <td>1873</td>
    <td><a href="/player/1300/lucas-brown/" target="_blank">Lucas Brown</a></td>
    <td>81.0</td>
    <td>10.8</td>
    <td>5367.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1874</td>
    <td><a href="/player/2756/gavin-morder/" target="_blank">Gavin Morder</a></td>
    <td>69.9</td>
    <td>8.1</td>
    <td>5354.0</td>
    <td>Toshea</td>
</tr>

<tr>
    <td>1875</td>
    <td><a href="/player/1330/stone-milligan/" target="_blank">Stone Milligan</a></td>
    <td>65.0</td>
    <td>11.5</td>
    <td>5350.7</td>
    <td>New Canaan CT</td>
</tr>

<tr>
    <td>1876</td>
    <td><a href="/player/2102/canaan-locke/" target="_blank">Canaan Locke</a></td>
    <td>75.8</td>
    <td>10.1</td>
    <td>5347.1</td>
    <td>Goffstown Wrestling Club</td>
</tr>

<tr>
    <td>1877</td>
    <td><a href="/player/3076/luke-bennethum/" target="_blank">Luke Bennethum</a></td>
    <td>75.6</td>
    <td>8.5</td>
    <td>5345.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1878</td>
    <td><a href="/player/2224/jaidon-au/" target="_blank">Jaidon Au</a></td>
    <td>72.0</td>
    <td>10.2</td>
    <td>5339.0</td>
    <td>Bethpage Eagles</td>
</tr>

<tr>
    <td>1879</td>
    <td><a href="/player/3091/summer-mutschler/" target="_blank">Summer Mutschler</a></td>
    <td>69.1</td>
    <td>10.9</td>
    <td>5335.8</td>
    <td>Panthers</td>
</tr>

<tr>
    <td>1880</td>
    <td><a href="/player/727/joey-rizzuto/" target="_blank">Joey Rizzuto</a></td>
    <td>64.6</td>
    <td>11.4</td>
    <td>5332.2</td>
    <td>Olympic</td>
</tr>

<tr>
    <td>1881</td>
    <td><a href="/player/2658/lincoln-toombs/" target="_blank">Lincoln Toombs</a></td>
    <td>63.0</td>
    <td>10.2</td>
    <td>5330.6</td>
    <td>Summit wrestling academy</td>
</tr>

<tr>
    <td>1882</td>
    <td><a href="/player/1011/conor-zegarek/" target="_blank">conor zegarek</a></td>
    <td>72.0</td>
    <td>10.6</td>
    <td>5329.6</td>
    <td>School of Grappling</td>
</tr>

<tr>
    <td>1883</td>
    <td><a href="/player/722/owen-oleary/" target="_blank">Owen OLeary</a></td>
    <td>70.8</td>
    <td>10.6</td>
    <td>5328.9</td>
    <td>Monroe Jr Falcons</td>
</tr>

<tr>
    <td>1884</td>
    <td><a href="/player/2284/braedan-mundy/" target="_blank">braedan Mundy</a></td>
    <td>84.4</td>
    <td>11.7</td>
    <td>5324.5</td>
    <td>Seaford youth</td>
</tr>

<tr>
    <td>1885</td>
    <td><a href="/player/2838/carsen-breese/" target="_blank">Carsen Breese</a></td>
    <td>85.6</td>
    <td>11.3</td>
    <td>5322.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1886</td>
    <td><a href="/player/953/brady-zadora/" target="_blank">Brady Zadora</a></td>
    <td>70.0</td>
    <td>11.4</td>
    <td>5320.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1887</td>
    <td><a href="/player/1147/timmy-holahan/" target="_blank">Timmy Holahan</a></td>
    <td>70.0</td>
    <td>9.2</td>
    <td>5320.7</td>
    <td>Sayville Wrestling Club</td>
</tr>

<tr>
    <td>1888</td>
    <td><a href="/player/1149/antonio-campisi/" target="_blank">Antonio Campisi</a></td>
    <td>70.0</td>
    <td>12.4</td>
    <td>5320.7</td>
    <td>Razor</td>
</tr>

<tr>
    <td>1889</td>
    <td><a href="/player/3235/adam-ramos/" target="_blank">Adam Ramos</a></td>
    <td>70.0</td>
    <td>8.7</td>
    <td>5320.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1890</td>
    <td><a href="/player/2129/sean-lyle/" target="_blank">Sean Lyle</a></td>
    <td>75.6</td>
    <td>12.2</td>
    <td>5317.8</td>
    <td>Fitchburg Youth Wrestling</td>
</tr>

<tr>
    <td>1891</td>
    <td><a href="/player/857/jake-avarello/" target="_blank">Jake Avarello</a></td>
    <td>66.2</td>
    <td>12.6</td>
    <td>5310.8</td>
    <td>Blue Wave</td>
</tr>

<tr>
    <td>1892</td>
    <td><a href="/player/545/dylan-venet/" target="_blank">Dylan Venet</a></td>
    <td>67.8</td>
    <td>9.5</td>
    <td>5310.1</td>
    <td>Elite</td>
</tr>

<tr>
    <td>1893</td>
    <td><a href="/player/2084/derek-jones/" target="_blank">Derek Jones</a></td>
    <td>70.0</td>
    <td>7.4</td>
    <td>5308.0</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>1894</td>
    <td><a href="/player/1320/ryan-horner/" target="_blank">Ryan Horner</a></td>
    <td>67.8</td>
    <td>10.5</td>
    <td>5307.4</td>
    <td>Elite Wrestling</td>
</tr>

<tr>
    <td>1895</td>
    <td><a href="/player/1745/kevin-rivas/" target="_blank">Kevin Rivas</a></td>
    <td>67.0</td>
    <td>11.4</td>
    <td>5305.9</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1896</td>
    <td><a href="/player/2029/domenic-armano/" target="_blank">Domenic Armano</a></td>
    <td>72.2</td>
    <td>11.9</td>
    <td>5304.5</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>1897</td>
    <td><a href="/player/2715/bentley-ray/" target="_blank">Bentley Ray</a></td>
    <td>74.0</td>
    <td>10.0</td>
    <td>5304.0</td>
    <td>Spazz</td>
</tr>

<tr>
    <td>1898</td>
    <td><a href="/player/586/lex-luthor-key/" target="_blank">Lex Luthor Key</a></td>
    <td>83.4</td>
    <td>10.9</td>
    <td>5299.0</td>
    <td>Longwood</td>
</tr>

<tr>
    <td>1899</td>
    <td><a href="/player/590/devin-connelly/" target="_blank">Devin Connelly</a></td>
    <td>69.2</td>
    <td>11.6</td>
    <td>5298.0</td>
    <td>Longwood</td>
</tr>

<tr>
    <td>1900</td>
    <td><a href="/player/1075/jonathan-granito/" target="_blank">Jonathan Granito</a></td>
    <td>81.6</td>
    <td>13.5</td>
    <td>5297.9</td>
    <td>Blue Wave</td>
</tr>

<tr>
    <td>1901</td>
    <td><a href="/player/3229/colin-kruse/" target="_blank">Colin Kruse</a></td>
    <td>73.8</td>
    <td>10.6</td>
    <td>5297.8</td>
    <td>Michigan MatCats</td>
</tr>

<tr>
    <td>1902</td>
    <td><a href="/player/3385/ryan-fitch/" target="_blank">Ryan Fitch</a></td>
    <td>64.1</td>
    <td>10.2</td>
    <td>5296.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1903</td>
    <td><a href="/player/2608/nicholas-hadzikostas/" target="_blank">Nicholas Hadzikostas</a></td>
    <td>72.0</td>
    <td>10.4</td>
    <td>5283.3</td>
    <td>Comsewogue Warriors</td>
</tr>

<tr>
    <td>1904</td>
    <td><a href="/player/1538/kevin-gerheart/" target="_blank">Kevin Gerheart</a></td>
    <td>66.6</td>
    <td>10.5</td>
    <td>5283.2</td>
    <td>Pocono Mountain East</td>
</tr>

<tr>
    <td>1905</td>
    <td><a href="/player/2445/bobby-brophy/" target="_blank">Bobby Brophy</a></td>
    <td>76.0</td>
    <td>11.9</td>
    <td>5282.0</td>
    <td>RIWA</td>
</tr>

<tr>
    <td>1906</td>
    <td><a href="/player/1132/deniz-evlek/" target="_blank">Deniz Evlek</a></td>
    <td>75.6</td>
    <td>7.2</td>
    <td>5280.0</td>
    <td>Holbrook</td>
</tr>

<tr>
    <td>1907</td>
    <td><a href="/player/828/grady-barrett/" target="_blank">Grady Barrett</a></td>
    <td>67.0</td>
    <td>8.5</td>
    <td>5276.7</td>
    <td>Rocky Point</td>
</tr>

<tr>
    <td>1908</td>
    <td><a href="/player/2440/mia-severino/" target="_blank">Mia Severino</a></td>
    <td>89.0</td>
    <td>8.7</td>
    <td>5269.8</td>
    <td>Alpha Girls</td>
</tr>

<tr>
    <td>1909</td>
    <td><a href="/player/3343/edward-moore-jr/" target="_blank">Edward Moore jr</a></td>
    <td>62.5</td>
    <td>9.8</td>
    <td>5269.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1910</td>
    <td><a href="/player/3345/luke-bryan/" target="_blank">Luke Bryan</a></td>
    <td>83.3</td>
    <td>9.1</td>
    <td>5269.4</td>
    <td>Lima Shawnee</td>
</tr>

<tr>
    <td>1911</td>
    <td><a href="/player/2040/brayden-elwood/" target="_blank">Brayden Elwood</a></td>
    <td>80.8</td>
    <td>9.1</td>
    <td>5269.1</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>1912</td>
    <td><a href="/player/986/salvatore-franco/" target="_blank">Salvatore Franco</a></td>
    <td>60.4</td>
    <td>8.8</td>
    <td>5267.1</td>
    <td>VHW</td>
</tr>

<tr>
    <td>1913</td>
    <td><a href="/player/2427/jackson-goldfeder/" target="_blank">Jackson Goldfeder</a></td>
    <td>72.0</td>
    <td>9.4</td>
    <td>5264.3</td>
    <td>Bethpage</td>
</tr>

<tr>
    <td>1914</td>
    <td><a href="/player/2282/mathew-steffes/" target="_blank">Mathew Steffes</a></td>
    <td>87.4</td>
    <td>12.9</td>
    <td>5261.6</td>
    <td>Hempstead</td>
</tr>

<tr>
    <td>1915</td>
    <td><a href="/player/1901/blake-burtis/" target="_blank">Blake Burtis</a></td>
    <td>82.0</td>
    <td>12.8</td>
    <td>5254.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1916</td>
    <td><a href="/player/1181/ayden-santos/" target="_blank">Ayden Santos</a></td>
    <td>67.2</td>
    <td>9.7</td>
    <td>5250.5</td>
    <td>Copiague</td>
</tr>

<tr>
    <td>1917</td>
    <td><a href="/player/1222/michael-pocius/" target="_blank">Michael Pocius</a></td>
    <td>69.0</td>
    <td>10.3</td>
    <td>5247.3</td>
    <td>Eagle Eye Wrestling Club</td>
</tr>

<tr>
    <td>1918</td>
    <td><a href="/player/1821/ian-john-ripka/" target="_blank">Ian-John Ripka</a></td>
    <td>96.7</td>
    <td>8.4</td>
    <td>5234.5</td>
    <td>Altered Beast</td>
</tr>

<tr>
    <td>1919</td>
    <td><a href="/player/1472/louis-kennedy/" target="_blank">Louis Kennedy</a></td>
    <td>65.0</td>
    <td>9.1</td>
    <td>5231.2</td>
    <td>VHW</td>
</tr>

<tr>
    <td>1920</td>
    <td><a href="/player/3112/hayden-harris/" target="_blank">Hayden Harris</a></td>
    <td>69.3</td>
    <td>8.8</td>
    <td>5227.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1921</td>
    <td><a href="/player/2087/landon-ellis/" target="_blank">Landon Ellis</a></td>
    <td>73.4</td>
    <td>9.1</td>
    <td>5226.1</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>1922</td>
    <td><a href="/player/839/tyler-callahan/" target="_blank">Tyler Callahan</a></td>
    <td>65.4</td>
    <td>10.7</td>
    <td>5222.5</td>
    <td>North Shore Eagle Elites</td>
</tr>

<tr>
    <td>1923</td>
    <td><a href="/player/3010/makenzie-collier/" target="_blank">Makenzie Collier</a></td>
    <td>68.7</td>
    <td>9.9</td>
    <td>5218.9</td>
    <td>Donahoe</td>
</tr>

<tr>
    <td>1924</td>
    <td><a href="/player/989/cole-lograno/" target="_blank">Cole Lograno</a></td>
    <td>62.8</td>
    <td>9.4</td>
    <td>5217.6</td>
    <td>rocky point</td>
</tr>

<tr>
    <td>1925</td>
    <td><a href="/player/2300/anthony-silipo/" target="_blank">Anthony Silipo</a></td>
    <td>77.8</td>
    <td>10.4</td>
    <td>5215.0</td>
    <td>Syosset</td>
</tr>

<tr>
    <td>1926</td>
    <td><a href="/player/2331/alexander-spano/" target="_blank">Alexander Spano</a></td>
    <td>83.8</td>
    <td>11.3</td>
    <td>5214.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1927</td>
    <td><a href="/player/3350/jordan-howd/" target="_blank">jordan howd</a></td>
    <td>73.8</td>
    <td>10.6</td>
    <td>5214.4</td>
    <td>Vandal</td>
</tr>

<tr>
    <td>1928</td>
    <td><a href="/player/1831/brock-nice/" target="_blank">Brock Nice</a></td>
    <td>67.2</td>
    <td>9.9</td>
    <td>5213.5</td>
    <td>Spartan youth wrestling</td>
</tr>

<tr>
    <td>1929</td>
    <td><a href="/player/1034/aris-ragavanis/" target="_blank">Aris Ragavanis</a></td>
    <td>69.2</td>
    <td>10.8</td>
    <td>5209.4</td>
    <td>Blue Wave</td>
</tr>

<tr>
    <td>1930</td>
    <td><a href="/player/2365/jaxon-binkis/" target="_blank">Jaxon Binkis</a></td>
    <td>67.6</td>
    <td>10.3</td>
    <td>5205.5</td>
    <td>Barn Brothers</td>
</tr>

<tr>
    <td>1931</td>
    <td><a href="/player/633/mason-jones/" target="_blank">mason jones</a></td>
    <td>66.8</td>
    <td>10.0</td>
    <td>5201.9</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1932</td>
    <td><a href="/player/2406/abdul-qazi/" target="_blank">Abdul Qazi</a></td>
    <td>88.4</td>
    <td>6.6</td>
    <td>5201.7</td>
    <td>unknown</td>
</tr>

<tr>
    <td>1933</td>
    <td><a href="/player/2382/kenneth-bajandas/" target="_blank">Kenneth Bajandas</a></td>
    <td>80.0</td>
    <td>10.1</td>
    <td>5201.6</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>1934</td>
    <td><a href="/player/1213/jaxx-pagano/" target="_blank">Jaxx Pagano</a></td>
    <td>68.0</td>
    <td>9.8</td>
    <td>5200.3</td>
    <td>Mount Sinai</td>
</tr>

<tr>
    <td>1935</td>
    <td><a href="/player/978/matthew-lehecka/" target="_blank">Matthew Lehecka</a></td>
    <td>74.0</td>
    <td>10.9</td>
    <td>5197.5</td>
    <td>Connetquot</td>
</tr>

<tr>
    <td>1936</td>
    <td><a href="/player/2862/oliver-lamiman/" target="_blank">Oliver Lamiman</a></td>
    <td>73.8</td>
    <td>8.7</td>
    <td>5195.0</td>
    <td>LC Knights</td>
</tr>

<tr>
    <td>1937</td>
    <td><a href="/player/2015/braden-castonguay/" target="_blank">Braden Castonguay</a></td>
    <td>69.4</td>
    <td>9.0</td>
    <td>5191.3</td>
    <td>Litchfield</td>
</tr>

<tr>
    <td>1938</td>
    <td><a href="/player/860/spencer-amato/" target="_blank">Spencer Amato</a></td>
    <td>75.0</td>
    <td>10.5</td>
    <td>5189.7</td>
    <td>Lindenhurst Wrestling Club</td>
</tr>

<tr>
    <td>1939</td>
    <td><a href="/player/3068/ethan-ranes/" target="_blank">Ethan Ranes</a></td>
    <td>91.3</td>
    <td>6.9</td>
    <td>5185.6</td>
    <td>Jr Panthers</td>
</tr>

<tr>
    <td>1940</td>
    <td><a href="/player/3295/alexander-wnuck/" target="_blank">Alexander Wnuck</a></td>
    <td>63.0</td>
    <td>9.9</td>
    <td>5183.4</td>
    <td>Yale Street Wrestling Club</td>
</tr>

<tr>
    <td>1941</td>
    <td><a href="/player/1160/jon-tutku/" target="_blank">Jon Tutku</a></td>
    <td>58.4</td>
    <td>8.9</td>
    <td>5180.8</td>
    <td>Massapequa</td>
</tr>

<tr>
    <td>1942</td>
    <td><a href="/player/3021/jack-dinius/" target="_blank">Jack Dinius</a></td>
    <td>68.5</td>
    <td>9.0</td>
    <td>5180.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1943</td>
    <td><a href="/player/1595/jake-reiss/" target="_blank">Jake Reiss</a></td>
    <td>74.6</td>
    <td>11.6</td>
    <td>5176.6</td>
    <td>RIWA</td>
</tr>

<tr>
    <td>1944</td>
    <td><a href="/player/1983/gabe-osborne/" target="_blank">Gabe Osborne</a></td>
    <td>74.6</td>
    <td>11.6</td>
    <td>5173.5</td>
    <td>Goffstown</td>
</tr>

<tr>
    <td>1945</td>
    <td><a href="/player/1916/ian-jean-claude/" target="_blank">Ian Jean-Claude</a></td>
    <td>70.0</td>
    <td>11.4</td>
    <td>5172.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1946</td>
    <td><a href="/player/1105/steven-ham-3rd/" target="_blank">Steven Ham 3rd</a></td>
    <td>68.0</td>
    <td>11.3</td>
    <td>5172.8</td>
    <td>CJA</td>
</tr>

<tr>
    <td>1947</td>
    <td><a href="/player/1208/cole-garreffi/" target="_blank">Cole Garreffi</a></td>
    <td>68.0</td>
    <td>10.6</td>
    <td>5172.8</td>
    <td>Upper Township</td>
</tr>

<tr>
    <td>1948</td>
    <td><a href="/player/1403/jacob-inserra/" target="_blank">Jacob Inserra</a></td>
    <td>68.0</td>
    <td>10.2</td>
    <td>5172.8</td>
    <td>Rednose Wrestling</td>
</tr>

<tr>
    <td>1949</td>
    <td><a href="/player/1683/neil-sharma/" target="_blank">Neil Sharma</a></td>
    <td>68.0</td>
    <td>12.0</td>
    <td>5172.8</td>
    <td>B&amp;O Outlaws</td>
</tr>

<tr>
    <td>1950</td>
    <td><a href="/player/2693/jaydis-peterson/" target="_blank">Jaydis Peterson</a></td>
    <td>68.0</td>
    <td>6.9</td>
    <td>5172.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1951</td>
    <td><a href="/player/1204/quintin-bausenwein/" target="_blank">Quintin Bausenwein</a></td>
    <td>70.8</td>
    <td>9.6</td>
    <td>5164.5</td>
    <td>MSWC</td>
</tr>

<tr>
    <td>1952</td>
    <td><a href="/player/2030/brogan-beckman/" target="_blank">Brogan Beckman</a></td>
    <td>65.0</td>
    <td>7.4</td>
    <td>5164.5</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>1953</td>
    <td><a href="/player/1087/luke-armendariz/" target="_blank">Luke Armendariz</a></td>
    <td>76.4</td>
    <td>10.1</td>
    <td>5162.7</td>
    <td>Manhasset</td>
</tr>

<tr>
    <td>1954</td>
    <td><a href="/player/1747/aj-porelli/" target="_blank">AJ Porelli</a></td>
    <td>67.4</td>
    <td>10.3</td>
    <td>5162.5</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1955</td>
    <td><a href="/player/518/kahne-von-schmidt/" target="_blank">Kahne von Schmidt</a></td>
    <td>61.0</td>
    <td>10.2</td>
    <td>5160.6</td>
    <td>MPR</td>
</tr>

<tr>
    <td>1956</td>
    <td><a href="/player/1977/noah-jackson/" target="_blank">Noah Jackson</a></td>
    <td>75.4</td>
    <td>12.7</td>
    <td>5156.9</td>
    <td>Timberwolves</td>
</tr>

<tr>
    <td>1957</td>
    <td><a href="/player/728/trey-malabanan/" target="_blank">Trey Malabanan</a></td>
    <td>76.6</td>
    <td>11.9</td>
    <td>5152.7</td>
    <td>joker</td>
</tr>

<tr>
    <td>1958</td>
    <td><a href="/player/2285/iasiah-steffes/" target="_blank">Iasiah Steffes</a></td>
    <td>84.0</td>
    <td>11.8</td>
    <td>5148.4</td>
    <td>Hempstead</td>
</tr>

<tr>
    <td>1959</td>
    <td><a href="/player/1527/sergio-munoz/" target="_blank">Sergio Munoz</a></td>
    <td>58.2</td>
    <td>9.8</td>
    <td>5141.8</td>
    <td>Fitchburg youth wrestling</td>
</tr>

<tr>
    <td>1960</td>
    <td><a href="/player/2875/joey-depasqua/" target="_blank">Joey Depasqua</a></td>
    <td>61.0</td>
    <td>9.6</td>
    <td>5141.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1961</td>
    <td><a href="/player/2218/cj-clifford/" target="_blank">CJ Clifford</a></td>
    <td>68.0</td>
    <td>10.5</td>
    <td>5140.8</td>
    <td>VHW</td>
</tr>

<tr>
    <td>1962</td>
    <td><a href="/player/1400/sam-hunter/" target="_blank">Sam Hunter</a></td>
    <td>63.8</td>
    <td>11.7</td>
    <td>5140.1</td>
    <td>Doylestown</td>
</tr>

<tr>
    <td>1963</td>
    <td><a href="/player/602/dominic-aparicio/" target="_blank">dominic aparicio</a></td>
    <td>67.2</td>
    <td>9.2</td>
    <td>5140.0</td>
    <td>dynamic</td>
</tr>

<tr>
    <td>1964</td>
    <td><a href="/player/1158/jayden-tyson/" target="_blank">Jayden Tyson</a></td>
    <td>70.8</td>
    <td>9.4</td>
    <td>5137.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1965</td>
    <td><a href="/player/1869/franco-zecchino/" target="_blank">Franco Zecchino</a></td>
    <td>57.4</td>
    <td>8.8</td>
    <td>5131.9</td>
    <td>Triumph</td>
</tr>

<tr>
    <td>1966</td>
    <td><a href="/player/2207/michael-scores/" target="_blank">Michael Scores</a></td>
    <td>69.4</td>
    <td>12.4</td>
    <td>5130.9</td>
    <td>Locust Valley Falcons</td>
</tr>

<tr>
    <td>1967</td>
    <td><a href="/player/2921/dominic-spennato/" target="_blank">Dominic Spennato</a></td>
    <td>68.2</td>
    <td>10.5</td>
    <td>5130.5</td>
    <td>Malvern Prep/Wilmington Bulldogs</td>
</tr>

<tr>
    <td>1968</td>
    <td><a href="/player/1873/cameron-miller/" target="_blank">Cameron Miller</a></td>
    <td>84.8</td>
    <td>8.2</td>
    <td>5130.2</td>
    <td>Blue Wave</td>
</tr>

<tr>
    <td>1969</td>
    <td><a href="/player/1357/joseph-huber/" target="_blank">Joseph Huber</a></td>
    <td>80.0</td>
    <td>9.5</td>
    <td>5127.5</td>
    <td>Pemberton Jr Hornets</td>
</tr>

<tr>
    <td>1970</td>
    <td><a href="/player/2609/brandon-ferriolo/" target="_blank">Brandon Ferriolo</a></td>
    <td>82.0</td>
    <td>10.1</td>
    <td>5127.5</td>
    <td>Rocky point</td>
</tr>

<tr>
    <td>1971</td>
    <td><a href="/player/2080/kameron-lewis/" target="_blank">Kameron Lewis</a></td>
    <td>61.4</td>
    <td>7.4</td>
    <td>5125.1</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>1972</td>
    <td><a href="/player/832/jacob-ayers/" target="_blank">Jacob Ayers</a></td>
    <td>64.8</td>
    <td>12.7</td>
    <td>5122.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1973</td>
    <td><a href="/player/3136/lucas-loffredo/" target="_blank">Lucas Loffredo</a></td>
    <td>66.0</td>
    <td>12.6</td>
    <td>5120.6</td>
    <td>Edge</td>
</tr>

<tr>
    <td>1974</td>
    <td><a href="/player/2233/jace-vasquez/" target="_blank">Jace Vasquez</a></td>
    <td>83.0</td>
    <td>9.9</td>
    <td>5114.3</td>
    <td>RaZor Wrestling Club</td>
</tr>

<tr>
    <td>1975</td>
    <td><a href="/player/678/gavin-beauchamp/" target="_blank">Gavin Beauchamp</a></td>
    <td>64.4</td>
    <td>9.4</td>
    <td>5109.2</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>1976</td>
    <td><a href="/player/2776/mackenzie-gappa/" target="_blank">Mackenzie Gappa</a></td>
    <td>64.8</td>
    <td>9.6</td>
    <td>5108.9</td>
    <td>Quakertown</td>
</tr>

<tr>
    <td>1977</td>
    <td><a href="/player/2668/bentley-ray/" target="_blank">Bentley Ray</a></td>
    <td>77.0</td>
    <td>10.0</td>
    <td>5106.7</td>
    <td>Spazz</td>
</tr>

<tr>
    <td>1978</td>
    <td><a href="/player/665/joey-cantave/" target="_blank">joey cantave</a></td>
    <td>71.0</td>
    <td>8.8</td>
    <td>5105.1</td>
    <td>Pitbull</td>
</tr>

<tr>
    <td>1979</td>
    <td><a href="/player/3093/amyra-pabon/" target="_blank">Amyra Pabon</a></td>
    <td>82.6</td>
    <td>10.4</td>
    <td>5104.8</td>
    <td>Altered Beast</td>
</tr>

<tr>
    <td>1980</td>
    <td><a href="/player/2110/carter-beauchaine/" target="_blank">Carter Beauchaine</a></td>
    <td>74.0</td>
    <td>8.0</td>
    <td>5104.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1981</td>
    <td><a href="/player/2905/grant-berden/" target="_blank">Grant Berden</a></td>
    <td>62.0</td>
    <td>8.6</td>
    <td>5101.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1982</td>
    <td><a href="/player/1332/louis-venezia/" target="_blank">Louis venezia</a></td>
    <td>67.0</td>
    <td>11.3</td>
    <td>5097.3</td>
    <td>Caldwell</td>
</tr>

<tr>
    <td>1983</td>
    <td><a href="/player/2870/eli-mckelvey/" target="_blank">Eli Mckelvey</a></td>
    <td>59.3</td>
    <td>8.6</td>
    <td>5096.9</td>
    <td>SAW</td>
</tr>

<tr>
    <td>1984</td>
    <td><a href="/player/1922/paul-vasaturo/" target="_blank">paul vasaturo</a></td>
    <td>64.0</td>
    <td>10.6</td>
    <td>5092.3</td>
    <td>brentwood kid wrestling</td>
</tr>

<tr>
    <td>1985</td>
    <td><a href="/player/1060/nicholas-rodriguez/" target="_blank">Nicholas Rodriguez</a></td>
    <td>81.4</td>
    <td>9.8</td>
    <td>5089.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1986</td>
    <td><a href="/player/1206/ryan-sanabria/" target="_blank">Ryan Sanabria</a></td>
    <td>82.4</td>
    <td>12.1</td>
    <td>5088.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1987</td>
    <td><a href="/player/1832/rj-souliere/" target="_blank">RJ Souliere</a></td>
    <td>69.8</td>
    <td>8.7</td>
    <td>5087.9</td>
    <td>Rawhide</td>
</tr>

<tr>
    <td>1988</td>
    <td><a href="/player/2804/roc-fabri/" target="_blank">Roc Fabri</a></td>
    <td>66.6</td>
    <td>8.5</td>
    <td>5084.5</td>
    <td>Turks Head</td>
</tr>

<tr>
    <td>1989</td>
    <td><a href="/player/1121/jonathan-toriello/" target="_blank">Jonathan Toriello</a></td>
    <td>52.4</td>
    <td>8.7</td>
    <td>5083.3</td>
    <td>MarcAurele</td>
</tr>

<tr>
    <td>1990</td>
    <td><a href="/player/1207/dylan-maher/" target="_blank">Dylan Maher</a></td>
    <td>73.8</td>
    <td>11.2</td>
    <td>5075.9</td>
    <td>Mount Sinai</td>
</tr>

<tr>
    <td>1991</td>
    <td><a href="/player/2732/jp-mckeown/" target="_blank">Jp McKeown</a></td>
    <td>71.7</td>
    <td>9.2</td>
    <td>5074.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1992</td>
    <td><a href="/player/1908/brennan-willett/" target="_blank">Brennan Willett</a></td>
    <td>71.6</td>
    <td>7.7</td>
    <td>5073.5</td>
    <td>Long Beach Gladiators</td>
</tr>

<tr>
    <td>1993</td>
    <td><a href="/player/2334/alex-hernandez/" target="_blank">Alex Hernandez</a></td>
    <td>70.0</td>
    <td>8.6</td>
    <td>5067.4</td>
    <td>VHW</td>
</tr>

<tr>
    <td>1994</td>
    <td><a href="/player/2174/eliasz-raczkowski/" target="_blank">Eliasz Raczkowski</a></td>
    <td>73.0</td>
    <td>8.2</td>
    <td>5066.3</td>
    <td>Woburn Tanners</td>
</tr>

<tr>
    <td>1995</td>
    <td><a href="/player/2494/david-diele/" target="_blank">David Diele</a></td>
    <td>81.0</td>
    <td>9.1</td>
    <td>5064.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1996</td>
    <td><a href="/player/2795/morgan-hyland/" target="_blank">Morgan Hyland</a></td>
    <td>64.0</td>
    <td>10.9</td>
    <td>5063.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>1997</td>
    <td><a href="/player/2270/thomas-hartmann/" target="_blank">Thomas Hartmann</a></td>
    <td>76.6</td>
    <td>8.5</td>
    <td>5061.6</td>
    <td>5 Star Wrestling</td>
</tr>

<tr>
    <td>1998</td>
    <td><a href="/player/1388/cole-siller/" target="_blank">Cole Siller</a></td>
    <td>66.6</td>
    <td>10.3</td>
    <td>5060.3</td>
    <td>Bayville</td>
</tr>

<tr>
    <td>1999</td>
    <td><a href="/player/2421/jayden-mahoney/" target="_blank">Jayden Mahoney</a></td>
    <td>88.2</td>
    <td>10.6</td>
    <td>5060.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2000</td>
    <td><a href="/player/1380/joey-maimone/" target="_blank">Joey Maimone</a></td>
    <td>78.6</td>
    <td>7.8</td>
    <td>5052.7</td>
    <td>Hammonton Wrestling Club</td>
</tr>

<tr>
    <td>2001</td>
    <td><a href="/player/1496/nicky-harris/" target="_blank">Nicky Harris</a></td>
    <td>59.0</td>
    <td>8.5</td>
    <td>5052.0</td>
    <td>VHW</td>
</tr>

<tr>
    <td>2002</td>
    <td><a href="/player/962/craig-cowell-jr/" target="_blank">Craig Cowell JR</a></td>
    <td>61.0</td>
    <td>8.7</td>
    <td>5050.4</td>
    <td>Patchogue Medford</td>
</tr>

<tr>
    <td>2003</td>
    <td><a href="/player/1344/brighton-karvoski/" target="_blank">Brighton Karvoski</a></td>
    <td>59.0</td>
    <td>11.4</td>
    <td>5048.9</td>
    <td>Newtown Youth Wrestling Association</td>
</tr>

<tr>
    <td>2004</td>
    <td><a href="/player/2741/adam-petrov/" target="_blank">Adam Petrov</a></td>
    <td>69.0</td>
    <td>9.9</td>
    <td>5047.3</td>
    <td>Warhawks</td>
</tr>

<tr>
    <td>2005</td>
    <td><a href="/player/1089/damien-pierro/" target="_blank">DAMIEN PIERRO</a></td>
    <td>69.0</td>
    <td>8.5</td>
    <td>5044.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2006</td>
    <td><a href="/player/894/jack-donadoni/" target="_blank">Jack Donadoni</a></td>
    <td>77.6</td>
    <td>7.8</td>
    <td>5041.9</td>
    <td>Rocky Point</td>
</tr>

<tr>
    <td>2007</td>
    <td><a href="/player/1987/victor-lomme/" target="_blank">Victor Lomme</a></td>
    <td>58.6</td>
    <td>9.7</td>
    <td>5034.6</td>
    <td>Boys and Girls Club of Greater Nashua</td>
</tr>

<tr>
    <td>2008</td>
    <td><a href="/player/3092/paige-stankina/" target="_blank">Paige Stankina</a></td>
    <td>70.3</td>
    <td>10.1</td>
    <td>5029.5</td>
    <td>Arsenal Wrestling Club</td>
</tr>

<tr>
    <td>2009</td>
    <td><a href="/player/1291/jake-omalley/" target="_blank">Jake O’Malley</a></td>
    <td>73.2</td>
    <td>10.1</td>
    <td>5026.2</td>
    <td>Sayville Wrestling Club</td>
</tr>

<tr>
    <td>2010</td>
    <td><a href="/player/2670/kade-lester/" target="_blank">Kade Lester</a></td>
    <td>76.5</td>
    <td>9.4</td>
    <td>5023.6</td>
    <td>Lions Wrestling Academy</td>
</tr>

<tr>
    <td>2011</td>
    <td><a href="/player/2868/brennan-hart/" target="_blank">Brennan Hart</a></td>
    <td>51.9</td>
    <td>8.1</td>
    <td>5022.0</td>
    <td>AAGA</td>
</tr>

<tr>
    <td>2012</td>
    <td><a href="/player/1020/cub-romero/" target="_blank">Cub Romero</a></td>
    <td>54.0</td>
    <td>9.1</td>
    <td>5016.3</td>
    <td>School of Grappling</td>
</tr>

<tr>
    <td>2013</td>
    <td><a href="/player/2176/alex-glennie/" target="_blank">Alex Glennie</a></td>
    <td>73.0</td>
    <td>10.5</td>
    <td>5012.9</td>
    <td>Chelmsford Youth Wrestling</td>
</tr>

<tr>
    <td>2014</td>
    <td><a href="/player/3018/kolton-hartman/" target="_blank">Kolton Hartman</a></td>
    <td>59.7</td>
    <td>7.9</td>
    <td>5005.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2015</td>
    <td><a href="/player/2791/marco-lettini/" target="_blank">Marco Lettini</a></td>
    <td>63.0</td>
    <td>8.8</td>
    <td>5004.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2016</td>
    <td><a href="/player/1546/tanner-heckler/" target="_blank">Tanner Heckler</a></td>
    <td>72.6</td>
    <td>9.7</td>
    <td>5000.4</td>
    <td>Nywa</td>
</tr>

<tr>
    <td>2017</td>
    <td><a href="/player/1199/collin-schmalz/" target="_blank">Collin Schmalz</a></td>
    <td>80.0</td>
    <td>9.8</td>
    <td>4991.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2018</td>
    <td><a href="/player/2327/giuseppe-calabrese/" target="_blank">Giuseppe Calabrese</a></td>
    <td>68.0</td>
    <td>9.8</td>
    <td>4987.8</td>
    <td>Dynamic / Smithtown East</td>
</tr>

<tr>
    <td>2019</td>
    <td><a href="/player/1185/nolan-eide/" target="_blank">nolan eide</a></td>
    <td>86.8</td>
    <td>8.6</td>
    <td>4987.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2020</td>
    <td><a href="/player/1129/michael-clark/" target="_blank">Michael Clark</a></td>
    <td>61.8</td>
    <td>8.6</td>
    <td>4983.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2021</td>
    <td><a href="/player/1443/carter-lanzilli/" target="_blank">Carter Lanzilli</a></td>
    <td>61.0</td>
    <td>9.8</td>
    <td>4983.1</td>
    <td>Ridgefield</td>
</tr>

<tr>
    <td>2022</td>
    <td><a href="/player/878/mitchell-silver/" target="_blank">Mitchell Silver</a></td>
    <td>88.0</td>
    <td>7.3</td>
    <td>4982.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2023</td>
    <td><a href="/player/2095/ethan-back/" target="_blank">Ethan Back</a></td>
    <td>74.0</td>
    <td>9.4</td>
    <td>4978.4</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>2024</td>
    <td><a href="/player/1466/daniel-barone/" target="_blank">Daniel Barone</a></td>
    <td>74.4</td>
    <td>12.7</td>
    <td>4969.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2025</td>
    <td><a href="/player/3025/cole-hatfield/" target="_blank">Cole Hatfield</a></td>
    <td>62.2</td>
    <td>8.3</td>
    <td>4966.4</td>
    <td>Michigan Matcats</td>
</tr>

<tr>
    <td>2026</td>
    <td><a href="/player/1539/christopher-gerheart/" target="_blank">Christopher Gerheart</a></td>
    <td>60.8</td>
    <td>8.8</td>
    <td>4965.8</td>
    <td>Swiftwater</td>
</tr>

<tr>
    <td>2027</td>
    <td><a href="/player/2091/grace-kenna/" target="_blank">Grace Kenna</a></td>
    <td>63.2</td>
    <td>10.9</td>
    <td>4964.8</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>2028</td>
    <td><a href="/player/2368/keeghan-lynch/" target="_blank">keeghan lynch</a></td>
    <td>72.0</td>
    <td>11.7</td>
    <td>4964.3</td>
    <td>Blue waves</td>
</tr>

<tr>
    <td>2029</td>
    <td><a href="/player/1172/william-ali-barreto/" target="_blank">William Ali-Barreto</a></td>
    <td>73.4</td>
    <td>6.3</td>
    <td>4962.5</td>
    <td>Valley stream youth wrestling club</td>
</tr>

<tr>
    <td>2030</td>
    <td><a href="/player/1369/tietjen-abel/" target="_blank">Tietjen Abel</a></td>
    <td>58.0</td>
    <td>9.6</td>
    <td>4961.7</td>
    <td>Hempfield</td>
</tr>

<tr>
    <td>2031</td>
    <td><a href="/player/2683/lucas-forman/" target="_blank">Lucas Forman</a></td>
    <td>58.0</td>
    <td>11.3</td>
    <td>4961.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2032</td>
    <td><a href="/player/3390/porter-mccormick/" target="_blank">Porter McCormick</a></td>
    <td>58.9</td>
    <td>8.3</td>
    <td>4956.2</td>
    <td>Michigan matcats</td>
</tr>

<tr>
    <td>2033</td>
    <td><a href="/player/2204/aidan-habermehl/" target="_blank">Aidan Habermehl</a></td>
    <td>65.0</td>
    <td>9.6</td>
    <td>4955.6</td>
    <td>Locust Valley Falcons</td>
</tr>

<tr>
    <td>2034</td>
    <td><a href="/player/2723/emma-grimes/" target="_blank">Emma Grimes</a></td>
    <td>65.9</td>
    <td>10.5</td>
    <td>4954.6</td>
    <td>Wolfpack</td>
</tr>

<tr>
    <td>2035</td>
    <td><a href="/player/1759/benjamin-marino/" target="_blank">Benjamin Marino</a></td>
    <td>66.0</td>
    <td>9.9</td>
    <td>4951.3</td>
    <td>ProEx</td>
</tr>

<tr>
    <td>2036</td>
    <td><a href="/player/858/lucas-pellechi/" target="_blank">Lucas Pellechi</a></td>
    <td>70.0</td>
    <td>9.7</td>
    <td>4947.1</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2037</td>
    <td><a href="/player/3355/brennan-totten/" target="_blank">Brennan Totten</a></td>
    <td>67.6</td>
    <td>9.2</td>
    <td>4945.7</td>
    <td>Michigan Revolution</td>
</tr>

<tr>
    <td>2038</td>
    <td><a href="/player/1141/rivers-addison/" target="_blank">Rivers Addison</a></td>
    <td>65.0</td>
    <td>10.6</td>
    <td>4942.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2039</td>
    <td><a href="/player/1223/connor-fabian/" target="_blank">Connor Fabian</a></td>
    <td>65.0</td>
    <td>8.1</td>
    <td>4942.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2040</td>
    <td><a href="/player/1593/brooklynn-hepburn/" target="_blank">Brooklynn Hepburn</a></td>
    <td>65.0</td>
    <td>10.2</td>
    <td>4942.8</td>
    <td>Wolf Gang Wrestling Academy</td>
</tr>

<tr>
    <td>2041</td>
    <td><a href="/player/1811/cade-strauss/" target="_blank">Cade Strauss</a></td>
    <td>64.2</td>
    <td>10.8</td>
    <td>4939.2</td>
    <td>Lehigh</td>
</tr>

<tr>
    <td>2042</td>
    <td><a href="/player/1039/jonathan-rhatigan/" target="_blank">Jonathan Rhatigan</a></td>
    <td>64.4</td>
    <td>10.8</td>
    <td>4938.3</td>
    <td>Blue Wave Wrestling</td>
</tr>

<tr>
    <td>2043</td>
    <td><a href="/player/1230/ty-hamada/" target="_blank">Ty Hamada</a></td>
    <td>72.6</td>
    <td>8.6</td>
    <td>4937.7</td>
    <td>Blue wave</td>
</tr>

<tr>
    <td>2044</td>
    <td><a href="/player/2976/ethan-harris/" target="_blank">Ethan Harris</a></td>
    <td>69.2</td>
    <td>8.0</td>
    <td>4935.0</td>
    <td></td>
</tr>

<tr>
    <td>2045</td>
    <td><a href="/player/2919/boden-dusseau/" target="_blank">Boden Dusseau</a></td>
    <td>70.1</td>
    <td>9.4</td>
    <td>4934.1</td>
    <td>Bedford</td>
</tr>

<tr>
    <td>2046</td>
    <td><a href="/player/3331/marciano-gonzales/" target="_blank">Marciano Gonzales</a></td>
    <td>82.2</td>
    <td>8.0</td>
    <td>4933.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2047</td>
    <td><a href="/player/2266/ryder-spitzer/" target="_blank">Ryder Spitzer</a></td>
    <td>76.2</td>
    <td>10.5</td>
    <td>4933.3</td>
    <td>Bethpage</td>
</tr>

<tr>
    <td>2048</td>
    <td><a href="/player/2763/tyler-cobb/" target="_blank">Tyler Cobb</a></td>
    <td>72.2</td>
    <td>9.0</td>
    <td>4932.3</td>
    <td>Raw</td>
</tr>

<tr>
    <td>2049</td>
    <td><a href="/player/3333/harley-pfeiffer/" target="_blank">Harley Pfeiffer</a></td>
    <td>66.0</td>
    <td>8.8</td>
    <td>4930.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2050</td>
    <td><a href="/player/2188/jack-marino/" target="_blank">Jack Marino</a></td>
    <td>73.6</td>
    <td>8.5</td>
    <td>4929.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2051</td>
    <td><a href="/player/2009/matthew-dickerson/" target="_blank">Matthew Dickerson</a></td>
    <td>77.0</td>
    <td>8.7</td>
    <td>4923.8</td>
    <td>Litchfield</td>
</tr>

<tr>
    <td>2052</td>
    <td><a href="/player/1704/daniel-mackinnon/" target="_blank">Daniel MacKinnon</a></td>
    <td>61.0</td>
    <td>9.3</td>
    <td>4918.9</td>
    <td>Linwood</td>
</tr>

<tr>
    <td>2053</td>
    <td><a href="/player/1938/cole-nault/" target="_blank">Cole Nault</a></td>
    <td>62.4</td>
    <td>9.9</td>
    <td>4918.8</td>
    <td>Goffstown Youth wrestling</td>
</tr>

<tr>
    <td>2054</td>
    <td><a href="/player/600/colton-riordan/" target="_blank">Colton Riordan</a></td>
    <td>61.6</td>
    <td>8.2</td>
    <td>4918.0</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2055</td>
    <td><a href="/player/903/joey-meyer/" target="_blank">Joey Meyer</a></td>
    <td>70.4</td>
    <td>8.2</td>
    <td>4917.3</td>
    <td>Blue Wave</td>
</tr>

<tr>
    <td>2056</td>
    <td><a href="/player/3297/griffin-cunningham/" target="_blank">Griffin Cunningham</a></td>
    <td>56.5</td>
    <td>8.0</td>
    <td>4916.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2057</td>
    <td><a href="/player/735/asante-colvin/" target="_blank">Asante Colvin</a></td>
    <td>70.2</td>
    <td>7.6</td>
    <td>4912.6</td>
    <td>Ewing</td>
</tr>

<tr>
    <td>2058</td>
    <td><a href="/player/2802/shannon-logue/" target="_blank">Shannon Logue</a></td>
    <td>69.2</td>
    <td>10.6</td>
    <td>4911.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2059</td>
    <td><a href="/player/489/david-grigoryan/" target="_blank">David Grigoryan</a></td>
    <td>63.0</td>
    <td>9.4</td>
    <td>4910.1</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2060</td>
    <td><a href="/player/2159/mateo-montanaro/" target="_blank">Mateo Montanaro</a></td>
    <td>59.2</td>
    <td>8.3</td>
    <td>4908.6</td>
    <td>Woburn</td>
</tr>

<tr>
    <td>2061</td>
    <td><a href="/player/1350/michael-hanlon/" target="_blank">Michael Hanlon</a></td>
    <td>80.4</td>
    <td>9.9</td>
    <td>4898.5</td>
    <td>Law Wrestling Academy</td>
</tr>

<tr>
    <td>2062</td>
    <td><a href="/player/957/tyler-seimer/" target="_blank">Tyler Seimer</a></td>
    <td>69.6</td>
    <td>9.7</td>
    <td>4896.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2063</td>
    <td><a href="/player/2177/colin-egan/" target="_blank">Colin Egan</a></td>
    <td>64.0</td>
    <td>8.4</td>
    <td>4892.8</td>
    <td>Londonderry Raptors</td>
</tr>

<tr>
    <td>2064</td>
    <td><a href="/player/3088/parker-welch/" target="_blank">Parker Welch</a></td>
    <td>69.1</td>
    <td>9.5</td>
    <td>4890.9</td>
    <td>Roanoke Area Wrestling</td>
</tr>

<tr>
    <td>2065</td>
    <td><a href="/player/666/jayden-cantave/" target="_blank">jayden cantave</a></td>
    <td>60.6</td>
    <td>11.5</td>
    <td>4889.4</td>
    <td>Pitbull</td>
</tr>

<tr>
    <td>2066</td>
    <td><a href="/player/1624/bly-christianson/" target="_blank">Bly Christianson</a></td>
    <td>72.2</td>
    <td>9.9</td>
    <td>4889.2</td>
    <td>Wilton</td>
</tr>

<tr>
    <td>2067</td>
    <td><a href="/player/2246/austin-marino/" target="_blank">Austin Marino</a></td>
    <td>72.4</td>
    <td>9.9</td>
    <td>4888.4</td>
    <td>Mount Sinai Wrestling</td>
</tr>

<tr>
    <td>2068</td>
    <td><a href="/player/3044/dylan-phillips/" target="_blank">Dylan Phillips</a></td>
    <td>61.8</td>
    <td>10.1</td>
    <td>4887.1</td>
    <td>Laingsburg</td>
</tr>

<tr>
    <td>2069</td>
    <td><a href="/player/1169/anthony-matulich/" target="_blank">Anthony Matulich</a></td>
    <td>79.0</td>
    <td>6.9</td>
    <td>4886.9</td>
    <td>Seaford</td>
</tr>

<tr>
    <td>2070</td>
    <td><a href="/player/673/jake-jenkins/" target="_blank">Jake Jenkins</a></td>
    <td>68.8</td>
    <td>8.7</td>
    <td>4886.2</td>
    <td>Smithtown East</td>
</tr>

<tr>
    <td>2071</td>
    <td><a href="/player/1854/gavin-nason/" target="_blank">Gavin nason</a></td>
    <td>65.8</td>
    <td>10.4</td>
    <td>4886.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2072</td>
    <td><a href="/player/774/andrew-dolson/" target="_blank">Andrew Dolson</a></td>
    <td>52.8</td>
    <td>8.4</td>
    <td>4884.3</td>
    <td>mattituck</td>
</tr>

<tr>
    <td>2073</td>
    <td><a href="/player/2900/sierra-streeter/" target="_blank">Sierra Streeter</a></td>
    <td>63.0</td>
    <td>8.2</td>
    <td>4883.4</td>
    <td>Cedar Springs</td>
</tr>

<tr>
    <td>2074</td>
    <td><a href="/player/1243/seven-lynn/" target="_blank">Seven Lynn</a></td>
    <td>61.8</td>
    <td>8.3</td>
    <td>4874.2</td>
    <td>Shore Thing</td>
</tr>

<tr>
    <td>2075</td>
    <td><a href="/player/1370/dayne-abel/" target="_blank">Dayne Abel</a></td>
    <td>58.0</td>
    <td>9.6</td>
    <td>4871.8</td>
    <td>Hempfield</td>
</tr>

<tr>
    <td>2076</td>
    <td><a href="/player/2332/christopher-palermo/" target="_blank">Christopher Palermo</a></td>
    <td>72.0</td>
    <td>12.2</td>
    <td>4871.1</td>
    <td>Blue Wave</td>
</tr>

<tr>
    <td>2077</td>
    <td><a href="/player/3285/mason-pitzen/" target="_blank">Mason Pitzen</a></td>
    <td>61.1</td>
    <td>8.2</td>
    <td>4863.2</td>
    <td>Kodiak Attack</td>
</tr>

<tr>
    <td>2078</td>
    <td><a href="/player/1837/river-donoghue/" target="_blank">River Donoghue</a></td>
    <td>73.4</td>
    <td>10.5</td>
    <td>4861.5</td>
    <td>Blue Wave</td>
</tr>

<tr>
    <td>2079</td>
    <td><a href="/player/2953/benny-garber/" target="_blank">Benny Garber</a></td>
    <td>69.2</td>
    <td>8.1</td>
    <td>4858.6</td>
    <td>Woodmore</td>
</tr>

<tr>
    <td>2080</td>
    <td><a href="/player/623/joseph-kokolakis/" target="_blank">joseph kokolakis</a></td>
    <td>71.0</td>
    <td>9.4</td>
    <td>4855.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2081</td>
    <td><a href="/player/3262/guss-latshaw/" target="_blank">Guss Latshaw</a></td>
    <td>64.3</td>
    <td>9.2</td>
    <td>4845.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2082</td>
    <td><a href="/player/517/isaac-winand/" target="_blank">Isaac Winand</a></td>
    <td>69.0</td>
    <td>9.4</td>
    <td>4844.0</td>
    <td>weiser</td>
</tr>

<tr>
    <td>2083</td>
    <td><a href="/player/3292/nick-schiano/" target="_blank">Nick Schiano</a></td>
    <td>65.0</td>
    <td>12.0</td>
    <td>4842.8</td>
    <td>Yale Street Wrestling Club</td>
</tr>

<tr>
    <td>2084</td>
    <td><a href="/player/1828/joseph-parise/" target="_blank">Joseph Parise</a></td>
    <td>71.2</td>
    <td>9.4</td>
    <td>4837.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2085</td>
    <td><a href="/player/1897/ryan-hirschhorn/" target="_blank">Ryan Hirschhorn</a></td>
    <td>78.0</td>
    <td>9.9</td>
    <td>4837.2</td>
    <td>Friends of Massapequa Wrestling</td>
</tr>

<tr>
    <td>2086</td>
    <td><a href="/player/521/christian-lynch/" target="_blank">Christian Lynch</a></td>
    <td>66.4</td>
    <td>8.6</td>
    <td>4836.5</td>
    <td>Elite Wrestling</td>
</tr>

<tr>
    <td>2087</td>
    <td><a href="/player/1405/jeremy-george/" target="_blank">Jeremy George</a></td>
    <td>53.2</td>
    <td>9.1</td>
    <td>4835.2</td>
    <td>Delran</td>
</tr>

<tr>
    <td>2088</td>
    <td><a href="/player/1730/lukas-eide/" target="_blank">Lukas Eide</a></td>
    <td>73.0</td>
    <td>10.2</td>
    <td>4834.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2089</td>
    <td><a href="/player/2629/abigail-maynor/" target="_blank">Abigail Maynor</a></td>
    <td>73.0</td>
    <td>9.6</td>
    <td>4834.7</td>
    <td>Krazy Monkey Wrestling</td>
</tr>

<tr>
    <td>2090</td>
    <td><a href="/player/2295/paul-testa/" target="_blank">Paul Testa</a></td>
    <td>68.0</td>
    <td>9.7</td>
    <td>4832.1</td>
    <td>Wantagh</td>
</tr>

<tr>
    <td>2091</td>
    <td><a href="/player/1474/chase-berkowitz/" target="_blank">Chase Berkowitz</a></td>
    <td>61.0</td>
    <td>9.7</td>
    <td>4828.1</td>
    <td>VHW</td>
</tr>

<tr>
    <td>2092</td>
    <td><a href="/player/1808/dane-malone/" target="_blank">Dane Malone</a></td>
    <td>51.2</td>
    <td>8.0</td>
    <td>4827.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2093</td>
    <td><a href="/player/2835/evan-gomez/" target="_blank">Evan Gomez</a></td>
    <td>56.7</td>
    <td>9.0</td>
    <td>4824.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2094</td>
    <td><a href="/player/2187/landon-cunha/" target="_blank">Landon Cunha</a></td>
    <td>62.0</td>
    <td>9.4</td>
    <td>4818.0</td>
    <td>Pelham</td>
</tr>

<tr>
    <td>2095</td>
    <td><a href="/player/3406/gavin-brent/" target="_blank">Gavin Brent</a></td>
    <td>63.4</td>
    <td>8.7</td>
    <td>4812.6</td>
    <td>Simmons Academy of Wrestling</td>
</tr>

<tr>
    <td>2096</td>
    <td><a href="/player/907/logan-graf/" target="_blank">Logan Graf</a></td>
    <td>62.0</td>
    <td>10.9</td>
    <td>4809.1</td>
    <td>VHW</td>
</tr>

<tr>
    <td>2097</td>
    <td><a href="/player/2271/colton-schmiesing/" target="_blank">Colton Schmiesing</a></td>
    <td>69.6</td>
    <td>9.7</td>
    <td>4807.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2098</td>
    <td><a href="/player/888/greyson-sampson/" target="_blank">Greyson Sampson</a></td>
    <td>64.6</td>
    <td>8.4</td>
    <td>4807.4</td>
    <td>Pat Med</td>
</tr>

<tr>
    <td>2099</td>
    <td><a href="/player/1835/james-catalano/" target="_blank">James Catalano</a></td>
    <td>66.6</td>
    <td>10.4</td>
    <td>4805.0</td>
    <td>Lindenhurst Bulldogs</td>
</tr>

<tr>
    <td>2100</td>
    <td><a href="/player/2373/xiomara-blanco/" target="_blank">Xiomara Blanco</a></td>
    <td>74.6</td>
    <td>11.2</td>
    <td>4802.2</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>2101</td>
    <td><a href="/player/3004/colton-snyder/" target="_blank">Colton Snyder</a></td>
    <td>53.0</td>
    <td>8.3</td>
    <td>4800.5</td>
    <td>ECWC</td>
</tr>

<tr>
    <td>2102</td>
    <td><a href="/player/2691/cupcake-antillon/" target="_blank">Cupcake Antillon</a></td>
    <td>62.8</td>
    <td>8.9</td>
    <td>4799.4</td>
    <td>Denver</td>
</tr>

<tr>
    <td>2103</td>
    <td><a href="/player/1078/michael-catalano/" target="_blank">Michael Catalano</a></td>
    <td>68.4</td>
    <td>11.3</td>
    <td>4799.3</td>
    <td>North babylon</td>
</tr>

<tr>
    <td>2104</td>
    <td><a href="/player/1173/connor-murphy/" target="_blank">Connor Murphy</a></td>
    <td>60.6</td>
    <td>10.7</td>
    <td>4798.5</td>
    <td>Seaford</td>
</tr>

<tr>
    <td>2105</td>
    <td><a href="/player/1063/lucus-pai/" target="_blank">Lucus Pai</a></td>
    <td>63.0</td>
    <td>9.9</td>
    <td>4797.8</td>
    <td>Manhasset Youth Wrestlering</td>
</tr>

<tr>
    <td>2106</td>
    <td><a href="/player/3434/tyler-white/" target="_blank">Tyler White</a></td>
    <td>67.5</td>
    <td>5.9</td>
    <td>4797.7</td>
    <td>Pontiac huskies</td>
</tr>

<tr>
    <td>2107</td>
    <td><a href="/player/1026/jamie-nicotra/" target="_blank">jamie nicotra</a></td>
    <td>63.0</td>
    <td>8.4</td>
    <td>4783.4</td>
    <td>blue wave</td>
</tr>

<tr>
    <td>2108</td>
    <td><a href="/player/1103/jonathan-gould/" target="_blank">Jonathan Gould</a></td>
    <td>63.0</td>
    <td>13.2</td>
    <td>4783.4</td>
    <td>The cage</td>
</tr>

<tr>
    <td>2109</td>
    <td><a href="/player/1456/noah-dumont/" target="_blank">Noah Dumont</a></td>
    <td>63.0</td>
    <td>11.4</td>
    <td>4783.4</td>
    <td>Maine</td>
</tr>

<tr>
    <td>2110</td>
    <td><a href="/player/1758/daniel-mojica/" target="_blank">Daniel Mojica</a></td>
    <td>63.0</td>
    <td>8.3</td>
    <td>4783.4</td>
    <td>Long beach gladiators</td>
</tr>

<tr>
    <td>2111</td>
    <td><a href="/player/2980/jace-barnes/" target="_blank">Jace Barnes</a></td>
    <td>60.9</td>
    <td>7.9</td>
    <td>4780.5</td>
    <td>Mid Michigan Vandals</td>
</tr>

<tr>
    <td>2112</td>
    <td><a href="/player/2653/jace-evers/" target="_blank">Jace Evers</a></td>
    <td>58.6</td>
    <td>6.9</td>
    <td>4780.2</td>
    <td>Summit Wrestling Academy</td>
</tr>

<tr>
    <td>2113</td>
    <td><a href="/player/2093/nadim-abbari/" target="_blank">Nadim Abbari</a></td>
    <td>58.2</td>
    <td>8.5</td>
    <td>4779.5</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>2114</td>
    <td><a href="/player/2306/johan-soto/" target="_blank">Johan Soto</a></td>
    <td>66.0</td>
    <td>8.0</td>
    <td>4778.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2115</td>
    <td><a href="/player/1187/jarryd-smith/" target="_blank">Jarryd Smith</a></td>
    <td>68.6</td>
    <td>8.9</td>
    <td>4776.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2116</td>
    <td><a href="/player/2201/jack-kilpatrick/" target="_blank">Jack Kilpatrick</a></td>
    <td>64.0</td>
    <td>8.4</td>
    <td>4772.5</td>
    <td>Locust Valley Falcons</td>
</tr>

<tr>
    <td>2117</td>
    <td><a href="/player/2859/mckenzie-mantei/" target="_blank">McKenzie Mantei</a></td>
    <td>60.3</td>
    <td>10.4</td>
    <td>4764.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2118</td>
    <td><a href="/player/2261/jack-gammons/" target="_blank">Jack Gammons</a></td>
    <td>69.2</td>
    <td>11.1</td>
    <td>4757.3</td>
    <td>Port Washington PYA</td>
</tr>

<tr>
    <td>2119</td>
    <td><a href="/player/843/santino-pascarella/" target="_blank">Santino Pascarella</a></td>
    <td>57.0</td>
    <td>9.3</td>
    <td>4754.3</td>
    <td>T-Bird</td>
</tr>

<tr>
    <td>2120</td>
    <td><a href="/player/926/kingston-weber/" target="_blank">Kingston Weber</a></td>
    <td>61.6</td>
    <td>10.0</td>
    <td>4752.1</td>
    <td>Thunderbird</td>
</tr>

<tr>
    <td>2121</td>
    <td><a href="/player/1923/aiden-rojas/" target="_blank">aiden rojas</a></td>
    <td>75.0</td>
    <td>7.9</td>
    <td>4747.0</td>
    <td>brentwood</td>
</tr>

<tr>
    <td>2122</td>
    <td><a href="/player/605/brady-hennen/" target="_blank">Brady Hennen</a></td>
    <td>81.0</td>
    <td>10.3</td>
    <td>4746.4</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2123</td>
    <td><a href="/player/2360/anderson-hinke/" target="_blank">Anderson Hinke</a></td>
    <td>68.0</td>
    <td>10.3</td>
    <td>4746.2</td>
    <td>Blue Wave</td>
</tr>

<tr>
    <td>2124</td>
    <td><a href="/player/1966/maximus-rufo/" target="_blank">Maximus Rufo</a></td>
    <td>72.4</td>
    <td>10.0</td>
    <td>4746.0</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>2125</td>
    <td><a href="/player/1526/logan-ernst/" target="_blank">Logan Ernst</a></td>
    <td>63.5</td>
    <td>8.8</td>
    <td>4744.7</td>
    <td>Anthracite elite</td>
</tr>

<tr>
    <td>2126</td>
    <td><a href="/player/923/jackson-burmeister/" target="_blank">Jackson Burmeister</a></td>
    <td>68.2</td>
    <td>8.9</td>
    <td>4738.5</td>
    <td>West Babylon</td>
</tr>

<tr>
    <td>2127</td>
    <td><a href="/player/1926/mason-polifrone/" target="_blank">Mason Polifrone</a></td>
    <td>55.8</td>
    <td>9.4</td>
    <td>4728.0</td>
    <td>RedNose Wrestling</td>
</tr>

<tr>
    <td>2128</td>
    <td><a href="/player/2728/mason-grimes/" target="_blank">Mason Grimes</a></td>
    <td>71.7</td>
    <td>8.9</td>
    <td>4724.8</td>
    <td>Wolfpack</td>
</tr>

<tr>
    <td>2129</td>
    <td><a href="/player/2112/parker-parent/" target="_blank">Parker Parent</a></td>
    <td>61.0</td>
    <td>9.8</td>
    <td>4721.0</td>
    <td>Rawhide</td>
</tr>

<tr>
    <td>2130</td>
    <td><a href="/player/2012/nathaniel-harrington/" target="_blank">Nathaniel Harrington</a></td>
    <td>66.0</td>
    <td>7.6</td>
    <td>4720.6</td>
    <td>Litchfield</td>
</tr>

<tr>
    <td>2131</td>
    <td><a href="/player/1967/vincenzo-rufo/" target="_blank">Vincenzo Rufo</a></td>
    <td>72.4</td>
    <td>12.0</td>
    <td>4717.9</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>2132</td>
    <td><a href="/player/2372/sammy-mazin/" target="_blank">Sammy Mazin</a></td>
    <td>49.0</td>
    <td>9.9</td>
    <td>4710.2</td>
    <td>Red Nose Wrestling</td>
</tr>

<tr>
    <td>2133</td>
    <td><a href="/player/3271/nolan-merritt/" target="_blank">Nolan Merritt</a></td>
    <td>66.8</td>
    <td>7.0</td>
    <td>4709.8</td>
    <td>Jr panthers</td>
</tr>

<tr>
    <td>2134</td>
    <td><a href="/player/2146/aaron-isabelle/" target="_blank">Aaron Isabelle</a></td>
    <td>70.8</td>
    <td>11.3</td>
    <td>4707.7</td>
    <td>Boys and Girls club</td>
</tr>

<tr>
    <td>2135</td>
    <td><a href="/player/2803/rei-pate/" target="_blank">Rei Pate</a></td>
    <td>60.9</td>
    <td>10.0</td>
    <td>4707.3</td>
    <td>Scanlan Wrestling Academy</td>
</tr>

<tr>
    <td>2136</td>
    <td><a href="/player/1163/jovaughn-stewart/" target="_blank">Jovaughn Stewart</a></td>
    <td>61.0</td>
    <td>8.6</td>
    <td>4702.1</td>
    <td>Copaigue</td>
</tr>

<tr>
    <td>2137</td>
    <td><a href="/player/2793/fotis-koufalis/" target="_blank">Fotis Koufalis</a></td>
    <td>71.9</td>
    <td>10.6</td>
    <td>4701.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2138</td>
    <td><a href="/player/3414/austin-maynard/" target="_blank">Austin Maynard</a></td>
    <td>69.9</td>
    <td>7.9</td>
    <td>4699.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2139</td>
    <td><a href="/player/1397/christian-gilmore/" target="_blank">Christian Gilmore</a></td>
    <td>66.8</td>
    <td>9.3</td>
    <td>4698.9</td>
    <td>VHW</td>
</tr>

<tr>
    <td>2140</td>
    <td><a href="/player/1056/michael-cerullo/" target="_blank">Michael Cerullo</a></td>
    <td>70.4</td>
    <td>9.7</td>
    <td>4698.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2141</td>
    <td><a href="/player/3176/harrison-stewart/" target="_blank">Harrison Stewart</a></td>
    <td>67.0</td>
    <td>7.0</td>
    <td>4697.3</td>
    <td>American MMA</td>
</tr>

<tr>
    <td>2142</td>
    <td><a href="/player/1015/jake-depietro/" target="_blank">Jake DePietro</a></td>
    <td>55.0</td>
    <td>8.2</td>
    <td>4692.2</td>
    <td>School of Grappling</td>
</tr>

<tr>
    <td>2143</td>
    <td><a href="/player/2137/harrison-cifuentes/" target="_blank">Harrison Cifuentes</a></td>
    <td>77.2</td>
    <td>10.4</td>
    <td>4692.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2144</td>
    <td><a href="/player/2043/luke-frazier/" target="_blank">Luke Frazier</a></td>
    <td>71.8</td>
    <td>8.6</td>
    <td>4690.2</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>2145</td>
    <td><a href="/player/2801/colin-logue/" target="_blank">Colin Logue</a></td>
    <td>59.0</td>
    <td>8.0</td>
    <td>4689.1</td>
    <td>West Chester</td>
</tr>

<tr>
    <td>2146</td>
    <td><a href="/player/1950/lucas-dumont/" target="_blank">Lucas Dumont</a></td>
    <td>64.0</td>
    <td>7.6</td>
    <td>4681.9</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>2147</td>
    <td><a href="/player/1851/russell-pisani/" target="_blank">Russell Pisani</a></td>
    <td>80.0</td>
    <td>8.5</td>
    <td>4676.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2148</td>
    <td><a href="/player/1392/landry-budden/" target="_blank">Landry Budden</a></td>
    <td>72.6</td>
    <td>8.9</td>
    <td>4673.9</td>
    <td>Rancocas Valley</td>
</tr>

<tr>
    <td>2149</td>
    <td><a href="/player/1178/andrew-mormon/" target="_blank">Andrew Mormon</a></td>
    <td>67.4</td>
    <td>8.6</td>
    <td>4673.7</td>
    <td>Sachem</td>
</tr>

<tr>
    <td>2150</td>
    <td><a href="/player/1543/luke-grafmuller/" target="_blank">Luke Grafmuller</a></td>
    <td>78.8</td>
    <td>10.9</td>
    <td>4673.4</td>
    <td>Arlington</td>
</tr>

<tr>
    <td>2151</td>
    <td><a href="/player/1933/matteo-concialdi/" target="_blank">Matteo Concialdi</a></td>
    <td>69.6</td>
    <td>8.5</td>
    <td>4668.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2152</td>
    <td><a href="/player/3146/michael-apicelli/" target="_blank">Michael Apicelli</a></td>
    <td>64.0</td>
    <td>11.8</td>
    <td>4663.7</td>
    <td>Ocean twp.</td>
</tr>

<tr>
    <td>2153</td>
    <td><a href="/player/2851/cael-dodson/" target="_blank">Cael Dodson</a></td>
    <td>68.5</td>
    <td>11.0</td>
    <td>4661.1</td>
    <td>Huron wc</td>
</tr>

<tr>
    <td>2154</td>
    <td><a href="/player/1253/ryan-bozelli/" target="_blank">Ryan Bozelli</a></td>
    <td>58.8</td>
    <td>9.9</td>
    <td>4660.4</td>
    <td>LAW Wrestling Academy</td>
</tr>

<tr>
    <td>2155</td>
    <td><a href="/player/513/anthony-daibes/" target="_blank">Anthony Daibes</a></td>
    <td>59.8</td>
    <td>8.1</td>
    <td>4656.1</td>
    <td>Red Nose</td>
</tr>

<tr>
    <td>2156</td>
    <td><a href="/player/1904/davi-freitas/" target="_blank">Davi Freitas</a></td>
    <td>66.0</td>
    <td>8.3</td>
    <td>4648.4</td>
    <td>Wantagh Wrestling</td>
</tr>

<tr>
    <td>2157</td>
    <td><a href="/player/2058/paul-staska/" target="_blank">Paul Staska</a></td>
    <td>69.0</td>
    <td>9.2</td>
    <td>4647.3</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>2158</td>
    <td><a href="/player/1800/gavin-kester/" target="_blank">Gavin Kester</a></td>
    <td>54.8</td>
    <td>9.7</td>
    <td>4644.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2159</td>
    <td><a href="/player/1346/stephen-martin/" target="_blank">Stephen Martin</a></td>
    <td>69.8</td>
    <td>9.6</td>
    <td>4631.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2160</td>
    <td><a href="/player/3424/jasper-cathey/" target="_blank">jasper Cathey</a></td>
    <td>59.8</td>
    <td>8.6</td>
    <td>4631.3</td>
    <td>Pontiac huskies</td>
</tr>

<tr>
    <td>2161</td>
    <td><a href="/player/869/anthony-mouzakitis/" target="_blank">Anthony Mouzakitis</a></td>
    <td>62.0</td>
    <td>9.8</td>
    <td>4628.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2162</td>
    <td><a href="/player/964/kieran-cowell/" target="_blank">Kieran Cowell</a></td>
    <td>57.0</td>
    <td>8.7</td>
    <td>4626.2</td>
    <td>Patchogue Medford</td>
</tr>

<tr>
    <td>2163</td>
    <td><a href="/player/2042/desmond-fernandes/" target="_blank">Desmond Fernandes</a></td>
    <td>60.2</td>
    <td>8.8</td>
    <td>4626.2</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>2164</td>
    <td><a href="/player/1699/ivan-adames/" target="_blank">Ivan Adames</a></td>
    <td>74.0</td>
    <td>10.0</td>
    <td>4621.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2165</td>
    <td><a href="/player/1037/thomas-matias/" target="_blank">Thomas Matias</a></td>
    <td>56.6</td>
    <td>8.7</td>
    <td>4619.7</td>
    <td>shoreham wading river</td>
</tr>

<tr>
    <td>2166</td>
    <td><a href="/player/1928/charles-polifrone/" target="_blank">Charles Polifrone</a></td>
    <td>55.8</td>
    <td>9.4</td>
    <td>4619.1</td>
    <td>RedNose Wrestling</td>
</tr>

<tr>
    <td>2167</td>
    <td><a href="/player/2707/piper-weaver/" target="_blank">Piper Weaver</a></td>
    <td>61.0</td>
    <td>7.7</td>
    <td>4618.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2168</td>
    <td><a href="/player/2751/kimber-zehmisch/" target="_blank">Kimber Zehmisch</a></td>
    <td>71.2</td>
    <td>11.8</td>
    <td>4618.1</td>
    <td>Butler Golden Tornado</td>
</tr>

<tr>
    <td>2169</td>
    <td><a href="/player/3132/kellen-oconnell/" target="_blank">Kellen O’Connell</a></td>
    <td>62.1</td>
    <td>9.6</td>
    <td>4616.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2170</td>
    <td><a href="/player/725/christian-stocker/" target="_blank">Christian Stocker</a></td>
    <td>62.2</td>
    <td>10.7</td>
    <td>4615.8</td>
    <td>caldwell</td>
</tr>

<tr>
    <td>2171</td>
    <td><a href="/player/872/joseph-manfre/" target="_blank">Joseph Manfre</a></td>
    <td>61.0</td>
    <td>10.2</td>
    <td>4614.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2172</td>
    <td><a href="/player/3017/kenny-hartman/" target="_blank">Kenny Hartman</a></td>
    <td>51.3</td>
    <td>9.3</td>
    <td>4612.9</td>
    <td>Wauseon Tomahawk</td>
</tr>

<tr>
    <td>2173</td>
    <td><a href="/player/2378/jasiah-dominguez/" target="_blank">jasiah dominguez</a></td>
    <td>68.0</td>
    <td>10.5</td>
    <td>4608.3</td>
    <td>longwood</td>
</tr>

<tr>
    <td>2174</td>
    <td><a href="/player/1027/jack-buonaiuto/" target="_blank">Jack Buonaiuto</a></td>
    <td>65.2</td>
    <td>9.6</td>
    <td>4606.6</td>
    <td>Mattituck Wrestling</td>
</tr>

<tr>
    <td>2175</td>
    <td><a href="/player/2854/logan-rajner/" target="_blank">Logan Rajner</a></td>
    <td>52.6</td>
    <td>8.3</td>
    <td>4604.5</td>
    <td>Kodiak Attack</td>
</tr>

<tr>
    <td>2176</td>
    <td><a href="/player/1396/benjamin-gilmore/" target="_blank">Benjamin Gilmore</a></td>
    <td>55.8</td>
    <td>9.5</td>
    <td>4601.5</td>
    <td>VHW</td>
</tr>

<tr>
    <td>2177</td>
    <td><a href="/player/1891/lorenzo-gaudioso/" target="_blank">Lorenzo Gaudioso</a></td>
    <td>76.0</td>
    <td>9.6</td>
    <td>4600.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2178</td>
    <td><a href="/player/1337/colin-griffin/" target="_blank">Colin Griffin</a></td>
    <td>62.6</td>
    <td>10.8</td>
    <td>4598.5</td>
    <td>Bellmore</td>
</tr>

<tr>
    <td>2179</td>
    <td><a href="/player/2275/bryce-pellechia/" target="_blank">Bryce Pellechia</a></td>
    <td>80.0</td>
    <td>7.6</td>
    <td>4594.1</td>
    <td>Five Stare</td>
</tr>

<tr>
    <td>2180</td>
    <td><a href="/player/771/edward-nasimov/" target="_blank">edward nasimov</a></td>
    <td>67.0</td>
    <td>8.2</td>
    <td>4590.4</td>
    <td>willpower wrestling club</td>
</tr>

<tr>
    <td>2181</td>
    <td><a href="/player/1914/nicolas-mascioli/" target="_blank">Nicolas Mascioli</a></td>
    <td>66.4</td>
    <td>8.3</td>
    <td>4590.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2182</td>
    <td><a href="/player/3097/giuvanni-tinervia/" target="_blank">Giuvanni Tinervia</a></td>
    <td>54.5</td>
    <td>7.8</td>
    <td>4589.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2183</td>
    <td><a href="/player/1219/matthew-beck/" target="_blank">Matthew Beck</a></td>
    <td>77.2</td>
    <td>6.4</td>
    <td>4585.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2184</td>
    <td><a href="/player/3365/gunner-provo/" target="_blank">Gunner Provo</a></td>
    <td>57.0</td>
    <td>8.1</td>
    <td>4583.9</td>
    <td>Perrysburg</td>
</tr>

<tr>
    <td>2185</td>
    <td><a href="/player/2966/cooper-sherer/" target="_blank">Cooper Sherer</a></td>
    <td>65.0</td>
    <td>9.3</td>
    <td>4572.8</td>
    <td>LAW</td>
</tr>

<tr>
    <td>2186</td>
    <td><a href="/player/2767/dominic-bucci/" target="_blank">Dominic Bucci</a></td>
    <td>59.2</td>
    <td>8.4</td>
    <td>4567.2</td>
    <td>Cordoba Trained</td>
</tr>

<tr>
    <td>2187</td>
    <td><a href="/player/1696/carmine-catapano/" target="_blank">Carmine Catapano</a></td>
    <td>61.2</td>
    <td>9.2</td>
    <td>4565.0</td>
    <td>Wantagh</td>
</tr>

<tr>
    <td>2188</td>
    <td><a href="/player/1654/andrew-mahoney/" target="_blank">Andrew Mahoney</a></td>
    <td>64.0</td>
    <td>7.2</td>
    <td>4563.7</td>
    <td>Rgino</td>
</tr>

<tr>
    <td>2189</td>
    <td><a href="/player/2025/marciano-armano/" target="_blank">Marciano Armano</a></td>
    <td>66.0</td>
    <td>10.2</td>
    <td>4563.6</td>
    <td>Firepit</td>
</tr>

<tr>
    <td>2190</td>
    <td><a href="/player/2035/morgan-chase/" target="_blank">Morgan Chase</a></td>
    <td>64.8</td>
    <td>7.4</td>
    <td>4562.9</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>2191</td>
    <td><a href="/player/3294/daniel-cooke/" target="_blank">Daniel Cooke</a></td>
    <td>69.0</td>
    <td>8.7</td>
    <td>4547.3</td>
    <td>Kearny</td>
</tr>

<tr>
    <td>2192</td>
    <td><a href="/player/1315/noah-wood/" target="_blank">Noah Wood</a></td>
    <td>59.6</td>
    <td>8.0</td>
    <td>4547.0</td>
    <td>Spazz Wrestling</td>
</tr>

<tr>
    <td>2193</td>
    <td><a href="/player/2913/hunter-dickover/" target="_blank">Hunter Dickover</a></td>
    <td>70.4</td>
    <td>9.6</td>
    <td>4546.9</td>
    <td>Takedown WC</td>
</tr>

<tr>
    <td>2194</td>
    <td><a href="/player/2280/aj-fisher/" target="_blank">AJ Fisher</a></td>
    <td>68.4</td>
    <td>9.5</td>
    <td>4546.7</td>
    <td>Barn Brothers</td>
</tr>

<tr>
    <td>2195</td>
    <td><a href="/player/1335/jeremy-jackson/" target="_blank">Jeremy Jackson</a></td>
    <td>60.4</td>
    <td>7.8</td>
    <td>4544.4</td>
    <td>Spazz</td>
</tr>

<tr>
    <td>2196</td>
    <td><a href="/player/2326/chase-ocampo/" target="_blank">Chase Ocampo</a></td>
    <td>64.0</td>
    <td>9.9</td>
    <td>4539.7</td>
    <td>UHW</td>
</tr>

<tr>
    <td>2197</td>
    <td><a href="/player/934/dominic-destefano/" target="_blank">Dominic DeStefano</a></td>
    <td>49.8</td>
    <td>7.4</td>
    <td>4539.5</td>
    <td>Barn Brothers</td>
</tr>

<tr>
    <td>2198</td>
    <td><a href="/player/603/nathan-matos/" target="_blank">Nathan Matos</a></td>
    <td>64.4</td>
    <td>8.2</td>
    <td>4529.7</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2199</td>
    <td><a href="/player/3184/reid-baker/" target="_blank">Reid Baker</a></td>
    <td>62.5</td>
    <td>7.7</td>
    <td>4527.6</td>
    <td>Dearborn Heights Wildcats</td>
</tr>

<tr>
    <td>2200</td>
    <td><a href="/player/544/hunter-alfalla/" target="_blank">Hunter Alfalla</a></td>
    <td>66.0</td>
    <td>8.0</td>
    <td>4527.5</td>
    <td>dynamic</td>
</tr>

<tr>
    <td>2201</td>
    <td><a href="/player/892/patrick-fish/" target="_blank">Patrick Fish</a></td>
    <td>53.8</td>
    <td>9.4</td>
    <td>4526.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2202</td>
    <td><a href="/player/2227/jackson-marksberry/" target="_blank">Jackson Marksberry</a></td>
    <td>70.2</td>
    <td>7.9</td>
    <td>4525.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2203</td>
    <td><a href="/player/1885/jacob-pham/" target="_blank">Jacob Pham</a></td>
    <td>75.2</td>
    <td>9.1</td>
    <td>4523.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2204</td>
    <td><a href="/player/1135/jared-wood/" target="_blank">Jared Wood</a></td>
    <td>65.4</td>
    <td>8.3</td>
    <td>4522.7</td>
    <td>Longwood</td>
</tr>

<tr>
    <td>2205</td>
    <td><a href="/player/1812/brody-warner/" target="_blank">Brody Warner</a></td>
    <td>65.8</td>
    <td>10.2</td>
    <td>4521.3</td>
    <td>Lehigh Hawks</td>
</tr>

<tr>
    <td>2206</td>
    <td><a href="/player/1418/brendan-binns/" target="_blank">Brendan Binns</a></td>
    <td>67.2</td>
    <td>8.2</td>
    <td>4520.9</td>
    <td>Rancocas Valley</td>
</tr>

<tr>
    <td>2207</td>
    <td><a href="/player/1165/peter-lamberta/" target="_blank">Peter Lamberta</a></td>
    <td>59.8</td>
    <td>9.0</td>
    <td>4519.5</td>
    <td>NORTH BABYLON</td>
</tr>

<tr>
    <td>2208</td>
    <td><a href="/player/1855/nico-bruno/" target="_blank">Nico Bruno</a></td>
    <td>69.2</td>
    <td>11.3</td>
    <td>4517.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2209</td>
    <td><a href="/player/2158/liam-levatti/" target="_blank">Liam Levatti</a></td>
    <td>69.4</td>
    <td>9.9</td>
    <td>4512.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2210</td>
    <td><a href="/player/845/john-bellport/" target="_blank">John Bellport</a></td>
    <td>65.8</td>
    <td>7.7</td>
    <td>4511.2</td>
    <td>Rocky Point</td>
</tr>

<tr>
    <td>2211</td>
    <td><a href="/player/1625/peyton-bip/" target="_blank">Peyton Bip</a></td>
    <td>60.0</td>
    <td>8.9</td>
    <td>4510.6</td>
    <td>Ascension</td>
</tr>

<tr>
    <td>2212</td>
    <td><a href="/player/3284/cayden-felice/" target="_blank">Cayden Felice</a></td>
    <td>51.0</td>
    <td>8.7</td>
    <td>4505.9</td>
    <td>Shores Wrestling Club</td>
</tr>

<tr>
    <td>2213</td>
    <td><a href="/player/2742/haiden-jones/" target="_blank">Haiden Jones</a></td>
    <td>62.9</td>
    <td>8.2</td>
    <td>4496.6</td>
    <td>Pa assassins</td>
</tr>

<tr>
    <td>2214</td>
    <td><a href="/player/2738/brody-bienkowski/" target="_blank">brody bienkowski</a></td>
    <td>69.4</td>
    <td>8.6</td>
    <td>4490.3</td>
    <td>altered Beast Wrestling Academy</td>
</tr>

<tr>
    <td>2215</td>
    <td><a href="/player/3287/mateo-cox/" target="_blank">Mateo Cox</a></td>
    <td>69.6</td>
    <td>9.3</td>
    <td>4490.0</td>
    <td>Downriver Wrestling Club</td>
</tr>

<tr>
    <td>2216</td>
    <td><a href="/player/842/anthony-ciaccio/" target="_blank">Anthony Ciaccio</a></td>
    <td>61.6</td>
    <td>11.7</td>
    <td>4489.1</td>
    <td>Dynamic Wrestling Academy</td>
</tr>

<tr>
    <td>2217</td>
    <td><a href="/player/889/matteo-mancuso/" target="_blank">Matteo Mancuso</a></td>
    <td>60.8</td>
    <td>9.4</td>
    <td>4488.6</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2218</td>
    <td><a href="/player/782/marcus-wellington/" target="_blank">Marcus Wellington</a></td>
    <td>56.0</td>
    <td>8.6</td>
    <td>4486.9</td>
    <td>WILLPOWER</td>
</tr>

<tr>
    <td>2219</td>
    <td><a href="/player/2754/joe-sullivan/" target="_blank">Joe Sullivan</a></td>
    <td>56.7</td>
    <td>7.8</td>
    <td>4483.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2220</td>
    <td><a href="/player/3152/caiden-melis/" target="_blank">Caiden Melis</a></td>
    <td>63.0</td>
    <td>8.9</td>
    <td>4483.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2221</td>
    <td><a href="/player/1145/jordan-eisbruck/" target="_blank">Jordan Eisbruck</a></td>
    <td>62.0</td>
    <td>10.4</td>
    <td>4482.9</td>
    <td>VHW</td>
</tr>

<tr>
    <td>2222</td>
    <td><a href="/player/873/jason-leduc/" target="_blank">Jason Leduc</a></td>
    <td>59.4</td>
    <td>7.3</td>
    <td>4482.2</td>
    <td>Rocky point</td>
</tr>

<tr>
    <td>2223</td>
    <td><a href="/player/1956/adam-collier-ii/" target="_blank">Adam Collier II</a></td>
    <td>55.4</td>
    <td>7.5</td>
    <td>4477.9</td>
    <td>Boys and Girls Club of Greater Nashua</td>
</tr>

<tr>
    <td>2224</td>
    <td><a href="/player/1990/walter-cotito/" target="_blank">Walter Cotito</a></td>
    <td>58.4</td>
    <td>8.3</td>
    <td>4476.9</td>
    <td>BGCGN</td>
</tr>

<tr>
    <td>2225</td>
    <td><a href="/player/2808/parker-full/" target="_blank">Parker Full</a></td>
    <td>58.4</td>
    <td>9.2</td>
    <td>4476.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2226</td>
    <td><a href="/player/925/lucas-meisenholder/" target="_blank">Lucas Meisenholder</a></td>
    <td>61.6</td>
    <td>8.3</td>
    <td>4472.6</td>
    <td>Seaford</td>
</tr>

<tr>
    <td>2227</td>
    <td><a href="/player/1153/rashad-giggetts-jr/" target="_blank">Rashad Giggetts Jr</a></td>
    <td>64.8</td>
    <td>9.0</td>
    <td>4471.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2228</td>
    <td><a href="/player/1796/zaidan-ewis/" target="_blank">Zaidan Ewis</a></td>
    <td>55.9</td>
    <td>9.3</td>
    <td>4462.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2229</td>
    <td><a href="/player/663/zack-levine/" target="_blank">zack levine</a></td>
    <td>54.2</td>
    <td>8.0</td>
    <td>4462.6</td>
    <td>dynamic</td>
</tr>

<tr>
    <td>2230</td>
    <td><a href="/player/2336/kaleb-smith/" target="_blank">Kaleb Smith</a></td>
    <td>71.2</td>
    <td>10.1</td>
    <td>4457.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2231</td>
    <td><a href="/player/477/bradley-macmonigle/" target="_blank">bradley MacMonigle</a></td>
    <td>69.0</td>
    <td>5.8</td>
    <td>4455.4</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2232</td>
    <td><a href="/player/2039/coleton-dumont/" target="_blank">Coleton Dumont</a></td>
    <td>62.2</td>
    <td>9.1</td>
    <td>4455.0</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>2233</td>
    <td><a href="/player/1108/daniel-mackinnon/" target="_blank">Daniel MacKinnon</a></td>
    <td>59.0</td>
    <td>9.0</td>
    <td>4448.9</td>
    <td>mainland jr wrestling</td>
</tr>

<tr>
    <td>2234</td>
    <td><a href="/player/1329/kaisa-milligan/" target="_blank">Kaisa Milligan</a></td>
    <td>59.0</td>
    <td>12.4</td>
    <td>4448.9</td>
    <td>New Canaan CT</td>
</tr>

<tr>
    <td>2235</td>
    <td><a href="/player/1565/lukas-boxley/" target="_blank">Lukas Boxley</a></td>
    <td>59.0</td>
    <td>8.9</td>
    <td>4448.9</td>
    <td>Rough House</td>
</tr>

<tr>
    <td>2236</td>
    <td><a href="/player/2002/xaivry-natal/" target="_blank">Xaivry Natal</a></td>
    <td>63.9</td>
    <td>8.2</td>
    <td>4447.9</td>
    <td>Fitchburg wrestling</td>
</tr>

<tr>
    <td>2237</td>
    <td><a href="/player/876/jake-mantione/" target="_blank">Jake Mantione</a></td>
    <td>60.4</td>
    <td>8.6</td>
    <td>4445.1</td>
    <td>Seaford</td>
</tr>

<tr>
    <td>2238</td>
    <td><a href="/player/998/tristan-rainsford/" target="_blank">Tristan Rainsford</a></td>
    <td>61.0</td>
    <td>11.5</td>
    <td>4442.4</td>
    <td>Pat-Med</td>
</tr>

<tr>
    <td>2239</td>
    <td><a href="/player/2345/jamie-denatale/" target="_blank">Jamie DeNatale</a></td>
    <td>65.8</td>
    <td>8.3</td>
    <td>4440.9</td>
    <td>Locust Valley Falcons</td>
</tr>

<tr>
    <td>2240</td>
    <td><a href="/player/3038/jacob-kruse/" target="_blank">Jacob Kruse</a></td>
    <td>64.6</td>
    <td>7.8</td>
    <td>4438.8</td>
    <td>Michigan Matcats</td>
</tr>

<tr>
    <td>2241</td>
    <td><a href="/player/2892/colton-henfling/" target="_blank">Colton Henfling</a></td>
    <td>60.8</td>
    <td>7.6</td>
    <td>4437.2</td>
    <td>Simmons Wrestling Academy (SAW)</td>
</tr>

<tr>
    <td>2242</td>
    <td><a href="/player/3264/kaiden-mifsud/" target="_blank">Kaiden Mifsud</a></td>
    <td>57.8</td>
    <td>8.4</td>
    <td>4436.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2243</td>
    <td><a href="/player/2349/brayden-reddock/" target="_blank">Brayden Reddock</a></td>
    <td>70.0</td>
    <td>7.7</td>
    <td>4431.9</td>
    <td>Smithtown</td>
</tr>

<tr>
    <td>2244</td>
    <td><a href="/player/827/junior-perez/" target="_blank">Junior Perez</a></td>
    <td>54.7</td>
    <td>8.1</td>
    <td>4428.3</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2245</td>
    <td><a href="/player/1858/anthony-dorazio/" target="_blank">Anthony Dorazio</a></td>
    <td>66.0</td>
    <td>9.9</td>
    <td>4424.4</td>
    <td>Bethpage</td>
</tr>

<tr>
    <td>2246</td>
    <td><a href="/player/2168/haylee-keckler/" target="_blank">Haylee Keckler</a></td>
    <td>58.6</td>
    <td>8.4</td>
    <td>4419.1</td>
    <td>Fitchburg Youth Wrestling</td>
</tr>

<tr>
    <td>2247</td>
    <td><a href="/player/959/christian-quarltere/" target="_blank">Christian Quarltere</a></td>
    <td>61.0</td>
    <td>9.2</td>
    <td>4414.7</td>
    <td>Patmed</td>
</tr>

<tr>
    <td>2248</td>
    <td><a href="/player/960/wesley-krupp/" target="_blank">Wesley Krupp</a></td>
    <td>69.4</td>
    <td>9.1</td>
    <td>4413.5</td>
    <td>Kings Park</td>
</tr>

<tr>
    <td>2249</td>
    <td><a href="/player/854/zachary-snow/" target="_blank">Zachary Snow</a></td>
    <td>58.8</td>
    <td>8.6</td>
    <td>4409.7</td>
    <td>T-Bird</td>
</tr>

<tr>
    <td>2250</td>
    <td><a href="/player/1419/tanner-shear/" target="_blank">Tanner Shear</a></td>
    <td>57.4</td>
    <td>9.6</td>
    <td>4408.5</td>
    <td>Central Catholic</td>
</tr>

<tr>
    <td>2251</td>
    <td><a href="/player/891/gj-cook/" target="_blank">GJ Cook</a></td>
    <td>64.6</td>
    <td>8.3</td>
    <td>4404.8</td>
    <td>Blue Wave</td>
</tr>

<tr>
    <td>2252</td>
    <td><a href="/player/3316/payton-vamvas/" target="_blank">Payton Vamvas</a></td>
    <td>74.0</td>
    <td>6.7</td>
    <td>4404.0</td>
    <td>Capac Warriors</td>
</tr>

<tr>
    <td>2253</td>
    <td><a href="/player/1298/michael-raber/" target="_blank">Michael Raber</a></td>
    <td>66.4</td>
    <td>11.1</td>
    <td>4403.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2254</td>
    <td><a href="/player/820/case-birmingham/" target="_blank">Case Birmingham</a></td>
    <td>67.0</td>
    <td>7.4</td>
    <td>4401.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2255</td>
    <td><a href="/player/2727/jaxson-polhamus/" target="_blank">Jaxson Polhamus</a></td>
    <td>64.9</td>
    <td>7.3</td>
    <td>4401.4</td>
    <td>Susquehanna Valley</td>
</tr>

<tr>
    <td>2256</td>
    <td><a href="/player/2234/luke-pernicone/" target="_blank">Luke Pernicone</a></td>
    <td>71.6</td>
    <td>9.6</td>
    <td>4399.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2257</td>
    <td><a href="/player/2491/ryan-mcauliffe/" target="_blank">Ryan McAuliffe</a></td>
    <td>65.0</td>
    <td>9.9</td>
    <td>4392.8</td>
    <td>Mount Sinai Wrestling</td>
</tr>

<tr>
    <td>2258</td>
    <td><a href="/player/2180/bryce-teixeira/" target="_blank">Bryce Teixeira</a></td>
    <td>54.4</td>
    <td>8.1</td>
    <td>4390.8</td>
    <td>Fitchburg youth wrestling</td>
</tr>

<tr>
    <td>2259</td>
    <td><a href="/player/954/douglas-mehilentze/" target="_blank">Douglas Mehilentze</a></td>
    <td>60.0</td>
    <td>8.8</td>
    <td>4387.4</td>
    <td>Kings Park</td>
</tr>

<tr>
    <td>2260</td>
    <td><a href="/player/1876/jason-bencivenga/" target="_blank">Jason Bencivenga</a></td>
    <td>60.8</td>
    <td>7.4</td>
    <td>4387.0</td>
    <td>Blue Wave</td>
</tr>

<tr>
    <td>2261</td>
    <td><a href="/player/816/dylan-bigbie/" target="_blank">Dylan Bigbie</a></td>
    <td>59.0</td>
    <td>8.9</td>
    <td>4385.8</td>
    <td>Rocky Point</td>
</tr>

<tr>
    <td>2262</td>
    <td><a href="/player/1870/john-porchia/" target="_blank">John Porchia</a></td>
    <td>62.0</td>
    <td>8.5</td>
    <td>4384.7</td>
    <td>SWR Shoreham</td>
</tr>

<tr>
    <td>2263</td>
    <td><a href="/player/479/joseph-costanza/" target="_blank">Joseph Costanza</a></td>
    <td>59.2</td>
    <td>7.7</td>
    <td>4384.5</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2264</td>
    <td><a href="/player/1188/xavier-roe/" target="_blank">Xavier Roe</a></td>
    <td>63.2</td>
    <td>7.4</td>
    <td>4383.3</td>
    <td>Copiague</td>
</tr>

<tr>
    <td>2265</td>
    <td><a href="/player/1790/cutter-perryman/" target="_blank">Cutter Perryman</a></td>
    <td>64.2</td>
    <td>8.6</td>
    <td>4381.2</td>
    <td>Bellefonte</td>
</tr>

<tr>
    <td>2266</td>
    <td><a href="/player/909/zakariya-malik/" target="_blank">Zakariya Malik</a></td>
    <td>63.8</td>
    <td>6.7</td>
    <td>4380.2</td>
    <td>Bethpage</td>
</tr>

<tr>
    <td>2267</td>
    <td><a href="/player/2662/max-foley/" target="_blank">Max Foley</a></td>
    <td>70.8</td>
    <td>9.8</td>
    <td>4374.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2268</td>
    <td><a href="/player/1650/layla-molina/" target="_blank">Layla Molina</a></td>
    <td>60.0</td>
    <td>8.7</td>
    <td>4373.0</td>
    <td>Stamford Warriors</td>
</tr>

<tr>
    <td>2269</td>
    <td><a href="/player/2478/michael-polizotto/" target="_blank">Michael Polizotto</a></td>
    <td>62.6</td>
    <td>8.8</td>
    <td>4365.0</td>
    <td>LAW Academy</td>
</tr>

<tr>
    <td>2270</td>
    <td><a href="/player/2265/andrew-lichter/" target="_blank">Andrew Lichter</a></td>
    <td>57.6</td>
    <td>10.2</td>
    <td>4364.6</td>
    <td>FIVE STAR</td>
</tr>

<tr>
    <td>2271</td>
    <td><a href="/player/2679/kennedy-carlin/" target="_blank">Kennedy Carlin</a></td>
    <td>70.6</td>
    <td>6.3</td>
    <td>4364.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2272</td>
    <td><a href="/player/1448/brandon-danyo/" target="_blank">Brandon Danyo</a></td>
    <td>58.0</td>
    <td>9.1</td>
    <td>4361.7</td>
    <td>Pequannock</td>
</tr>

<tr>
    <td>2273</td>
    <td><a href="/player/2151/lucas-deangelis/" target="_blank">Lucas Deangelis</a></td>
    <td>67.0</td>
    <td>8.4</td>
    <td>4360.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2274</td>
    <td><a href="/player/512/dennis-gendel/" target="_blank">Dennis Gendel</a></td>
    <td>46.6</td>
    <td>8.2</td>
    <td>4359.8</td>
    <td>elite wrestling</td>
</tr>

<tr>
    <td>2275</td>
    <td><a href="/player/1663/michael-nicosia/" target="_blank">michael nicosia</a></td>
    <td>53.0</td>
    <td>8.5</td>
    <td>4357.6</td>
    <td>canadensis</td>
</tr>

<tr>
    <td>2276</td>
    <td><a href="/player/1951/jameson-marquis/" target="_blank">Jameson Marquis</a></td>
    <td>61.8</td>
    <td>6.2</td>
    <td>4355.5</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>2277</td>
    <td><a href="/player/1865/jacob-buruca/" target="_blank">Jacob Buruca</a></td>
    <td>72.8</td>
    <td>7.8</td>
    <td>4350.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2278</td>
    <td><a href="/player/3162/timmy-caswell/" target="_blank">Timmy Caswell</a></td>
    <td>59.0</td>
    <td>7.4</td>
    <td>4348.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2279</td>
    <td><a href="/player/2926/collin-young/" target="_blank">Collin Young</a></td>
    <td>57.0</td>
    <td>9.4</td>
    <td>4348.0</td>
    <td>Kodiak Attack</td>
</tr>

<tr>
    <td>2280</td>
    <td><a href="/player/1649/leah-molina/" target="_blank">Leah Molina</a></td>
    <td>57.8</td>
    <td>7.7</td>
    <td>4344.1</td>
    <td>Stamford Warriors</td>
</tr>

<tr>
    <td>2281</td>
    <td><a href="/player/1656/leonidas-clark/" target="_blank">Leonidas Clark</a></td>
    <td>62.5</td>
    <td>8.1</td>
    <td>4342.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2282</td>
    <td><a href="/player/1505/brendan-jewels/" target="_blank">Brendan Jewels</a></td>
    <td>67.4</td>
    <td>8.5</td>
    <td>4340.8</td>
    <td>Bethpage</td>
</tr>

<tr>
    <td>2283</td>
    <td><a href="/player/1019/shane-cowan/" target="_blank">SHANE COWAN</a></td>
    <td>54.0</td>
    <td>8.9</td>
    <td>4337.0</td>
    <td>SWR</td>
</tr>

<tr>
    <td>2284</td>
    <td><a href="/player/3273/oliver-thompson/" target="_blank">Oliver Thompson</a></td>
    <td>60.0</td>
    <td>8.7</td>
    <td>4334.6</td>
    <td>Elite Wrestling Academy</td>
</tr>

<tr>
    <td>2285</td>
    <td><a href="/player/2651/mannix-lum/" target="_blank">Mannix Lum</a></td>
    <td>69.4</td>
    <td>8.5</td>
    <td>4328.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2286</td>
    <td><a href="/player/3086/grady-obrien/" target="_blank">Grady O’Brien</a></td>
    <td>63.4</td>
    <td>8.4</td>
    <td>4328.3</td>
    <td>Perrysburg Biddy Wrestling Club</td>
</tr>

<tr>
    <td>2287</td>
    <td><a href="/player/3134/abraham-cichocki/" target="_blank">Abraham Cichocki</a></td>
    <td>54.3</td>
    <td>8.0</td>
    <td>4324.1</td>
    <td>DeWitt Wrestling Club</td>
</tr>

<tr>
    <td>2288</td>
    <td><a href="/player/2341/josiah-viera/" target="_blank">Josiah Viera</a></td>
    <td>67.0</td>
    <td>7.9</td>
    <td>4318.0</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>2289</td>
    <td><a href="/player/3394/andrew-draeger/" target="_blank">Andrew Draeger</a></td>
    <td>54.6</td>
    <td>8.5</td>
    <td>4317.1</td>
    <td>Perrysburg Wrestling Club</td>
</tr>

<tr>
    <td>2290</td>
    <td><a href="/player/2912/maxx-bauer/" target="_blank">Maxx Bauer</a></td>
    <td>61.0</td>
    <td>9.5</td>
    <td>4316.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2291</td>
    <td><a href="/player/488/ronin-barro/" target="_blank">Ronin Barro</a></td>
    <td>50.8</td>
    <td>8.7</td>
    <td>4312.2</td>
    <td>elite</td>
</tr>

<tr>
    <td>2292</td>
    <td><a href="/player/2692/melina-owens/" target="_blank">Melina Owens</a></td>
    <td>57.8</td>
    <td>9.6</td>
    <td>4311.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2293</td>
    <td><a href="/player/2764/ethan-vandyke/" target="_blank">Ethan VanDyke</a></td>
    <td>57.0</td>
    <td>7.4</td>
    <td>4311.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2294</td>
    <td><a href="/player/848/benjamin-strittmatter/" target="_blank">Benjamin Strittmatter</a></td>
    <td>60.0</td>
    <td>8.7</td>
    <td>4306.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2295</td>
    <td><a href="/player/1630/travis-gauvin/" target="_blank">Travis Gauvin</a></td>
    <td>58.4</td>
    <td>8.5</td>
    <td>4303.4</td>
    <td>Ascension</td>
</tr>

<tr>
    <td>2296</td>
    <td><a href="/player/2220/brody-santora/" target="_blank">Brody Santora</a></td>
    <td>54.6</td>
    <td>11.4</td>
    <td>4301.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2297</td>
    <td><a href="/player/2909/llyr-whitney/" target="_blank">Llyr Whitney</a></td>
    <td>66.0</td>
    <td>7.5</td>
    <td>4300.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2298</td>
    <td><a href="/player/721/ryan-panza/" target="_blank">Ryan Panza</a></td>
    <td>53.6</td>
    <td>7.2</td>
    <td>4294.7</td>
    <td>Shore Thing</td>
</tr>

<tr>
    <td>2299</td>
    <td><a href="/player/831/dylan-ierano/" target="_blank">Dylan Ierano</a></td>
    <td>62.2</td>
    <td>8.9</td>
    <td>4290.2</td>
    <td>Kings Park Wrestling</td>
</tr>

<tr>
    <td>2300</td>
    <td><a href="/player/1898/joseph-kaplon/" target="_blank">Joseph Kaplon</a></td>
    <td>63.6</td>
    <td>7.3</td>
    <td>4286.4</td>
    <td>Smithtown East</td>
</tr>

<tr>
    <td>2301</td>
    <td><a href="/player/901/mathew-gutersloh/" target="_blank">Mathew Gutersloh</a></td>
    <td>57.8</td>
    <td>8.0</td>
    <td>4279.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2302</td>
    <td><a href="/player/1212/alex-contardi/" target="_blank">Alex Contardi</a></td>
    <td>63.0</td>
    <td>9.2</td>
    <td>4275.3</td>
    <td>Mount Sinai</td>
</tr>

<tr>
    <td>2303</td>
    <td><a href="/player/1114/jake-eife/" target="_blank">Jake Eife</a></td>
    <td>57.0</td>
    <td>7.6</td>
    <td>4273.0</td>
    <td>Collingswood</td>
</tr>

<tr>
    <td>2304</td>
    <td><a href="/player/1177/carter-mehmedi/" target="_blank">Carter Mehmedi</a></td>
    <td>61.2</td>
    <td>6.0</td>
    <td>4270.7</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>2305</td>
    <td><a href="/player/1290/luke-huczko/" target="_blank">Luke Huczko</a></td>
    <td>64.4</td>
    <td>8.4</td>
    <td>4264.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2306</td>
    <td><a href="/player/1167/andy-poh/" target="_blank">Andy Poh</a></td>
    <td>64.0</td>
    <td>10.5</td>
    <td>4263.7</td>
    <td>Ufc</td>
</tr>

<tr>
    <td>2307</td>
    <td><a href="/player/2026/wyatt-hull/" target="_blank">Wyatt Hull</a></td>
    <td>64.0</td>
    <td>7.9</td>
    <td>4263.7</td>
    <td>Londonderry Raptors</td>
</tr>

<tr>
    <td>2308</td>
    <td><a href="/player/2438/andrew-foundos/" target="_blank">Andrew Foundos</a></td>
    <td>64.0</td>
    <td>13.1</td>
    <td>4263.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2309</td>
    <td><a href="/player/1881/ryder-lewis/" target="_blank">Ryder Lewis</a></td>
    <td>72.8</td>
    <td>7.1</td>
    <td>4263.3</td>
    <td>Triumph</td>
</tr>

<tr>
    <td>2310</td>
    <td><a href="/player/2530/keith-king/" target="_blank">Keith King</a></td>
    <td>69.2</td>
    <td>10.1</td>
    <td>4262.1</td>
    <td>Pit bull</td>
</tr>

<tr>
    <td>2311</td>
    <td><a href="/player/1244/trey-kiernan/" target="_blank">Trey Kiernan</a></td>
    <td>54.4</td>
    <td>8.0</td>
    <td>4252.4</td>
    <td>Restreppo</td>
</tr>

<tr>
    <td>2312</td>
    <td><a href="/player/3398/marc-gomez/" target="_blank">Marc Gomez</a></td>
    <td>56.8</td>
    <td>8.8</td>
    <td>4247.5</td>
    <td>Michigan's Northern Elite Pitbulls</td>
</tr>

<tr>
    <td>2313</td>
    <td><a href="/player/1326/joshua-dean/" target="_blank">Joshua Dean</a></td>
    <td>56.0</td>
    <td>6.4</td>
    <td>4245.4</td>
    <td>Bensalem</td>
</tr>

<tr>
    <td>2314</td>
    <td><a href="/player/2770/myla-good/" target="_blank">Myla Good</a></td>
    <td>72.7</td>
    <td>9.0</td>
    <td>4243.3</td>
    <td>Nazareth</td>
</tr>

<tr>
    <td>2315</td>
    <td><a href="/player/1095/daniel-sanchez/" target="_blank">Daniel Sanchez</a></td>
    <td>55.8</td>
    <td>7.7</td>
    <td>4240.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2316</td>
    <td><a href="/player/2299/ryan-sakhai/" target="_blank">Ryan Sakhai</a></td>
    <td>61.8</td>
    <td>11.0</td>
    <td>4237.6</td>
    <td>Syosset Braves Youth Program</td>
</tr>

<tr>
    <td>2317</td>
    <td><a href="/player/961/jack-krupp/" target="_blank">Jack Krupp</a></td>
    <td>61.2</td>
    <td>7.5</td>
    <td>4227.5</td>
    <td>Kings Park</td>
</tr>

<tr>
    <td>2318</td>
    <td><a href="/player/596/rhys-mcnulty/" target="_blank">Rhys McNulty</a></td>
    <td>55.4</td>
    <td>8.7</td>
    <td>4226.8</td>
    <td>dynamic</td>
</tr>

<tr>
    <td>2319</td>
    <td><a href="/player/2861/emma-mantei/" target="_blank">Emma Mantei</a></td>
    <td>58.5</td>
    <td>7.7</td>
    <td>4220.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2320</td>
    <td><a href="/player/1166/mark-davis/" target="_blank">Mark Davis</a></td>
    <td>57.8</td>
    <td>8.5</td>
    <td>4218.7</td>
    <td>Longwood</td>
</tr>

<tr>
    <td>2321</td>
    <td><a href="/player/2918/steve-gariety/" target="_blank">Steve Gariety</a></td>
    <td>54.1</td>
    <td>7.6</td>
    <td>4215.0</td>
    <td>Dundee</td>
</tr>

<tr>
    <td>2322</td>
    <td><a href="/player/1840/tiago-camisa/" target="_blank">Tiago Camisa</a></td>
    <td>58.2</td>
    <td>8.0</td>
    <td>4211.8</td>
    <td>LAW Wrestling Academy</td>
</tr>

<tr>
    <td>2323</td>
    <td><a href="/player/776/logan-durant/" target="_blank">logan durant</a></td>
    <td>71.4</td>
    <td>7.7</td>
    <td>4206.1</td>
    <td>dynamic</td>
</tr>

<tr>
    <td>2324</td>
    <td><a href="/player/2108/julian-figueiredo/" target="_blank">Julian Figueiredo</a></td>
    <td>60.0</td>
    <td>8.7</td>
    <td>4196.5</td>
    <td>Londonderry Raptors</td>
</tr>

<tr>
    <td>2325</td>
    <td><a href="/player/1920/mason-zabielski/" target="_blank">Mason Zabielski</a></td>
    <td>55.8</td>
    <td>8.3</td>
    <td>4196.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2326</td>
    <td><a href="/player/924/alex-meisenholder/" target="_blank">Alex Meisenholder</a></td>
    <td>54.0</td>
    <td>6.8</td>
    <td>4196.0</td>
    <td>Seaford</td>
</tr>

<tr>
    <td>2327</td>
    <td><a href="/player/865/kameron-krug/" target="_blank">Kameron Krug</a></td>
    <td>62.0</td>
    <td>6.4</td>
    <td>4190.4</td>
    <td>Thunderbird</td>
</tr>

<tr>
    <td>2328</td>
    <td><a href="/player/2162/megan-bettez/" target="_blank">Megan Bettez</a></td>
    <td>59.8</td>
    <td>10.0</td>
    <td>4188.9</td>
    <td>Fitchburg Youth Wrestling</td>
</tr>

<tr>
    <td>2329</td>
    <td><a href="/player/1066/connor-hanly/" target="_blank">Connor Hanly</a></td>
    <td>52.5</td>
    <td>8.5</td>
    <td>4180.8</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2330</td>
    <td><a href="/player/772/anthony-messina/" target="_blank">anthony messina</a></td>
    <td>58.6</td>
    <td>7.9</td>
    <td>4179.3</td>
    <td>dynamic</td>
</tr>

<tr>
    <td>2331</td>
    <td><a href="/player/775/isa-magomedov/" target="_blank">isa magomedov</a></td>
    <td>54.0</td>
    <td>8.4</td>
    <td>4178.8</td>
    <td>will power</td>
</tr>

<tr>
    <td>2332</td>
    <td><a href="/player/2124/zachary-meyette/" target="_blank">Zachary Meyette</a></td>
    <td>57.6</td>
    <td>8.5</td>
    <td>4178.5</td>
    <td>Newport Tigers</td>
</tr>

<tr>
    <td>2333</td>
    <td><a href="/player/3363/dakota-williams/" target="_blank">Dakota Williams</a></td>
    <td>65.1</td>
    <td>8.7</td>
    <td>4175.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2334</td>
    <td><a href="/player/2852/kellen-majcher/" target="_blank">Kellen Majcher</a></td>
    <td>57.2</td>
    <td>9.3</td>
    <td>4174.0</td>
    <td>Yale</td>
</tr>

<tr>
    <td>2335</td>
    <td><a href="/player/3323/andrew-allena/" target="_blank">Andrew Allena</a></td>
    <td>57.0</td>
    <td>8.4</td>
    <td>4173.0</td>
    <td>Yale Street</td>
</tr>

<tr>
    <td>2336</td>
    <td><a href="/player/1558/joey-cotter/" target="_blank">Joey Cotter</a></td>
    <td>51.2</td>
    <td>7.5</td>
    <td>4172.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2337</td>
    <td><a href="/player/2115/jack-perreault/" target="_blank">Jack Perreault</a></td>
    <td>56.4</td>
    <td>8.0</td>
    <td>4170.6</td>
    <td>Fitchburg Youth</td>
</tr>

<tr>
    <td>2338</td>
    <td><a href="/player/956/jake-coyle/" target="_blank">Jake Coyle</a></td>
    <td>59.6</td>
    <td>10.5</td>
    <td>4166.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2339</td>
    <td><a href="/player/2053/zach-paris/" target="_blank">Zach Paris</a></td>
    <td>54.8</td>
    <td>7.7</td>
    <td>4166.1</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>2340</td>
    <td><a href="/player/1371/austin-kemp/" target="_blank">Austin Kemp</a></td>
    <td>57.8</td>
    <td>8.6</td>
    <td>4165.5</td>
    <td>Hammonton</td>
</tr>

<tr>
    <td>2341</td>
    <td><a href="/player/2682/steven-gonzales/" target="_blank">Steven Gonzales</a></td>
    <td>55.8</td>
    <td>12.2</td>
    <td>4164.5</td>
    <td>Team Utah</td>
</tr>

<tr>
    <td>2342</td>
    <td><a href="/player/3115/cooper-krise/" target="_blank">Cooper Krise</a></td>
    <td>56.1</td>
    <td>7.8</td>
    <td>4164.2</td>
    <td>Perrysburg Wrestling Club</td>
</tr>

<tr>
    <td>2343</td>
    <td><a href="/player/2005/austin-noyes/" target="_blank">Austin Noyes</a></td>
    <td>64.0</td>
    <td>8.5</td>
    <td>4163.7</td>
    <td>Goffstown Youth Wrestling</td>
</tr>

<tr>
    <td>2344</td>
    <td><a href="/player/3170/louis-hilberer/" target="_blank">Louis Hilberer</a></td>
    <td>54.1</td>
    <td>8.3</td>
    <td>4154.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2345</td>
    <td><a href="/player/1675/xavier-ortiz/" target="_blank">Xavier Ortiz</a></td>
    <td>58.0</td>
    <td>8.7</td>
    <td>4153.3</td>
    <td>Empire Academy Wrestling</td>
</tr>

<tr>
    <td>2346</td>
    <td><a href="/player/3242/aaron-eifert/" target="_blank">Aaron Eifert</a></td>
    <td>55.0</td>
    <td>7.9</td>
    <td>4151.4</td>
    <td>Williamston</td>
</tr>

<tr>
    <td>2347</td>
    <td><a href="/player/2940/robert-orr/" target="_blank">Robert Orr</a></td>
    <td>57.0</td>
    <td>11.2</td>
    <td>4149.0</td>
    <td>Delaware Christian</td>
</tr>

<tr>
    <td>2348</td>
    <td><a href="/player/3384/tyson-franklin/" target="_blank">Tyson Franklin</a></td>
    <td>59.0</td>
    <td>8.6</td>
    <td>4148.9</td>
    <td>Midwest Predators</td>
</tr>

<tr>
    <td>2349</td>
    <td><a href="/player/2814/dillon-trevor/" target="_blank">Dillon Trevor</a></td>
    <td>57.6</td>
    <td>8.0</td>
    <td>4144.5</td>
    <td>Ruthless Aggression</td>
</tr>

<tr>
    <td>2350</td>
    <td><a href="/player/2708/chase-brown/" target="_blank">Chase Brown</a></td>
    <td>62.5</td>
    <td>7.4</td>
    <td>4142.8</td>
    <td>Aston Bandits</td>
</tr>

<tr>
    <td>2351</td>
    <td><a href="/player/607/jake-kiernan/" target="_blank">Jake Kiernan</a></td>
    <td>55.4</td>
    <td>8.4</td>
    <td>4139.3</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2352</td>
    <td><a href="/player/930/jackson-frangella/" target="_blank">Jackson Frangella</a></td>
    <td>61.4</td>
    <td>6.6</td>
    <td>4137.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2353</td>
    <td><a href="/player/3425/joshua-cathey/" target="_blank">joshua cathey</a></td>
    <td>52.3</td>
    <td>8.6</td>
    <td>4128.4</td>
    <td>Pontiac huskies</td>
</tr>

<tr>
    <td>2354</td>
    <td><a href="/player/781/davron-turgunboev/" target="_blank">Davron Turgunboev</a></td>
    <td>53.2</td>
    <td>8.5</td>
    <td>4124.6</td>
    <td>will power</td>
</tr>

<tr>
    <td>2355</td>
    <td><a href="/player/2273/thomas-andersen/" target="_blank">Thomas Andersen</a></td>
    <td>62.0</td>
    <td>10.9</td>
    <td>4123.6</td>
    <td>Mat Power</td>
</tr>

<tr>
    <td>2356</td>
    <td><a href="/player/2296/cameron-buck/" target="_blank">Cameron Buck</a></td>
    <td>61.0</td>
    <td>7.1</td>
    <td>4118.9</td>
    <td>Blue Wave</td>
</tr>

<tr>
    <td>2357</td>
    <td><a href="/player/3126/jeffery-oconnell/" target="_blank">Jeffery O’Connell</a></td>
    <td>63.0</td>
    <td>7.9</td>
    <td>4114.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2358</td>
    <td><a href="/player/1918/gavin-barraud/" target="_blank">Gavin Barraud</a></td>
    <td>68.2</td>
    <td>8.7</td>
    <td>4114.4</td>
    <td>Longwood</td>
</tr>

<tr>
    <td>2359</td>
    <td><a href="/player/2068/mckayla-callahan/" target="_blank">McKayla Callahan</a></td>
    <td>54.0</td>
    <td>9.2</td>
    <td>4114.3</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>2360</td>
    <td><a href="/player/1190/jadrian-mercado/" target="_blank">jadrian mercado</a></td>
    <td>53.0</td>
    <td>7.9</td>
    <td>4109.2</td>
    <td>copiague</td>
</tr>

<tr>
    <td>2361</td>
    <td><a href="/player/2274/colton-berju/" target="_blank">Colton Berju</a></td>
    <td>55.4</td>
    <td>8.0</td>
    <td>4101.3</td>
    <td>fivestar</td>
</tr>

<tr>
    <td>2362</td>
    <td><a href="/player/2952/aaron-prize/" target="_blank">Aaron Prize</a></td>
    <td>61.6</td>
    <td>9.5</td>
    <td>4097.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2363</td>
    <td><a href="/player/609/peyton-zirillo/" target="_blank">Peyton Zirillo</a></td>
    <td>59.2</td>
    <td>8.2</td>
    <td>4091.8</td>
    <td>Pro-ex</td>
</tr>

<tr>
    <td>2364</td>
    <td><a href="/player/1491/max-kennedy/" target="_blank">Max Kennedy</a></td>
    <td>55.0</td>
    <td>6.8</td>
    <td>4090.9</td>
    <td>VHW</td>
</tr>

<tr>
    <td>2365</td>
    <td><a href="/player/2172/luke-payne/" target="_blank">Luke Payne</a></td>
    <td>55.0</td>
    <td>7.2</td>
    <td>4090.9</td>
    <td>Goffstown Grizzlies</td>
</tr>

<tr>
    <td>2366</td>
    <td><a href="/player/597/chase-galvez/" target="_blank">Chase Galvez</a></td>
    <td>50.0</td>
    <td>8.9</td>
    <td>4087.4</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2367</td>
    <td><a href="/player/2056/nayhvian-polanco/" target="_blank">Nayhvian Polanco</a></td>
    <td>61.8</td>
    <td>7.8</td>
    <td>4086.9</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>2368</td>
    <td><a href="/player/1954/jordan-lapierre/" target="_blank">Jordan Lapierre</a></td>
    <td>62.8</td>
    <td>5.4</td>
    <td>4082.8</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>2369</td>
    <td><a href="/player/2297/santino-tino-bruningduarte/" target="_blank">Santino "Tino" Bruning/Duarte</a></td>
    <td>60.0</td>
    <td>8.6</td>
    <td>4081.6</td>
    <td>Port Washington</td>
</tr>

<tr>
    <td>2370</td>
    <td><a href="/player/1022/colin-walsh/" target="_blank">COLIN WALSH</a></td>
    <td>62.2</td>
    <td>8.8</td>
    <td>4081.0</td>
    <td>UFC NHP</td>
</tr>

<tr>
    <td>2371</td>
    <td><a href="/player/1268/paul-vasaturo/" target="_blank">Paul Vasaturo</a></td>
    <td>56.8</td>
    <td>9.6</td>
    <td>4079.0</td>
    <td>Brentwood kids wrestling</td>
</tr>

<tr>
    <td>2372</td>
    <td><a href="/player/922/caleb-maugeri/" target="_blank">Caleb Maugeri</a></td>
    <td>54.0</td>
    <td>8.9</td>
    <td>4078.8</td>
    <td>Connetquot Youth Wrestling Club</td>
</tr>

<tr>
    <td>2373</td>
    <td><a href="/player/2344/dash-santoro/" target="_blank">Dash Santoro</a></td>
    <td>61.6</td>
    <td>8.8</td>
    <td>4078.1</td>
    <td>Oak Neck Falcons</td>
</tr>

<tr>
    <td>2374</td>
    <td><a href="/player/1804/steve-mytych/" target="_blank">Steve Mytych</a></td>
    <td>48.4</td>
    <td>7.7</td>
    <td>4075.9</td>
    <td>Mat Assassins</td>
</tr>

<tr>
    <td>2375</td>
    <td><a href="/player/921/kingston-maugeri/" target="_blank">Kingston Maugeri</a></td>
    <td>53.0</td>
    <td>8.9</td>
    <td>4073.9</td>
    <td>Connetquot Youth Wrestling Club</td>
</tr>

<tr>
    <td>2376</td>
    <td><a href="/player/1697/richie-catapano/" target="_blank">Richie Catapano</a></td>
    <td>56.0</td>
    <td>8.0</td>
    <td>4073.2</td>
    <td>Wantagh</td>
</tr>

<tr>
    <td>2377</td>
    <td><a href="/player/509/logan-worth/" target="_blank">Logan Worth</a></td>
    <td>51.4</td>
    <td>9.3</td>
    <td>4072.8</td>
    <td>Revolution</td>
</tr>

<tr>
    <td>2378</td>
    <td><a href="/player/3372/grady-loureiro/" target="_blank">Grady Loureiro</a></td>
    <td>55.7</td>
    <td>10.4</td>
    <td>4070.3</td>
    <td>West Scranton</td>
</tr>

<tr>
    <td>2379</td>
    <td><a href="/player/1960/jack-berini/" target="_blank">Jack Berini</a></td>
    <td>67.4</td>
    <td>7.5</td>
    <td>4069.7</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>2380</td>
    <td><a href="/player/1232/anthony-aiello/" target="_blank">Anthony Aiello</a></td>
    <td>56.4</td>
    <td>9.4</td>
    <td>4069.0</td>
    <td>Mt Sinai mustangs</td>
</tr>

<tr>
    <td>2381</td>
    <td><a href="/player/1348/charlie-atkinson/" target="_blank">Charlie Atkinson</a></td>
    <td>53.2</td>
    <td>9.2</td>
    <td>4060.9</td>
    <td>Danbury</td>
</tr>

<tr>
    <td>2382</td>
    <td><a href="/player/864/gene-contino/" target="_blank">Gene Contino</a></td>
    <td>66.2</td>
    <td>11.0</td>
    <td>4054.4</td>
    <td>Kings Park</td>
</tr>

<tr>
    <td>2383</td>
    <td><a href="/player/2311/cameron-horeis/" target="_blank">Cameron Horeis</a></td>
    <td>69.4</td>
    <td>8.1</td>
    <td>4047.3</td>
    <td>Pro Ex</td>
</tr>

<tr>
    <td>2384</td>
    <td><a href="/player/527/bronx-olivo/" target="_blank">Bronx Olivo</a></td>
    <td>57.4</td>
    <td>7.9</td>
    <td>4042.9</td>
    <td>Iron Horse</td>
</tr>

<tr>
    <td>2385</td>
    <td><a href="/player/1128/aidan-mathers/" target="_blank">Aidan Mathers</a></td>
    <td>55.4</td>
    <td>7.2</td>
    <td>4042.3</td>
    <td>East Islip</td>
</tr>

<tr>
    <td>2386</td>
    <td><a href="/player/481/luca-visalli/" target="_blank">Luca Visalli</a></td>
    <td>55.2</td>
    <td>6.1</td>
    <td>4036.6</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2387</td>
    <td><a href="/player/1778/johnny-kivler/" target="_blank">Johnny Kivler</a></td>
    <td>64.0</td>
    <td>8.4</td>
    <td>4032.7</td>
    <td>Altered Beast</td>
</tr>

<tr>
    <td>2388</td>
    <td><a href="/player/2016/cameron-castonguay/" target="_blank">Cameron Castonguay</a></td>
    <td>57.8</td>
    <td>9.0</td>
    <td>4026.4</td>
    <td>Litchfield</td>
</tr>

<tr>
    <td>2389</td>
    <td><a href="/player/1506/greg-bellisari/" target="_blank">Greg Bellisari</a></td>
    <td>57.0</td>
    <td>8.6</td>
    <td>4021.5</td>
    <td>Farmingdale</td>
</tr>

<tr>
    <td>2390</td>
    <td><a href="/player/3194/ray-catapano/" target="_blank">Ray Catapano</a></td>
    <td>61.0</td>
    <td>7.1</td>
    <td>4018.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2391</td>
    <td><a href="/player/3203/tyler-gieger/" target="_blank">Tyler Gieger</a></td>
    <td>61.0</td>
    <td>7.8</td>
    <td>4018.9</td>
    <td>Cordoba Trained</td>
</tr>

<tr>
    <td>2392</td>
    <td><a href="/player/2447/michael-mcmahon/" target="_blank">Michael Mcmahon</a></td>
    <td>57.5</td>
    <td>7.9</td>
    <td>4015.8</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2393</td>
    <td><a href="/player/1819/jamison-hempstead/" target="_blank">Jamison Hempstead</a></td>
    <td>54.2</td>
    <td>8.0</td>
    <td>4012.2</td>
    <td>Pocono Mountain east</td>
</tr>

<tr>
    <td>2394</td>
    <td><a href="/player/2315/tatiahna-thomas/" target="_blank">Tatiahna Thomas</a></td>
    <td>65.0</td>
    <td>9.1</td>
    <td>4009.0</td>
    <td></td>
</tr>

<tr>
    <td>2395</td>
    <td><a href="/player/2050/brooke-murray/" target="_blank">Brooke Murray</a></td>
    <td>56.2</td>
    <td>8.6</td>
    <td>4003.1</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>2396</td>
    <td><a href="/player/1359/shane-matthew/" target="_blank">Shane Matthew</a></td>
    <td>48.0</td>
    <td>8.1</td>
    <td>4000.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2397</td>
    <td><a href="/player/1157/david-koch/" target="_blank">David Koch</a></td>
    <td>54.0</td>
    <td>6.8</td>
    <td>3997.3</td>
    <td>East Islip</td>
</tr>

<tr>
    <td>2398</td>
    <td><a href="/player/2993/andrew-bundro/" target="_blank">Andrew Bundro</a></td>
    <td>54.0</td>
    <td>7.8</td>
    <td>3997.3</td>
    <td>Easton</td>
</tr>

<tr>
    <td>2399</td>
    <td><a href="/player/2994/aaryn-bundro/" target="_blank">Aaryn Bundro</a></td>
    <td>54.0</td>
    <td>7.8</td>
    <td>3997.3</td>
    <td>Easton</td>
</tr>

<tr>
    <td>2400</td>
    <td><a href="/player/2840/stephen-arnold/" target="_blank">Stephen Arnold</a></td>
    <td>57.7</td>
    <td>6.8</td>
    <td>3996.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2401</td>
    <td><a href="/player/2179/cameron-willett/" target="_blank">Cameron Willett</a></td>
    <td>55.8</td>
    <td>8.4</td>
    <td>3993.6</td>
    <td>Woburn</td>
</tr>

<tr>
    <td>2402</td>
    <td><a href="/player/830/owen-lynch/" target="_blank">owen Lynch</a></td>
    <td>65.4</td>
    <td>8.5</td>
    <td>3988.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2403</td>
    <td><a href="/player/2762/keira-cunningham/" target="_blank">Keira Cunningham</a></td>
    <td>62.4</td>
    <td>7.6</td>
    <td>3982.5</td>
    <td>Upper Township</td>
</tr>

<tr>
    <td>2404</td>
    <td><a href="/player/3200/manuel-aguilar/" target="_blank">MANUEL AGUILAR</a></td>
    <td>56.6</td>
    <td>7.6</td>
    <td>3980.4</td>
    <td>KODIACK ATTACK</td>
</tr>

<tr>
    <td>2405</td>
    <td><a href="/player/1489/dean-silvio/" target="_blank">Dean Silvio</a></td>
    <td>64.4</td>
    <td>9.6</td>
    <td>3973.4</td>
    <td>Law</td>
</tr>

<tr>
    <td>2406</td>
    <td><a href="/player/1919/ryan-zabielski/" target="_blank">Ryan Zabielski</a></td>
    <td>56.4</td>
    <td>9.8</td>
    <td>3972.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2407</td>
    <td><a href="/player/1038/paul-cozzi/" target="_blank">Paul Cozzi</a></td>
    <td>53.8</td>
    <td>7.0</td>
    <td>3971.3</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2408</td>
    <td><a href="/player/1090/malik-mirzoev/" target="_blank">Malik Mirzoev</a></td>
    <td>57.0</td>
    <td>6.9</td>
    <td>3966.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2409</td>
    <td><a href="/player/2942/gavin-robinette/" target="_blank">Gavin Robinette</a></td>
    <td>54.6</td>
    <td>8.1</td>
    <td>3960.9</td>
    <td>Kodiak Attack</td>
</tr>

<tr>
    <td>2410</td>
    <td><a href="/player/2717/brayton-murtaugh/" target="_blank">Brayton Murtaugh</a></td>
    <td>54.0</td>
    <td>7.4</td>
    <td>3958.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2411</td>
    <td><a href="/player/2325/emilio-ullah/" target="_blank">Emilio Ullah</a></td>
    <td>69.0</td>
    <td>6.8</td>
    <td>3957.9</td>
    <td>East Islip Kid Wrestling</td>
</tr>

<tr>
    <td>2412</td>
    <td><a href="/player/1957/avery-fox/" target="_blank">Avery Fox</a></td>
    <td>70.0</td>
    <td>5.5</td>
    <td>3954.8</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>2413</td>
    <td><a href="/player/1035/todd-christman/" target="_blank">Todd Christman</a></td>
    <td>62.0</td>
    <td>5.7</td>
    <td>3954.5</td>
    <td>SWR Wildcats</td>
</tr>

<tr>
    <td>2414</td>
    <td><a href="/player/2318/tyler-smith/" target="_blank">Tyler Smith</a></td>
    <td>70.0</td>
    <td>8.1</td>
    <td>3947.7</td>
    <td>BBP Phantoms</td>
</tr>

<tr>
    <td>2415</td>
    <td><a href="/player/2155/mason-roberts/" target="_blank">Mason Roberts</a></td>
    <td>50.2</td>
    <td>6.8</td>
    <td>3946.0</td>
    <td>Goffstown</td>
</tr>

<tr>
    <td>2416</td>
    <td><a href="/player/1099/bakai-akymbekov/" target="_blank">Bakai Akymbekov</a></td>
    <td>60.6</td>
    <td>6.7</td>
    <td>3942.1</td>
    <td>KG</td>
</tr>

<tr>
    <td>2417</td>
    <td><a href="/player/1162/justin-kern/" target="_blank">Justin Kern</a></td>
    <td>64.4</td>
    <td>11.7</td>
    <td>3937.2</td>
    <td>North Babylon</td>
</tr>

<tr>
    <td>2418</td>
    <td><a href="/player/1356/donovan-gomez/" target="_blank">Donovan Gomez</a></td>
    <td>60.0</td>
    <td>7.5</td>
    <td>3934.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2419</td>
    <td><a href="/player/1510/matthew-furia/" target="_blank">Matthew Furia</a></td>
    <td>60.0</td>
    <td>7.9</td>
    <td>3934.6</td>
    <td>Top Flight Wrestling Academy</td>
</tr>

<tr>
    <td>2420</td>
    <td><a href="/player/1947/caleb-warick/" target="_blank">Caleb Warick</a></td>
    <td>60.0</td>
    <td>6.0</td>
    <td>3934.6</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>2421</td>
    <td><a href="/player/1949/lukas-spindler/" target="_blank">Lukas Spindler</a></td>
    <td>60.0</td>
    <td>8.4</td>
    <td>3934.6</td>
    <td>Jr Astros/Raptors</td>
</tr>

<tr>
    <td>2422</td>
    <td><a href="/player/3268/paxton-vamvas/" target="_blank">Paxton Vamvas</a></td>
    <td>60.0</td>
    <td>5.4</td>
    <td>3934.6</td>
    <td>Capac Warriors</td>
</tr>

<tr>
    <td>2423</td>
    <td><a href="/player/2208/william-tiberio/" target="_blank">William Tiberio</a></td>
    <td>58.6</td>
    <td>8.3</td>
    <td>3927.7</td>
    <td>Locust Valley Falcons</td>
</tr>

<tr>
    <td>2424</td>
    <td><a href="/player/2753/rowan-zehmisch/" target="_blank">Rowan Zehmisch</a></td>
    <td>58.6</td>
    <td>10.2</td>
    <td>3925.1</td>
    <td>Butler Golden Tornado</td>
</tr>

<tr>
    <td>2425</td>
    <td><a href="/player/482/darren-chandarjit/" target="_blank">Darren chandarjit</a></td>
    <td>59.6</td>
    <td>9.3</td>
    <td>3920.2</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2426</td>
    <td><a href="/player/1257/wyatt-king/" target="_blank">Wyatt King</a></td>
    <td>59.8</td>
    <td>7.9</td>
    <td>3917.6</td>
    <td>Red lion</td>
</tr>

<tr>
    <td>2427</td>
    <td><a href="/player/974/daniel-gomez/" target="_blank">Daniel Gomez</a></td>
    <td>61.4</td>
    <td>9.5</td>
    <td>3915.2</td>
    <td>Kings Park</td>
</tr>

<tr>
    <td>2428</td>
    <td><a href="/player/525/vincenzo-maltese/" target="_blank">Vincenzo Maltese</a></td>
    <td>54.8</td>
    <td>6.2</td>
    <td>3912.6</td>
    <td>Elite Wrestling</td>
</tr>

<tr>
    <td>2429</td>
    <td><a href="/player/539/sebastian-caponegro/" target="_blank">Sebastian Caponegro</a></td>
    <td>52.8</td>
    <td>9.3</td>
    <td>3912.5</td>
    <td>CJA</td>
</tr>

<tr>
    <td>2430</td>
    <td><a href="/player/853/daniel-magnani/" target="_blank">Daniel Magnani</a></td>
    <td>41.2</td>
    <td>6.8</td>
    <td>3911.1</td>
    <td>Kings Park Wrestling Club</td>
</tr>

<tr>
    <td>2431</td>
    <td><a href="/player/3267/gage-kirby/" target="_blank">Gage Kirby</a></td>
    <td>59.6</td>
    <td>9.6</td>
    <td>3910.0</td>
    <td>Downriver Wrestling Club</td>
</tr>

<tr>
    <td>2432</td>
    <td><a href="/player/3089/brayden-kuhlman/" target="_blank">Brayden Kuhlman</a></td>
    <td>50.0</td>
    <td>8.8</td>
    <td>3904.9</td>
    <td>Edison Chargers</td>
</tr>

<tr>
    <td>2433</td>
    <td><a href="/player/1946/trenton-trudell/" target="_blank">Trenton Trudell</a></td>
    <td>62.8</td>
    <td>7.7</td>
    <td>3901.1</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>2434</td>
    <td><a href="/player/851/thomas-sigismondi/" target="_blank">Thomas Sigismondi</a></td>
    <td>59.6</td>
    <td>7.0</td>
    <td>3900.5</td>
    <td>Hhh thunderbirds</td>
</tr>

<tr>
    <td>2435</td>
    <td><a href="/player/2355/serjio-flores-aponte/" target="_blank">Serjio Flores-Aponte</a></td>
    <td>56.0</td>
    <td>10.1</td>
    <td>3896.3</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>2436</td>
    <td><a href="/player/1857/lorenzo-bruno/" target="_blank">Lorenzo Bruno</a></td>
    <td>64.4</td>
    <td>8.6</td>
    <td>3891.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2437</td>
    <td><a href="/player/3280/sawyer-gaetz/" target="_blank">Sawyer Gaetz</a></td>
    <td>54.3</td>
    <td>8.7</td>
    <td>3890.5</td>
    <td>Michigan MatCats</td>
</tr>

<tr>
    <td>2438</td>
    <td><a href="/player/2209/matthew-simonton/" target="_blank">Matthew Simonton</a></td>
    <td>57.8</td>
    <td>8.7</td>
    <td>3890.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2439</td>
    <td><a href="/player/2895/kaiden-galindez/" target="_blank">Kaiden Galindez</a></td>
    <td>45.3</td>
    <td>6.3</td>
    <td>3877.2</td>
    <td>Dundee</td>
</tr>

<tr>
    <td>2440</td>
    <td><a href="/player/2439/joshua-umanzor/" target="_blank">Joshua Umanzor</a></td>
    <td>56.2</td>
    <td>8.0</td>
    <td>3871.8</td>
    <td>dynamic / Smithtown East</td>
</tr>

<tr>
    <td>2441</td>
    <td><a href="/player/874/dylan-herbert/" target="_blank">Dylan Herbert</a></td>
    <td>51.4</td>
    <td>9.1</td>
    <td>3869.6</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2442</td>
    <td><a href="/player/3154/logan-lakhlani/" target="_blank">Logan Lakhlani</a></td>
    <td>49.8</td>
    <td>7.1</td>
    <td>3869.5</td>
    <td>JPW</td>
</tr>

<tr>
    <td>2443</td>
    <td><a href="/player/1391/nathaniel-gall/" target="_blank">Nathaniel Gall</a></td>
    <td>51.4</td>
    <td>8.6</td>
    <td>3868.3</td>
    <td>Hammonton</td>
</tr>

<tr>
    <td>2444</td>
    <td><a href="/player/2225/brennan-dembinski/" target="_blank">Brennan Dembinski</a></td>
    <td>59.2</td>
    <td>8.6</td>
    <td>3868.2</td>
    <td>Bayport-Blue Point</td>
</tr>

<tr>
    <td>2445</td>
    <td><a href="/player/3423/jaxson-cathey/" target="_blank">jaxson cathey</a></td>
    <td>54.5</td>
    <td>8.6</td>
    <td>3865.9</td>
    <td>Pontiac huskies</td>
</tr>

<tr>
    <td>2446</td>
    <td><a href="/player/1533/frederick-grover/" target="_blank">Frederick Grover</a></td>
    <td>52.8</td>
    <td>8.5</td>
    <td>3865.3</td>
    <td></td>
</tr>

<tr>
    <td>2447</td>
    <td><a href="/player/1853/giancarlo-villatoro/" target="_blank">Giancarlo Villatoro</a></td>
    <td>59.8</td>
    <td>9.5</td>
    <td>3862.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2448</td>
    <td><a href="/player/3000/kayson-brink/" target="_blank">Kayson Brink</a></td>
    <td>55.0</td>
    <td>7.0</td>
    <td>3862.3</td>
    <td>Mid Michigan vandals</td>
</tr>

<tr>
    <td>2449</td>
    <td><a href="/player/1383/jack-beech/" target="_blank">Jack Beech</a></td>
    <td>55.0</td>
    <td>7.8</td>
    <td>3856.0</td>
    <td>Hammonton</td>
</tr>

<tr>
    <td>2450</td>
    <td><a href="/player/1018/dominic-menniti/" target="_blank">Dominic Menniti</a></td>
    <td>57.2</td>
    <td>8.4</td>
    <td>3855.0</td>
    <td>Lindenhurst</td>
</tr>

<tr>
    <td>2451</td>
    <td><a href="/player/2054/brandan-pelletier/" target="_blank">Brandan Pelletier</a></td>
    <td>60.0</td>
    <td>9.0</td>
    <td>3854.7</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>2452</td>
    <td><a href="/player/1754/august-hart/" target="_blank">August Hart</a></td>
    <td>59.4</td>
    <td>6.7</td>
    <td>3850.2</td>
    <td>Pro-Ex</td>
</tr>

<tr>
    <td>2453</td>
    <td><a href="/player/3158/vander-zimmerman/" target="_blank">Vander Zimmerman</a></td>
    <td>48.5</td>
    <td>8.9</td>
    <td>3849.6</td>
    <td>Ocean</td>
</tr>

<tr>
    <td>2454</td>
    <td><a href="/player/1955/evan-lashomb/" target="_blank">Evan Lashomb</a></td>
    <td>59.0</td>
    <td>4.5</td>
    <td>3848.9</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>2455</td>
    <td><a href="/player/2041/jackson-evans/" target="_blank">Jackson Evans</a></td>
    <td>56.6</td>
    <td>8.5</td>
    <td>3848.4</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>2456</td>
    <td><a href="/player/1401/john-hunter/" target="_blank">John Hunter</a></td>
    <td>49.6</td>
    <td>8.5</td>
    <td>3846.3</td>
    <td>Central Bucks</td>
</tr>

<tr>
    <td>2457</td>
    <td><a href="/player/2661/jack-lauer/" target="_blank">Jack Lauer</a></td>
    <td>53.4</td>
    <td>7.7</td>
    <td>3842.9</td>
    <td>Upper Township</td>
</tr>

<tr>
    <td>2458</td>
    <td><a href="/player/1935/jackson-bunting/" target="_blank">Jackson Bunting</a></td>
    <td>59.0</td>
    <td>9.8</td>
    <td>3842.7</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>2459</td>
    <td><a href="/player/2219/eddie-reilly/" target="_blank">Eddie Reilly</a></td>
    <td>56.0</td>
    <td>9.3</td>
    <td>3841.5</td>
    <td>mount sinai</td>
</tr>

<tr>
    <td>2460</td>
    <td><a href="/player/2268/hunter-arredondo/" target="_blank">Hunter Arredondo</a></td>
    <td>52.8</td>
    <td>7.7</td>
    <td>3841.0</td>
    <td>School of Grappling</td>
</tr>

<tr>
    <td>2461</td>
    <td><a href="/player/2739/cole-kokinda/" target="_blank">Cole Kokinda</a></td>
    <td>56.1</td>
    <td>8.8</td>
    <td>3839.1</td>
    <td>Altered Beast</td>
</tr>

<tr>
    <td>2462</td>
    <td><a href="/player/1879/lorenzo-leibowitz/" target="_blank">Lorenzo Leibowitz</a></td>
    <td>61.4</td>
    <td>6.3</td>
    <td>3828.0</td>
    <td>Blue Wave</td>
</tr>

<tr>
    <td>2463</td>
    <td><a href="/player/1347/jack-rhodes/" target="_blank">Jack Rhodes</a></td>
    <td>49.8</td>
    <td>7.7</td>
    <td>3826.0</td>
    <td>Ridgefield Youth Wrestling</td>
</tr>

<tr>
    <td>2464</td>
    <td><a href="/player/1224/matteo-kufner/" target="_blank">Matteo Kufner</a></td>
    <td>51.1</td>
    <td>7.5</td>
    <td>3819.7</td>
    <td>Massapequa</td>
</tr>

<tr>
    <td>2465</td>
    <td><a href="/player/3061/ryder-kanaskie/" target="_blank">Ryder Kanaskie</a></td>
    <td>49.9</td>
    <td>8.1</td>
    <td>3819.1</td>
    <td>M2TC</td>
</tr>

<tr>
    <td>2466</td>
    <td><a href="/player/971/anthony-stazzone/" target="_blank">Anthony Stazzone</a></td>
    <td>47.0</td>
    <td>7.3</td>
    <td>3814.2</td>
    <td>Kings Park</td>
</tr>

<tr>
    <td>2467</td>
    <td><a href="/player/1892/nico-ciaravino/" target="_blank">Nico Ciaravino</a></td>
    <td>54.0</td>
    <td>8.4</td>
    <td>3813.4</td>
    <td>Smithtown East</td>
</tr>

<tr>
    <td>2468</td>
    <td><a href="/player/862/stefano-riservato/" target="_blank">Stéfano Riservato</a></td>
    <td>52.0</td>
    <td>4.4</td>
    <td>3804.9</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2469</td>
    <td><a href="/player/940/patrick-sullivan/" target="_blank">Patrick Sullivan</a></td>
    <td>52.0</td>
    <td>6.7</td>
    <td>3804.9</td>
    <td>Burlington</td>
</tr>

<tr>
    <td>2470</td>
    <td><a href="/player/1113/ethan-hale/" target="_blank">Ethan Hale</a></td>
    <td>52.0</td>
    <td>8.4</td>
    <td>3804.9</td>
    <td>Collingswood</td>
</tr>

<tr>
    <td>2471</td>
    <td><a href="/player/3341/jagger-mullens/" target="_blank">Jagger Mullens</a></td>
    <td>57.0</td>
    <td>8.6</td>
    <td>3804.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2472</td>
    <td><a href="/player/3317/jaylen-shangle/" target="_blank">Jaylen Shangle</a></td>
    <td>63.1</td>
    <td>8.3</td>
    <td>3799.8</td>
    <td>Mid Michigan Vandals</td>
</tr>

<tr>
    <td>2473</td>
    <td><a href="/player/2689/alfredo-vargas/" target="_blank">Alfredo Vargas</a></td>
    <td>51.8</td>
    <td>9.0</td>
    <td>3785.2</td>
    <td>Slyfox</td>
</tr>

<tr>
    <td>2474</td>
    <td><a href="/player/2888/cidney-schaffer/" target="_blank">Cidney Schaffer</a></td>
    <td>63.5</td>
    <td>10.4</td>
    <td>3783.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2475</td>
    <td><a href="/player/2744/gus-engelman/" target="_blank">Gus Engelman</a></td>
    <td>61.0</td>
    <td>6.7</td>
    <td>3783.5</td>
    <td>Altered Beast</td>
</tr>

<tr>
    <td>2476</td>
    <td><a href="/player/3283/russell-lion-babak/" target="_blank">Russell-lion Babak</a></td>
    <td>63.0</td>
    <td>9.3</td>
    <td>3783.4</td>
    <td>elite wrestling academy</td>
</tr>

<tr>
    <td>2477</td>
    <td><a href="/player/2213/britton-tulinski/" target="_blank">Britton Tulinski</a></td>
    <td>68.0</td>
    <td>9.7</td>
    <td>3781.9</td>
    <td>Mount Sinai</td>
</tr>

<tr>
    <td>2478</td>
    <td><a href="/player/1092/nicholas-pierro/" target="_blank">Nicholas Pierro</a></td>
    <td>52.4</td>
    <td>6.7</td>
    <td>3780.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2479</td>
    <td><a href="/player/2302/bella-nilsen/" target="_blank">Bella Nilsen</a></td>
    <td>67.8</td>
    <td>8.7</td>
    <td>3775.3</td>
    <td>Five Star</td>
</tr>

<tr>
    <td>2480</td>
    <td><a href="/player/523/reid-miles/" target="_blank">Reid Miles</a></td>
    <td>51.8</td>
    <td>6.8</td>
    <td>3774.5</td>
    <td>Team United</td>
</tr>

<tr>
    <td>2481</td>
    <td><a href="/player/2148/caleb-paquin/" target="_blank">Caleb Paquin</a></td>
    <td>60.0</td>
    <td>8.4</td>
    <td>3773.6</td>
    <td>Boys and girls club Nashua</td>
</tr>

<tr>
    <td>2482</td>
    <td><a href="/player/1000/jack-halleran/" target="_blank">Jack HALLERAN</a></td>
    <td>48.6</td>
    <td>8.0</td>
    <td>3772.0</td>
    <td>North Babylon</td>
</tr>

<tr>
    <td>2483</td>
    <td><a href="/player/2805/brynn-cunningham/" target="_blank">Brynn Cunningham</a></td>
    <td>57.8</td>
    <td>9.4</td>
    <td>3769.6</td>
    <td>Upper Township</td>
</tr>

<tr>
    <td>2484</td>
    <td><a href="/player/2202/graham-wachter/" target="_blank">Graham Wachter</a></td>
    <td>48.8</td>
    <td>7.5</td>
    <td>3769.4</td>
    <td>Locust Valley Falcons</td>
</tr>

<tr>
    <td>2485</td>
    <td><a href="/player/1117/abdurakhmonjon-zaipullaev/" target="_blank">Abdurakhmonjon Zaipullaev</a></td>
    <td>51.6</td>
    <td>6.6</td>
    <td>3765.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2486</td>
    <td><a href="/player/795/dylan-imbriani/" target="_blank">dylan imbriani</a></td>
    <td>49.2</td>
    <td>7.9</td>
    <td>3763.0</td>
    <td>dynamic</td>
</tr>

<tr>
    <td>2487</td>
    <td><a href="/player/723/justin-gudewitz/" target="_blank">Justin Gudewitz</a></td>
    <td>53.0</td>
    <td>7.6</td>
    <td>3758.1</td>
    <td>Elite</td>
</tr>

<tr>
    <td>2488</td>
    <td><a href="/player/3037/vance-mays/" target="_blank">Vance Mays</a></td>
    <td>49.9</td>
    <td>8.2</td>
    <td>3751.0</td>
    <td>Mid Michigan Vandals</td>
</tr>

<tr>
    <td>2489</td>
    <td><a href="/player/3244/jacob-haslett/" target="_blank">Jacob haslett</a></td>
    <td>62.0</td>
    <td>9.2</td>
    <td>3750.3</td>
    <td>Donahoe</td>
</tr>

<tr>
    <td>2490</td>
    <td><a href="/player/1021/kevin-collins/" target="_blank">kevin collins</a></td>
    <td>53.8</td>
    <td>9.4</td>
    <td>3748.0</td>
    <td>Mattituck</td>
</tr>

<tr>
    <td>2491</td>
    <td><a href="/player/898/peter-beyrouty/" target="_blank">Peter Beyrouty</a></td>
    <td>56.8</td>
    <td>6.2</td>
    <td>3746.9</td>
    <td>Bethpage PAL</td>
</tr>

<tr>
    <td>2492</td>
    <td><a href="/player/1409/kailee-montanaro/" target="_blank">Kailee Montanaro</a></td>
    <td>60.2</td>
    <td>11.4</td>
    <td>3743.0</td>
    <td>WARRIOR WRESTLING ACADEMY</td>
</tr>

<tr>
    <td>2493</td>
    <td><a href="/player/977/dominic-kowalski/" target="_blank">Dominic Kowalski</a></td>
    <td>53.0</td>
    <td>10.6</td>
    <td>3732.2</td>
    <td>Pat Med</td>
</tr>

<tr>
    <td>2494</td>
    <td><a href="/player/3122/liam-kirsch/" target="_blank">Liam Kirsch</a></td>
    <td>54.1</td>
    <td>7.0</td>
    <td>3728.1</td>
    <td>GLWC</td>
</tr>

<tr>
    <td>2495</td>
    <td><a href="/player/2073/connor-boulay/" target="_blank">Connor Boulay</a></td>
    <td>48.6</td>
    <td>7.8</td>
    <td>3716.7</td>
    <td>Goffstown youth wrestling club</td>
</tr>

<tr>
    <td>2496</td>
    <td><a href="/player/1036/owen-buonaiuto/" target="_blank">Owen Buonaiuto</a></td>
    <td>57.0</td>
    <td>8.2</td>
    <td>3716.0</td>
    <td>Mattituck Wrestling</td>
</tr>

<tr>
    <td>2497</td>
    <td><a href="/player/866/jacob-giorgio/" target="_blank">Jacob Giorgio</a></td>
    <td>58.4</td>
    <td>7.1</td>
    <td>3715.5</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2498</td>
    <td><a href="/player/724/jake-wehner/" target="_blank">Jake Wehner</a></td>
    <td>46.2</td>
    <td>6.8</td>
    <td>3710.0</td>
    <td>Elite Wrestling NJ</td>
</tr>

<tr>
    <td>2499</td>
    <td><a href="/player/2686/landon-caro/" target="_blank">Landon Caro</a></td>
    <td>51.0</td>
    <td>8.1</td>
    <td>3706.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2500</td>
    <td><a href="/player/1111/jamen-haliburton/" target="_blank">Jamen Haliburton</a></td>
    <td>51.0</td>
    <td>8.4</td>
    <td>3705.9</td>
    <td>Middletown Wrestling Club</td>
</tr>

<tr>
    <td>2501</td>
    <td><a href="/player/2680/brody-bascherini/" target="_blank">Brody Bascherini</a></td>
    <td>62.0</td>
    <td>5.4</td>
    <td>3701.8</td>
    <td>Need wave</td>
</tr>

<tr>
    <td>2502</td>
    <td><a href="/player/1738/lj-bachmann/" target="_blank">LJ Bachmann</a></td>
    <td>50.2</td>
    <td>6.1</td>
    <td>3700.4</td>
    <td>Broad Axe</td>
</tr>

<tr>
    <td>2503</td>
    <td><a href="/player/2731/will-mckeown/" target="_blank">Will McKeown</a></td>
    <td>51.9</td>
    <td>7.9</td>
    <td>3698.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2504</td>
    <td><a href="/player/1288/stefan-bacchus/" target="_blank">Stefan Bacchus</a></td>
    <td>54.8</td>
    <td>9.1</td>
    <td>3696.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2505</td>
    <td><a href="/player/2510/luke-lehman/" target="_blank">Luke Lehman</a></td>
    <td>59.2</td>
    <td>8.5</td>
    <td>3690.6</td>
    <td>New Canaan, CT</td>
</tr>

<tr>
    <td>2506</td>
    <td><a href="/player/1953/austin-prescott/" target="_blank">Austin Prescott</a></td>
    <td>61.2</td>
    <td>7.7</td>
    <td>3689.0</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>2507</td>
    <td><a href="/player/2011/chase-pajak/" target="_blank">Chase Pajak</a></td>
    <td>59.2</td>
    <td>7.1</td>
    <td>3682.1</td>
    <td>Litchfield</td>
</tr>

<tr>
    <td>2508</td>
    <td><a href="/player/3020/henry-dinius/" target="_blank">Henry Dinius</a></td>
    <td>48.1</td>
    <td>6.9</td>
    <td>3679.0</td>
    <td>Dexter</td>
</tr>

<tr>
    <td>2509</td>
    <td><a href="/player/1214/austin-diamond/" target="_blank">Austin Diamond</a></td>
    <td>57.2</td>
    <td>7.6</td>
    <td>3675.6</td>
    <td>Mount sinai</td>
</tr>

<tr>
    <td>2510</td>
    <td><a href="/player/2105/jordan-perez/" target="_blank">Jordan Perez</a></td>
    <td>53.8</td>
    <td>6.9</td>
    <td>3671.6</td>
    <td>Nashua boys and girls cljb</td>
</tr>

<tr>
    <td>2511</td>
    <td><a href="/player/1889/joseph-almela/" target="_blank">Joseph Almela</a></td>
    <td>57.4</td>
    <td>9.7</td>
    <td>3661.6</td>
    <td>Venmon</td>
</tr>

<tr>
    <td>2512</td>
    <td><a href="/player/2211/jaxon-weybrecht/" target="_blank">Jaxon Weybrecht</a></td>
    <td>54.0</td>
    <td>8.0</td>
    <td>3661.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2513</td>
    <td><a href="/player/2248/jake-lombardo/" target="_blank">Jake Lombardo</a></td>
    <td>49.2</td>
    <td>8.2</td>
    <td>3660.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2514</td>
    <td><a href="/player/863/antonio-costantini/" target="_blank">Antonio Costantini</a></td>
    <td>52.0</td>
    <td>7.0</td>
    <td>3659.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2515</td>
    <td><a href="/player/1133/michael-coppinger/" target="_blank">Michael Coppinger</a></td>
    <td>62.0</td>
    <td>8.0</td>
    <td>3657.7</td>
    <td>East Islip</td>
</tr>

<tr>
    <td>2516</td>
    <td><a href="/player/2954/braden-dykhouse/" target="_blank">Braden Dykhouse</a></td>
    <td>52.8</td>
    <td>7.8</td>
    <td>3652.4</td>
    <td>Lowell WC</td>
</tr>

<tr>
    <td>2517</td>
    <td><a href="/player/1917/odin-jean-claude/" target="_blank">Odin Jean-Claude</a></td>
    <td>62.4</td>
    <td>8.8</td>
    <td>3647.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2518</td>
    <td><a href="/player/1742/andrew-caliente/" target="_blank">Andrew Caliente</a></td>
    <td>54.8</td>
    <td>8.3</td>
    <td>3643.8</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2519</td>
    <td><a href="/player/519/santino-edgar/" target="_blank">Santino Edgar</a></td>
    <td>48.8</td>
    <td>8.4</td>
    <td>3643.4</td>
    <td>elite wrestling</td>
</tr>

<tr>
    <td>2520</td>
    <td><a href="/player/2226/dimitri-rivera/" target="_blank">Dimitri Rivera</a></td>
    <td>56.4</td>
    <td>9.4</td>
    <td>3643.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2521</td>
    <td><a href="/player/478/dominick-visalli/" target="_blank">Dominick Visalli</a></td>
    <td>56.2</td>
    <td>7.6</td>
    <td>3633.3</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2522</td>
    <td><a href="/player/2997/owen-clay/" target="_blank">Owen Clay</a></td>
    <td>52.5</td>
    <td>8.4</td>
    <td>3626.7</td>
    <td>Anchor Bay Wrestling Club</td>
</tr>

<tr>
    <td>2523</td>
    <td><a href="/player/2853/jackson-dodson/" target="_blank">Jackson Dodson</a></td>
    <td>56.7</td>
    <td>9.0</td>
    <td>3626.1</td>
    <td>Huron wc</td>
</tr>

<tr>
    <td>2524</td>
    <td><a href="/player/1119/dominic-callahan/" target="_blank">Dominic Callahan</a></td>
    <td>47.2</td>
    <td>8.8</td>
    <td>3620.2</td>
    <td>connetquot</td>
</tr>

<tr>
    <td>2525</td>
    <td><a href="/player/2193/reilly-radow/" target="_blank">Reilly Radow</a></td>
    <td>49.0</td>
    <td>7.0</td>
    <td>3613.6</td>
    <td>School of Grapping</td>
</tr>

<tr>
    <td>2526</td>
    <td><a href="/player/1997/thomas-avery/" target="_blank">Thomas Avery</a></td>
    <td>58.0</td>
    <td>6.7</td>
    <td>3613.3</td>
    <td>Boys and Girls Club Nashua</td>
</tr>

<tr>
    <td>2527</td>
    <td><a href="/player/2951/dalton-cook/" target="_blank">Dalton Cook</a></td>
    <td>52.7</td>
    <td>8.8</td>
    <td>3611.9</td>
    <td>Swanton</td>
</tr>

<tr>
    <td>2528</td>
    <td><a href="/player/3403/james-wirick-iii/" target="_blank">James Wirick III</a></td>
    <td>49.1</td>
    <td>7.9</td>
    <td>3609.6</td>
    <td>BTW</td>
</tr>

<tr>
    <td>2529</td>
    <td><a href="/player/592/nicholas-chin/" target="_blank">nicholas chin</a></td>
    <td>57.4</td>
    <td>5.9</td>
    <td>3608.7</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2530</td>
    <td><a href="/player/1201/blake-rodrigues/" target="_blank">Blake Rodrigues</a></td>
    <td>52.4</td>
    <td>8.5</td>
    <td>3607.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2531</td>
    <td><a href="/player/1008/tristin-hoshyla/" target="_blank">Tristin Hoshyla</a></td>
    <td>50.0</td>
    <td>6.0</td>
    <td>3604.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2532</td>
    <td><a href="/player/1937/samuel-beaudoin/" target="_blank">Samuel Beaudoin</a></td>
    <td>54.0</td>
    <td>6.8</td>
    <td>3600.9</td>
    <td>Goffstown youth wrestling</td>
</tr>

<tr>
    <td>2533</td>
    <td><a href="/player/1083/joseph-barretta/" target="_blank">Joseph Barretta</a></td>
    <td>56.6</td>
    <td>8.1</td>
    <td>3598.4</td>
    <td>Manhasset</td>
</tr>

<tr>
    <td>2534</td>
    <td><a href="/player/3139/christopher-maciejunes/" target="_blank">Christopher Maciejunes</a></td>
    <td>54.0</td>
    <td>8.4</td>
    <td>3597.3</td>
    <td>American MMA</td>
</tr>

<tr>
    <td>2535</td>
    <td><a href="/player/1809/collin-smith/" target="_blank">Collin Smith</a></td>
    <td>51.4</td>
    <td>7.9</td>
    <td>3587.2</td>
    <td>Pocono mountain</td>
</tr>

<tr>
    <td>2536</td>
    <td><a href="/player/1179/brian-mormon/" target="_blank">Brian Mormon</a></td>
    <td>56.0</td>
    <td>8.6</td>
    <td>3586.9</td>
    <td>Sachem</td>
</tr>

<tr>
    <td>2537</td>
    <td><a href="/player/835/alex-loglisci/" target="_blank">Alex Loglisci</a></td>
    <td>52.6</td>
    <td>9.6</td>
    <td>3584.3</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2538</td>
    <td><a href="/player/1367/gabriel-richburg/" target="_blank">Gabriel Richburg</a></td>
    <td>56.0</td>
    <td>8.5</td>
    <td>3582.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2539</td>
    <td><a href="/player/819/william-weyer/" target="_blank">William Weyer</a></td>
    <td>53.8</td>
    <td>9.0</td>
    <td>3582.6</td>
    <td>Rocky Point</td>
</tr>

<tr>
    <td>2540</td>
    <td><a href="/player/3069/cruz-urioste/" target="_blank">Cruz Urioste</a></td>
    <td>47.8</td>
    <td>7.6</td>
    <td>3577.0</td>
    <td>Vandals</td>
</tr>

<tr>
    <td>2541</td>
    <td><a href="/player/1065/billy-cody/" target="_blank">Billy Cody</a></td>
    <td>47.4</td>
    <td>7.5</td>
    <td>3571.5</td>
    <td>Seaford</td>
</tr>

<tr>
    <td>2542</td>
    <td><a href="/player/2949/logan-noe/" target="_blank">Logan Noe</a></td>
    <td>54.9</td>
    <td>8.9</td>
    <td>3570.2</td>
    <td>Red Hawk</td>
</tr>

<tr>
    <td>2543</td>
    <td><a href="/player/3383/brady-fulton/" target="_blank">Brady Fulton</a></td>
    <td>49.7</td>
    <td>7.7</td>
    <td>3564.3</td>
    <td>Kodiak Attack</td>
</tr>

<tr>
    <td>2544</td>
    <td><a href="/player/2007/john-algeo/" target="_blank">John Algeo</a></td>
    <td>54.6</td>
    <td>8.8</td>
    <td>3563.6</td>
    <td>Litchfield</td>
</tr>

<tr>
    <td>2545</td>
    <td><a href="/player/2395/ryan-donley/" target="_blank">Ryan Donley</a></td>
    <td>53.4</td>
    <td>6.8</td>
    <td>3555.9</td>
    <td>unknown</td>
</tr>

<tr>
    <td>2546</td>
    <td><a href="/player/945/matthew-gamrat/" target="_blank">Matthew Gamrat</a></td>
    <td>51.0</td>
    <td>8.6</td>
    <td>3545.6</td>
    <td>West Babylon</td>
</tr>

<tr>
    <td>2547</td>
    <td><a href="/player/3269/cash-kirby/" target="_blank">Cash Kirby</a></td>
    <td>56.8</td>
    <td>8.3</td>
    <td>3542.4</td>
    <td>Downriver Wrestling Club</td>
</tr>

<tr>
    <td>2548</td>
    <td><a href="/player/3326/ayden-godfrey/" target="_blank">Ayden Godfrey</a></td>
    <td>55.0</td>
    <td>7.3</td>
    <td>3540.9</td>
    <td>Pride</td>
</tr>

<tr>
    <td>2549</td>
    <td><a href="/player/2329/nicolas-rivera/" target="_blank">Nicolas Rivera</a></td>
    <td>60.0</td>
    <td>8.9</td>
    <td>3534.6</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>2550</td>
    <td><a href="/player/2366/gabriel-vazquez/" target="_blank">Gabriel Vazquez</a></td>
    <td>67.0</td>
    <td>7.3</td>
    <td>3530.8</td>
    <td>Brentwood</td>
</tr>

<tr>
    <td>2551</td>
    <td><a href="/player/733/nico-cassano/" target="_blank">Nico Cassano</a></td>
    <td>53.8</td>
    <td>10.1</td>
    <td>3520.2</td>
    <td>Rutherford</td>
</tr>

<tr>
    <td>2552</td>
    <td><a href="/player/2897/brogan-beardsley/" target="_blank">Brogan Beardsley</a></td>
    <td>49.3</td>
    <td>7.3</td>
    <td>3519.9</td>
    <td>Fenton Youth Wrestling</td>
</tr>

<tr>
    <td>2553</td>
    <td><a href="/player/2127/noah-langlois/" target="_blank">Noah Langlois</a></td>
    <td>59.0</td>
    <td>8.4</td>
    <td>3509.7</td>
    <td>Londonderry Raptors</td>
</tr>

<tr>
    <td>2554</td>
    <td><a href="/player/3164/danny-foley/" target="_blank">Danny Foley</a></td>
    <td>60.4</td>
    <td>8.6</td>
    <td>3508.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2555</td>
    <td><a href="/player/1174/liam-murphy/" target="_blank">Liam Murphy</a></td>
    <td>48.8</td>
    <td>6.2</td>
    <td>3505.1</td>
    <td>Seaford</td>
</tr>

<tr>
    <td>2556</td>
    <td><a href="/player/939/joseph-berhalter/" target="_blank">Joseph Berhalter</a></td>
    <td>61.6</td>
    <td>7.9</td>
    <td>3502.0</td>
    <td>Kings Park</td>
</tr>

<tr>
    <td>2557</td>
    <td><a href="/player/1146/jasiah-guzmam/" target="_blank">Jasiah Guzmam</a></td>
    <td>49.0</td>
    <td>6.5</td>
    <td>3501.9</td>
    <td>Connetquot  t birds</td>
</tr>

<tr>
    <td>2558</td>
    <td><a href="/player/1965/demitri-rufo/" target="_blank">Demitri Rufo</a></td>
    <td>51.8</td>
    <td>8.5</td>
    <td>3495.4</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>2559</td>
    <td><a href="/player/1871/leo-rodriguez/" target="_blank">Leo Rodriguez</a></td>
    <td>54.2</td>
    <td>6.7</td>
    <td>3492.0</td>
    <td>Thunderbirds</td>
</tr>

<tr>
    <td>2560</td>
    <td><a href="/player/1366/grayson-richburg/" target="_blank">Grayson Richburg</a></td>
    <td>55.0</td>
    <td>6.3</td>
    <td>3490.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2561</td>
    <td><a href="/player/2200/declan-mueller/" target="_blank">Declan Mueller</a></td>
    <td>53.2</td>
    <td>7.3</td>
    <td>3488.8</td>
    <td>Locust Valley Falcons</td>
</tr>

<tr>
    <td>2562</td>
    <td><a href="/player/2034/gavin-cappuchi/" target="_blank">Gavin Cappuchi</a></td>
    <td>49.0</td>
    <td>7.4</td>
    <td>3487.4</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>2563</td>
    <td><a href="/player/3190/ian-plagianakos/" target="_blank">Ian Plagianakos</a></td>
    <td>56.0</td>
    <td>7.1</td>
    <td>3482.8</td>
    <td>Elite Wrestling Academy</td>
</tr>

<tr>
    <td>2564</td>
    <td><a href="/player/1296/santino-franco/" target="_blank">Santino Franco</a></td>
    <td>52.6</td>
    <td>5.9</td>
    <td>3480.4</td>
    <td>VHW</td>
</tr>

<tr>
    <td>2565</td>
    <td><a href="/player/1924/kyle-fagundes/" target="_blank">Kyle Fagundes</a></td>
    <td>53.4</td>
    <td>8.2</td>
    <td>3476.0</td>
    <td>Smithtown East</td>
</tr>

<tr>
    <td>2566</td>
    <td><a href="/player/2132/lacey-taylor/" target="_blank">Lacey Taylor</a></td>
    <td>57.0</td>
    <td>7.7</td>
    <td>3475.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2567</td>
    <td><a href="/player/1789/joseph-brooks/" target="_blank">Joseph Brooks</a></td>
    <td>47.2</td>
    <td>7.2</td>
    <td>3474.1</td>
    <td>Victor Blue Devils</td>
</tr>

<tr>
    <td>2568</td>
    <td><a href="/player/1338/ryan-heiser/" target="_blank">Ryan Heiser</a></td>
    <td>59.8</td>
    <td>7.4</td>
    <td>3467.4</td>
    <td>Westport PAL</td>
</tr>

<tr>
    <td>2569</td>
    <td><a href="/player/1358/ian-huber/" target="_blank">Ian Huber</a></td>
    <td>48.5</td>
    <td>6.8</td>
    <td>3466.5</td>
    <td>Pemberton Jr Hornets</td>
</tr>

<tr>
    <td>2570</td>
    <td><a href="/player/2149/ryan-brown/" target="_blank">Ryan Brown</a></td>
    <td>56.0</td>
    <td>7.9</td>
    <td>3463.8</td>
    <td>Litchfield</td>
</tr>

<tr>
    <td>2571</td>
    <td><a href="/player/2735/kyle-stipeck/" target="_blank">Kyle Stipeck</a></td>
    <td>52.2</td>
    <td>8.2</td>
    <td>3445.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2572</td>
    <td><a href="/player/1519/adam-khwaja/" target="_blank">Adam Khwaja</a></td>
    <td>56.8</td>
    <td>7.6</td>
    <td>3444.0</td>
    <td>HHH</td>
</tr>

<tr>
    <td>2573</td>
    <td><a href="/player/3226/henry-rosengarten/" target="_blank">Henry Rosengarten</a></td>
    <td>62.3</td>
    <td>6.1</td>
    <td>3443.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2574</td>
    <td><a href="/player/2303/quinn-creedon/" target="_blank">Quinn Creedon</a></td>
    <td>62.0</td>
    <td>7.9</td>
    <td>3439.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2575</td>
    <td><a href="/player/1161/ryan-arteca/" target="_blank">Ryan Arteca</a></td>
    <td>59.8</td>
    <td>8.4</td>
    <td>3438.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2576</td>
    <td><a href="/player/1906/jake-emmel/" target="_blank">Jake Emmel</a></td>
    <td>58.0</td>
    <td>9.0</td>
    <td>3433.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2577</td>
    <td><a href="/player/524/lucas-huntley/" target="_blank">Lucas Huntley</a></td>
    <td>50.0</td>
    <td>9.8</td>
    <td>3432.0</td>
    <td>rhino</td>
</tr>

<tr>
    <td>2578</td>
    <td><a href="/player/3442/caden-morgan/" target="_blank">Caden Morgan</a></td>
    <td>50.3</td>
    <td>7.7</td>
    <td>3431.2</td>
    <td>Altered Beast</td>
</tr>

<tr>
    <td>2579</td>
    <td><a href="/player/896/alex-donadoni/" target="_blank">Alex Donadoni</a></td>
    <td>49.0</td>
    <td>5.8</td>
    <td>3425.7</td>
    <td>Rocky point</td>
</tr>

<tr>
    <td>2580</td>
    <td><a href="/player/1430/bennett-meehan/" target="_blank">Bennett Meehan</a></td>
    <td>51.6</td>
    <td>6.1</td>
    <td>3424.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2581</td>
    <td><a href="/player/2611/emilio-clemente/" target="_blank">Emilio Clemente</a></td>
    <td>61.0</td>
    <td>6.8</td>
    <td>3418.9</td>
    <td>Farrison</td>
</tr>

<tr>
    <td>2582</td>
    <td><a href="/player/594/dominick-laviano/" target="_blank">Dominick Laviano</a></td>
    <td>51.4</td>
    <td>6.2</td>
    <td>3407.3</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2583</td>
    <td><a href="/player/2267/jackson-renna/" target="_blank">Jackson Renna</a></td>
    <td>52.6</td>
    <td>7.3</td>
    <td>3405.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2584</td>
    <td><a href="/player/3187/corey-mattingly/" target="_blank">Corey Mattingly</a></td>
    <td>50.0</td>
    <td>7.5</td>
    <td>3404.9</td>
    <td>Fisheye</td>
</tr>

<tr>
    <td>2585</td>
    <td><a href="/player/3441/cody-morgan/" target="_blank">Cody Morgan</a></td>
    <td>48.7</td>
    <td>7.7</td>
    <td>3403.5</td>
    <td>Altered Beast</td>
</tr>

<tr>
    <td>2586</td>
    <td><a href="/player/1250/christopher-baldo/" target="_blank">Christopher Baldo</a></td>
    <td>49.8</td>
    <td>8.5</td>
    <td>3401.7</td>
    <td>Rednose Wrestling</td>
</tr>

<tr>
    <td>2587</td>
    <td><a href="/player/1235/brad-arango/" target="_blank">Brad Arango</a></td>
    <td>54.0</td>
    <td>10.6</td>
    <td>3397.3</td>
    <td>Massapequa</td>
</tr>

<tr>
    <td>2588</td>
    <td><a href="/player/1106/joey-hurley/" target="_blank">Joey Hurley</a></td>
    <td>48.0</td>
    <td>8.1</td>
    <td>3396.7</td>
    <td>Apex</td>
</tr>

<tr>
    <td>2589</td>
    <td><a href="/player/1116/parker-miller/" target="_blank">Parker Miller</a></td>
    <td>48.0</td>
    <td>8.8</td>
    <td>3396.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2590</td>
    <td><a href="/player/1168/alex-poh/" target="_blank">Alex Poh</a></td>
    <td>48.0</td>
    <td>7.5</td>
    <td>3396.7</td>
    <td>Ufc</td>
</tr>

<tr>
    <td>2591</td>
    <td><a href="/player/2493/chase-reynolds/" target="_blank">Chase Reynolds</a></td>
    <td>48.0</td>
    <td>8.0</td>
    <td>3396.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2592</td>
    <td><a href="/player/2633/talan-berube/" target="_blank">talan Berube</a></td>
    <td>48.0</td>
    <td>8.4</td>
    <td>3396.7</td>
    <td>Trojans</td>
</tr>

<tr>
    <td>2593</td>
    <td><a href="/player/1757/brandon-rose/" target="_blank">Brandon Rose</a></td>
    <td>55.8</td>
    <td>8.3</td>
    <td>3394.9</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2594</td>
    <td><a href="/player/996/frank-nunziato/" target="_blank">Frank Nunziato</a></td>
    <td>48.8</td>
    <td>7.3</td>
    <td>3394.2</td>
    <td>North Babylon</td>
</tr>

<tr>
    <td>2595</td>
    <td><a href="/player/2867/landon-damer/" target="_blank">Landon Damer</a></td>
    <td>55.0</td>
    <td>7.2</td>
    <td>3390.9</td>
    <td>Roseville Eagles</td>
</tr>

<tr>
    <td>2596</td>
    <td><a href="/player/670/gray-fox-portella/" target="_blank">Gray Fox Portella</a></td>
    <td>48.0</td>
    <td>6.4</td>
    <td>3389.1</td>
    <td>knights wrestling</td>
</tr>

<tr>
    <td>2597</td>
    <td><a href="/player/1492/rory-kennedy/" target="_blank">Rory Kennedy</a></td>
    <td>47.2</td>
    <td>5.8</td>
    <td>3389.0</td>
    <td>VHW</td>
</tr>

<tr>
    <td>2598</td>
    <td><a href="/player/2773/aubrey-kokinda/" target="_blank">Aubrey Kokinda</a></td>
    <td>50.8</td>
    <td>8.8</td>
    <td>3387.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2599</td>
    <td><a href="/player/2003/mason-hunnewell/" target="_blank">Mason Hunnewell</a></td>
    <td>54.0</td>
    <td>6.8</td>
    <td>3384.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2600</td>
    <td><a href="/player/910/ibrahim-malik/" target="_blank">Ibrahim Malik</a></td>
    <td>47.2</td>
    <td>5.2</td>
    <td>3382.6</td>
    <td>Bethpage</td>
</tr>

<tr>
    <td>2601</td>
    <td><a href="/player/1317/harley-simons/" target="_blank">Harley Simons</a></td>
    <td>61.6</td>
    <td>7.6</td>
    <td>3382.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2602</td>
    <td><a href="/player/3358/whitney-hensen/" target="_blank">Whitney Hensen</a></td>
    <td>56.6</td>
    <td>6.4</td>
    <td>3368.9</td>
    <td>SAW</td>
</tr>

<tr>
    <td>2603</td>
    <td><a href="/player/1749/maxim-auguste/" target="_blank">Maxim Auguste</a></td>
    <td>52.6</td>
    <td>7.7</td>
    <td>3366.7</td>
    <td>Dynamic wrestling academy</td>
</tr>

<tr>
    <td>2604</td>
    <td><a href="/player/2380/dylan-nystrom/" target="_blank">Dylan Nystrom</a></td>
    <td>58.0</td>
    <td>7.8</td>
    <td>3361.7</td>
    <td>Sachem</td>
</tr>

<tr>
    <td>2605</td>
    <td><a href="/player/2798/geno-carpino/" target="_blank">Geno Carpino</a></td>
    <td>52.5</td>
    <td>7.4</td>
    <td>3353.7</td>
    <td>MPR</td>
</tr>

<tr>
    <td>2606</td>
    <td><a href="/player/3110/conner-shortt/" target="_blank">Conner Shortt</a></td>
    <td>52.5</td>
    <td>7.6</td>
    <td>3352.4</td>
    <td>Anchor bay</td>
</tr>

<tr>
    <td>2607</td>
    <td><a href="/player/2718/colton-louderback/" target="_blank">Colton Louderback</a></td>
    <td>52.6</td>
    <td>7.6</td>
    <td>3352.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2608</td>
    <td><a href="/player/2278/aidan-lazar/" target="_blank">Aidan Lazar</a></td>
    <td>60.8</td>
    <td>7.4</td>
    <td>3351.7</td>
    <td>Bethpage</td>
</tr>

<tr>
    <td>2609</td>
    <td><a href="/player/1841/caiden-cruz/" target="_blank">Caiden Cruz</a></td>
    <td>47.0</td>
    <td>7.7</td>
    <td>3351.4</td>
    <td>Bayport Blue Point</td>
</tr>

<tr>
    <td>2610</td>
    <td><a href="/player/3090/jade-mutschler/" target="_blank">Jade Mutschler</a></td>
    <td>58.2</td>
    <td>10.9</td>
    <td>3348.2</td>
    <td>Panthers</td>
</tr>

<tr>
    <td>2611</td>
    <td><a href="/player/2628/mia-chiba/" target="_blank">Mia Chiba</a></td>
    <td>51.0</td>
    <td>7.6</td>
    <td>3331.9</td>
    <td>Krazy Monkeys</td>
</tr>

<tr>
    <td>2612</td>
    <td><a href="/player/1810/joe-weiss/" target="_blank">Joe Weiss</a></td>
    <td>52.8</td>
    <td>7.2</td>
    <td>3321.6</td>
    <td>PV Bruins</td>
</tr>

<tr>
    <td>2613</td>
    <td><a href="/player/1905/nick-emmel/" target="_blank">Nick Emmel</a></td>
    <td>54.4</td>
    <td>7.4</td>
    <td>3308.3</td>
    <td>Kings Park</td>
</tr>

<tr>
    <td>2614</td>
    <td><a href="/player/1862/matt-stallone/" target="_blank">Matt Stallone</a></td>
    <td>47.0</td>
    <td>7.9</td>
    <td>3307.3</td>
    <td>SWR</td>
</tr>

<tr>
    <td>2615</td>
    <td><a href="/player/3223/jordan-skodak/" target="_blank">Jordan Skodak</a></td>
    <td>49.2</td>
    <td>6.2</td>
    <td>3302.9</td>
    <td>Skodak</td>
</tr>

<tr>
    <td>2616</td>
    <td><a href="/player/729/brax-garcia/" target="_blank">Brax Garcia</a></td>
    <td>50.6</td>
    <td>7.3</td>
    <td>3300.8</td>
    <td>Rhyno</td>
</tr>

<tr>
    <td>2617</td>
    <td><a href="/player/1847/vincent-devlin/" target="_blank">Vincent Devlin</a></td>
    <td>46.2</td>
    <td>7.7</td>
    <td>3300.8</td>
    <td>Smithtown East</td>
</tr>

<tr>
    <td>2618</td>
    <td><a href="/player/1560/allen-gaudenzi/" target="_blank">Allen Gaudenzi</a></td>
    <td>50.8</td>
    <td>7.4</td>
    <td>3300.6</td>
    <td>Newtown ct</td>
</tr>

<tr>
    <td>2619</td>
    <td><a href="/player/885/dean-carmel/" target="_blank">Dean Carmel</a></td>
    <td>45.2</td>
    <td>6.6</td>
    <td>3299.5</td>
    <td>Thunderbirds</td>
</tr>

<tr>
    <td>2620</td>
    <td><a href="/player/1406/vincent-aparicio/" target="_blank">Vincent Aparicio</a></td>
    <td>46.0</td>
    <td>6.6</td>
    <td>3298.2</td>
    <td>Cardinal Wrestling</td>
</tr>

<tr>
    <td>2621</td>
    <td><a href="/player/2354/charlie-cifuentes/" target="_blank">Charlie Cifuentes</a></td>
    <td>57.8</td>
    <td>7.8</td>
    <td>3297.2</td>
    <td>Oak Neck -Locust Valley</td>
</tr>

<tr>
    <td>2622</td>
    <td><a href="/player/2294/jon-mohr/" target="_blank">Jon Mohr</a></td>
    <td>56.8</td>
    <td>6.9</td>
    <td>3293.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2623</td>
    <td><a href="/player/1471/adam-giunta/" target="_blank">Adam Giunta</a></td>
    <td>52.2</td>
    <td>6.7</td>
    <td>3286.6</td>
    <td>Bethpage PAL</td>
</tr>

<tr>
    <td>2624</td>
    <td><a href="/player/2983/cruz-peterson/" target="_blank">Cruz Peterson</a></td>
    <td>53.8</td>
    <td>6.6</td>
    <td>3279.5</td>
    <td>Vandals</td>
</tr>

<tr>
    <td>2625</td>
    <td><a href="/player/2260/benedicto-piazza/" target="_blank">Benedicto Piazza</a></td>
    <td>60.2</td>
    <td>7.6</td>
    <td>3277.5</td>
    <td>Seaford Youth Wrestling</td>
</tr>

<tr>
    <td>2626</td>
    <td><a href="/player/2392/christian-chavez/" target="_blank">Christian Chavez</a></td>
    <td>57.6</td>
    <td>6.5</td>
    <td>3271.2</td>
    <td>Wildcats south Huntington</td>
</tr>

<tr>
    <td>2627</td>
    <td><a href="/player/2962/gavin-solomon/" target="_blank">Gavin Solomon</a></td>
    <td>43.9</td>
    <td>8.3</td>
    <td>3257.1</td>
    <td>Team Donahoe</td>
</tr>

<tr>
    <td>2628</td>
    <td><a href="/player/1911/jj-depietro/" target="_blank">JJ DePietro</a></td>
    <td>48.6</td>
    <td>5.8</td>
    <td>3255.5</td>
    <td>School of Grappling</td>
</tr>

<tr>
    <td>2629</td>
    <td><a href="/player/1194/joseph-ierano/" target="_blank">Joseph Ierano</a></td>
    <td>55.4</td>
    <td>7.6</td>
    <td>3252.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2630</td>
    <td><a href="/player/2722/matthew-bly/" target="_blank">Matthew Bly</a></td>
    <td>51.0</td>
    <td>6.5</td>
    <td>3251.7</td>
    <td>Altered beast</td>
</tr>

<tr>
    <td>2631</td>
    <td><a href="/player/1534/cadence-grover/" target="_blank">Cadence Grover</a></td>
    <td>56.0</td>
    <td>10.1</td>
    <td>3248.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2632</td>
    <td><a href="/player/2238/camden-fahrbach/" target="_blank">Camden Fahrbach</a></td>
    <td>47.4</td>
    <td>7.0</td>
    <td>3248.3</td>
    <td>Mount Sinai</td>
</tr>

<tr>
    <td>2633</td>
    <td><a href="/player/2434/gavin-fossati/" target="_blank">Gavin Fossati</a></td>
    <td>59.2</td>
    <td>7.6</td>
    <td>3239.9</td>
    <td>Bay Shore</td>
</tr>

<tr>
    <td>2634</td>
    <td><a href="/player/2057/john-racioppi/" target="_blank">John Racioppi</a></td>
    <td>52.4</td>
    <td>7.2</td>
    <td>3239.4</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>2635</td>
    <td><a href="/player/902/dominic-orellana/" target="_blank">Dominic Orellana</a></td>
    <td>47.6</td>
    <td>7.7</td>
    <td>3236.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2636</td>
    <td><a href="/player/598/brennan-foster/" target="_blank">Brennan Foster</a></td>
    <td>43.2</td>
    <td>7.2</td>
    <td>3236.3</td>
    <td>dynamic</td>
</tr>

<tr>
    <td>2637</td>
    <td><a href="/player/2111/colby-greenhalge/" target="_blank">Colby Greenhalge</a></td>
    <td>60.0</td>
    <td>8.5</td>
    <td>3236.0</td>
    <td>Goffstown Youth Wrestling</td>
</tr>

<tr>
    <td>2638</td>
    <td><a href="/player/487/joesph-oleary/" target="_blank">Joesph O'leary</a></td>
    <td>60.0</td>
    <td>5.9</td>
    <td>3234.6</td>
    <td>dynamic</td>
</tr>

<tr>
    <td>2639</td>
    <td><a href="/player/2166/nathan-rouleau/" target="_blank">Nathan Rouleau</a></td>
    <td>50.0</td>
    <td>5.3</td>
    <td>3234.6</td>
    <td>Litchfield</td>
</tr>

<tr>
    <td>2640</td>
    <td><a href="/player/3228/andrew-mainz/" target="_blank">Andrew Mainz</a></td>
    <td>50.0</td>
    <td>9.7</td>
    <td>3226.8</td>
    <td>jpw</td>
</tr>

<tr>
    <td>2641</td>
    <td><a href="/player/1001/jaziah-avery/" target="_blank">Jaziah Avery</a></td>
    <td>43.0</td>
    <td>5.3</td>
    <td>3215.8</td>
    <td>North Babylon bulldog</td>
</tr>

<tr>
    <td>2642</td>
    <td><a href="/player/2316/azariah-thomas/" target="_blank">Azariah Thomas</a></td>
    <td>48.8</td>
    <td>5.7</td>
    <td>3209.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2643</td>
    <td><a href="/player/2305/mike-destefano/" target="_blank">Mike Destefano</a></td>
    <td>53.0</td>
    <td>6.7</td>
    <td>3208.7</td>
    <td>seaford</td>
</tr>

<tr>
    <td>2644</td>
    <td><a href="/player/1336/bradan-boal/" target="_blank">Bradan Boal</a></td>
    <td>52.0</td>
    <td>6.7</td>
    <td>3204.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2645</td>
    <td><a href="/player/1989/ivy-latino/" target="_blank">Ivy Latino</a></td>
    <td>52.0</td>
    <td>8.4</td>
    <td>3204.9</td>
    <td>Fitchburg Youth</td>
</tr>

<tr>
    <td>2646</td>
    <td><a href="/player/2254/wesley-little/" target="_blank">Wesley Little</a></td>
    <td>51.6</td>
    <td>8.4</td>
    <td>3204.3</td>
    <td>Bayport BluePoint Phantoms</td>
</tr>

<tr>
    <td>2647</td>
    <td><a href="/player/2203/jackson-wachter/" target="_blank">Jackson Wachter</a></td>
    <td>42.4</td>
    <td>7.5</td>
    <td>3200.9</td>
    <td>Locust Valley Falcons</td>
</tr>

<tr>
    <td>2648</td>
    <td><a href="/player/2786/breyden-gissinger/" target="_blank">Breyden Gissinger</a></td>
    <td>44.7</td>
    <td>7.1</td>
    <td>3190.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2649</td>
    <td><a href="/player/2433/warren-gallagher/" target="_blank">Warren Gallagher</a></td>
    <td>56.0</td>
    <td>6.9</td>
    <td>3182.8</td>
    <td>Carmel NY</td>
</tr>

<tr>
    <td>2650</td>
    <td><a href="/player/991/olivia-anello/" target="_blank">Olivia Anello</a></td>
    <td>48.0</td>
    <td>8.1</td>
    <td>3179.9</td>
    <td>Pat-Med</td>
</tr>

<tr>
    <td>2651</td>
    <td><a href="/player/1112/connor-rowan/" target="_blank">Connor Rowan</a></td>
    <td>46.0</td>
    <td>7.6</td>
    <td>3179.7</td>
    <td>Collingswood</td>
</tr>

<tr>
    <td>2652</td>
    <td><a href="/player/855/luca-ierano/" target="_blank">Luca Ierano</a></td>
    <td>56.6</td>
    <td>6.1</td>
    <td>3176.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2653</td>
    <td><a href="/player/958/michael-moyer/" target="_blank">Michael Moyer</a></td>
    <td>51.0</td>
    <td>6.4</td>
    <td>3175.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2654</td>
    <td><a href="/player/2049/brody-murray/" target="_blank">Brody Murray</a></td>
    <td>48.6</td>
    <td>6.3</td>
    <td>3174.3</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>2655</td>
    <td><a href="/player/2170/joseph-barrila/" target="_blank">Joseph Barrila</a></td>
    <td>52.0</td>
    <td>8.4</td>
    <td>3150.5</td>
    <td>Chelmsford Youth Wrestling</td>
</tr>

<tr>
    <td>2656</td>
    <td><a href="/player/1993/jacob-byrne/" target="_blank">Jacob Byrne</a></td>
    <td>55.0</td>
    <td>6.9</td>
    <td>3147.0</td>
    <td>Greater Nashua Boys and Girls Club</td>
</tr>

<tr>
    <td>2657</td>
    <td><a href="/player/1995/cayden-raye/" target="_blank">Cayden Raye</a></td>
    <td>51.0</td>
    <td>6.9</td>
    <td>3145.0</td>
    <td>Nashua boys and girls club</td>
</tr>

<tr>
    <td>2658</td>
    <td><a href="/player/2289/hunter-swicicki/" target="_blank">Hunter Swicicki</a></td>
    <td>57.0</td>
    <td>6.2</td>
    <td>3141.5</td>
    <td>Blue wave</td>
</tr>

<tr>
    <td>2659</td>
    <td><a href="/player/1364/dylan-rosas/" target="_blank">Dylan Rosas</a></td>
    <td>53.4</td>
    <td>5.4</td>
    <td>3140.2</td>
    <td>New Brunswick</td>
</tr>

<tr>
    <td>2660</td>
    <td><a href="/player/2279/frankie-lemaire/" target="_blank">Frankie Lemaire</a></td>
    <td>49.6</td>
    <td>7.6</td>
    <td>3138.8</td>
    <td>FiveStar</td>
</tr>

<tr>
    <td>2661</td>
    <td><a href="/player/3246/kiernin-ryznar/" target="_blank">Kiernin Ryznar</a></td>
    <td>46.5</td>
    <td>7.6</td>
    <td>3126.9</td>
    <td>Michigan Matcats</td>
</tr>

<tr>
    <td>2662</td>
    <td><a href="/player/2353/landon-kelskey/" target="_blank">Landon Kelskey</a></td>
    <td>49.0</td>
    <td>7.0</td>
    <td>3118.3</td>
    <td>Kings Park</td>
</tr>

<tr>
    <td>2663</td>
    <td><a href="/player/2615/cameron-bolum/" target="_blank">Cameron Bolum</a></td>
    <td>55.0</td>
    <td>7.3</td>
    <td>3115.9</td>
    <td>Connetquot kid wrestling</td>
</tr>

<tr>
    <td>2664</td>
    <td><a href="/player/2281/frankie-fisher/" target="_blank">Frankie Fisher</a></td>
    <td>48.4</td>
    <td>7.2</td>
    <td>3112.8</td>
    <td>Barn Brothers</td>
</tr>

<tr>
    <td>2665</td>
    <td><a href="/player/1740/joshua-castro/" target="_blank">joshua castro</a></td>
    <td>46.4</td>
    <td>6.9</td>
    <td>3107.9</td>
    <td>dynamic</td>
</tr>

<tr>
    <td>2666</td>
    <td><a href="/player/2652/achilles-martinez/" target="_blank">Achilles Martinez</a></td>
    <td>53.0</td>
    <td>8.3</td>
    <td>3102.0</td>
    <td>RoughRiders</td>
</tr>

<tr>
    <td>2667</td>
    <td><a href="/player/3016/laiken-mazur/" target="_blank">Laiken Mazur</a></td>
    <td>53.0</td>
    <td>6.9</td>
    <td>3102.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2668</td>
    <td><a href="/player/680/emerson-miranda/" target="_blank">Emerson Miranda</a></td>
    <td>48.0</td>
    <td>6.9</td>
    <td>3097.7</td>
    <td>Knights Wrestling</td>
</tr>

<tr>
    <td>2669</td>
    <td><a href="/player/2081/david-morency/" target="_blank">David Morency</a></td>
    <td>49.6</td>
    <td>6.2</td>
    <td>3087.3</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>2670</td>
    <td><a href="/player/3250/tobias-maltais/" target="_blank">Tobias Maltais</a></td>
    <td>50.8</td>
    <td>7.2</td>
    <td>3085.8</td>
    <td></td>
</tr>

<tr>
    <td>2671</td>
    <td><a href="/player/2710/john-boyd/" target="_blank">john boyd</a></td>
    <td>60.0</td>
    <td>7.1</td>
    <td>3079.9</td>
    <td>Juniata Valley</td>
</tr>

<tr>
    <td>2672</td>
    <td><a href="/player/1059/julius-zhizpon/" target="_blank">Julius Zhizpon</a></td>
    <td>45.0</td>
    <td>7.5</td>
    <td>3067.6</td>
    <td>Pat-Med</td>
</tr>

<tr>
    <td>2673</td>
    <td><a href="/player/2967/keller-sherer/" target="_blank">Keller Sherer</a></td>
    <td>52.0</td>
    <td>6.6</td>
    <td>3064.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2674</td>
    <td><a href="/player/2033/ashton-cappuchi/" target="_blank">Ashton Cappuchi</a></td>
    <td>44.0</td>
    <td>7.4</td>
    <td>3060.7</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>2675</td>
    <td><a href="/player/720/jordan-szwak/" target="_blank">jordan szwak</a></td>
    <td>47.2</td>
    <td>5.7</td>
    <td>3054.9</td>
    <td>pride wrestling</td>
</tr>

<tr>
    <td>2676</td>
    <td><a href="/player/2970/bentley-gatica/" target="_blank">Bentley Gatica</a></td>
    <td>52.8</td>
    <td>6.0</td>
    <td>3044.8</td>
    <td>Holly Roughriders</td>
</tr>

<tr>
    <td>2677</td>
    <td><a href="/player/2971/nolan-lefevre/" target="_blank">Nolan Lefevre</a></td>
    <td>46.9</td>
    <td>6.7</td>
    <td>3022.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2678</td>
    <td><a href="/player/2217/gavin-armstrong/" target="_blank">Gavin Armstrong</a></td>
    <td>55.6</td>
    <td>8.4</td>
    <td>3021.8</td>
    <td>BBP Phantoms</td>
</tr>

<tr>
    <td>2679</td>
    <td><a href="/player/1042/dylan-sclafani/" target="_blank">Dylan Sclafani</a></td>
    <td>51.2</td>
    <td>7.5</td>
    <td>3020.2</td>
    <td>Seaford</td>
</tr>

<tr>
    <td>2680</td>
    <td><a href="/player/919/gabriel-izquierdo/" target="_blank">Gabriel Izquierdo</a></td>
    <td>49.0</td>
    <td>7.0</td>
    <td>3015.4</td>
    <td>Patchogue Medford Raiders</td>
</tr>

<tr>
    <td>2681</td>
    <td><a href="/player/3392/jack-brown/" target="_blank">Jack brown</a></td>
    <td>47.6</td>
    <td>6.8</td>
    <td>3007.9</td>
    <td>Team Donahoe</td>
</tr>

<tr>
    <td>2682</td>
    <td><a href="/player/3185/kingston-calhoun/" target="_blank">Kingston Calhoun</a></td>
    <td>57.2</td>
    <td>6.6</td>
    <td>3007.6</td>
    <td>Vandals</td>
</tr>

<tr>
    <td>2683</td>
    <td><a href="/player/3258/vincent-martinez/" target="_blank">Vincent Martinez</a></td>
    <td>51.0</td>
    <td>6.5</td>
    <td>3005.9</td>
    <td>Pride</td>
</tr>

<tr>
    <td>2684</td>
    <td><a href="/player/1209/jack-lipari/" target="_blank">Jack Lipari</a></td>
    <td>50.0</td>
    <td>7.5</td>
    <td>3004.9</td>
    <td>Mount Sinai</td>
</tr>

<tr>
    <td>2685</td>
    <td><a href="/player/2643/vincent-cococcia/" target="_blank">Vincent Cococcia</a></td>
    <td>50.0</td>
    <td>7.7</td>
    <td>3004.9</td>
    <td>F.L.O.W.</td>
</tr>

<tr>
    <td>2686</td>
    <td><a href="/player/2210/chase-simonton/" target="_blank">Chase Simonton</a></td>
    <td>49.0</td>
    <td>7.5</td>
    <td>2995.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2687</td>
    <td><a href="/player/1282/ryan-padilla/" target="_blank">Ryan Padilla</a></td>
    <td>43.8</td>
    <td>7.9</td>
    <td>2993.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2688</td>
    <td><a href="/player/1741/jayden-gordon/" target="_blank">Jayden Gordon</a></td>
    <td>54.2</td>
    <td>6.4</td>
    <td>2993.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2689</td>
    <td><a href="/player/3193/thomas-shehadi/" target="_blank">Thomas Shehadi</a></td>
    <td>46.0</td>
    <td>7.2</td>
    <td>2979.7</td>
    <td>Rhino</td>
</tr>

<tr>
    <td>2690</td>
    <td><a href="/player/2044/andrew-kalil/" target="_blank">Andrew Kalil</a></td>
    <td>43.6</td>
    <td>6.1</td>
    <td>2978.4</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>2691</td>
    <td><a href="/player/3296/joaquin-ascencio/" target="_blank">Joaquin Ascencio</a></td>
    <td>49.2</td>
    <td>7.4</td>
    <td>2973.4</td>
    <td>Mid Michigan Vandals</td>
</tr>

<tr>
    <td>2692</td>
    <td><a href="/player/2911/zachary-bauer/" target="_blank">Zachary Bauer</a></td>
    <td>52.0</td>
    <td>7.7</td>
    <td>2972.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2693</td>
    <td><a href="/player/2543/thomas-blankinship/" target="_blank">Thomas Blankinship</a></td>
    <td>58.2</td>
    <td>6.1</td>
    <td>2970.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2694</td>
    <td><a href="/player/900/harrison-collins/" target="_blank">Harrison Collins</a></td>
    <td>52.6</td>
    <td>7.2</td>
    <td>2968.0</td>
    <td>Kings Park</td>
</tr>

<tr>
    <td>2695</td>
    <td><a href="/player/3319/tyler-ribchinsky/" target="_blank">Tyler Ribchinsky</a></td>
    <td>45.0</td>
    <td>5.2</td>
    <td>2967.6</td>
    <td>Pride WC</td>
</tr>

<tr>
    <td>2696</td>
    <td><a href="/player/2796/dougie-hazel/" target="_blank">Dougie Hazel</a></td>
    <td>46.8</td>
    <td>6.1</td>
    <td>2958.4</td>
    <td>Mat Ratz</td>
</tr>

<tr>
    <td>2697</td>
    <td><a href="/player/2230/nico-dalto/" target="_blank">Nico D’Alto</a></td>
    <td>55.8</td>
    <td>7.2</td>
    <td>2955.8</td>
    <td>Kings park</td>
</tr>

<tr>
    <td>2698</td>
    <td><a href="/player/1612/elijah-lim/" target="_blank">Elijah Lim</a></td>
    <td>54.0</td>
    <td>6.6</td>
    <td>2946.8</td>
    <td>MarcAurele</td>
</tr>

<tr>
    <td>2699</td>
    <td><a href="/player/2799/hunter-mcdonough/" target="_blank">Hunter McDonough</a></td>
    <td>44.0</td>
    <td>7.1</td>
    <td>2939.0</td>
    <td>Mavericks Wrestling</td>
</tr>

<tr>
    <td>2700</td>
    <td><a href="/player/2866/cebastian-pabon/" target="_blank">Cebastian Pabon</a></td>
    <td>48.9</td>
    <td>7.2</td>
    <td>2921.2</td>
    <td>Altered Beast</td>
</tr>

<tr>
    <td>2701</td>
    <td><a href="/player/2411/bastian-sherman/" target="_blank">Bastian Sherman</a></td>
    <td>52.8</td>
    <td>5.3</td>
    <td>2919.3</td>
    <td>East meadow jets</td>
</tr>

<tr>
    <td>2702</td>
    <td><a href="/player/927/colton-castracane/" target="_blank">Colton Castracane</a></td>
    <td>43.0</td>
    <td>6.3</td>
    <td>2917.3</td>
    <td>T birds</td>
</tr>

<tr>
    <td>2703</td>
    <td><a href="/player/1830/brandon-costello/" target="_blank">Brandon Costello</a></td>
    <td>48.5</td>
    <td>7.1</td>
    <td>2906.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2704</td>
    <td><a href="/player/2435/christopher-gergenti/" target="_blank">Christopher Gergenti</a></td>
    <td>50.0</td>
    <td>7.0</td>
    <td>2904.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2705</td>
    <td><a href="/player/3348/emryk-kilcher/" target="_blank">Emryk Kilcher</a></td>
    <td>44.6</td>
    <td>7.5</td>
    <td>2898.0</td>
    <td>NWRC</td>
</tr>

<tr>
    <td>2706</td>
    <td><a href="/player/818/owen-bouton/" target="_blank">Owen Bouton</a></td>
    <td>39.8</td>
    <td>6.9</td>
    <td>2893.6</td>
    <td>Rocky Point</td>
</tr>

<tr>
    <td>2707</td>
    <td><a href="/player/2006/joey-algeo/" target="_blank">Joey Algeo</a></td>
    <td>43.6</td>
    <td>5.6</td>
    <td>2893.1</td>
    <td>Litchfield</td>
</tr>

<tr>
    <td>2708</td>
    <td><a href="/player/1115/christopher-dejosia/" target="_blank">Christopher DeJosia</a></td>
    <td>46.6</td>
    <td>4.5</td>
    <td>2881.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2709</td>
    <td><a href="/player/3338/kelly-leask/" target="_blank">Kelly Leask</a></td>
    <td>46.7</td>
    <td>7.8</td>
    <td>2873.9</td>
    <td>Dundee</td>
</tr>

<tr>
    <td>2710</td>
    <td><a href="/player/2389/vincent-ricca/" target="_blank">Vincent Ricca</a></td>
    <td>49.0</td>
    <td>7.0</td>
    <td>2868.8</td>
    <td>Connetquot youth wrestling club</td>
</tr>

<tr>
    <td>2711</td>
    <td><a href="/player/2362/johnny-murphy/" target="_blank">Johnny Murphy</a></td>
    <td>54.0</td>
    <td>6.8</td>
    <td>2865.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2712</td>
    <td><a href="/player/2346/will-denatale/" target="_blank">Will DeNatale</a></td>
    <td>50.0</td>
    <td>6.5</td>
    <td>2865.0</td>
    <td>Locust Valley Falcons</td>
</tr>

<tr>
    <td>2713</td>
    <td><a href="/player/1410/payton-montanaro/" target="_blank">Payton Montanaro</a></td>
    <td>49.0</td>
    <td>8.4</td>
    <td>2864.6</td>
    <td>WARRIOR WRESTLING ACADEMY</td>
</tr>

<tr>
    <td>2714</td>
    <td><a href="/player/2407/nimora-dacosta/" target="_blank">Ni’Mora DaCosta</a></td>
    <td>42.0</td>
    <td>7.8</td>
    <td>2858.1</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2715</td>
    <td><a href="/player/2375/darnell-whitehead-jr/" target="_blank">Darnell Whitehead Jr.</a></td>
    <td>58.0</td>
    <td>6.3</td>
    <td>2845.6</td>
    <td>North Babylon</td>
</tr>

<tr>
    <td>2716</td>
    <td><a href="/player/2221/carter-gordon/" target="_blank">Carter Gordon</a></td>
    <td>52.6</td>
    <td>5.0</td>
    <td>2835.2</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2717</td>
    <td><a href="/player/2844/lennon-lokuta/" target="_blank">Lennon Lokuta</a></td>
    <td>52.2</td>
    <td>6.5</td>
    <td>2828.4</td>
    <td>Pittston</td>
</tr>

<tr>
    <td>2718</td>
    <td><a href="/player/3145/eli-coppola/" target="_blank">Eli Coppola</a></td>
    <td>42.0</td>
    <td>7.4</td>
    <td>2815.8</td>
    <td>Joker Wrestling</td>
</tr>

<tr>
    <td>2719</td>
    <td><a href="/player/2338/peter-cannizzaro/" target="_blank">Peter Cannizzaro</a></td>
    <td>46.2</td>
    <td>9.0</td>
    <td>2814.1</td>
    <td>Phantom</td>
</tr>

<tr>
    <td>2720</td>
    <td><a href="/player/2350/jameson-grossweiler/" target="_blank">Jameson Grossweiler</a></td>
    <td>48.6</td>
    <td>7.4</td>
    <td>2807.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2721</td>
    <td><a href="/player/1248/anthony-lauruska/" target="_blank">Anthony Lauruska</a></td>
    <td>49.2</td>
    <td>7.6</td>
    <td>2805.8</td>
    <td>Sachem</td>
</tr>

<tr>
    <td>2722</td>
    <td><a href="/player/2374/jake-ruiz/" target="_blank">Jake Ruiz</a></td>
    <td>50.0</td>
    <td>8.2</td>
    <td>2804.9</td>
    <td>Carmel Youth Wrestling</td>
</tr>

<tr>
    <td>2723</td>
    <td><a href="/player/2544/mason-muratore/" target="_blank">Mason Muratore</a></td>
    <td>52.0</td>
    <td>6.3</td>
    <td>2804.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2724</td>
    <td><a href="/player/2607/gregory-poniatowski/" target="_blank">Gregory Poniatowski</a></td>
    <td>54.0</td>
    <td>6.9</td>
    <td>2797.3</td>
    <td>Carmel</td>
</tr>

<tr>
    <td>2725</td>
    <td><a href="/player/1981/antony-ricci/" target="_blank">Antony Ricci</a></td>
    <td>48.0</td>
    <td>6.4</td>
    <td>2796.7</td>
    <td>Methuen youth wrestling</td>
</tr>

<tr>
    <td>2726</td>
    <td><a href="/player/2055/cody-pettit/" target="_blank">Cody Pettit</a></td>
    <td>43.4</td>
    <td>6.2</td>
    <td>2792.1</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>2727</td>
    <td><a href="/player/1915/luciano-piazza/" target="_blank">Luciano Piazza</a></td>
    <td>56.0</td>
    <td>7.6</td>
    <td>2792.0</td>
    <td>Seaford</td>
</tr>

<tr>
    <td>2728</td>
    <td><a href="/player/1490/alphonse-silvio/" target="_blank">Alphonse Silvio</a></td>
    <td>46.8</td>
    <td>7.4</td>
    <td>2791.0</td>
    <td>LAW</td>
</tr>

<tr>
    <td>2729</td>
    <td><a href="/player/2196/branden-rang/" target="_blank">Branden Rang</a></td>
    <td>48.8</td>
    <td>7.0</td>
    <td>2789.4</td>
    <td>Bayport Blue Point Phantoms</td>
</tr>

<tr>
    <td>2730</td>
    <td><a href="/player/3218/brooks-poupard/" target="_blank">Brooks Poupard</a></td>
    <td>47.4</td>
    <td>6.7</td>
    <td>2784.1</td>
    <td>Dundee</td>
</tr>

<tr>
    <td>2731</td>
    <td><a href="/player/1866/lucian-othman/" target="_blank">Lucian Othman</a></td>
    <td>50.0</td>
    <td>7.0</td>
    <td>2782.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2732</td>
    <td><a href="/player/2096/aaron-back/" target="_blank">Aaron Back</a></td>
    <td>53.8</td>
    <td>7.1</td>
    <td>2777.6</td>
    <td>MPAL</td>
</tr>

<tr>
    <td>2733</td>
    <td><a href="/player/1566/nolan-hariegel/" target="_blank">Nolan Hariegel</a></td>
    <td>44.0</td>
    <td>6.4</td>
    <td>2763.8</td>
    <td>Carmel</td>
</tr>

<tr>
    <td>2734</td>
    <td><a href="/player/879/charlie-herbert/" target="_blank">Charlie Herbert</a></td>
    <td>46.2</td>
    <td>5.0</td>
    <td>2747.6</td>
    <td>Seaford</td>
</tr>

<tr>
    <td>2735</td>
    <td><a href="/player/3131/brady-bellavia/" target="_blank">Brady Bellavia</a></td>
    <td>42.0</td>
    <td>7.8</td>
    <td>2715.8</td>
    <td>Highland</td>
</tr>

<tr>
    <td>2736</td>
    <td><a href="/player/1982/james-taylor/" target="_blank">James Taylor</a></td>
    <td>41.8</td>
    <td>6.3</td>
    <td>2715.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2737</td>
    <td><a href="/player/2768/teain-ritter/" target="_blank">Teain Ritter</a></td>
    <td>49.4</td>
    <td>7.0</td>
    <td>2702.8</td>
    <td>SV</td>
</tr>

<tr>
    <td>2738</td>
    <td><a href="/player/2946/rhett-higgins/" target="_blank">Rhett Higgins</a></td>
    <td>51.7</td>
    <td>6.9</td>
    <td>2702.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2739</td>
    <td><a href="/player/984/connor-ryan/" target="_blank">Connor Ryan</a></td>
    <td>44.0</td>
    <td>6.1</td>
    <td>2696.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2740</td>
    <td><a href="/player/3109/lucas-sanchez/" target="_blank">Lucas Sanchez</a></td>
    <td>53.0</td>
    <td>6.9</td>
    <td>2695.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2741</td>
    <td><a href="/player/473/annabel-messina/" target="_blank">Annabel Messina</a></td>
    <td>43.6</td>
    <td>4.5</td>
    <td>2691.4</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2742</td>
    <td><a href="/player/1010/mason-johansen/" target="_blank">Mason Johansen</a></td>
    <td>41.8</td>
    <td>5.9</td>
    <td>2672.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2743</td>
    <td><a href="/player/1137/brayden-rosario/" target="_blank">Brayden Rosario</a></td>
    <td>39.8</td>
    <td>4.9</td>
    <td>2672.2</td>
    <td>Babylon</td>
</tr>

<tr>
    <td>2744</td>
    <td><a href="/player/1319/gavin-nagy/" target="_blank">Gavin Nagy</a></td>
    <td>44.0</td>
    <td>6.3</td>
    <td>2653.0</td>
    <td>Lacey/Shore Thing</td>
</tr>

<tr>
    <td>2745</td>
    <td><a href="/player/2153/wesley-nault/" target="_blank">Wesley Nault</a></td>
    <td>38.0</td>
    <td>4.6</td>
    <td>2630.2</td>
    <td>Goffstown Youth Wrestling Club</td>
</tr>

<tr>
    <td>2746</td>
    <td><a href="/player/2398/miacarmela-barro/" target="_blank">MiaCarmela Barro</a></td>
    <td>48.0</td>
    <td>6.8</td>
    <td>2623.4</td>
    <td>Elite Wrestling Academy</td>
</tr>

<tr>
    <td>2747</td>
    <td><a href="/player/2031/michael-beckman/" target="_blank">Michael Beckman</a></td>
    <td>47.6</td>
    <td>4.5</td>
    <td>2619.5</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>2748</td>
    <td><a href="/player/3231/emmett-fournier/" target="_blank">Emmett Fournier</a></td>
    <td>46.3</td>
    <td>7.1</td>
    <td>2613.9</td>
    <td>Michigan Matcats</td>
</tr>

<tr>
    <td>2749</td>
    <td><a href="/player/2255/robert-udle/" target="_blank">Robert Udle</a></td>
    <td>52.8</td>
    <td>6.5</td>
    <td>2612.2</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2750</td>
    <td><a href="/player/2559/nicholas-bove/" target="_blank">NICHOLAS BOVE</a></td>
    <td>50.0</td>
    <td>5.6</td>
    <td>2604.9</td>
    <td>Sachem</td>
</tr>

<tr>
    <td>2751</td>
    <td><a href="/player/591/emily-chin/" target="_blank">Emily Chin</a></td>
    <td>48.0</td>
    <td>4.5</td>
    <td>2596.7</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2752</td>
    <td><a href="/player/1138/lucas-meehan/" target="_blank">Lucas Meehan</a></td>
    <td>41.0</td>
    <td>6.5</td>
    <td>2592.9</td>
    <td>Massapequa</td>
</tr>

<tr>
    <td>2753</td>
    <td><a href="/player/1352/jordan-arenz/" target="_blank">Jordan Arenz</a></td>
    <td>41.0</td>
    <td>7.1</td>
    <td>2592.9</td>
    <td>Spazz</td>
</tr>

<tr>
    <td>2754</td>
    <td><a href="/player/1801/logan-jaworski/" target="_blank">Logan Jaworski</a></td>
    <td>51.6</td>
    <td>7.2</td>
    <td>2581.2</td>
    <td>Back mountain</td>
</tr>

<tr>
    <td>2755</td>
    <td><a href="/player/2358/rocco-pollina/" target="_blank">Rocco Pollina</a></td>
    <td>54.2</td>
    <td>8.8</td>
    <td>2560.4</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2756</td>
    <td><a href="/player/1912/braylen-wood/" target="_blank">Braylen Wood</a></td>
    <td>53.4</td>
    <td>6.0</td>
    <td>2559.5</td>
    <td>Longwood</td>
</tr>

<tr>
    <td>2757</td>
    <td><a href="/player/1331/declan-coleman/" target="_blank">Declan Coleman</a></td>
    <td>53.2</td>
    <td>6.9</td>
    <td>2557.2</td>
    <td>Cordoba Trained</td>
</tr>

<tr>
    <td>2758</td>
    <td><a href="/player/938/michael-maletta/" target="_blank">Michael Maletta</a></td>
    <td>40.0</td>
    <td>7.8</td>
    <td>2553.6</td>
    <td>Kings Park</td>
</tr>

<tr>
    <td>2759</td>
    <td><a href="/player/2259/max-spallina/" target="_blank">Max Spallina</a></td>
    <td>50.0</td>
    <td>6.7</td>
    <td>2551.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2760</td>
    <td><a href="/player/2623/jordan-winston/" target="_blank">Jordan Winston</a></td>
    <td>49.0</td>
    <td>6.2</td>
    <td>2551.9</td>
    <td>Red roots</td>
</tr>

<tr>
    <td>2761</td>
    <td><a href="/player/880/logan-galvez/" target="_blank">Logan Galvez</a></td>
    <td>35.2</td>
    <td>5.7</td>
    <td>2545.6</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2762</td>
    <td><a href="/player/2400/nicholas-cea/" target="_blank">Nicholas Cea</a></td>
    <td>48.4</td>
    <td>7.1</td>
    <td>2539.6</td>
    <td>unknown</td>
</tr>

<tr>
    <td>2763</td>
    <td><a href="/player/2745/colton-hobbs/" target="_blank">Colton Hobbs</a></td>
    <td>44.2</td>
    <td>6.1</td>
    <td>2537.1</td>
    <td>Middletown Wrestlin Club</td>
</tr>

<tr>
    <td>2764</td>
    <td><a href="/player/2399/lucas-casanova/" target="_blank">Lucas Casanova</a></td>
    <td>52.2</td>
    <td>5.9</td>
    <td>2536.7</td>
    <td>Babylon</td>
</tr>

<tr>
    <td>2765</td>
    <td><a href="/player/883/matthew-spathis/" target="_blank">Matthew Spathis</a></td>
    <td>42.8</td>
    <td>7.4</td>
    <td>2532.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2766</td>
    <td><a href="/player/2251/christopher-vultaggio/" target="_blank">Christopher Vultaggio</a></td>
    <td>56.0</td>
    <td>6.8</td>
    <td>2532.2</td>
    <td>Kings Park</td>
</tr>

<tr>
    <td>2767</td>
    <td><a href="/player/2664/boston-nelson/" target="_blank">Boston Nelson</a></td>
    <td>46.4</td>
    <td>5.6</td>
    <td>2521.2</td>
    <td>Standfast</td>
</tr>

<tr>
    <td>2768</td>
    <td><a href="/player/1170/john-saleh/" target="_blank">John Saleh</a></td>
    <td>45.6</td>
    <td>6.1</td>
    <td>2517.3</td>
    <td>Plainedge</td>
</tr>

<tr>
    <td>2769</td>
    <td><a href="/player/2288/ryan-verderosa/" target="_blank">Ryan Verderosa</a></td>
    <td>46.6</td>
    <td>7.3</td>
    <td>2506.8</td>
    <td>Five star</td>
</tr>

<tr>
    <td>2770</td>
    <td><a href="/player/2317/christopher-cannizzaro/" target="_blank">Christopher Cannizzaro</a></td>
    <td>47.1</td>
    <td>7.7</td>
    <td>2505.0</td>
    <td>Phantom</td>
</tr>

<tr>
    <td>2771</td>
    <td><a href="/player/2610/joseph-doody/" target="_blank">Joseph Doody</a></td>
    <td>52.0</td>
    <td>7.5</td>
    <td>2504.9</td>
    <td>Farrison Wrestling Academy</td>
</tr>

<tr>
    <td>2772</td>
    <td><a href="/player/2152/austin-nault/" target="_blank">Austin Nault</a></td>
    <td>38.6</td>
    <td>6.8</td>
    <td>2497.3</td>
    <td>Goffstown Youth Wrestling Club</td>
</tr>

<tr>
    <td>2773</td>
    <td><a href="/player/2077/luca-giamundo/" target="_blank">Luca Giamundo</a></td>
    <td>43.0</td>
    <td>8.0</td>
    <td>2491.3</td>
    <td>Seaford</td>
</tr>

<tr>
    <td>2774</td>
    <td><a href="/player/1016/ryan-colins/" target="_blank">Ryan Colins</a></td>
    <td>41.8</td>
    <td>5.4</td>
    <td>2490.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2775</td>
    <td><a href="/player/3014/liam-brent/" target="_blank">Liam Brent</a></td>
    <td>46.1</td>
    <td>6.3</td>
    <td>2487.4</td>
    <td>Simmons Academy of Wrestling</td>
</tr>

<tr>
    <td>2776</td>
    <td><a href="/player/2133/olivia-tevepaugh/" target="_blank">Olivia Tevepaugh</a></td>
    <td>51.2</td>
    <td>7.1</td>
    <td>2479.9</td>
    <td>DoughGirls</td>
</tr>

<tr>
    <td>2777</td>
    <td><a href="/player/2038/camden-deangelis/" target="_blank">Camden DeAngelis</a></td>
    <td>44.0</td>
    <td>6.4</td>
    <td>2475.6</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>2778</td>
    <td><a href="/player/1164/teagan-mott/" target="_blank">Teagan Mott</a></td>
    <td>45.0</td>
    <td>5.9</td>
    <td>2467.6</td>
    <td>East Hampton</td>
</tr>

<tr>
    <td>2779</td>
    <td><a href="/player/1070/caiden-crusen/" target="_blank">Caiden Crusen</a></td>
    <td>40.0</td>
    <td>6.3</td>
    <td>2467.0</td>
    <td>Lawrence</td>
</tr>

<tr>
    <td>2780</td>
    <td><a href="/player/1420/terynn-pelzer/" target="_blank">Terynn Pelzer</a></td>
    <td>55.4</td>
    <td>6.3</td>
    <td>2450.9</td>
    <td>Strong branch</td>
</tr>

<tr>
    <td>2781</td>
    <td><a href="/player/1962/jaxson-mcpherson/" target="_blank">Jaxson Mcpherson</a></td>
    <td>44.0</td>
    <td>5.8</td>
    <td>2435.6</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>2782</td>
    <td><a href="/player/2070/david-sawyer/" target="_blank">David Sawyer</a></td>
    <td>53.2</td>
    <td>5.6</td>
    <td>2421.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2783</td>
    <td><a href="/player/1838/gavin-zeltmann/" target="_blank">Gavin Zeltmann</a></td>
    <td>44.2</td>
    <td>6.1</td>
    <td>2410.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2784</td>
    <td><a href="/player/485/christopher-oleary/" target="_blank">Christopher O'leary</a></td>
    <td>52.2</td>
    <td>7.5</td>
    <td>2404.5</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2785</td>
    <td><a href="/player/469/richie-tietjen/" target="_blank">Richie Tietjen</a></td>
    <td>44.4</td>
    <td>8.0</td>
    <td>2399.2</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2786</td>
    <td><a href="/player/3337/russell-maloney/" target="_blank">Russell Maloney</a></td>
    <td>48.0</td>
    <td>7.1</td>
    <td>2396.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2787</td>
    <td><a href="/player/1848/reese-devlin/" target="_blank">Reese Devlin</a></td>
    <td>51.8</td>
    <td>7.7</td>
    <td>2387.2</td>
    <td>Smithtown East</td>
</tr>

<tr>
    <td>2788</td>
    <td><a href="/player/2052/jeremiah-pabon-rivera/" target="_blank">Jeremiah Pabon-Rivera</a></td>
    <td>45.8</td>
    <td>6.3</td>
    <td>2382.4</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>2789</td>
    <td><a href="/player/2784/johnny-cambra/" target="_blank">Johnny Cambra</a></td>
    <td>45.5</td>
    <td>5.6</td>
    <td>2377.9</td>
    <td>Mahanoy</td>
</tr>

<tr>
    <td>2790</td>
    <td><a href="/player/2964/maddox-turner/" target="_blank">Maddox Turner</a></td>
    <td>49.8</td>
    <td>5.9</td>
    <td>2376.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2791</td>
    <td><a href="/player/995/brooklyn-coral/" target="_blank">brooklyn coral</a></td>
    <td>44.0</td>
    <td>6.0</td>
    <td>2375.9</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2792</td>
    <td><a href="/player/2417/ryan-evert/" target="_blank">Ryan Evert</a></td>
    <td>44.8</td>
    <td>5.9</td>
    <td>2373.9</td>
    <td>Barn Brothers</td>
</tr>

<tr>
    <td>2793</td>
    <td><a href="/player/2416/caleb-magnani/" target="_blank">Caleb Magnani</a></td>
    <td>41.0</td>
    <td>5.0</td>
    <td>2359.9</td>
    <td>Amityville</td>
</tr>

<tr>
    <td>2794</td>
    <td><a href="/player/3286/kolby-pitzen/" target="_blank">Kolby Pitzen</a></td>
    <td>40.3</td>
    <td>5.3</td>
    <td>2352.4</td>
    <td>Kodiak Attack</td>
</tr>

<tr>
    <td>2795</td>
    <td><a href="/player/679/tommy-anello/" target="_blank">Tommy Anello</a></td>
    <td>36.0</td>
    <td>5.5</td>
    <td>2351.5</td>
    <td>Pat Med</td>
</tr>

<tr>
    <td>2796</td>
    <td><a href="/player/904/jaxson-santiago/" target="_blank">Jaxson Santiago</a></td>
    <td>41.8</td>
    <td>6.6</td>
    <td>2338.2</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2797</td>
    <td><a href="/player/3195/james-catapano/" target="_blank">James Catapano</a></td>
    <td>45.6</td>
    <td>5.6</td>
    <td>2335.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2798</td>
    <td><a href="/player/884/liam-maynard/" target="_blank">Liam Maynard</a></td>
    <td>45.0</td>
    <td>5.5</td>
    <td>2333.8</td>
    <td>All star wrestling- Kings Park</td>
</tr>

<tr>
    <td>2799</td>
    <td><a href="/player/1775/william-hall/" target="_blank">William Hall</a></td>
    <td>48.2</td>
    <td>7.6</td>
    <td>2329.7</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2800</td>
    <td><a href="/player/2612/jaxon-corniel/" target="_blank">Jaxon Corniel</a></td>
    <td>50.0</td>
    <td>6.9</td>
    <td>2304.9</td>
    <td>Farrison wrestling</td>
</tr>

<tr>
    <td>2801</td>
    <td><a href="/player/2263/lucas-matos/" target="_blank">Lucas Matos</a></td>
    <td>43.0</td>
    <td>6.3</td>
    <td>2290.1</td>
    <td>Seaford</td>
</tr>

<tr>
    <td>2802</td>
    <td><a href="/player/967/vincent-cardella/" target="_blank">Vincent Cardella</a></td>
    <td>42.4</td>
    <td>5.7</td>
    <td>2287.4</td>
    <td>Whitman Wildcats</td>
</tr>

<tr>
    <td>2803</td>
    <td><a href="/player/2771/jose-ai-pacheco/" target="_blank">Jose A.I. Pacheco</a></td>
    <td>46.0</td>
    <td>7.0</td>
    <td>2279.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2804</td>
    <td><a href="/player/2390/george-byrd/" target="_blank">George Byrd</a></td>
    <td>49.6</td>
    <td>5.2</td>
    <td>2271.8</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2805</td>
    <td><a href="/player/2253/nolan-lopalo/" target="_blank">Nolan LoPalo</a></td>
    <td>44.6</td>
    <td>5.8</td>
    <td>2270.8</td>
    <td>Babylon</td>
</tr>

<tr>
    <td>2806</td>
    <td><a href="/player/1930/riely-autera/" target="_blank">Riely Autera</a></td>
    <td>45.6</td>
    <td>6.9</td>
    <td>2245.7</td>
    <td>Sachem North</td>
</tr>

<tr>
    <td>2807</td>
    <td><a href="/player/2412/colton-stebbins/" target="_blank">Colton Stebbins</a></td>
    <td>46.6</td>
    <td>5.6</td>
    <td>2239.0</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2808</td>
    <td><a href="/player/1684/jaisen-sharma/" target="_blank">Jaisen Sharma</a></td>
    <td>43.0</td>
    <td>8.1</td>
    <td>2235.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2809</td>
    <td><a href="/player/2818/sawyer-oakes/" target="_blank">Sawyer Oakes</a></td>
    <td>43.0</td>
    <td>6.2</td>
    <td>2235.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2810</td>
    <td><a href="/player/2283/nicholas-pinola/" target="_blank">Nicholas Pinola</a></td>
    <td>49.0</td>
    <td>5.6</td>
    <td>2225.5</td>
    <td>Miller Place</td>
</tr>

<tr>
    <td>2811</td>
    <td><a href="/player/2655/colson-beckley/" target="_blank">Colson Beckley</a></td>
    <td>47.2</td>
    <td>5.5</td>
    <td>2215.4</td>
    <td>Team Tulsa Wrestling Club</td>
</tr>

<tr>
    <td>2812</td>
    <td><a href="/player/3379/tyson-gaskell/" target="_blank">Tyson Gaskell</a></td>
    <td>42.7</td>
    <td>6.2</td>
    <td>2208.7</td>
    <td>Pitbulls</td>
</tr>

<tr>
    <td>2813</td>
    <td><a href="/player/3308/kyle-larocca/" target="_blank">Kyle LaRocca</a></td>
    <td>38.0</td>
    <td>5.8</td>
    <td>2205.4</td>
    <td>Revolution Wrestling</td>
</tr>

<tr>
    <td>2814</td>
    <td><a href="/player/3391/enzo-mccormick/" target="_blank">Enzo McCormick</a></td>
    <td>41.0</td>
    <td>5.5</td>
    <td>2199.5</td>
    <td>Michigan matcats</td>
</tr>

<tr>
    <td>2815</td>
    <td><a href="/player/540/alykco-pinkney/" target="_blank">Alykco Pinkney</a></td>
    <td>38.8</td>
    <td>5.1</td>
    <td>2198.4</td>
    <td>Smwc Wolfpack</td>
</tr>

<tr>
    <td>2816</td>
    <td><a href="/player/2394/greyson-larkin/" target="_blank">Greyson Larkin</a></td>
    <td>49.4</td>
    <td>4.7</td>
    <td>2197.6</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2817</td>
    <td><a href="/player/2409/peter-capogna/" target="_blank">Peter Capogna</a></td>
    <td>40.2</td>
    <td>5.1</td>
    <td>2196.2</td>
    <td>unknown</td>
</tr>

<tr>
    <td>2818</td>
    <td><a href="/player/2018/luke-byrne/" target="_blank">Luke Byrne</a></td>
    <td>39.6</td>
    <td>5.5</td>
    <td>2187.2</td>
    <td>Litchfield</td>
</tr>

<tr>
    <td>2819</td>
    <td><a href="/player/1743/griffin-caliente/" target="_blank">Griffin Caliente</a></td>
    <td>41.2</td>
    <td>6.0</td>
    <td>2182.0</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2820</td>
    <td><a href="/player/2755/lincoln-scicchitano/" target="_blank">Lincoln Scicchitano</a></td>
    <td>41.1</td>
    <td>6.6</td>
    <td>2158.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2821</td>
    <td><a href="/player/3253/rylee-carreira/" target="_blank">Rylee Carreira</a></td>
    <td>44.0</td>
    <td>7.2</td>
    <td>2153.0</td>
    <td>Pride</td>
</tr>

<tr>
    <td>2822</td>
    <td><a href="/player/595/dylan-laviano/" target="_blank">Dylan Laviano</a></td>
    <td>39.8</td>
    <td>4.7</td>
    <td>2125.4</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2823</td>
    <td><a href="/player/2385/richard-didonato/" target="_blank">Richard DiDonato</a></td>
    <td>50.0</td>
    <td>5.2</td>
    <td>2122.5</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2824</td>
    <td><a href="/player/2293/james-marano/" target="_blank">James Marano</a></td>
    <td>46.2</td>
    <td>7.5</td>
    <td>2121.4</td>
    <td>Bethpage</td>
</tr>

<tr>
    <td>2825</td>
    <td><a href="/player/2154/jackson-beaudoin/" target="_blank">Jackson Beaudoin</a></td>
    <td>42.6</td>
    <td>4.5</td>
    <td>2118.4</td>
    <td>Goffstownffstown Youth Wrestling Club</td>
</tr>

<tr>
    <td>2826</td>
    <td><a href="/player/844/brody-barany/" target="_blank">Brody Barany</a></td>
    <td>38.0</td>
    <td>5.4</td>
    <td>2116.4</td>
    <td>Dynamic Wrestling</td>
</tr>

<tr>
    <td>2827</td>
    <td><a href="/player/1360/natas-gardella/" target="_blank">Natas Gardella</a></td>
    <td>43.6</td>
    <td>4.5</td>
    <td>2110.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2828</td>
    <td><a href="/player/2580/william-singer/" target="_blank">William Singer</a></td>
    <td>54.4</td>
    <td>6.2</td>
    <td>2081.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2829</td>
    <td><a href="/player/1940/cameron-chaput/" target="_blank">Cameron Chaput</a></td>
    <td>43.0</td>
    <td>5.6</td>
    <td>2068.8</td>
    <td>Goffstown Youth Wrestling Club</td>
</tr>

<tr>
    <td>2830</td>
    <td><a href="/player/2292/mateo-camacho/" target="_blank">Mateo Camacho</a></td>
    <td>48.0</td>
    <td>7.3</td>
    <td>2051.9</td>
    <td>Bethpage PAL</td>
</tr>

<tr>
    <td>2831</td>
    <td><a href="/player/2160/declan-lambert/" target="_blank">Declan Lambert</a></td>
    <td>45.2</td>
    <td>5.3</td>
    <td>2051.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2832</td>
    <td><a href="/player/1444/joey-lanzilli/" target="_blank">Joey Lanzilli</a></td>
    <td>39.0</td>
    <td>5.8</td>
    <td>2047.6</td>
    <td>Ridgefield</td>
</tr>

<tr>
    <td>2833</td>
    <td><a href="/player/3359/adalynn-anthony/" target="_blank">Adalynn Anthony</a></td>
    <td>43.0</td>
    <td>7.5</td>
    <td>2011.7</td>
    <td>Black Widows</td>
</tr>

<tr>
    <td>2834</td>
    <td><a href="/player/3123/jaxon-kirsch/" target="_blank">Jaxon Kirsch</a></td>
    <td>46.4</td>
    <td>4.7</td>
    <td>2010.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2835</td>
    <td><a href="/player/1788/johnny-cambra/" target="_blank">Johnny Cambra</a></td>
    <td>41.2</td>
    <td>4.8</td>
    <td>2005.3</td>
    <td>Mahanoy</td>
</tr>

<tr>
    <td>2836</td>
    <td><a href="/player/1845/tristan-minton/" target="_blank">Tristan Minton</a></td>
    <td>45.0</td>
    <td>6.9</td>
    <td>2000.3</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2837</td>
    <td><a href="/player/2413/carter-dire/" target="_blank">Carter DiRe</a></td>
    <td>42.4</td>
    <td>6.4</td>
    <td>1995.9</td>
    <td>Babylon Kid Wrestling</td>
</tr>

<tr>
    <td>2838</td>
    <td><a href="/player/856/brayden-romano/" target="_blank">Brayden Romano</a></td>
    <td>41.4</td>
    <td>4.9</td>
    <td>1987.8</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2839</td>
    <td><a href="/player/2410/michael-parendo/" target="_blank">Michael Parendo</a></td>
    <td>48.4</td>
    <td>5.8</td>
    <td>1984.7</td>
    <td>Babylon Kid Wrestling</td>
</tr>

<tr>
    <td>2840</td>
    <td><a href="/player/2761/coury-dumont/" target="_blank">Coury DuMont</a></td>
    <td>38.7</td>
    <td>5.4</td>
    <td>1961.2</td>
    <td>Scorpions</td>
</tr>

<tr>
    <td>2841</td>
    <td><a href="/player/3362/griffin-rodriguez/" target="_blank">Griffin Rodriguez</a></td>
    <td>44.0</td>
    <td>4.8</td>
    <td>1953.0</td>
    <td>Elite</td>
</tr>

<tr>
    <td>2842</td>
    <td><a href="/player/2418/dylan-baroni/" target="_blank">Dylan Baroni</a></td>
    <td>51.0</td>
    <td>4.8</td>
    <td>1946.3</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2843</td>
    <td><a href="/player/2415/alex-cea/" target="_blank">Alex Cea</a></td>
    <td>39.4</td>
    <td>5.7</td>
    <td>1932.8</td>
    <td>Rocky Point</td>
</tr>

<tr>
    <td>2844</td>
    <td><a href="/player/1355/neal-macdonald/" target="_blank">Neal Macdonald</a></td>
    <td>40.6</td>
    <td>8.2</td>
    <td>1931.1</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2845</td>
    <td><a href="/player/2135/austin-davenport/" target="_blank">Austin Davenport</a></td>
    <td>40.6</td>
    <td>5.7</td>
    <td>1929.4</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>2846</td>
    <td><a href="/player/2936/victoria-soto/" target="_blank">Victoria Soto</a></td>
    <td>39.7</td>
    <td>7.4</td>
    <td>1924.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2847</td>
    <td><a href="/player/895/caleb-castracane/" target="_blank">Caleb Castracane</a></td>
    <td>37.2</td>
    <td>6.3</td>
    <td>1912.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2848</td>
    <td><a href="/player/2839/freddie-gasperone/" target="_blank">Freddie Gasperone</a></td>
    <td>41.0</td>
    <td>5.5</td>
    <td>1911.8</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2849</td>
    <td><a href="/player/2733/beau-mckeown/" target="_blank">Beau McKeown</a></td>
    <td>39.7</td>
    <td>5.2</td>
    <td>1886.9</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2850</td>
    <td><a href="/player/2195/cash-mcivor/" target="_blank">Cash McIvor</a></td>
    <td>42.2</td>
    <td>6.4</td>
    <td>1879.1</td>
    <td>Bayport Blue Point</td>
</tr>

<tr>
    <td>2851</td>
    <td><a href="/player/1964/christopher-dawkins/" target="_blank">Christopher Dawkins</a></td>
    <td>40.0</td>
    <td>5.5</td>
    <td>1867.0</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>2852</td>
    <td><a href="/player/2414/joseph-selby/" target="_blank">Joseph Selby</a></td>
    <td>40.0</td>
    <td>4.9</td>
    <td>1849.5</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2853</td>
    <td><a href="/player/2391/anthony-delluniversita/" target="_blank">Anthony DellUniversita</a></td>
    <td>47.6</td>
    <td>5.8</td>
    <td>1815.8</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2854</td>
    <td><a href="/player/2138/finley-cifuentes/" target="_blank">Finley Cifuentes</a></td>
    <td>40.2</td>
    <td>6.7</td>
    <td>1811.6</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2855</td>
    <td><a href="/player/2947/dane-schaffer/" target="_blank">Dane Schaffer</a></td>
    <td>47.1</td>
    <td>5.6</td>
    <td>1784.7</td>
    <td>Lackawanna Trail</td>
</tr>

<tr>
    <td>2856</td>
    <td><a href="/player/3036/zeth-dykhouse/" target="_blank">Zeth Dykhouse</a></td>
    <td>41.7</td>
    <td>5.7</td>
    <td>1772.1</td>
    <td>Lowell WC</td>
</tr>

<tr>
    <td>2857</td>
    <td><a href="/player/1547/john-heckler/" target="_blank">John Heckler</a></td>
    <td>40.0</td>
    <td>4.5</td>
    <td>1764.9</td>
    <td>NYWA</td>
</tr>

<tr>
    <td>2858</td>
    <td><a href="/player/2046/michael-lobberecht/" target="_blank">Michael Lobberecht</a></td>
    <td>44.0</td>
    <td>4.7</td>
    <td>1738.2</td>
    <td>Salem Bulldogs</td>
</tr>

<tr>
    <td>2859</td>
    <td><a href="/player/1963/robby-varsalone/" target="_blank">Robby Varsalone</a></td>
    <td>38.6</td>
    <td>5.0</td>
    <td>1719.7</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>2860</td>
    <td><a href="/player/2109/brody-byrne/" target="_blank">Brody Byrne</a></td>
    <td>40.0</td>
    <td>5.5</td>
    <td>1670.5</td>
    <td>Fitchburg wrestling</td>
</tr>

<tr>
    <td>2861</td>
    <td><a href="/player/982/brady-auld/" target="_blank">Brady auld</a></td>
    <td>37.0</td>
    <td>5.2</td>
    <td>1668.3</td>
    <td>North Babylon</td>
</tr>

<tr>
    <td>2862</td>
    <td><a href="/player/3393/crue-dennis/" target="_blank">Crue Dennis</a></td>
    <td>40.5</td>
    <td>7.4</td>
    <td>1634.4</td>
    <td>Lowel</td>
</tr>

<tr>
    <td>2863</td>
    <td><a href="/player/2403/travis-lemaire/" target="_blank">Travis Lemaire</a></td>
    <td>42.2</td>
    <td>5.4</td>
    <td>1629.1</td>
    <td>Five star</td>
</tr>

<tr>
    <td>2864</td>
    <td><a href="/player/2832/dylan-logue/" target="_blank">Dylan Logue</a></td>
    <td>47.1</td>
    <td>5.1</td>
    <td>1561.7</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2865</td>
    <td><a href="/player/1192/joseph-distano/" target="_blank">Joseph Distano</a></td>
    <td>37.6</td>
    <td>4.5</td>
    <td>1521.3</td>
    <td>Cordoba trained</td>
</tr>

<tr>
    <td>2866</td>
    <td><a href="/player/2758/jacob-ernst/" target="_blank">Jacob Ernst</a></td>
    <td>42.3</td>
    <td>5.3</td>
    <td>1519.5</td>
    <td>Anthracite elite</td>
</tr>

<tr>
    <td>2867</td>
    <td><a href="/player/2212/anthony-falsitta/" target="_blank">Anthony Falsitta</a></td>
    <td>39.0</td>
    <td>5.5</td>
    <td>1510.3</td>
    <td>Kings Park</td>
</tr>

<tr>
    <td>2868</td>
    <td><a href="/player/2880/kai-vitale/" target="_blank">Kai Vitale</a></td>
    <td>35.8</td>
    <td>4.5</td>
    <td>1507.2</td>
    <td>Altered Beast Wrestling Academy</td>
</tr>

<tr>
    <td>2869</td>
    <td><a href="/player/2156/roy-mchenry/" target="_blank">Roy McHenry</a></td>
    <td>38.0</td>
    <td>6.0</td>
    <td>1505.4</td>
    <td>Nashua</td>
</tr>

<tr>
    <td>2870</td>
    <td><a href="/player/2405/enzo-morbillo/" target="_blank">Enzo Morbillo</a></td>
    <td>45.6</td>
    <td>6.0</td>
    <td>1439.4</td>
    <td>Rocky point eagles</td>
</tr>

<tr>
    <td>2871</td>
    <td><a href="/player/2014/henry-levasseur/" target="_blank">Henry Levasseur</a></td>
    <td>43.0</td>
    <td>5.7</td>
    <td>1363.4</td>
    <td>Litchfield</td>
</tr>

<tr>
    <td>2872</td>
    <td><a href="/player/2381/jameson-costello/" target="_blank">Jameson Costello</a></td>
    <td>40.4</td>
    <td>5.6</td>
    <td>1355.0</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2873</td>
    <td><a href="/player/2408/brodie-royle/" target="_blank">Brodie Royle</a></td>
    <td>40.8</td>
    <td>5.3</td>
    <td>1338.8</td>
    <td>Babylon Kid Wrestling</td>
</tr>

<tr>
    <td>2874</td>
    <td><a href="/player/1952/samuel-dougherty/" target="_blank">Samuel Dougherty</a></td>
    <td>36.0</td>
    <td>4.6</td>
    <td>1329.7</td>
    <td>Jr Astros</td>
</tr>

<tr>
    <td>2875</td>
    <td><a href="/player/2304/joseph-triburgo/" target="_blank">Joseph Triburgo</a></td>
    <td>35.6</td>
    <td>6.9</td>
    <td>1258.3</td>
    <td>Longwood Lions</td>
</tr>

<tr>
    <td>2876</td>
    <td><a href="/player/2898/kiergan-beardsley/" target="_blank">Kiergan Beardsley</a></td>
    <td>38.6</td>
    <td>5.8</td>
    <td>1205.3</td>
    <td>Fenton Youth Wrestling</td>
</tr>

<tr>
    <td>2877</td>
    <td><a href="/player/3219/briggs-poupard/" target="_blank">Briggs Poupard</a></td>
    <td>32.7</td>
    <td>4.5</td>
    <td>1177.0</td>
    <td>Dundee</td>
</tr>

<tr>
    <td>2878</td>
    <td><a href="/player/1349/zachary-jackson/" target="_blank">Zachary Jackson</a></td>
    <td>34.0</td>
    <td>3.9</td>
    <td>1038.3</td>
    <td>Spazz</td>
</tr>

<tr>
    <td>2879</td>
    <td><a href="/player/1807/landon-moser/" target="_blank">Landon Moser</a></td>
    <td>None</td>
    <td>8.3</td>
    <td>1000.0</td>
    <td>Back Mtn</td>
</tr>

<tr>
    <td>2880</td>
    <td><a href="/player/1994/alex-howe/" target="_blank">Alex Howe</a></td>
    <td>None</td>
    <td>12.5</td>
    <td>1000.0</td>
    <td>Green Heat</td>
</tr>

<tr>
    <td>2881</td>
    <td><a href="/player/2565/justin-reinke/" target="_blank">Justin Reinke</a></td>
    <td>None</td>
    <td>3.0</td>
    <td>1000.0</td>
    <td>Freeport</td>
</tr>

<tr>
    <td>2882</td>
    <td><a href="/player/2595/jasai-mckay/" target="_blank">Jasai Mckay</a></td>
    <td>None</td>
    <td>14.0</td>
    <td>1000.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2883</td>
    <td><a href="/player/2598/keith-king/" target="_blank">Keith King</a></td>
    <td>None</td>
    <td>10.1</td>
    <td>1000.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2884</td>
    <td><a href="/player/2644/jordan-padilla/" target="_blank">Jordan Padilla</a></td>
    <td>None</td>
    <td>5.8</td>
    <td>1000.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2885</td>
    <td><a href="/player/2684/epenesa-elison/" target="_blank">Epenesa Elison</a></td>
    <td>None</td>
    <td>11.1</td>
    <td>1000.0</td>
    <td>Tribe Wrestling</td>
</tr>

<tr>
    <td>2886</td>
    <td><a href="/player/2700/mackinzie-lovejoy/" target="_blank">Mackinzie Lovejoy</a></td>
    <td>None</td>
    <td>13.3</td>
    <td>1000.0</td>
    <td>standfast</td>
</tr>

<tr>
    <td>2887</td>
    <td><a href="/player/2813/anthony-rodreigez/" target="_blank">anthony rodreigez</a></td>
    <td>None</td>
    <td>12.6</td>
    <td>1000.0</td>
    <td>dynamic</td>
</tr>

<tr>
    <td>2888</td>
    <td><a href="/player/2855/bradyn-tompkins/" target="_blank">Bradyn Tompkins</a></td>
    <td>None</td>
    <td>9.1</td>
    <td>1000.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2889</td>
    <td><a href="/player/3054/dawson-miller/" target="_blank">Dawson Miller</a></td>
    <td>None</td>
    <td>17.3</td>
    <td>1000.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2890</td>
    <td><a href="/player/3055/cadon-waatti/" target="_blank">Cadon Waatti</a></td>
    <td>None</td>
    <td>12.8</td>
    <td>1000.0</td>
    <td>Michigan Revolution</td>
</tr>

<tr>
    <td>2891</td>
    <td><a href="/player/3063/brett-redner/" target="_blank">Brett Redner</a></td>
    <td>None</td>
    <td>17.2</td>
    <td>1000.0</td>
    <td>Butler H.S.</td>
</tr>

<tr>
    <td>2892</td>
    <td><a href="/player/3071/jericko-jackson/" target="_blank">jericko jackson</a></td>
    <td>None</td>
    <td>14.2</td>
    <td>1000.0</td>
    <td>Jackson’s wrestling</td>
</tr>

<tr>
    <td>2893</td>
    <td><a href="/player/3201/grey-henecker/" target="_blank">Grey Henecker</a></td>
    <td>None</td>
    <td>9.9</td>
    <td>1000.0</td>
    <td>Glen Rock Panthers</td>
</tr>

<tr>
    <td>2894</td>
    <td><a href="/player/3207/george-binikos/" target="_blank">George Binikos</a></td>
    <td>None</td>
    <td>16.2</td>
    <td>1000.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2895</td>
    <td><a href="/player/3213/harry-etter/" target="_blank">Harry Etter</a></td>
    <td>None</td>
    <td>7.4</td>
    <td>1000.0</td>
    <td>RedNose Wrestling</td>
</tr>

<tr>
    <td>2896</td>
    <td><a href="/player/3377/sebastian-andidero/" target="_blank">Sebastian Andidero</a></td>
    <td>None</td>
    <td>7.8</td>
    <td>1000.0</td>
    <td>Deep roots</td>
</tr>

<tr>
    <td>2897</td>
    <td><a href="/player/3395/carl-nihranz/" target="_blank">Carl Nihranz</a></td>
    <td>None</td>
    <td>12.9</td>
    <td>1000.0</td>
    <td></td>
</tr>

<tr>
    <td>2898</td>
    <td><a href="/player/3419/camdyn-watts/" target="_blank">Camdyn Watts</a></td>
    <td>None</td>
    <td>8.7</td>
    <td>1000.0</td>
    <td>Mavericks</td>
</tr>

<tr>
    <td>2899</td>
    <td><a href="/player/3429/dylan-hersh/" target="_blank">Dylan Hersh</a></td>
    <td>None</td>
    <td>12.7</td>
    <td>1000.0</td>
    <td>Hopewell</td>
</tr>

<tr>
    <td>2900</td>
    <td><a href="/player/3439/nicholas-harary/" target="_blank">Nicholas Harary</a></td>
    <td>None</td>
    <td>13.6</td>
    <td>1000.0</td>
    <td>FilipeTrained Academy</td>
</tr>

<tr>
    <td>2901</td>
    <td><a href="/player/3440/justin-young/" target="_blank">Justin Young</a></td>
    <td>None</td>
    <td>15.5</td>
    <td>1000.0</td>
    <td>Elite</td>
</tr>

<tr>
    <td>2902</td>
    <td><a href="/player/3443/ian-spicer/" target="_blank">Ian Spicer</a></td>
    <td>None</td>
    <td>13.6</td>
    <td>1000.0</td>
    <td>Shore thing</td>
</tr>

<tr>
    <td>2903</td>
    <td><a href="/player/3444/jonathan-luehmann/" target="_blank">Jonathan Luehmann</a></td>
    <td>None</td>
    <td>13.9</td>
    <td>1000.0</td>
    <td>Filipetrained</td>
</tr>

<tr>
    <td>2904</td>
    <td><a href="/player/3445/mason-parks/" target="_blank">Mason Parks</a></td>
    <td>None</td>
    <td>13.3</td>
    <td>1000.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2905</td>
    <td><a href="/player/3446/declan-hunter/" target="_blank">Declan Hunter</a></td>
    <td>None</td>
    <td>6.3</td>
    <td>1000.0</td>
    <td>South Plainfield</td>
</tr>

<tr>
    <td>2906</td>
    <td><a href="/player/3447/cruise-wright/" target="_blank">Cruise Wright</a></td>
    <td>None</td>
    <td>5.1</td>
    <td>1000.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2907</td>
    <td><a href="/player/3448/tj-bushey/" target="_blank">TJ Bushey</a></td>
    <td>None</td>
    <td>8.8</td>
    <td>1000.0</td>
    <td></td>
</tr>

<tr>
    <td>2908</td>
    <td><a href="/player/3449/michael-farrell/" target="_blank">Michael Farrell</a></td>
    <td>None</td>
    <td>10.2</td>
    <td>1000.0</td>
    <td>Kenilworth</td>
</tr>

<tr>
    <td>2909</td>
    <td><a href="/player/3450/ryan-goldstein/" target="_blank">Ryan Goldstein</a></td>
    <td>None</td>
    <td>12.4</td>
    <td>1000.0</td>
    <td>Rhino</td>
</tr>

<tr>
    <td>2910</td>
    <td><a href="/player/3451/ed-cross/" target="_blank">Ed Cross</a></td>
    <td>None</td>
    <td>6.0</td>
    <td>1000.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2911</td>
    <td><a href="/player/3452/dylan-serrano/" target="_blank">Dylan Serrano</a></td>
    <td>None</td>
    <td>6.0</td>
    <td>1000.0</td>
    <td>Massapequa</td>
</tr>

<tr>
    <td>2912</td>
    <td><a href="/player/3453/robert-dizengof/" target="_blank">Robert Dizengof</a></td>
    <td>None</td>
    <td>13.8</td>
    <td>1000.0</td>
    <td>Long Beach Gladiators</td>
</tr>

<tr>
    <td>2913</td>
    <td><a href="/player/3454/paul-hammond/" target="_blank">Paul Hammond</a></td>
    <td>None</td>
    <td>16.2</td>
    <td>1000.0</td>
    <td>Tigerstyle</td>
</tr>

<tr>
    <td>2914</td>
    <td><a href="/player/3455/jeffrey-smith/" target="_blank">Jeffrey Smith</a></td>
    <td>None</td>
    <td>11.2</td>
    <td>1000.0</td>
    <td>Pride/Clayton</td>
</tr>

<tr>
    <td>2915</td>
    <td><a href="/player/3456/gerard-marrone/" target="_blank">Gerard Marrone</a></td>
    <td>None</td>
    <td>13.7</td>
    <td>1000.0</td>
    <td>Stimson Middle School 1 year</td>
</tr>

<tr>
    <td>2916</td>
    <td><a href="/player/3457/joseph-camilleri/" target="_blank">Joseph Camilleri</a></td>
    <td>None</td>
    <td>15.5</td>
    <td>1000.0</td>
    <td>Monmouth Regional High School</td>
</tr>

<tr>
    <td>2917</td>
    <td><a href="/player/3458/alex-poissant/" target="_blank">Alex Poissant</a></td>
    <td>None</td>
    <td>16.4</td>
    <td>1000.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2918</td>
    <td><a href="/player/3459/mykyta-khremli/" target="_blank">Mykyta Khremli</a></td>
    <td>None</td>
    <td>17.5</td>
    <td>1000.0</td>
    <td>Dynamic Wrestling</td>
</tr>

<tr>
    <td>2919</td>
    <td><a href="/player/3460/ryan-santee/" target="_blank">Ryan Santee</a></td>
    <td>None</td>
    <td>8.2</td>
    <td>1000.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2920</td>
    <td><a href="/player/3461/connor-king/" target="_blank">Connor King</a></td>
    <td>None</td>
    <td>10.2</td>
    <td>1000.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2921</td>
    <td><a href="/player/2402/jackson-gilmore/" target="_blank">Jackson Gilmore</a></td>
    <td>36.6</td>
    <td>4.8</td>
    <td>993.8</td>
    <td>VHW</td>
</tr>

<tr>
    <td>2922</td>
    <td><a href="/player/2384/logan-moskowitz/" target="_blank">Logan Moskowitz</a></td>
    <td>43.0</td>
    <td>5.3</td>
    <td>912.6</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2923</td>
    <td><a href="/player/2388/alex-webb/" target="_blank">Alex Webb</a></td>
    <td>40.2</td>
    <td>5.8</td>
    <td>852.4</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2924</td>
    <td><a href="/player/2404/ryan-lanning/" target="_blank">Ryan Lanning</a></td>
    <td>37.0</td>
    <td>4.1</td>
    <td>761.6</td>
    <td>unknown</td>
</tr>

<tr>
    <td>2925</td>
    <td><a href="/player/3428/cooper-happel/" target="_blank">Cooper Happel</a></td>
    <td>None</td>
    <td>7.9</td>
    <td>700.0</td>
    <td>N/A</td>
</tr>

<tr>
    <td>2926</td>
    <td><a href="/player/2386/enzo-algieri/" target="_blank">Enzo Algieri</a></td>
    <td>36.0</td>
    <td>4.7</td>
    <td>634.5</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2927</td>
    <td><a href="/player/2393/dominic-cardella/" target="_blank">Dominic Cardella</a></td>
    <td>36.8</td>
    <td>4.5</td>
    <td>589.7</td>
    <td>Wildcats</td>
</tr>

<tr>
    <td>2928</td>
    <td><a href="/player/2387/anthony-giannuzzi/" target="_blank">Anthony Giannuzzi</a></td>
    <td>36.8</td>
    <td>4.9</td>
    <td>514.7</td>
    <td>Dynamic</td>
</tr>

<tr>
    <td>2929</td>
    <td><a href="/player/3417/rj-parker/" target="_blank">RJ Parker</a></td>
    <td>None</td>
    <td>7.4</td>
    <td>400.0</td>
    <td>Manchester, MD</td>
</tr>

<tr>
    <td>2930</td>
    <td><a href="/player/2673/camdon-farrell/" target="_blank">Camdon Farrell</a></td>
    <td>30.4</td>
    <td>5.5</td>
    <td>-132.5</td>
    <td>Kentwood</td>
</tr>

<tr>
    <td>2931</td>
    <td><a href="/player/2383/sophia-schulz/" target="_blank">Sophia Schulz</a></td>
    <td>29.0</td>
    <td>3.2</td>
    <td>-572.9</td>
    <td>Wildcats</td>
</tr>`

function levenshteinDistance(a, b) {
    // Jason Layton added this line, to make it all lowercase:
    a = a.toLowerCase()
    b = b.toLowerCase()

    // Create empty edit distance matrix for all possible modifications of
    // substrings of a to substrings of b.
    const distanceMatrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));
  
    // Fill the first row of the matrix.
    // If this is first row then we're transforming empty string to a.
    // In this case the number of transformations equals to size of a substring.
    for (let i = 0; i <= a.length; i += 1) {
      distanceMatrix[0][i] = i;
    }
  
    // Fill the first column of the matrix.
    // If this is first column then we're transforming empty string to b.
    // In this case the number of transformations equals to size of b substring.
    for (let j = 0; j <= b.length; j += 1) {
      distanceMatrix[j][0] = j;
    }
  
    for (let j = 1; j <= b.length; j += 1) {
      for (let i = 1; i <= a.length; i += 1) {
        const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
        distanceMatrix[j][i] = Math.min(
          distanceMatrix[j][i - 1] + 1, // deletion
          distanceMatrix[j - 1][i] + 1, // insertion
          distanceMatrix[j - 1][i - 1] + indicator, // substitution
        );
      }
    }
  
    return distanceMatrix[b.length][a.length];
  }

let wrestlerArray = rankingList
    .split('<tr>')
    .slice(1)
    .map(row => row
        .slice(0,-6)
        .split('<td>')
        .slice(1)
        .map(col => col
            .slice(0,-6)
            )
        )
    .reduce((acc, [rank,name,weight,age,WAR,team])=>{
        acc.push({
            rank,
            name,
            weight,
            age,
            WAR,
            team
        });
        return acc;
    }, [])

for (wrestlerIndex in wrestlerArray){
    let wrestlerName = wrestlerArray[wrestlerIndex].name.split('>')
    .slice(1,2)
    [0].slice(0,-3)
    
    wrestlerArray[wrestlerIndex].name = wrestlerName
}

let counter = 0

for (wrestlerIndex in wrestlerArray){
    for (otherWrestlerIndex in wrestlerArray){
        if (wrestlerIndex < otherWrestlerIndex){
            let distance = levenshteinDistance(wrestlerArray[wrestlerIndex].name, wrestlerArray[otherWrestlerIndex].name)
            if (distance < 2){
                console.log(`${wrestlerArray[wrestlerIndex].name} might be the same person as ${wrestlerArray[otherWrestlerIndex].name}`)
                counter++
            }
        }
    }
}

console.log(`returned a total of ${counter/2} potential duplicates`)