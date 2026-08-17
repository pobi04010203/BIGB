// report.py 가 만든 사본이다. 직접 고치지 말 것.
window.SITE_DATA = {
 "site": {
  "width_m": 100,
  "depth_m": 60,
  "voxel_m": 2
 },
 "camera_budget": 8,
 "threshold": 0.5,
 "mode": "optimization",
 "cameras": [
  {
   "id": "c_b00",
   "x": 10.0,
   "y": 1.0,
   "z": 6.0,
   "mount": "boundary_pole",
   "yaw_deg": 45.0
  },
  {
   "id": "c_b01",
   "x": 10.0,
   "y": 59.0,
   "z": 6.0,
   "mount": "boundary_pole",
   "yaw_deg": 315.0
  },
  {
   "id": "c_b02",
   "x": 30.0,
   "y": 1.0,
   "z": 6.0,
   "mount": "boundary_pole",
   "yaw_deg": 45.0
  },
  {
   "id": "c_b03",
   "x": 30.0,
   "y": 59.0,
   "z": 6.0,
   "mount": "boundary_pole",
   "yaw_deg": 315.0
  },
  {
   "id": "c_b04",
   "x": 50.0,
   "y": 1.0,
   "z": 6.0,
   "mount": "boundary_pole",
   "yaw_deg": 60.0
  },
  {
   "id": "c_b05",
   "x": 50.0,
   "y": 59.0,
   "z": 6.0,
   "mount": "boundary_pole",
   "yaw_deg": 240.0
  },
  {
   "id": "c_b06",
   "x": 70.0,
   "y": 1.0,
   "z": 6.0,
   "mount": "boundary_pole",
   "yaw_deg": 135.0
  },
  {
   "id": "c_b07",
   "x": 70.0,
   "y": 59.0,
   "z": 6.0,
   "mount": "boundary_pole",
   "yaw_deg": 225.0
  },
  {
   "id": "c_b08",
   "x": 90.0,
   "y": 1.0,
   "z": 6.0,
   "mount": "boundary_pole",
   "yaw_deg": 135.0
  },
  {
   "id": "c_b09",
   "x": 90.0,
   "y": 59.0,
   "z": 6.0,
   "mount": "boundary_pole",
   "yaw_deg": 225.0
  },
  {
   "id": "c_b10",
   "x": 1.0,
   "y": 10.0,
   "z": 6.0,
   "mount": "boundary_pole",
   "yaw_deg": 30.0
  },
  {
   "id": "c_b11",
   "x": 99.0,
   "y": 10.0,
   "z": 6.0,
   "mount": "boundary_pole",
   "yaw_deg": 150.0
  },
  {
   "id": "c_b12",
   "x": 1.0,
   "y": 30.0,
   "z": 6.0,
   "mount": "boundary_pole",
   "yaw_deg": 0.0
  },
  {
   "id": "c_b13",
   "x": 99.0,
   "y": 30.0,
   "z": 6.0,
   "mount": "boundary_pole",
   "yaw_deg": 180.0
  },
  {
   "id": "c_b14",
   "x": 1.0,
   "y": 50.0,
   "z": 6.0,
   "mount": "boundary_pole",
   "yaw_deg": 330.0
  },
  {
   "id": "c_b15",
   "x": 99.0,
   "y": 50.0,
   "z": 6.0,
   "mount": "boundary_pole",
   "yaw_deg": 210.0
  },
  {
   "id": "c_k16",
   "x": 30.0,
   "y": 22.0,
   "z": 13.0,
   "mount": "core_top",
   "yaw_deg": 315.0
  },
  {
   "id": "c_k17",
   "x": 30.0,
   "y": 38.0,
   "z": 13.0,
   "mount": "core_top",
   "yaw_deg": 45.0
  },
  {
   "id": "c_k18",
   "x": 70.0,
   "y": 22.0,
   "z": 13.0,
   "mount": "core_top",
   "yaw_deg": 225.0
  },
  {
   "id": "c_k19",
   "x": 70.0,
   "y": 38.0,
   "z": 13.0,
   "mount": "core_top",
   "yaw_deg": 135.0
  },
  {
   "id": "c_t20",
   "x": 42.0,
   "y": 22.0,
   "z": 25.0,
   "mount": "tower_crane",
   "yaw_deg": 315.0
  },
  {
   "id": "c_t21",
   "x": 58.0,
   "y": 22.0,
   "z": 25.0,
   "mount": "tower_crane",
   "yaw_deg": 225.0
  },
  {
   "id": "c_t22",
   "x": 42.0,
   "y": 38.0,
   "z": 25.0,
   "mount": "tower_crane",
   "yaw_deg": 45.0
  },
  {
   "id": "c_t23",
   "x": 58.0,
   "y": 38.0,
   "z": 25.0,
   "mount": "tower_crane",
   "yaw_deg": 135.0
  }
 ],
 "aim": {
  "hfov_deg": 90.0,
  "yaw_step_deg": 15,
  "note": "§5.2 가 지향을 정하지 않아, 카메라마다 자기 위험가중 가시량을 최대로 만드는 방위를 15° 간격 전수 탐색으로 골랐다"
 },
 "placements": {
  "geometric": {
   "camera_ids": [
    "c_b04",
    "c_b05",
    "c_b09",
    "c_b00",
    "c_b02",
    "c_b07",
    "c_b11",
    "c_b14"
   ],
   "WDR": 0.6682,
   "fail_voxel_count": 334,
   "fail_zones": [
    {
     "voxel_id": "v_0000",
     "x": 1.0,
     "y": 1.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3245,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_0001",
     "x": 3.0,
     "y": 1.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3404,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_0002",
     "x": 5.0,
     "y": 1.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3582,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_0003",
     "x": 7.0,
     "y": 1.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3763,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_0004",
     "x": 9.0,
     "y": 1.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3948,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_0005",
     "x": 11.0,
     "y": 1.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4151,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_0050",
     "x": 1.0,
     "y": 3.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3261,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_0051",
     "x": 3.0,
     "y": 3.0,
     "w": 1,
     "zones": [],
     "P_total": 0.342,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_0052",
     "x": 5.0,
     "y": 3.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3598,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_0053",
     "x": 7.0,
     "y": 3.0,
     "w": 1,
     "zones": [],
     "P_total": 0.378,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_0054",
     "x": 9.0,
     "y": 3.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3964,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_0100",
     "x": 1.0,
     "y": 5.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3277,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_0101",
     "x": 3.0,
     "y": 5.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3436,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_0102",
     "x": 5.0,
     "y": 5.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.3598,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_0103",
     "x": 7.0,
     "y": 5.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.378,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_0104",
     "x": 9.0,
     "y": 5.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.3981,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_0150",
     "x": 1.0,
     "y": 7.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0151",
     "x": 3.0,
     "y": 7.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0152",
     "x": 5.0,
     "y": 7.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0196",
     "x": 1.0,
     "y": 9.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0197",
     "x": 3.0,
     "y": 9.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0198",
     "x": 5.0,
     "y": 9.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0199",
     "x": 15.0,
     "y": 9.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.4634,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_0242",
     "x": 1.0,
     "y": 11.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0243",
     "x": 3.0,
     "y": 11.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0244",
     "x": 5.0,
     "y": 11.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0245",
     "x": 15.0,
     "y": 11.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.4634,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_0288",
     "x": 1.0,
     "y": 13.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0289",
     "x": 3.0,
     "y": 13.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0290",
     "x": 5.0,
     "y": 13.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0291",
     "x": 15.0,
     "y": 13.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.1065,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0300",
     "x": 1.0,
     "y": 15.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0301",
     "x": 3.0,
     "y": 15.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0302",
     "x": 5.0,
     "y": 15.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0303",
     "x": 15.0,
     "y": 15.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.1065,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0304",
     "x": 19.0,
     "y": 15.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4556,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0305",
     "x": 21.0,
     "y": 15.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4589,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0306",
     "x": 23.0,
     "y": 15.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4624,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0307",
     "x": 25.0,
     "y": 15.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4658,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0308",
     "x": 27.0,
     "y": 15.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4693,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0309",
     "x": 29.0,
     "y": 15.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4724,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0310",
     "x": 31.0,
     "y": 15.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4802,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0311",
     "x": 33.0,
     "y": 15.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4842,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0312",
     "x": 35.0,
     "y": 15.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4882,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0313",
     "x": 37.0,
     "y": 15.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4918,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0314",
     "x": 39.0,
     "y": 15.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4954,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0315",
     "x": 41.0,
     "y": 15.0,
     "w": 5,
     "zones": [
      "gangform_workface",
      "tower_crane_radius"
     ],
     "P_total": 0.4986,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0344",
     "x": 1.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0345",
     "x": 3.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0346",
     "x": 5.0,
     "y": 17.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0348",
     "x": 19.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4558,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0349",
     "x": 21.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4592,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0350",
     "x": 23.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4627,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0351",
     "x": 25.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.466,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0352",
     "x": 27.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4696,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0353",
     "x": 29.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.332,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0354",
     "x": 31.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4798,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0355",
     "x": 33.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4838,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0356",
     "x": 35.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4878,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0357",
     "x": 37.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4915,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0358",
     "x": 39.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4949,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0359",
     "x": 41.0,
     "y": 17.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.4982,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0387",
     "x": 99.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.38,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0388",
     "x": 1.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0389",
     "x": 3.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0390",
     "x": 5.0,
     "y": 19.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0502,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0391",
     "x": 7.0,
     "y": 19.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0527,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0392",
     "x": 9.0,
     "y": 19.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0553,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0396",
     "x": 19.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4276,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0397",
     "x": 21.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4296,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0398",
     "x": 23.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4317,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0399",
     "x": 25.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4338,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0400",
     "x": 27.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2829,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0401",
     "x": 29.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2861,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0402",
     "x": 31.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4423,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0403",
     "x": 33.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4447,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0404",
     "x": 35.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4471,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0405",
     "x": 37.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4493,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0406",
     "x": 39.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4513,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0407",
     "x": 41.0,
     "y": 19.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.4532,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0408",
     "x": 43.0,
     "y": 19.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.4547,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0409",
     "x": 45.0,
     "y": 19.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.4561,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0434",
     "x": 97.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3877,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0435",
     "x": 99.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3776,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0436",
     "x": 1.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0437",
     "x": 3.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0438",
     "x": 5.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0439",
     "x": 7.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0444",
     "x": 19.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3841,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0445",
     "x": 21.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.384,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0446",
     "x": 23.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3838,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0447",
     "x": 25.0,
     "y": 21.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.2155,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0448",
     "x": 27.0,
     "y": 21.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.2155,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0449",
     "x": 29.0,
     "y": 21.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.2154,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0450",
     "x": 31.0,
     "y": 21.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.3845,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0451",
     "x": 33.0,
     "y": 21.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.3844,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0452",
     "x": 35.0,
     "y": 21.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.3843,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0453",
     "x": 37.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3842,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0454",
     "x": 39.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.384,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0455",
     "x": 41.0,
     "y": 21.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.3837,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0456",
     "x": 43.0,
     "y": 21.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.3833,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0482",
     "x": 97.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3848,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0483",
     "x": 99.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3743,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0484",
     "x": 1.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0485",
     "x": 3.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0486",
     "x": 5.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0487",
     "x": 7.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0492",
     "x": 19.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3843,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0493",
     "x": 21.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3842,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0494",
     "x": 23.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.384,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0495",
     "x": 37.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2155,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0496",
     "x": 39.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3838,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0497",
     "x": 41.0,
     "y": 23.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.3834,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0498",
     "x": 43.0,
     "y": 23.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.3829,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0508",
     "x": 63.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.499,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0509",
     "x": 77.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3833,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0518",
     "x": 97.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3813,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0519",
     "x": 99.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.371,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0520",
     "x": 1.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.041,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0521",
     "x": 3.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.042,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0522",
     "x": 5.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0429,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0523",
     "x": 7.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0437,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0528",
     "x": 19.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3844,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0529",
     "x": 21.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3843,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0530",
     "x": 23.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3842,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0531",
     "x": 37.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3158,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0532",
     "x": 39.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3169,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0533",
     "x": 41.0,
     "y": 25.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.4635,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0534",
     "x": 43.0,
     "y": 25.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.4637,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0544",
     "x": 63.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4972,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0545",
     "x": 77.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3838,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0546",
     "x": 79.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3839,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0553",
     "x": 95.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3879,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0554",
     "x": 97.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3777,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0555",
     "x": 99.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3674,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0556",
     "x": 1.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0686,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0557",
     "x": 3.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0702,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0558",
     "x": 5.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0717,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0559",
     "x": 7.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.073,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0564",
     "x": 19.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3844,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0565",
     "x": 21.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3844,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0566",
     "x": 23.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3843,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0567",
     "x": 37.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2063,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0568",
     "x": 39.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3789,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0569",
     "x": 41.0,
     "y": 27.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.3803,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0579",
     "x": 61.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4989,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0580",
     "x": 63.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4953,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0581",
     "x": 77.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.384,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0582",
     "x": 79.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3841,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0583",
     "x": 81.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3842,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0589",
     "x": 95.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3838,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0590",
     "x": 97.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3736,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0591",
     "x": 99.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3634,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0592",
     "x": 1.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1861,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0593",
     "x": 3.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1914,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0594",
     "x": 5.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1193,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0600",
     "x": 19.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3844,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0601",
     "x": 21.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3844,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0602",
     "x": 23.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3843,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0603",
     "x": 37.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3247,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0604",
     "x": 39.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4406,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0605",
     "x": 41.0,
     "y": 29.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.4427,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0614",
     "x": 59.0,
     "y": 29.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.487,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0615",
     "x": 61.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4844,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0616",
     "x": 63.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4034,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0617",
     "x": 77.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3842,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0618",
     "x": 79.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3843,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0619",
     "x": 81.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3844,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0625",
     "x": 95.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2517,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0626",
     "x": 97.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2452,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0627",
     "x": 99.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2886,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0628",
     "x": 1.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2886,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0629",
     "x": 3.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2452,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0630",
     "x": 5.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2517,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0636",
     "x": 19.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3844,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0637",
     "x": 21.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3843,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0638",
     "x": 23.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3842,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0639",
     "x": 37.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4034,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0640",
     "x": 39.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4844,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0641",
     "x": 41.0,
     "y": 31.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.487,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0650",
     "x": 59.0,
     "y": 31.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.4427,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0651",
     "x": 61.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4406,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0652",
     "x": 63.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3247,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0653",
     "x": 77.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3843,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0654",
     "x": 79.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3844,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0655",
     "x": 81.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3844,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0661",
     "x": 95.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1193,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0662",
     "x": 97.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1914,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0663",
     "x": 99.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1861,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0664",
     "x": 1.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3634,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0665",
     "x": 3.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3736,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0666",
     "x": 5.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3838,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0672",
     "x": 19.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3842,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0673",
     "x": 21.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3841,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0674",
     "x": 23.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.384,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0675",
     "x": 37.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4953,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0676",
     "x": 39.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4989,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0686",
     "x": 59.0,
     "y": 33.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.3803,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0687",
     "x": 61.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3789,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0688",
     "x": 63.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2063,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0689",
     "x": 77.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3843,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0690",
     "x": 79.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3844,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0691",
     "x": 81.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3844,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0696",
     "x": 93.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.073,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0697",
     "x": 95.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0717,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0698",
     "x": 97.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0702,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0699",
     "x": 99.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0686,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0700",
     "x": 1.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3674,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0701",
     "x": 3.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3777,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0702",
     "x": 5.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3879,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0709",
     "x": 21.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3839,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0710",
     "x": 23.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3838,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0711",
     "x": 37.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4972,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0721",
     "x": 57.0,
     "y": 35.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.4637,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0722",
     "x": 59.0,
     "y": 35.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.4635,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0723",
     "x": 61.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3169,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0724",
     "x": 63.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3158,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0725",
     "x": 77.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3842,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0726",
     "x": 79.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3843,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0727",
     "x": 81.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3844,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0732",
     "x": 93.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0437,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0733",
     "x": 95.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0429,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0734",
     "x": 97.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.042,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0735",
     "x": 99.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.041,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0736",
     "x": 1.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.371,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0737",
     "x": 3.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3813,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0746",
     "x": 23.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3833,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0747",
     "x": 37.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.499,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0757",
     "x": 57.0,
     "y": 37.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.3829,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0758",
     "x": 59.0,
     "y": 37.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.3834,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0759",
     "x": 61.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3838,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0760",
     "x": 63.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2155,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0761",
     "x": 77.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.384,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0762",
     "x": 79.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3842,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0763",
     "x": 81.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3843,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0768",
     "x": 93.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0769",
     "x": 95.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "가림 과다 (측정 범위 밖)"
    },
    {
     "voxel_id": "v_0770",
     "x": 97.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "가림 과다 (측정 범위 밖)"
    },
    {
     "voxel_id": "v_0771",
     "x": 99.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "가림 과다 (측정 범위 밖)"
    },
    {
     "voxel_id": "v_0772",
     "x": 1.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3743,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0773",
     "x": 3.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3848,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0799",
     "x": 57.0,
     "y": 39.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.3833,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0800",
     "x": 59.0,
     "y": 39.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.3837,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0801",
     "x": 61.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.384,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0802",
     "x": 63.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3842,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0803",
     "x": 65.0,
     "y": 39.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.3843,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0804",
     "x": 67.0,
     "y": 39.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.3844,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0805",
     "x": 69.0,
     "y": 39.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.3845,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0806",
     "x": 71.0,
     "y": 39.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.2154,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0807",
     "x": 73.0,
     "y": 39.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.2155,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0808",
     "x": 75.0,
     "y": 39.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.2155,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0809",
     "x": 77.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3838,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0810",
     "x": 79.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.384,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0811",
     "x": 81.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3841,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0816",
     "x": 93.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0817",
     "x": 95.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0818",
     "x": 97.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0819",
     "x": 99.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "가림 과다 (측정 범위 밖)"
    },
    {
     "voxel_id": "v_0820",
     "x": 1.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3776,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0821",
     "x": 3.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3877,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0846",
     "x": 55.0,
     "y": 41.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.4561,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0847",
     "x": 57.0,
     "y": 41.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.4547,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0848",
     "x": 59.0,
     "y": 41.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.4532,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0849",
     "x": 61.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4513,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0850",
     "x": 63.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4493,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0851",
     "x": 65.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4471,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0852",
     "x": 67.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4447,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0853",
     "x": 69.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4423,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0854",
     "x": 71.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2861,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0855",
     "x": 73.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2829,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0856",
     "x": 75.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4338,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0857",
     "x": 77.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4317,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0858",
     "x": 79.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4296,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0859",
     "x": 81.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4276,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0863",
     "x": 91.0,
     "y": 41.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0553,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0864",
     "x": 93.0,
     "y": 41.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0527,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0865",
     "x": 95.0,
     "y": 41.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0502,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0866",
     "x": 97.0,
     "y": 41.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0477,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0867",
     "x": 99.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0868",
     "x": 1.0,
     "y": 43.0,
     "w": 1,
     "zones": [],
     "P_total": 0.38,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0896",
     "x": 59.0,
     "y": 43.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.4982,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0897",
     "x": 61.0,
     "y": 43.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4949,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0898",
     "x": 63.0,
     "y": 43.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4915,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0899",
     "x": 65.0,
     "y": 43.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4878,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0900",
     "x": 67.0,
     "y": 43.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4838,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0901",
     "x": 69.0,
     "y": 43.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4798,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0902",
     "x": 71.0,
     "y": 43.0,
     "w": 1,
     "zones": [],
     "P_total": 0.332,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0903",
     "x": 73.0,
     "y": 43.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4696,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0904",
     "x": 75.0,
     "y": 43.0,
     "w": 1,
     "zones": [],
     "P_total": 0.466,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0905",
     "x": 77.0,
     "y": 43.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4627,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0906",
     "x": 79.0,
     "y": 43.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4592,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0907",
     "x": 81.0,
     "y": 43.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4558,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0910",
     "x": 97.0,
     "y": 43.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0911",
     "x": 99.0,
     "y": 43.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0940",
     "x": 59.0,
     "y": 45.0,
     "w": 5,
     "zones": [
      "gangform_workface",
      "tower_crane_radius"
     ],
     "P_total": 0.4986,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0941",
     "x": 61.0,
     "y": 45.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4954,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0942",
     "x": 63.0,
     "y": 45.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4918,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0943",
     "x": 65.0,
     "y": 45.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4882,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0944",
     "x": 67.0,
     "y": 45.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4842,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0945",
     "x": 69.0,
     "y": 45.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4802,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0946",
     "x": 71.0,
     "y": 45.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4724,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0947",
     "x": 73.0,
     "y": 45.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4693,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0948",
     "x": 75.0,
     "y": 45.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4658,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0949",
     "x": 77.0,
     "y": 45.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4624,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0950",
     "x": 79.0,
     "y": 45.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4589,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0951",
     "x": 81.0,
     "y": 45.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4556,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0953",
     "x": 87.0,
     "y": 45.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.2256,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0954",
     "x": 97.0,
     "y": 45.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0955",
     "x": 99.0,
     "y": 45.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0965",
     "x": 87.0,
     "y": 47.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.2259,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0966",
     "x": 97.0,
     "y": 47.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0967",
     "x": 99.0,
     "y": 47.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_1012",
     "x": 97.0,
     "y": 49.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_1013",
     "x": 99.0,
     "y": 49.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_1058",
     "x": 97.0,
     "y": 51.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_1059",
     "x": 99.0,
     "y": 51.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_1104",
     "x": 97.0,
     "y": 53.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_1105",
     "x": 99.0,
     "y": 53.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_1151",
     "x": 91.0,
     "y": 55.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.3981,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_1152",
     "x": 93.0,
     "y": 55.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.378,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_1153",
     "x": 95.0,
     "y": 55.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.3598,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_1154",
     "x": 97.0,
     "y": 55.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.3436,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_1155",
     "x": 99.0,
     "y": 55.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3277,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_1201",
     "x": 91.0,
     "y": 57.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3964,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_1202",
     "x": 93.0,
     "y": 57.0,
     "w": 1,
     "zones": [],
     "P_total": 0.378,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_1203",
     "x": 95.0,
     "y": 57.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3598,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_1204",
     "x": 97.0,
     "y": 57.0,
     "w": 1,
     "zones": [],
     "P_total": 0.342,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_1205",
     "x": 99.0,
     "y": 57.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3261,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_1250",
     "x": 89.0,
     "y": 59.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4151,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_1251",
     "x": 91.0,
     "y": 59.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3948,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_1252",
     "x": 93.0,
     "y": 59.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3763,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_1253",
     "x": 95.0,
     "y": 59.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3582,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_1254",
     "x": 97.0,
     "y": 59.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3404,
     "reason": "ρ 부족"
    },
    {
     "voxel_id": "v_1255",
     "x": 99.0,
     "y": 59.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3245,
     "reason": "ρ 부족"
    }
   ]
  },
  "assumed": {
   "camera_ids": [
    "c_b02",
    "c_b07",
    "c_b09",
    "c_b00",
    "c_b03",
    "c_b06",
    "c_b08",
    "c_b01"
   ],
   "WDR": 0.6979,
   "fail_voxel_count": 256,
   "fail_zones": [
    {
     "voxel_id": "v_0150",
     "x": 1.0,
     "y": 7.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0151",
     "x": 3.0,
     "y": 7.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0152",
     "x": 5.0,
     "y": 7.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0196",
     "x": 1.0,
     "y": 9.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0197",
     "x": 3.0,
     "y": 9.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0198",
     "x": 5.0,
     "y": 9.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0242",
     "x": 1.0,
     "y": 11.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0243",
     "x": 3.0,
     "y": 11.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0244",
     "x": 5.0,
     "y": 11.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0288",
     "x": 1.0,
     "y": 13.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0289",
     "x": 3.0,
     "y": 13.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0290",
     "x": 5.0,
     "y": 13.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0300",
     "x": 1.0,
     "y": 15.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0301",
     "x": 3.0,
     "y": 15.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0302",
     "x": 5.0,
     "y": 15.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0308",
     "x": 27.0,
     "y": 15.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4837,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0309",
     "x": 29.0,
     "y": 15.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4885,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0330",
     "x": 71.0,
     "y": 15.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4885,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0331",
     "x": 73.0,
     "y": 15.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4837,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0339",
     "x": 91.0,
     "y": 15.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2658,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0340",
     "x": 93.0,
     "y": 15.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2557,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0341",
     "x": 95.0,
     "y": 15.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2458,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0342",
     "x": 97.0,
     "y": 15.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2361,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0344",
     "x": 1.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0345",
     "x": 3.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0346",
     "x": 5.0,
     "y": 17.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0352",
     "x": 27.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4822,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0353",
     "x": 29.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4872,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0374",
     "x": 71.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4872,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0375",
     "x": 73.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4822,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0383",
     "x": 91.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2634,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0384",
     "x": 93.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2536,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0385",
     "x": 95.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2437,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0386",
     "x": 97.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.234,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0387",
     "x": 99.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2242,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0388",
     "x": 1.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0389",
     "x": 3.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0390",
     "x": 5.0,
     "y": 19.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0391",
     "x": 7.0,
     "y": 19.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0392",
     "x": 9.0,
     "y": 19.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0400",
     "x": 27.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4808,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0401",
     "x": 29.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4858,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0422",
     "x": 71.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4858,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0423",
     "x": 73.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4808,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0431",
     "x": 91.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2614,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0432",
     "x": 93.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2513,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0433",
     "x": 95.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2417,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0434",
     "x": 97.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2319,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0435",
     "x": 99.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2223,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0436",
     "x": 1.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0888,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0437",
     "x": 3.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0935,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0438",
     "x": 5.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.239,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0439",
     "x": 7.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2485,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0440",
     "x": 9.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2584,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0447",
     "x": 25.0,
     "y": 21.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.4734,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0448",
     "x": 27.0,
     "y": 21.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.4789,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0449",
     "x": 29.0,
     "y": 21.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.4841,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0470",
     "x": 71.0,
     "y": 21.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.4841,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0471",
     "x": 73.0,
     "y": 21.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.4789,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0472",
     "x": 75.0,
     "y": 21.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.4734,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0479",
     "x": 91.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2584,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0480",
     "x": 93.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2485,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0481",
     "x": 95.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.239,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0482",
     "x": 97.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2293,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0483",
     "x": 99.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2197,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0484",
     "x": 1.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2171,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0485",
     "x": 3.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2265,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0486",
     "x": 5.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2362,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0487",
     "x": 7.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2456,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0488",
     "x": 9.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2554,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0494",
     "x": 23.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3833,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0495",
     "x": 37.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.499,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0508",
     "x": 63.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.499,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0509",
     "x": 77.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3833,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0515",
     "x": 91.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2554,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0516",
     "x": 93.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2456,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0517",
     "x": 95.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2362,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0518",
     "x": 97.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2265,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0519",
     "x": 99.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2171,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0520",
     "x": 1.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2145,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0521",
     "x": 3.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2236,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0522",
     "x": 5.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2332,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0523",
     "x": 7.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2427,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0524",
     "x": 9.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2521,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0528",
     "x": 19.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.384,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0529",
     "x": 21.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3839,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0530",
     "x": 23.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3838,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0545",
     "x": 77.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3838,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0546",
     "x": 79.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3839,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0547",
     "x": 81.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.384,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0551",
     "x": 91.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2521,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0552",
     "x": 93.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2427,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0553",
     "x": 95.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2332,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0554",
     "x": 97.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2236,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0555",
     "x": 99.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2145,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0556",
     "x": 1.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2115,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0557",
     "x": 3.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2204,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0558",
     "x": 5.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2297,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0559",
     "x": 7.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2393,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0560",
     "x": 9.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1617,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0564",
     "x": 19.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3842,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0565",
     "x": 21.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3841,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0566",
     "x": 23.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.384,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0567",
     "x": 37.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4452,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0580",
     "x": 63.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4452,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0581",
     "x": 77.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.384,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0582",
     "x": 79.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3841,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0583",
     "x": 81.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3842,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0587",
     "x": 91.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1617,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0588",
     "x": 93.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2393,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0589",
     "x": 95.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2297,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0590",
     "x": 97.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2204,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0591",
     "x": 99.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2115,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0592",
     "x": 1.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2319,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0593",
     "x": 3.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1851,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0594",
     "x": 5.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1149,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0595",
     "x": 7.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1196,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0596",
     "x": 9.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0600",
     "x": 19.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3843,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0601",
     "x": 21.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3842,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0602",
     "x": 23.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3841,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0603",
     "x": 37.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4427,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0616",
     "x": 63.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4427,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0617",
     "x": 77.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3841,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0618",
     "x": 79.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3842,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0619",
     "x": 81.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3843,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0623",
     "x": 91.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0624",
     "x": 93.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1196,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0625",
     "x": 95.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1149,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0626",
     "x": 97.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1851,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0627",
     "x": 99.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2319,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0628",
     "x": 1.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2319,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0629",
     "x": 3.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1851,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0630",
     "x": 5.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1149,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0631",
     "x": 7.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1196,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0632",
     "x": 9.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0636",
     "x": 19.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3843,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0637",
     "x": 21.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3842,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0638",
     "x": 23.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3841,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0639",
     "x": 37.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4427,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0652",
     "x": 63.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4427,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0653",
     "x": 77.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3841,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0654",
     "x": 79.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3842,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0655",
     "x": 81.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3843,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0659",
     "x": 91.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0660",
     "x": 93.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1196,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0661",
     "x": 95.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1149,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0662",
     "x": 97.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1851,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0663",
     "x": 99.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2319,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0664",
     "x": 1.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2115,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0665",
     "x": 3.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2204,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0666",
     "x": 5.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2297,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0667",
     "x": 7.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2393,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0668",
     "x": 9.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1617,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0672",
     "x": 19.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3842,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0673",
     "x": 21.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3841,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0674",
     "x": 23.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.384,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0675",
     "x": 37.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4452,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0688",
     "x": 63.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4452,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0689",
     "x": 77.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.384,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0690",
     "x": 79.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3841,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0691",
     "x": 81.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3842,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0695",
     "x": 91.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1617,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0696",
     "x": 93.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2393,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0697",
     "x": 95.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2297,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0698",
     "x": 97.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2204,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0699",
     "x": 99.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2115,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0700",
     "x": 1.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2145,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0701",
     "x": 3.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2236,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0702",
     "x": 5.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2332,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0703",
     "x": 7.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2427,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0704",
     "x": 9.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2521,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0708",
     "x": 19.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.384,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0709",
     "x": 21.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3839,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0710",
     "x": 23.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3838,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0725",
     "x": 77.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3838,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0726",
     "x": 79.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3839,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0727",
     "x": 81.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.384,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0731",
     "x": 91.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2521,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0732",
     "x": 93.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2427,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0733",
     "x": 95.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2332,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0734",
     "x": 97.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2236,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0735",
     "x": 99.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2145,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0736",
     "x": 1.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2171,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0737",
     "x": 3.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2265,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0738",
     "x": 5.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2362,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0739",
     "x": 7.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2456,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0740",
     "x": 9.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2554,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0746",
     "x": 23.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3833,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0747",
     "x": 37.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.499,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0760",
     "x": 63.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.499,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0761",
     "x": 77.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3833,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0767",
     "x": 91.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2554,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0768",
     "x": 93.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2456,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0769",
     "x": 95.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2362,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0770",
     "x": 97.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2265,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0771",
     "x": 99.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2171,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0772",
     "x": 1.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2197,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0773",
     "x": 3.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2293,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0774",
     "x": 5.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.239,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0775",
     "x": 7.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2485,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0776",
     "x": 9.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2584,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0783",
     "x": 25.0,
     "y": 39.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.4734,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0784",
     "x": 27.0,
     "y": 39.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.4789,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0785",
     "x": 29.0,
     "y": 39.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.4841,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0806",
     "x": 71.0,
     "y": 39.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.4841,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0807",
     "x": 73.0,
     "y": 39.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.4789,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0808",
     "x": 75.0,
     "y": 39.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.4734,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0815",
     "x": 91.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2584,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0816",
     "x": 93.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2485,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0817",
     "x": 95.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.239,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0818",
     "x": 97.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2293,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0819",
     "x": 99.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0888,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0820",
     "x": 1.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2223,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0821",
     "x": 3.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2319,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0822",
     "x": 5.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2417,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0823",
     "x": 7.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2513,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0824",
     "x": 9.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2614,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0832",
     "x": 27.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4808,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0833",
     "x": 29.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4858,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0854",
     "x": 71.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4858,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0855",
     "x": 73.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4808,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0863",
     "x": 91.0,
     "y": 41.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.2614,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0864",
     "x": 93.0,
     "y": 41.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0865",
     "x": 95.0,
     "y": 41.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0866",
     "x": 97.0,
     "y": 41.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0867",
     "x": 99.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0868",
     "x": 1.0,
     "y": 43.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2242,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0869",
     "x": 3.0,
     "y": 43.0,
     "w": 1,
     "zones": [],
     "P_total": 0.234,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0870",
     "x": 5.0,
     "y": 43.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2437,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0871",
     "x": 7.0,
     "y": 43.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2536,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0872",
     "x": 9.0,
     "y": 43.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2634,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0880",
     "x": 27.0,
     "y": 43.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4822,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0881",
     "x": 29.0,
     "y": 43.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4872,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0902",
     "x": 71.0,
     "y": 43.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4872,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0903",
     "x": 73.0,
     "y": 43.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4822,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0910",
     "x": 97.0,
     "y": 43.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0911",
     "x": 99.0,
     "y": 43.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0913",
     "x": 3.0,
     "y": 45.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2361,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0914",
     "x": 5.0,
     "y": 45.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2458,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0915",
     "x": 7.0,
     "y": 45.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2557,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0916",
     "x": 9.0,
     "y": 45.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2658,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0924",
     "x": 27.0,
     "y": 45.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4837,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0925",
     "x": 29.0,
     "y": 45.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4885,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0946",
     "x": 71.0,
     "y": 45.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4885,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0947",
     "x": 73.0,
     "y": 45.0,
     "w": 5,
     "zones": [
      "gangform_workface"
     ],
     "P_total": 0.4837,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0954",
     "x": 97.0,
     "y": 45.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0955",
     "x": 99.0,
     "y": 45.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0966",
     "x": 97.0,
     "y": 47.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0967",
     "x": 99.0,
     "y": 47.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_1012",
     "x": 97.0,
     "y": 49.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_1013",
     "x": 99.0,
     "y": 49.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_1058",
     "x": 97.0,
     "y": 51.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_1059",
     "x": 99.0,
     "y": 51.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_1104",
     "x": 97.0,
     "y": 53.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_1105",
     "x": 99.0,
     "y": 53.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    }
   ]
  },
  "empirical": {
   "camera_ids": [
    "c_b08",
    "c_b01",
    "c_b00",
    "c_b09",
    "c_b02",
    "c_b07",
    "c_b14",
    "c_b11"
   ],
   "WDR": 0.6996,
   "fail_voxel_count": 168,
   "fail_zones": [
    {
     "voxel_id": "v_0150",
     "x": 1.0,
     "y": 7.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0151",
     "x": 3.0,
     "y": 7.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0152",
     "x": 5.0,
     "y": 7.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0196",
     "x": 1.0,
     "y": 9.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0197",
     "x": 3.0,
     "y": 9.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0198",
     "x": 5.0,
     "y": 9.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0242",
     "x": 1.0,
     "y": 11.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0243",
     "x": 3.0,
     "y": 11.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0244",
     "x": 5.0,
     "y": 11.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0288",
     "x": 1.0,
     "y": 13.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0289",
     "x": 3.0,
     "y": 13.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0290",
     "x": 5.0,
     "y": 13.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0300",
     "x": 1.0,
     "y": 15.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0301",
     "x": 3.0,
     "y": 15.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0302",
     "x": 5.0,
     "y": 15.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0344",
     "x": 1.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0345",
     "x": 3.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0346",
     "x": 5.0,
     "y": 17.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0353",
     "x": 29.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4468,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0387",
     "x": 99.0,
     "y": 17.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2242,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0388",
     "x": 1.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0389",
     "x": 3.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0390",
     "x": 5.0,
     "y": 19.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0502,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0391",
     "x": 7.0,
     "y": 19.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0527,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0392",
     "x": 9.0,
     "y": 19.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0553,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0400",
     "x": 27.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4007,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0401",
     "x": 29.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4077,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0434",
     "x": 97.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2319,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0435",
     "x": 99.0,
     "y": 19.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2223,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0436",
     "x": 1.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0888,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0437",
     "x": 3.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0935,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0438",
     "x": 5.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0982,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0439",
     "x": 7.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1029,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0447",
     "x": 25.0,
     "y": 21.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.3379,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0448",
     "x": 27.0,
     "y": 21.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.3427,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0449",
     "x": 29.0,
     "y": 21.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.3476,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0450",
     "x": 31.0,
     "y": 21.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.4917,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0451",
     "x": 33.0,
     "y": 21.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.4951,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0452",
     "x": 35.0,
     "y": 21.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.4982,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0482",
     "x": 97.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2293,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0483",
     "x": 99.0,
     "y": 21.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2197,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0484",
     "x": 1.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.088,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0485",
     "x": 3.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0923,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0486",
     "x": 5.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.097,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0487",
     "x": 7.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1017,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0495",
     "x": 37.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.363,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0508",
     "x": 63.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3614,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0518",
     "x": 97.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2265,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0519",
     "x": 99.0,
     "y": 23.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2171,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0520",
     "x": 1.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0869,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0521",
     "x": 3.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0911,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0522",
     "x": 5.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0958,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0523",
     "x": 7.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1006,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0531",
     "x": 37.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4147,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0532",
     "x": 39.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.419,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0543",
     "x": 61.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3889,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0544",
     "x": 63.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.384,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0553",
     "x": 95.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2332,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0554",
     "x": 97.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2236,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0555",
     "x": 99.0,
     "y": 25.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2145,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0556",
     "x": 1.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0857,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0557",
     "x": 3.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.09,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0558",
     "x": 5.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0942,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0559",
     "x": 7.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.099,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0567",
     "x": 37.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2958,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0568",
     "x": 39.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4522,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0569",
     "x": 41.0,
     "y": 27.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.4563,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0578",
     "x": 59.0,
     "y": 27.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.456,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0579",
     "x": 61.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4041,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0580",
     "x": 63.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3986,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0589",
     "x": 95.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2297,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0590",
     "x": 97.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2204,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0591",
     "x": 99.0,
     "y": 27.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2115,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0592",
     "x": 1.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1415,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0593",
     "x": 3.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0842,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0594",
     "x": 5.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "완전 차폐"
    },
    {
     "voxel_id": "v_0603",
     "x": 37.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3326,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0604",
     "x": 39.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4496,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0605",
     "x": 41.0,
     "y": 29.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.4539,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0606",
     "x": 43.0,
     "y": 29.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.4577,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0613",
     "x": 57.0,
     "y": 29.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.4577,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0614",
     "x": 59.0,
     "y": 29.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.4539,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0615",
     "x": 61.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4495,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0616",
     "x": 63.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3608,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0625",
     "x": 95.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1149,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0626",
     "x": 97.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1102,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0627",
     "x": 99.0,
     "y": 29.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1644,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0628",
     "x": 1.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1644,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0629",
     "x": 3.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1102,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0630",
     "x": 5.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1149,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0639",
     "x": 37.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3608,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0640",
     "x": 39.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4495,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0641",
     "x": 41.0,
     "y": 31.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.4539,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0642",
     "x": 43.0,
     "y": 31.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.4577,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0649",
     "x": 57.0,
     "y": 31.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.4577,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0650",
     "x": 59.0,
     "y": 31.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.4539,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0651",
     "x": 61.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4496,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0652",
     "x": 63.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3326,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0661",
     "x": 95.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0662",
     "x": 97.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0842,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0663",
     "x": 99.0,
     "y": 31.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1415,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0664",
     "x": 1.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2115,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0665",
     "x": 3.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2204,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0666",
     "x": 5.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2297,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0675",
     "x": 37.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3986,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0676",
     "x": 39.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4041,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0677",
     "x": 41.0,
     "y": 33.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.456,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0686",
     "x": 59.0,
     "y": 33.0,
     "w": 3,
     "zones": [
      "tower_crane_radius"
     ],
     "P_total": 0.4563,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0687",
     "x": 61.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4522,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0688",
     "x": 63.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2958,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0696",
     "x": 93.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.099,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0697",
     "x": 95.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0942,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0698",
     "x": 97.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.09,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0699",
     "x": 99.0,
     "y": 33.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0857,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0700",
     "x": 1.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2145,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0701",
     "x": 3.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2236,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0702",
     "x": 5.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2332,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0711",
     "x": 37.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.384,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0712",
     "x": 39.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3889,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0723",
     "x": 61.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.419,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0724",
     "x": 63.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4147,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0732",
     "x": 93.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1006,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0733",
     "x": 95.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0958,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0734",
     "x": 97.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0911,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0735",
     "x": 99.0,
     "y": 35.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0869,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0736",
     "x": 1.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2171,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0737",
     "x": 3.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2265,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0747",
     "x": 37.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.3614,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0760",
     "x": 63.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.363,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0768",
     "x": 93.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1017,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0769",
     "x": 95.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.097,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0770",
     "x": 97.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0923,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0771",
     "x": 99.0,
     "y": 37.0,
     "w": 1,
     "zones": [],
     "P_total": 0.088,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0772",
     "x": 1.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2197,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0773",
     "x": 3.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2293,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0803",
     "x": 65.0,
     "y": 39.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.4982,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0804",
     "x": 67.0,
     "y": 39.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.4951,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0805",
     "x": 69.0,
     "y": 39.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.4917,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0806",
     "x": 71.0,
     "y": 39.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.3476,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0807",
     "x": 73.0,
     "y": 39.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.3427,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0808",
     "x": 75.0,
     "y": 39.0,
     "w": 5,
     "zones": [
      "opening_perimeter"
     ],
     "P_total": 0.3379,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0816",
     "x": 93.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.1029,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0817",
     "x": 95.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0982,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0818",
     "x": 97.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0935,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0819",
     "x": 99.0,
     "y": 39.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0888,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0820",
     "x": 1.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2223,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0821",
     "x": 3.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2319,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0854",
     "x": 71.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4077,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0855",
     "x": 73.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4007,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0863",
     "x": 91.0,
     "y": 41.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.1589,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0864",
     "x": 93.0,
     "y": 41.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0527,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0865",
     "x": 95.0,
     "y": 41.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0502,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0866",
     "x": 97.0,
     "y": 41.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0477,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0867",
     "x": 99.0,
     "y": 41.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0868",
     "x": 1.0,
     "y": 43.0,
     "w": 1,
     "zones": [],
     "P_total": 0.2242,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0902",
     "x": 71.0,
     "y": 43.0,
     "w": 1,
     "zones": [],
     "P_total": 0.4468,
     "reason": "가림"
    },
    {
     "voxel_id": "v_0910",
     "x": 97.0,
     "y": 43.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0911",
     "x": 99.0,
     "y": 43.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0954",
     "x": 97.0,
     "y": 45.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0955",
     "x": 99.0,
     "y": 45.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0966",
     "x": 97.0,
     "y": 47.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_0967",
     "x": 99.0,
     "y": 47.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_1012",
     "x": 97.0,
     "y": 49.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_1013",
     "x": 99.0,
     "y": 49.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_1058",
     "x": 97.0,
     "y": 51.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_1059",
     "x": 99.0,
     "y": 51.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_1104",
     "x": 97.0,
     "y": 53.0,
     "w": 2,
     "zones": [
      "material_yard"
     ],
     "P_total": 0.0,
     "reason": "화각 밖"
    },
    {
     "voxel_id": "v_1105",
     "x": 99.0,
     "y": 53.0,
     "w": 1,
     "zones": [],
     "P_total": 0.0,
     "reason": "화각 밖"
    }
   ]
  }
 },
 "voxels": [
  {
   "id": "v_0000",
   "x": 1.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3245,
   "P_total_assumed": 0.8024,
   "P_total_empirical": 0.6015,
   "pass": true
  },
  {
   "id": "v_0001",
   "x": 3.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3404,
   "P_total_assumed": 0.8258,
   "P_total_empirical": 0.6244,
   "pass": true
  },
  {
   "id": "v_0002",
   "x": 5.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3582,
   "P_total_assumed": 0.8474,
   "P_total_empirical": 0.6489,
   "pass": true
  },
  {
   "id": "v_0003",
   "x": 7.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3763,
   "P_total_assumed": 0.8684,
   "P_total_empirical": 0.6729,
   "pass": true
  },
  {
   "id": "v_0004",
   "x": 9.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3948,
   "P_total_assumed": 0.888,
   "P_total_empirical": 0.6982,
   "pass": true
  },
  {
   "id": "v_0005",
   "x": 11.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4151,
   "P_total_assumed": 0.9048,
   "P_total_empirical": 0.7224,
   "pass": true
  },
  {
   "id": "v_0006",
   "x": 13.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8102,
   "P_total_assumed": 0.9732,
   "P_total_empirical": 0.915,
   "pass": true
  },
  {
   "id": "v_0007",
   "x": 15.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9594,
   "P_total_assumed": 0.9951,
   "P_total_empirical": 0.983,
   "pass": true
  },
  {
   "id": "v_0008",
   "x": 17.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9669,
   "P_total_assumed": 0.9993,
   "P_total_empirical": 0.9975,
   "pass": true
  },
  {
   "id": "v_0009",
   "x": 19.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9708,
   "P_total_assumed": 0.9977,
   "P_total_empirical": 0.9914,
   "pass": true
  },
  {
   "id": "v_0010",
   "x": 21.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9765,
   "P_total_assumed": 0.9981,
   "P_total_empirical": 0.9936,
   "pass": true
  },
  {
   "id": "v_0011",
   "x": 23.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9778,
   "P_total_assumed": 0.9985,
   "P_total_empirical": 0.9945,
   "pass": true
  },
  {
   "id": "v_0012",
   "x": 25.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9792,
   "P_total_assumed": 0.9987,
   "P_total_empirical": 0.9952,
   "pass": true
  },
  {
   "id": "v_0013",
   "x": 27.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9805,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.996,
   "pass": true
  },
  {
   "id": "v_0014",
   "x": 29.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9819,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.9963,
   "pass": true
  },
  {
   "id": "v_0015",
   "x": 31.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9833,
   "P_total_assumed": 0.9992,
   "P_total_empirical": 0.9968,
   "pass": true
  },
  {
   "id": "v_0016",
   "x": 33.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9948,
   "P_total_assumed": 0.9997,
   "P_total_empirical": 0.9991,
   "pass": true
  },
  {
   "id": "v_0017",
   "x": 35.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.999,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0018",
   "x": 37.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0019",
   "x": 39.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0020",
   "x": 41.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9993,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0021",
   "x": 43.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9993,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0022",
   "x": 45.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0023",
   "x": 47.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0024",
   "x": 49.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9995,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0025",
   "x": 51.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9995,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0026",
   "x": 53.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9995,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0027",
   "x": 55.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9995,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0028",
   "x": 57.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9995,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0029",
   "x": 59.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9995,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0030",
   "x": 61.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9995,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0031",
   "x": 63.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0032",
   "x": 65.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9993,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0033",
   "x": 67.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.988,
   "P_total_assumed": 0.9997,
   "P_total_empirical": 0.9992,
   "pass": true
  },
  {
   "id": "v_0034",
   "x": 69.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9865,
   "P_total_assumed": 0.9992,
   "P_total_empirical": 0.9992,
   "pass": true
  },
  {
   "id": "v_0035",
   "x": 71.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9847,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.999,
   "pass": true
  },
  {
   "id": "v_0036",
   "x": 73.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9835,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.999,
   "pass": true
  },
  {
   "id": "v_0037",
   "x": 75.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.98,
   "P_total_assumed": 0.9987,
   "P_total_empirical": 0.9987,
   "pass": true
  },
  {
   "id": "v_0038",
   "x": 77.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9758,
   "P_total_assumed": 0.9985,
   "P_total_empirical": 0.9985,
   "pass": true
  },
  {
   "id": "v_0039",
   "x": 79.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9704,
   "P_total_assumed": 0.9981,
   "P_total_empirical": 0.9981,
   "pass": true
  },
  {
   "id": "v_0040",
   "x": 81.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9638,
   "P_total_assumed": 0.9977,
   "P_total_empirical": 0.9977,
   "pass": true
  },
  {
   "id": "v_0041",
   "x": 83.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9895,
   "P_total_assumed": 0.9993,
   "P_total_empirical": 0.9993,
   "pass": true
  },
  {
   "id": "v_0042",
   "x": 85.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9874,
   "P_total_assumed": 0.9991,
   "P_total_empirical": 0.9991,
   "pass": true
  },
  {
   "id": "v_0043",
   "x": 87.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9849,
   "P_total_assumed": 0.9949,
   "P_total_empirical": 0.9949,
   "pass": true
  },
  {
   "id": "v_0044",
   "x": 89.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.982,
   "P_total_assumed": 0.982,
   "P_total_empirical": 0.982,
   "pass": true
  },
  {
   "id": "v_0045",
   "x": 91.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.888,
   "P_total_assumed": 0.888,
   "P_total_empirical": 0.888,
   "pass": true
  },
  {
   "id": "v_0046",
   "x": 93.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8684,
   "P_total_assumed": 0.8684,
   "P_total_empirical": 0.8684,
   "pass": true
  },
  {
   "id": "v_0047",
   "x": 95.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8474,
   "P_total_assumed": 0.8474,
   "P_total_empirical": 0.8474,
   "pass": true
  },
  {
   "id": "v_0048",
   "x": 97.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8258,
   "P_total_assumed": 0.8258,
   "P_total_empirical": 0.8258,
   "pass": true
  },
  {
   "id": "v_0049",
   "x": 99.0,
   "y": 1.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8024,
   "P_total_assumed": 0.8024,
   "P_total_empirical": 0.8024,
   "pass": true
  },
  {
   "id": "v_0050",
   "x": 1.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3261,
   "P_total_assumed": 0.8018,
   "P_total_empirical": 0.6013,
   "pass": true
  },
  {
   "id": "v_0051",
   "x": 3.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.342,
   "P_total_assumed": 0.825,
   "P_total_empirical": 0.6253,
   "pass": true
  },
  {
   "id": "v_0052",
   "x": 5.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3598,
   "P_total_assumed": 0.8474,
   "P_total_empirical": 0.6498,
   "pass": true
  },
  {
   "id": "v_0053",
   "x": 7.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.378,
   "P_total_assumed": 0.8678,
   "P_total_empirical": 0.6737,
   "pass": true
  },
  {
   "id": "v_0054",
   "x": 9.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3964,
   "P_total_assumed": 0.8871,
   "P_total_empirical": 0.698,
   "pass": true
  },
  {
   "id": "v_0055",
   "x": 11.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.5825,
   "P_total_assumed": 0.9316,
   "P_total_empirical": 0.8018,
   "pass": true
  },
  {
   "id": "v_0056",
   "x": 13.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9057,
   "P_total_assumed": 0.9867,
   "P_total_empirical": 0.9578,
   "pass": true
  },
  {
   "id": "v_0057",
   "x": 15.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9623,
   "P_total_assumed": 0.9954,
   "P_total_empirical": 0.9841,
   "pass": true
  },
  {
   "id": "v_0058",
   "x": 17.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9672,
   "P_total_assumed": 0.9994,
   "P_total_empirical": 0.9978,
   "pass": true
  },
  {
   "id": "v_0059",
   "x": 19.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9711,
   "P_total_assumed": 0.9977,
   "P_total_empirical": 0.9915,
   "pass": true
  },
  {
   "id": "v_0060",
   "x": 21.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9768,
   "P_total_assumed": 0.9981,
   "P_total_empirical": 0.9937,
   "pass": true
  },
  {
   "id": "v_0061",
   "x": 23.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9781,
   "P_total_assumed": 0.9985,
   "P_total_empirical": 0.9945,
   "pass": true
  },
  {
   "id": "v_0062",
   "x": 25.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9794,
   "P_total_assumed": 0.9988,
   "P_total_empirical": 0.9953,
   "pass": true
  },
  {
   "id": "v_0063",
   "x": 27.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9808,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.996,
   "pass": true
  },
  {
   "id": "v_0064",
   "x": 29.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9822,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.9963,
   "pass": true
  },
  {
   "id": "v_0065",
   "x": 31.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9882,
   "P_total_assumed": 0.9994,
   "P_total_empirical": 0.9977,
   "pass": true
  },
  {
   "id": "v_0066",
   "x": 33.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9975,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 0.9995,
   "pass": true
  },
  {
   "id": "v_0067",
   "x": 35.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.999,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0068",
   "x": 37.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0069",
   "x": 39.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0070",
   "x": 41.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0071",
   "x": 43.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9993,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0072",
   "x": 45.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0073",
   "x": 47.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0074",
   "x": 49.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9995,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0075",
   "x": 51.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9996,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0076",
   "x": 53.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0077",
   "x": 55.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0078",
   "x": 57.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0079",
   "x": 59.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9995,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0080",
   "x": 61.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9995,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0081",
   "x": 63.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0082",
   "x": 65.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9993,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0083",
   "x": 67.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0084",
   "x": 69.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9991,
   "P_total_assumed": 0.9994,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0085",
   "x": 71.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.999,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0086",
   "x": 73.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9835,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.999,
   "pass": true
  },
  {
   "id": "v_0087",
   "x": 75.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9801,
   "P_total_assumed": 0.9988,
   "P_total_empirical": 0.9988,
   "pass": true
  },
  {
   "id": "v_0088",
   "x": 77.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9758,
   "P_total_assumed": 0.9985,
   "P_total_empirical": 0.9985,
   "pass": true
  },
  {
   "id": "v_0089",
   "x": 79.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9705,
   "P_total_assumed": 0.9981,
   "P_total_empirical": 0.9981,
   "pass": true
  },
  {
   "id": "v_0090",
   "x": 81.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9638,
   "P_total_assumed": 0.9977,
   "P_total_empirical": 0.9977,
   "pass": true
  },
  {
   "id": "v_0091",
   "x": 83.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9907,
   "P_total_assumed": 0.9994,
   "P_total_empirical": 0.9994,
   "pass": true
  },
  {
   "id": "v_0092",
   "x": 85.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9888,
   "P_total_assumed": 0.9992,
   "P_total_empirical": 0.9992,
   "pass": true
  },
  {
   "id": "v_0093",
   "x": 87.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9866,
   "P_total_assumed": 0.9978,
   "P_total_empirical": 0.9978,
   "pass": true
  },
  {
   "id": "v_0094",
   "x": 89.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.984,
   "P_total_assumed": 0.9886,
   "P_total_empirical": 0.9886,
   "pass": true
  },
  {
   "id": "v_0095",
   "x": 91.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8871,
   "P_total_assumed": 0.8871,
   "P_total_empirical": 0.8871,
   "pass": true
  },
  {
   "id": "v_0096",
   "x": 93.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8678,
   "P_total_assumed": 0.8678,
   "P_total_empirical": 0.8678,
   "pass": true
  },
  {
   "id": "v_0097",
   "x": 95.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8474,
   "P_total_assumed": 0.8474,
   "P_total_empirical": 0.8474,
   "pass": true
  },
  {
   "id": "v_0098",
   "x": 97.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.825,
   "P_total_assumed": 0.825,
   "P_total_empirical": 0.825,
   "pass": true
  },
  {
   "id": "v_0099",
   "x": 99.0,
   "y": 3.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8018,
   "P_total_assumed": 0.8018,
   "P_total_empirical": 0.8018,
   "pass": true
  },
  {
   "id": "v_0100",
   "x": 1.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3277,
   "P_total_assumed": 0.801,
   "P_total_empirical": 0.6022,
   "pass": true
  },
  {
   "id": "v_0101",
   "x": 3.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3436,
   "P_total_assumed": 0.8237,
   "P_total_empirical": 0.6251,
   "pass": true
  },
  {
   "id": "v_0102",
   "x": 5.0,
   "y": 5.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.3598,
   "P_total_assumed": 0.8462,
   "P_total_empirical": 0.6487,
   "pass": true
  },
  {
   "id": "v_0103",
   "x": 7.0,
   "y": 5.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.378,
   "P_total_assumed": 0.8672,
   "P_total_empirical": 0.6737,
   "pass": true
  },
  {
   "id": "v_0104",
   "x": 9.0,
   "y": 5.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.3981,
   "P_total_assumed": 0.8866,
   "P_total_empirical": 0.6989,
   "pass": true
  },
  {
   "id": "v_0105",
   "x": 11.0,
   "y": 5.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.9375,
   "P_total_assumed": 0.9897,
   "P_total_empirical": 0.9703,
   "pass": true
  },
  {
   "id": "v_0106",
   "x": 13.0,
   "y": 5.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.958,
   "P_total_assumed": 0.994,
   "P_total_empirical": 0.9811,
   "pass": true
  },
  {
   "id": "v_0107",
   "x": 15.0,
   "y": 5.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.9652,
   "P_total_assumed": 0.9957,
   "P_total_empirical": 0.9853,
   "pass": true
  },
  {
   "id": "v_0108",
   "x": 17.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9676,
   "P_total_assumed": 0.9972,
   "P_total_empirical": 0.9897,
   "pass": true
  },
  {
   "id": "v_0109",
   "x": 19.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9694,
   "P_total_assumed": 0.9977,
   "P_total_empirical": 0.991,
   "pass": true
  },
  {
   "id": "v_0110",
   "x": 21.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9769,
   "P_total_assumed": 0.9981,
   "P_total_empirical": 0.9937,
   "pass": true
  },
  {
   "id": "v_0111",
   "x": 23.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9783,
   "P_total_assumed": 0.9985,
   "P_total_empirical": 0.9946,
   "pass": true
  },
  {
   "id": "v_0112",
   "x": 25.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9796,
   "P_total_assumed": 0.9987,
   "P_total_empirical": 0.9954,
   "pass": true
  },
  {
   "id": "v_0113",
   "x": 27.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.981,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.9961,
   "pass": true
  },
  {
   "id": "v_0114",
   "x": 29.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9823,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.9964,
   "pass": true
  },
  {
   "id": "v_0115",
   "x": 31.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9982,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 0.9996,
   "pass": true
  },
  {
   "id": "v_0116",
   "x": 33.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9989,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0117",
   "x": 35.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9991,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0118",
   "x": 37.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0119",
   "x": 39.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0120",
   "x": 41.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0121",
   "x": 43.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9993,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0122",
   "x": 45.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0123",
   "x": 47.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0124",
   "x": 49.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0125",
   "x": 51.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0126",
   "x": 53.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0127",
   "x": 55.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0128",
   "x": 57.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0129",
   "x": 59.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0130",
   "x": 61.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0131",
   "x": 63.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0132",
   "x": 65.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9993,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0133",
   "x": 67.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0134",
   "x": 69.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9991,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0135",
   "x": 71.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.999,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0136",
   "x": 73.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.999,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0137",
   "x": 75.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9987,
   "P_total_assumed": 0.9987,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0138",
   "x": 77.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9985,
   "P_total_assumed": 0.9985,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0139",
   "x": 79.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9981,
   "P_total_assumed": 0.9981,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0140",
   "x": 81.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9636,
   "P_total_assumed": 0.9977,
   "P_total_empirical": 0.9977,
   "pass": true
  },
  {
   "id": "v_0141",
   "x": 83.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9558,
   "P_total_assumed": 0.9972,
   "P_total_empirical": 0.9972,
   "pass": true
  },
  {
   "id": "v_0142",
   "x": 85.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.99,
   "P_total_assumed": 0.9994,
   "P_total_empirical": 0.9994,
   "pass": true
  },
  {
   "id": "v_0143",
   "x": 87.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.988,
   "P_total_assumed": 0.9991,
   "P_total_empirical": 0.9991,
   "pass": true
  },
  {
   "id": "v_0144",
   "x": 89.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9858,
   "P_total_assumed": 0.9985,
   "P_total_empirical": 0.9985,
   "pass": true
  },
  {
   "id": "v_0145",
   "x": 91.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8866,
   "P_total_assumed": 0.8866,
   "P_total_empirical": 0.8866,
   "pass": true
  },
  {
   "id": "v_0146",
   "x": 93.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8672,
   "P_total_assumed": 0.8672,
   "P_total_empirical": 0.8672,
   "pass": true
  },
  {
   "id": "v_0147",
   "x": 95.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8462,
   "P_total_assumed": 0.8462,
   "P_total_empirical": 0.8462,
   "pass": true
  },
  {
   "id": "v_0148",
   "x": 97.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8237,
   "P_total_assumed": 0.8237,
   "P_total_empirical": 0.8237,
   "pass": true
  },
  {
   "id": "v_0149",
   "x": 99.0,
   "y": 5.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.801,
   "P_total_assumed": 0.801,
   "P_total_empirical": 0.801,
   "pass": true
  },
  {
   "id": "v_0150",
   "x": 1.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0151",
   "x": 3.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0152",
   "x": 5.0,
   "y": 7.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0153",
   "x": 15.0,
   "y": 7.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.9661,
   "P_total_assumed": 0.9957,
   "P_total_empirical": 0.9857,
   "pass": true
  },
  {
   "id": "v_0154",
   "x": 17.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9678,
   "P_total_assumed": 0.9972,
   "P_total_empirical": 0.9898,
   "pass": true
  },
  {
   "id": "v_0155",
   "x": 19.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9758,
   "P_total_assumed": 0.9977,
   "P_total_empirical": 0.9929,
   "pass": true
  },
  {
   "id": "v_0156",
   "x": 21.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9771,
   "P_total_assumed": 0.9981,
   "P_total_empirical": 0.9938,
   "pass": true
  },
  {
   "id": "v_0157",
   "x": 23.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9784,
   "P_total_assumed": 0.9985,
   "P_total_empirical": 0.9946,
   "pass": true
  },
  {
   "id": "v_0158",
   "x": 25.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9798,
   "P_total_assumed": 0.9987,
   "P_total_empirical": 0.9954,
   "pass": true
  },
  {
   "id": "v_0159",
   "x": 27.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9811,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.9961,
   "pass": true
  },
  {
   "id": "v_0160",
   "x": 29.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9825,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.9964,
   "pass": true
  },
  {
   "id": "v_0161",
   "x": 31.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9989,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0162",
   "x": 33.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9991,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0163",
   "x": 35.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0164",
   "x": 37.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9991,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0165",
   "x": 39.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0166",
   "x": 41.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0167",
   "x": 43.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9993,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0168",
   "x": 45.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0169",
   "x": 47.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0170",
   "x": 49.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0171",
   "x": 51.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0172",
   "x": 53.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0173",
   "x": 55.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0174",
   "x": 57.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0175",
   "x": 59.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0176",
   "x": 61.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0177",
   "x": 63.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0178",
   "x": 65.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0179",
   "x": 67.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0180",
   "x": 69.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0181",
   "x": 71.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0182",
   "x": 73.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9989,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0183",
   "x": 75.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9987,
   "P_total_assumed": 0.9987,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0184",
   "x": 77.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9985,
   "P_total_assumed": 0.9985,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0185",
   "x": 79.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9981,
   "P_total_assumed": 0.9981,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0186",
   "x": 81.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9977,
   "P_total_assumed": 0.9977,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0187",
   "x": 83.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9972,
   "P_total_assumed": 0.9972,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0188",
   "x": 85.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 0.9994,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0189",
   "x": 87.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9993,
   "P_total_assumed": 0.9993,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0190",
   "x": 89.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9873,
   "P_total_assumed": 0.9992,
   "P_total_empirical": 0.9992,
   "pass": true
  },
  {
   "id": "v_0191",
   "x": 91.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8852,
   "P_total_assumed": 0.8852,
   "P_total_empirical": 0.8852,
   "pass": true
  },
  {
   "id": "v_0192",
   "x": 93.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8656,
   "P_total_assumed": 0.8656,
   "P_total_empirical": 0.8656,
   "pass": true
  },
  {
   "id": "v_0193",
   "x": 95.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8444,
   "P_total_assumed": 0.8444,
   "P_total_empirical": 0.8444,
   "pass": true
  },
  {
   "id": "v_0194",
   "x": 97.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.823,
   "P_total_assumed": 0.823,
   "P_total_empirical": 0.823,
   "pass": true
  },
  {
   "id": "v_0195",
   "x": 99.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.7987,
   "P_total_assumed": 0.7987,
   "P_total_empirical": 0.7987,
   "pass": true
  },
  {
   "id": "v_0196",
   "x": 1.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0197",
   "x": 3.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0198",
   "x": 5.0,
   "y": 9.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0199",
   "x": 15.0,
   "y": 9.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.4634,
   "P_total_assumed": 0.9919,
   "P_total_empirical": 0.9733,
   "pass": true
  },
  {
   "id": "v_0200",
   "x": 17.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9679,
   "P_total_assumed": 0.9971,
   "P_total_empirical": 0.9898,
   "pass": true
  },
  {
   "id": "v_0201",
   "x": 19.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9759,
   "P_total_assumed": 0.9976,
   "P_total_empirical": 0.9929,
   "pass": true
  },
  {
   "id": "v_0202",
   "x": 21.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9772,
   "P_total_assumed": 0.9981,
   "P_total_empirical": 0.9938,
   "pass": true
  },
  {
   "id": "v_0203",
   "x": 23.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9785,
   "P_total_assumed": 0.9984,
   "P_total_empirical": 0.9946,
   "pass": true
  },
  {
   "id": "v_0204",
   "x": 25.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9798,
   "P_total_assumed": 0.9987,
   "P_total_empirical": 0.9954,
   "pass": true
  },
  {
   "id": "v_0205",
   "x": 27.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9812,
   "P_total_assumed": 0.9989,
   "P_total_empirical": 0.9961,
   "pass": true
  },
  {
   "id": "v_0206",
   "x": 29.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9826,
   "P_total_assumed": 0.9989,
   "P_total_empirical": 0.996,
   "pass": true
  },
  {
   "id": "v_0207",
   "x": 31.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.999,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0208",
   "x": 33.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9991,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0209",
   "x": 35.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.999,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0210",
   "x": 37.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9991,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0211",
   "x": 39.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0212",
   "x": 41.0,
   "y": 9.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0213",
   "x": 43.0,
   "y": 9.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.9993,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0214",
   "x": 45.0,
   "y": 9.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0215",
   "x": 47.0,
   "y": 9.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0216",
   "x": 49.0,
   "y": 9.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0217",
   "x": 51.0,
   "y": 9.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0218",
   "x": 53.0,
   "y": 9.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0219",
   "x": 55.0,
   "y": 9.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0220",
   "x": 57.0,
   "y": 9.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0221",
   "x": 59.0,
   "y": 9.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0222",
   "x": 61.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0223",
   "x": 63.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0224",
   "x": 65.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0225",
   "x": 67.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0226",
   "x": 69.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0227",
   "x": 71.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9989,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0228",
   "x": 73.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9989,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0229",
   "x": 75.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9987,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0230",
   "x": 77.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9984,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0231",
   "x": 79.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9981,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0232",
   "x": 81.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9977,
   "P_total_assumed": 0.9976,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0233",
   "x": 83.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9971,
   "P_total_assumed": 0.9971,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0234",
   "x": 85.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9995,
   "P_total_assumed": 0.9995,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0235",
   "x": 87.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 0.9994,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0236",
   "x": 89.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9993,
   "P_total_assumed": 0.9993,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0237",
   "x": 91.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9926,
   "P_total_assumed": 0.8833,
   "P_total_empirical": 0.9926,
   "pass": true
  },
  {
   "id": "v_0238",
   "x": 93.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.991,
   "P_total_assumed": 0.8639,
   "P_total_empirical": 0.991,
   "pass": true
  },
  {
   "id": "v_0239",
   "x": 95.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9831,
   "P_total_assumed": 0.8425,
   "P_total_empirical": 0.9831,
   "pass": true
  },
  {
   "id": "v_0240",
   "x": 97.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8209,
   "P_total_assumed": 0.8209,
   "P_total_empirical": 0.8209,
   "pass": true
  },
  {
   "id": "v_0241",
   "x": 99.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.7964,
   "P_total_assumed": 0.7964,
   "P_total_empirical": 0.7964,
   "pass": true
  },
  {
   "id": "v_0242",
   "x": 1.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0243",
   "x": 3.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0244",
   "x": 5.0,
   "y": 11.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0245",
   "x": 15.0,
   "y": 11.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.4634,
   "P_total_assumed": 0.9926,
   "P_total_empirical": 0.9761,
   "pass": true
  },
  {
   "id": "v_0246",
   "x": 17.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9747,
   "P_total_assumed": 0.9971,
   "P_total_empirical": 0.9919,
   "pass": true
  },
  {
   "id": "v_0247",
   "x": 19.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.976,
   "P_total_assumed": 0.9976,
   "P_total_empirical": 0.9929,
   "pass": true
  },
  {
   "id": "v_0248",
   "x": 21.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9772,
   "P_total_assumed": 0.998,
   "P_total_empirical": 0.9938,
   "pass": true
  },
  {
   "id": "v_0249",
   "x": 23.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9785,
   "P_total_assumed": 0.9984,
   "P_total_empirical": 0.9946,
   "pass": true
  },
  {
   "id": "v_0250",
   "x": 25.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9799,
   "P_total_assumed": 0.9987,
   "P_total_empirical": 0.9954,
   "pass": true
  },
  {
   "id": "v_0251",
   "x": 27.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9813,
   "P_total_assumed": 0.9989,
   "P_total_empirical": 0.9961,
   "pass": true
  },
  {
   "id": "v_0252",
   "x": 29.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9826,
   "P_total_assumed": 0.9989,
   "P_total_empirical": 0.9959,
   "pass": true
  },
  {
   "id": "v_0253",
   "x": 31.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.999,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0254",
   "x": 33.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9991,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0255",
   "x": 35.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.999,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0256",
   "x": 37.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9991,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0257",
   "x": 39.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0258",
   "x": 41.0,
   "y": 11.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0259",
   "x": 43.0,
   "y": 11.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.9993,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0260",
   "x": 45.0,
   "y": 11.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0261",
   "x": 47.0,
   "y": 11.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0262",
   "x": 49.0,
   "y": 11.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0263",
   "x": 51.0,
   "y": 11.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0264",
   "x": 53.0,
   "y": 11.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0265",
   "x": 55.0,
   "y": 11.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0266",
   "x": 57.0,
   "y": 11.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0267",
   "x": 59.0,
   "y": 11.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0268",
   "x": 61.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0269",
   "x": 63.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0270",
   "x": 65.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0271",
   "x": 67.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0272",
   "x": 69.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0273",
   "x": 71.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9989,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0274",
   "x": 73.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9989,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0275",
   "x": 75.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9987,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0276",
   "x": 77.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9984,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0277",
   "x": 79.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.998,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0278",
   "x": 81.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9998,
   "P_total_assumed": 0.9976,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0279",
   "x": 83.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9998,
   "P_total_assumed": 0.9971,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0280",
   "x": 85.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 0.9995,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0281",
   "x": 87.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 0.9994,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0282",
   "x": 89.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9993,
   "P_total_assumed": 0.9993,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0283",
   "x": 91.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9924,
   "P_total_assumed": 0.8804,
   "P_total_empirical": 0.9924,
   "pass": true
  },
  {
   "id": "v_0284",
   "x": 93.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9908,
   "P_total_assumed": 0.8606,
   "P_total_empirical": 0.9908,
   "pass": true
  },
  {
   "id": "v_0285",
   "x": 95.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9828,
   "P_total_assumed": 0.8399,
   "P_total_empirical": 0.9828,
   "pass": true
  },
  {
   "id": "v_0286",
   "x": 97.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8693,
   "P_total_assumed": 0.8175,
   "P_total_empirical": 0.8693,
   "pass": true
  },
  {
   "id": "v_0287",
   "x": 99.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.7941,
   "P_total_assumed": 0.7941,
   "P_total_empirical": 0.7941,
   "pass": true
  },
  {
   "id": "v_0288",
   "x": 1.0,
   "y": 13.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0289",
   "x": 3.0,
   "y": 13.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0290",
   "x": 5.0,
   "y": 13.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0291",
   "x": 15.0,
   "y": 13.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.1065,
   "P_total_assumed": 0.9344,
   "P_total_empirical": 0.9276,
   "pass": true
  },
  {
   "id": "v_0292",
   "x": 85.0,
   "y": 13.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9968,
   "P_total_assumed": 0.9959,
   "P_total_empirical": 0.9997,
   "pass": true
  },
  {
   "id": "v_0293",
   "x": 87.0,
   "y": 13.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9968,
   "P_total_assumed": 0.9959,
   "P_total_empirical": 0.9997,
   "pass": true
  },
  {
   "id": "v_0294",
   "x": 89.0,
   "y": 13.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9989,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0295",
   "x": 91.0,
   "y": 13.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 0.8774,
   "P_total_empirical": 0.9923,
   "pass": true
  },
  {
   "id": "v_0296",
   "x": 93.0,
   "y": 13.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 0.8572,
   "P_total_empirical": 0.9908,
   "pass": true
  },
  {
   "id": "v_0297",
   "x": 95.0,
   "y": 13.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9877,
   "P_total_assumed": 0.836,
   "P_total_empirical": 0.9877,
   "pass": true
  },
  {
   "id": "v_0298",
   "x": 97.0,
   "y": 13.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9688,
   "P_total_assumed": 0.8137,
   "P_total_empirical": 0.9688,
   "pass": true
  },
  {
   "id": "v_0299",
   "x": 99.0,
   "y": 13.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.7909,
   "P_total_assumed": 0.7909,
   "P_total_empirical": 0.7909,
   "pass": true
  },
  {
   "id": "v_0300",
   "x": 1.0,
   "y": 15.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0301",
   "x": 3.0,
   "y": 15.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0302",
   "x": 5.0,
   "y": 15.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0303",
   "x": 15.0,
   "y": 15.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.1065,
   "P_total_assumed": 0.9403,
   "P_total_empirical": 0.9342,
   "pass": true
  },
  {
   "id": "v_0304",
   "x": 19.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.4556,
   "P_total_assumed": 0.5735,
   "P_total_empirical": 0.6309,
   "pass": true
  },
  {
   "id": "v_0305",
   "x": 21.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.4589,
   "P_total_assumed": 0.5783,
   "P_total_empirical": 0.6356,
   "pass": true
  },
  {
   "id": "v_0306",
   "x": 23.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.4624,
   "P_total_assumed": 0.5829,
   "P_total_empirical": 0.6405,
   "pass": true
  },
  {
   "id": "v_0307",
   "x": 25.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.4658,
   "P_total_assumed": 0.587,
   "P_total_empirical": 0.6452,
   "pass": true
  },
  {
   "id": "v_0308",
   "x": 27.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.4693,
   "P_total_assumed": 0.4837,
   "P_total_empirical": 0.5581,
   "pass": true
  },
  {
   "id": "v_0309",
   "x": 29.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.4724,
   "P_total_assumed": 0.4885,
   "P_total_empirical": 0.564,
   "pass": true
  },
  {
   "id": "v_0310",
   "x": 31.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.4802,
   "P_total_assumed": 0.6021,
   "P_total_empirical": 0.5733,
   "pass": true
  },
  {
   "id": "v_0311",
   "x": 33.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.4842,
   "P_total_assumed": 0.6052,
   "P_total_empirical": 0.5794,
   "pass": true
  },
  {
   "id": "v_0312",
   "x": 35.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.4882,
   "P_total_assumed": 0.608,
   "P_total_empirical": 0.5852,
   "pass": true
  },
  {
   "id": "v_0313",
   "x": 37.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.4918,
   "P_total_assumed": 0.6104,
   "P_total_empirical": 0.5905,
   "pass": true
  },
  {
   "id": "v_0314",
   "x": 39.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.4954,
   "P_total_assumed": 0.6125,
   "P_total_empirical": 0.5955,
   "pass": true
  },
  {
   "id": "v_0315",
   "x": 41.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.4986,
   "P_total_assumed": 0.6142,
   "P_total_empirical": 0.5998,
   "pass": true
  },
  {
   "id": "v_0316",
   "x": 43.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5015,
   "P_total_assumed": 0.6156,
   "P_total_empirical": 0.6037,
   "pass": true
  },
  {
   "id": "v_0317",
   "x": 45.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.504,
   "P_total_assumed": 0.6166,
   "P_total_empirical": 0.6069,
   "pass": true
  },
  {
   "id": "v_0318",
   "x": 47.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6125,
   "P_total_assumed": 0.6173,
   "P_total_empirical": 0.6096,
   "pass": true
  },
  {
   "id": "v_0319",
   "x": 49.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6137,
   "P_total_assumed": 0.6177,
   "P_total_empirical": 0.6116,
   "pass": true
  },
  {
   "id": "v_0320",
   "x": 51.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6145,
   "P_total_assumed": 0.6177,
   "P_total_empirical": 0.6131,
   "pass": true
  },
  {
   "id": "v_0321",
   "x": 53.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6149,
   "P_total_assumed": 0.6173,
   "P_total_empirical": 0.6139,
   "pass": true
  },
  {
   "id": "v_0322",
   "x": 55.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6148,
   "P_total_assumed": 0.6166,
   "P_total_empirical": 0.6142,
   "pass": true
  },
  {
   "id": "v_0323",
   "x": 57.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6143,
   "P_total_assumed": 0.6156,
   "P_total_empirical": 0.6139,
   "pass": true
  },
  {
   "id": "v_0324",
   "x": 59.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6133,
   "P_total_assumed": 0.6142,
   "P_total_empirical": 0.6131,
   "pass": true
  },
  {
   "id": "v_0325",
   "x": 61.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.6119,
   "P_total_assumed": 0.6125,
   "P_total_empirical": 0.6118,
   "pass": true
  },
  {
   "id": "v_0326",
   "x": 63.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.61,
   "P_total_assumed": 0.6104,
   "P_total_empirical": 0.6099,
   "pass": true
  },
  {
   "id": "v_0327",
   "x": 65.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.6078,
   "P_total_assumed": 0.608,
   "P_total_empirical": 0.6078,
   "pass": true
  },
  {
   "id": "v_0328",
   "x": 67.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.6051,
   "P_total_assumed": 0.6052,
   "P_total_empirical": 0.6051,
   "pass": true
  },
  {
   "id": "v_0329",
   "x": 69.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.6021,
   "P_total_assumed": 0.6021,
   "P_total_empirical": 0.6021,
   "pass": true
  },
  {
   "id": "v_0330",
   "x": 71.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.5987,
   "P_total_assumed": 0.4885,
   "P_total_empirical": 0.5987,
   "pass": true
  },
  {
   "id": "v_0331",
   "x": 73.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.5949,
   "P_total_assumed": 0.4837,
   "P_total_empirical": 0.5949,
   "pass": true
  },
  {
   "id": "v_0332",
   "x": 75.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.6759,
   "P_total_assumed": 0.587,
   "P_total_empirical": 0.676,
   "pass": true
  },
  {
   "id": "v_0333",
   "x": 77.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.6727,
   "P_total_assumed": 0.5829,
   "P_total_empirical": 0.6728,
   "pass": true
  },
  {
   "id": "v_0334",
   "x": 79.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.6691,
   "P_total_assumed": 0.5783,
   "P_total_empirical": 0.6692,
   "pass": true
  },
  {
   "id": "v_0335",
   "x": 81.0,
   "y": 15.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.6652,
   "P_total_assumed": 0.5735,
   "P_total_empirical": 0.6654,
   "pass": true
  },
  {
   "id": "v_0336",
   "x": 85.0,
   "y": 15.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9971,
   "P_total_assumed": 0.9963,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0337",
   "x": 87.0,
   "y": 15.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.997,
   "P_total_assumed": 0.9962,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0338",
   "x": 89.0,
   "y": 15.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.997,
   "P_total_assumed": 0.9962,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0339",
   "x": 91.0,
   "y": 15.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9636,
   "P_total_assumed": 0.2658,
   "P_total_empirical": 0.9539,
   "pass": true
  },
  {
   "id": "v_0340",
   "x": 93.0,
   "y": 15.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9628,
   "P_total_assumed": 0.2557,
   "P_total_empirical": 0.9529,
   "pass": true
  },
  {
   "id": "v_0341",
   "x": 95.0,
   "y": 15.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9952,
   "P_total_assumed": 0.2458,
   "P_total_empirical": 0.951,
   "pass": true
  },
  {
   "id": "v_0342",
   "x": 97.0,
   "y": 15.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9942,
   "P_total_assumed": 0.2361,
   "P_total_empirical": 0.9465,
   "pass": true
  },
  {
   "id": "v_0343",
   "x": 99.0,
   "y": 15.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9607,
   "P_total_assumed": 0.6772,
   "P_total_empirical": 0.6772,
   "pass": true
  },
  {
   "id": "v_0344",
   "x": 1.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0345",
   "x": 3.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0346",
   "x": 5.0,
   "y": 17.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0347",
   "x": 15.0,
   "y": 17.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.9409,
   "P_total_assumed": 0.9449,
   "P_total_empirical": 0.996,
   "pass": true
  },
  {
   "id": "v_0348",
   "x": 19.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4558,
   "P_total_assumed": 0.5731,
   "P_total_empirical": 0.6312,
   "pass": true
  },
  {
   "id": "v_0349",
   "x": 21.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4592,
   "P_total_assumed": 0.578,
   "P_total_empirical": 0.636,
   "pass": true
  },
  {
   "id": "v_0350",
   "x": 23.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4627,
   "P_total_assumed": 0.5826,
   "P_total_empirical": 0.6409,
   "pass": true
  },
  {
   "id": "v_0351",
   "x": 25.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.466,
   "P_total_assumed": 0.5868,
   "P_total_empirical": 0.6455,
   "pass": true
  },
  {
   "id": "v_0352",
   "x": 27.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4696,
   "P_total_assumed": 0.4822,
   "P_total_empirical": 0.5575,
   "pass": true
  },
  {
   "id": "v_0353",
   "x": 29.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.332,
   "P_total_assumed": 0.4872,
   "P_total_empirical": 0.4468,
   "pass": false
  },
  {
   "id": "v_0354",
   "x": 31.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4798,
   "P_total_assumed": 0.6012,
   "P_total_empirical": 0.5723,
   "pass": true
  },
  {
   "id": "v_0355",
   "x": 33.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4838,
   "P_total_assumed": 0.6044,
   "P_total_empirical": 0.5784,
   "pass": true
  },
  {
   "id": "v_0356",
   "x": 35.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4878,
   "P_total_assumed": 0.6072,
   "P_total_empirical": 0.5843,
   "pass": true
  },
  {
   "id": "v_0357",
   "x": 37.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4915,
   "P_total_assumed": 0.6097,
   "P_total_empirical": 0.5896,
   "pass": true
  },
  {
   "id": "v_0358",
   "x": 39.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4949,
   "P_total_assumed": 0.6118,
   "P_total_empirical": 0.5945,
   "pass": true
  },
  {
   "id": "v_0359",
   "x": 41.0,
   "y": 17.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.4982,
   "P_total_assumed": 0.6136,
   "P_total_empirical": 0.5989,
   "pass": true
  },
  {
   "id": "v_0360",
   "x": 43.0,
   "y": 17.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5011,
   "P_total_assumed": 0.615,
   "P_total_empirical": 0.6029,
   "pass": true
  },
  {
   "id": "v_0361",
   "x": 45.0,
   "y": 17.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5035,
   "P_total_assumed": 0.6161,
   "P_total_empirical": 0.6061,
   "pass": true
  },
  {
   "id": "v_0362",
   "x": 47.0,
   "y": 17.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6121,
   "P_total_assumed": 0.6168,
   "P_total_empirical": 0.6088,
   "pass": true
  },
  {
   "id": "v_0363",
   "x": 49.0,
   "y": 17.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6133,
   "P_total_assumed": 0.6172,
   "P_total_empirical": 0.6109,
   "pass": true
  },
  {
   "id": "v_0364",
   "x": 51.0,
   "y": 17.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6141,
   "P_total_assumed": 0.6172,
   "P_total_empirical": 0.6124,
   "pass": true
  },
  {
   "id": "v_0365",
   "x": 53.0,
   "y": 17.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6144,
   "P_total_assumed": 0.6168,
   "P_total_empirical": 0.6133,
   "pass": true
  },
  {
   "id": "v_0366",
   "x": 55.0,
   "y": 17.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6143,
   "P_total_assumed": 0.6161,
   "P_total_empirical": 0.6135,
   "pass": true
  },
  {
   "id": "v_0367",
   "x": 57.0,
   "y": 17.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6137,
   "P_total_assumed": 0.615,
   "P_total_empirical": 0.6132,
   "pass": true
  },
  {
   "id": "v_0368",
   "x": 59.0,
   "y": 17.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6127,
   "P_total_assumed": 0.6136,
   "P_total_empirical": 0.6124,
   "pass": true
  },
  {
   "id": "v_0369",
   "x": 61.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6112,
   "P_total_assumed": 0.6118,
   "P_total_empirical": 0.611,
   "pass": true
  },
  {
   "id": "v_0370",
   "x": 63.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6093,
   "P_total_assumed": 0.6097,
   "P_total_empirical": 0.6092,
   "pass": true
  },
  {
   "id": "v_0371",
   "x": 65.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.607,
   "P_total_assumed": 0.6072,
   "P_total_empirical": 0.6069,
   "pass": true
  },
  {
   "id": "v_0372",
   "x": 67.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6042,
   "P_total_assumed": 0.6044,
   "P_total_empirical": 0.6042,
   "pass": true
  },
  {
   "id": "v_0373",
   "x": 69.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6012,
   "P_total_assumed": 0.6012,
   "P_total_empirical": 0.6012,
   "pass": true
  },
  {
   "id": "v_0374",
   "x": 71.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.5976,
   "P_total_assumed": 0.4872,
   "P_total_empirical": 0.5977,
   "pass": true
  },
  {
   "id": "v_0375",
   "x": 73.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.5937,
   "P_total_assumed": 0.4822,
   "P_total_empirical": 0.5938,
   "pass": true
  },
  {
   "id": "v_0376",
   "x": 75.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6758,
   "P_total_assumed": 0.5868,
   "P_total_empirical": 0.6758,
   "pass": true
  },
  {
   "id": "v_0377",
   "x": 77.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6724,
   "P_total_assumed": 0.5826,
   "P_total_empirical": 0.6725,
   "pass": true
  },
  {
   "id": "v_0378",
   "x": 79.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6688,
   "P_total_assumed": 0.578,
   "P_total_empirical": 0.6689,
   "pass": true
  },
  {
   "id": "v_0379",
   "x": 81.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6648,
   "P_total_assumed": 0.5731,
   "P_total_empirical": 0.6651,
   "pass": true
  },
  {
   "id": "v_0380",
   "x": 85.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9973,
   "P_total_assumed": 0.9965,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0381",
   "x": 87.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9973,
   "P_total_assumed": 0.9965,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0382",
   "x": 89.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9972,
   "P_total_assumed": 0.9965,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0383",
   "x": 91.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9636,
   "P_total_assumed": 0.2634,
   "P_total_empirical": 0.9538,
   "pass": true
  },
  {
   "id": "v_0384",
   "x": 93.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9629,
   "P_total_assumed": 0.2536,
   "P_total_empirical": 0.9531,
   "pass": true
  },
  {
   "id": "v_0385",
   "x": 95.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9621,
   "P_total_assumed": 0.2437,
   "P_total_empirical": 0.9523,
   "pass": true
  },
  {
   "id": "v_0386",
   "x": 97.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9612,
   "P_total_assumed": 0.234,
   "P_total_empirical": 0.9513,
   "pass": true
  },
  {
   "id": "v_0387",
   "x": 99.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.38,
   "P_total_assumed": 0.2242,
   "P_total_empirical": 0.2242,
   "pass": false
  },
  {
   "id": "v_0388",
   "x": 1.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0389",
   "x": 3.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0390",
   "x": 5.0,
   "y": 19.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.0502,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0502,
   "pass": false
  },
  {
   "id": "v_0391",
   "x": 7.0,
   "y": 19.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.0527,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0527,
   "pass": false
  },
  {
   "id": "v_0392",
   "x": 9.0,
   "y": 19.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.0553,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0553,
   "pass": false
  },
  {
   "id": "v_0393",
   "x": 11.0,
   "y": 19.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.9398,
   "P_total_assumed": 0.9473,
   "P_total_empirical": 0.9961,
   "pass": true
  },
  {
   "id": "v_0394",
   "x": 13.0,
   "y": 19.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.9397,
   "P_total_assumed": 0.9479,
   "P_total_empirical": 0.9962,
   "pass": true
  },
  {
   "id": "v_0395",
   "x": 15.0,
   "y": 19.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.9395,
   "P_total_assumed": 0.9483,
   "P_total_empirical": 0.9961,
   "pass": true
  },
  {
   "id": "v_0396",
   "x": 19.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4276,
   "P_total_assumed": 0.5723,
   "P_total_empirical": 0.612,
   "pass": true
  },
  {
   "id": "v_0397",
   "x": 21.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4296,
   "P_total_assumed": 0.5774,
   "P_total_empirical": 0.6161,
   "pass": true
  },
  {
   "id": "v_0398",
   "x": 23.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4317,
   "P_total_assumed": 0.582,
   "P_total_empirical": 0.6201,
   "pass": true
  },
  {
   "id": "v_0399",
   "x": 25.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4338,
   "P_total_assumed": 0.5864,
   "P_total_empirical": 0.6242,
   "pass": true
  },
  {
   "id": "v_0400",
   "x": 27.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.2829,
   "P_total_assumed": 0.4808,
   "P_total_empirical": 0.4007,
   "pass": false
  },
  {
   "id": "v_0401",
   "x": 29.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.2861,
   "P_total_assumed": 0.4858,
   "P_total_empirical": 0.4077,
   "pass": false
  },
  {
   "id": "v_0402",
   "x": 31.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4423,
   "P_total_assumed": 0.6002,
   "P_total_empirical": 0.5405,
   "pass": true
  },
  {
   "id": "v_0403",
   "x": 33.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4447,
   "P_total_assumed": 0.6033,
   "P_total_empirical": 0.5455,
   "pass": true
  },
  {
   "id": "v_0404",
   "x": 35.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4471,
   "P_total_assumed": 0.6063,
   "P_total_empirical": 0.5504,
   "pass": true
  },
  {
   "id": "v_0405",
   "x": 37.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4493,
   "P_total_assumed": 0.6088,
   "P_total_empirical": 0.5547,
   "pass": true
  },
  {
   "id": "v_0406",
   "x": 39.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4513,
   "P_total_assumed": 0.611,
   "P_total_empirical": 0.5587,
   "pass": true
  },
  {
   "id": "v_0407",
   "x": 41.0,
   "y": 19.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.4532,
   "P_total_assumed": 0.6129,
   "P_total_empirical": 0.5623,
   "pass": true
  },
  {
   "id": "v_0408",
   "x": 43.0,
   "y": 19.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.4547,
   "P_total_assumed": 0.6144,
   "P_total_empirical": 0.5654,
   "pass": true
  },
  {
   "id": "v_0409",
   "x": 45.0,
   "y": 19.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.4561,
   "P_total_assumed": 0.6155,
   "P_total_empirical": 0.568,
   "pass": true
  },
  {
   "id": "v_0410",
   "x": 47.0,
   "y": 19.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.574,
   "P_total_assumed": 0.6162,
   "P_total_empirical": 0.57,
   "pass": true
  },
  {
   "id": "v_0411",
   "x": 49.0,
   "y": 19.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5744,
   "P_total_assumed": 0.6166,
   "P_total_empirical": 0.5715,
   "pass": true
  },
  {
   "id": "v_0412",
   "x": 51.0,
   "y": 19.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5745,
   "P_total_assumed": 0.6166,
   "P_total_empirical": 0.5723,
   "pass": true
  },
  {
   "id": "v_0413",
   "x": 53.0,
   "y": 19.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5742,
   "P_total_assumed": 0.6162,
   "P_total_empirical": 0.5727,
   "pass": true
  },
  {
   "id": "v_0414",
   "x": 55.0,
   "y": 19.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5736,
   "P_total_assumed": 0.6155,
   "P_total_empirical": 0.5725,
   "pass": true
  },
  {
   "id": "v_0415",
   "x": 57.0,
   "y": 19.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5725,
   "P_total_assumed": 0.6144,
   "P_total_empirical": 0.5718,
   "pass": true
  },
  {
   "id": "v_0416",
   "x": 59.0,
   "y": 19.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.571,
   "P_total_assumed": 0.6129,
   "P_total_empirical": 0.5705,
   "pass": true
  },
  {
   "id": "v_0417",
   "x": 61.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.569,
   "P_total_assumed": 0.611,
   "P_total_empirical": 0.5687,
   "pass": true
  },
  {
   "id": "v_0418",
   "x": 63.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6084,
   "P_total_assumed": 0.6088,
   "P_total_empirical": 0.6082,
   "pass": true
  },
  {
   "id": "v_0419",
   "x": 65.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6061,
   "P_total_assumed": 0.6063,
   "P_total_empirical": 0.606,
   "pass": true
  },
  {
   "id": "v_0420",
   "x": 67.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6032,
   "P_total_assumed": 0.6033,
   "P_total_empirical": 0.6031,
   "pass": true
  },
  {
   "id": "v_0421",
   "x": 69.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6001,
   "P_total_assumed": 0.6002,
   "P_total_empirical": 0.6,
   "pass": true
  },
  {
   "id": "v_0422",
   "x": 71.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.5965,
   "P_total_assumed": 0.4858,
   "P_total_empirical": 0.5965,
   "pass": true
  },
  {
   "id": "v_0423",
   "x": 73.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.5926,
   "P_total_assumed": 0.4808,
   "P_total_empirical": 0.5926,
   "pass": true
  },
  {
   "id": "v_0424",
   "x": 75.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6754,
   "P_total_assumed": 0.5864,
   "P_total_empirical": 0.6755,
   "pass": true
  },
  {
   "id": "v_0425",
   "x": 77.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6719,
   "P_total_assumed": 0.582,
   "P_total_empirical": 0.6721,
   "pass": true
  },
  {
   "id": "v_0426",
   "x": 79.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6683,
   "P_total_assumed": 0.5774,
   "P_total_empirical": 0.6685,
   "pass": true
  },
  {
   "id": "v_0427",
   "x": 81.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6641,
   "P_total_assumed": 0.5723,
   "P_total_empirical": 0.6645,
   "pass": true
  },
  {
   "id": "v_0428",
   "x": 85.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9975,
   "P_total_assumed": 0.9968,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0429",
   "x": 87.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9974,
   "P_total_assumed": 0.9967,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0430",
   "x": 89.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9974,
   "P_total_assumed": 0.9967,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0431",
   "x": 91.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9634,
   "P_total_assumed": 0.2614,
   "P_total_empirical": 0.9537,
   "pass": true
  },
  {
   "id": "v_0432",
   "x": 93.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9628,
   "P_total_assumed": 0.2513,
   "P_total_empirical": 0.9531,
   "pass": true
  },
  {
   "id": "v_0433",
   "x": 95.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9622,
   "P_total_assumed": 0.2417,
   "P_total_empirical": 0.9524,
   "pass": true
  },
  {
   "id": "v_0434",
   "x": 97.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3877,
   "P_total_assumed": 0.2319,
   "P_total_empirical": 0.2319,
   "pass": false
  },
  {
   "id": "v_0435",
   "x": 99.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3776,
   "P_total_assumed": 0.2223,
   "P_total_empirical": 0.2223,
   "pass": false
  },
  {
   "id": "v_0436",
   "x": 1.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0888,
   "P_total_empirical": 0.0888,
   "pass": false
  },
  {
   "id": "v_0437",
   "x": 3.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0935,
   "P_total_empirical": 0.0935,
   "pass": false
  },
  {
   "id": "v_0438",
   "x": 5.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.239,
   "P_total_empirical": 0.0982,
   "pass": false
  },
  {
   "id": "v_0439",
   "x": 7.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.2485,
   "P_total_empirical": 0.1029,
   "pass": false
  },
  {
   "id": "v_0440",
   "x": 9.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9369,
   "P_total_assumed": 0.2584,
   "P_total_empirical": 0.9437,
   "pass": true
  },
  {
   "id": "v_0441",
   "x": 11.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9367,
   "P_total_assumed": 0.9497,
   "P_total_empirical": 0.9961,
   "pass": true
  },
  {
   "id": "v_0442",
   "x": 13.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9365,
   "P_total_assumed": 0.9503,
   "P_total_empirical": 0.9961,
   "pass": true
  },
  {
   "id": "v_0443",
   "x": 15.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9362,
   "P_total_assumed": 0.9507,
   "P_total_empirical": 0.9961,
   "pass": true
  },
  {
   "id": "v_0444",
   "x": 19.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3841,
   "P_total_assumed": 0.5711,
   "P_total_empirical": 0.5822,
   "pass": true
  },
  {
   "id": "v_0445",
   "x": 21.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.384,
   "P_total_assumed": 0.5763,
   "P_total_empirical": 0.5851,
   "pass": true
  },
  {
   "id": "v_0446",
   "x": 23.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3838,
   "P_total_assumed": 0.5811,
   "P_total_empirical": 0.5878,
   "pass": true
  },
  {
   "id": "v_0447",
   "x": 25.0,
   "y": 21.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total_geometric": 0.2155,
   "P_total_assumed": 0.4734,
   "P_total_empirical": 0.3379,
   "pass": false
  },
  {
   "id": "v_0448",
   "x": 27.0,
   "y": 21.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total_geometric": 0.2155,
   "P_total_assumed": 0.4789,
   "P_total_empirical": 0.3427,
   "pass": false
  },
  {
   "id": "v_0449",
   "x": 29.0,
   "y": 21.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total_geometric": 0.2154,
   "P_total_assumed": 0.4841,
   "P_total_empirical": 0.3476,
   "pass": false
  },
  {
   "id": "v_0450",
   "x": 31.0,
   "y": 21.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total_geometric": 0.3845,
   "P_total_assumed": 0.5988,
   "P_total_empirical": 0.4917,
   "pass": false
  },
  {
   "id": "v_0451",
   "x": 33.0,
   "y": 21.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total_geometric": 0.3844,
   "P_total_assumed": 0.6022,
   "P_total_empirical": 0.4951,
   "pass": false
  },
  {
   "id": "v_0452",
   "x": 35.0,
   "y": 21.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total_geometric": 0.3843,
   "P_total_assumed": 0.6051,
   "P_total_empirical": 0.4982,
   "pass": false
  },
  {
   "id": "v_0453",
   "x": 37.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3842,
   "P_total_assumed": 0.6078,
   "P_total_empirical": 0.5011,
   "pass": true
  },
  {
   "id": "v_0454",
   "x": 39.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.384,
   "P_total_assumed": 0.6101,
   "P_total_empirical": 0.5037,
   "pass": true
  },
  {
   "id": "v_0455",
   "x": 41.0,
   "y": 21.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.3837,
   "P_total_assumed": 0.612,
   "P_total_empirical": 0.5058,
   "pass": true
  },
  {
   "id": "v_0456",
   "x": 43.0,
   "y": 21.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.3833,
   "P_total_assumed": 0.6135,
   "P_total_empirical": 0.5076,
   "pass": true
  },
  {
   "id": "v_0457",
   "x": 45.0,
   "y": 21.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5157,
   "P_total_assumed": 0.6146,
   "P_total_empirical": 0.509,
   "pass": true
  },
  {
   "id": "v_0458",
   "x": 47.0,
   "y": 21.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5151,
   "P_total_assumed": 0.6154,
   "P_total_empirical": 0.5099,
   "pass": true
  },
  {
   "id": "v_0459",
   "x": 49.0,
   "y": 21.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5143,
   "P_total_assumed": 0.6158,
   "P_total_empirical": 0.5103,
   "pass": true
  },
  {
   "id": "v_0460",
   "x": 51.0,
   "y": 21.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5132,
   "P_total_assumed": 0.6158,
   "P_total_empirical": 0.5103,
   "pass": true
  },
  {
   "id": "v_0461",
   "x": 53.0,
   "y": 21.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5119,
   "P_total_assumed": 0.6154,
   "P_total_empirical": 0.5098,
   "pass": true
  },
  {
   "id": "v_0462",
   "x": 55.0,
   "y": 21.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5334,
   "P_total_assumed": 0.6146,
   "P_total_empirical": 0.532,
   "pass": true
  },
  {
   "id": "v_0463",
   "x": 57.0,
   "y": 21.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5469,
   "P_total_assumed": 0.6135,
   "P_total_empirical": 0.546,
   "pass": true
  },
  {
   "id": "v_0464",
   "x": 59.0,
   "y": 21.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5559,
   "P_total_assumed": 0.612,
   "P_total_empirical": 0.5553,
   "pass": true
  },
  {
   "id": "v_0465",
   "x": 61.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.568,
   "P_total_assumed": 0.6101,
   "P_total_empirical": 0.5676,
   "pass": true
  },
  {
   "id": "v_0466",
   "x": 63.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6074,
   "P_total_assumed": 0.6078,
   "P_total_empirical": 0.6071,
   "pass": true
  },
  {
   "id": "v_0467",
   "x": 65.0,
   "y": 21.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total_geometric": 0.6049,
   "P_total_assumed": 0.6051,
   "P_total_empirical": 0.6047,
   "pass": true
  },
  {
   "id": "v_0468",
   "x": 67.0,
   "y": 21.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total_geometric": 0.602,
   "P_total_assumed": 0.6022,
   "P_total_empirical": 0.602,
   "pass": true
  },
  {
   "id": "v_0469",
   "x": 69.0,
   "y": 21.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total_geometric": 0.5987,
   "P_total_assumed": 0.5988,
   "P_total_empirical": 0.5987,
   "pass": true
  },
  {
   "id": "v_0470",
   "x": 71.0,
   "y": 21.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total_geometric": 0.5952,
   "P_total_assumed": 0.4841,
   "P_total_empirical": 0.5952,
   "pass": true
  },
  {
   "id": "v_0471",
   "x": 73.0,
   "y": 21.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total_geometric": 0.5911,
   "P_total_assumed": 0.4789,
   "P_total_empirical": 0.5911,
   "pass": true
  },
  {
   "id": "v_0472",
   "x": 75.0,
   "y": 21.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total_geometric": 0.5867,
   "P_total_assumed": 0.4734,
   "P_total_empirical": 0.5868,
   "pass": true
  },
  {
   "id": "v_0473",
   "x": 77.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6712,
   "P_total_assumed": 0.5811,
   "P_total_empirical": 0.6713,
   "pass": true
  },
  {
   "id": "v_0474",
   "x": 79.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6673,
   "P_total_assumed": 0.5763,
   "P_total_empirical": 0.6676,
   "pass": true
  },
  {
   "id": "v_0475",
   "x": 81.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6631,
   "P_total_assumed": 0.5711,
   "P_total_empirical": 0.6636,
   "pass": true
  },
  {
   "id": "v_0476",
   "x": 85.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9976,
   "P_total_assumed": 0.9969,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0477",
   "x": 87.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9975,
   "P_total_assumed": 0.9969,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0478",
   "x": 89.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9975,
   "P_total_assumed": 0.9969,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0479",
   "x": 91.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9633,
   "P_total_assumed": 0.2584,
   "P_total_empirical": 0.9536,
   "pass": true
  },
  {
   "id": "v_0480",
   "x": 93.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9627,
   "P_total_assumed": 0.2485,
   "P_total_empirical": 0.9529,
   "pass": true
  },
  {
   "id": "v_0481",
   "x": 95.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9621,
   "P_total_assumed": 0.239,
   "P_total_empirical": 0.9523,
   "pass": true
  },
  {
   "id": "v_0482",
   "x": 97.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3848,
   "P_total_assumed": 0.2293,
   "P_total_empirical": 0.2293,
   "pass": false
  },
  {
   "id": "v_0483",
   "x": 99.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3743,
   "P_total_assumed": 0.2197,
   "P_total_empirical": 0.2197,
   "pass": false
  },
  {
   "id": "v_0484",
   "x": 1.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.2171,
   "P_total_empirical": 0.088,
   "pass": false
  },
  {
   "id": "v_0485",
   "x": 3.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.2265,
   "P_total_empirical": 0.0923,
   "pass": false
  },
  {
   "id": "v_0486",
   "x": 5.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.2362,
   "P_total_empirical": 0.097,
   "pass": false
  },
  {
   "id": "v_0487",
   "x": 7.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.2456,
   "P_total_empirical": 0.1017,
   "pass": false
  },
  {
   "id": "v_0488",
   "x": 9.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9372,
   "P_total_assumed": 0.2554,
   "P_total_empirical": 0.9439,
   "pass": true
  },
  {
   "id": "v_0489",
   "x": 11.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9371,
   "P_total_assumed": 0.9513,
   "P_total_empirical": 0.9963,
   "pass": true
  },
  {
   "id": "v_0490",
   "x": 13.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.937,
   "P_total_assumed": 0.9518,
   "P_total_empirical": 0.9963,
   "pass": true
  },
  {
   "id": "v_0491",
   "x": 15.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9368,
   "P_total_assumed": 0.9523,
   "P_total_empirical": 0.9963,
   "pass": true
  },
  {
   "id": "v_0492",
   "x": 19.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3843,
   "P_total_assumed": 0.5697,
   "P_total_empirical": 0.5817,
   "pass": true
  },
  {
   "id": "v_0493",
   "x": 21.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3842,
   "P_total_assumed": 0.5047,
   "P_total_empirical": 0.5161,
   "pass": true
  },
  {
   "id": "v_0494",
   "x": 23.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.384,
   "P_total_assumed": 0.3833,
   "P_total_empirical": 0.5158,
   "pass": true
  },
  {
   "id": "v_0495",
   "x": 37.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.2155,
   "P_total_assumed": 0.499,
   "P_total_empirical": 0.363,
   "pass": false
  },
  {
   "id": "v_0496",
   "x": 39.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3838,
   "P_total_assumed": 0.6089,
   "P_total_empirical": 0.5024,
   "pass": true
  },
  {
   "id": "v_0497",
   "x": 41.0,
   "y": 23.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.3834,
   "P_total_assumed": 0.6109,
   "P_total_empirical": 0.5046,
   "pass": true
  },
  {
   "id": "v_0498",
   "x": 43.0,
   "y": 23.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.3829,
   "P_total_assumed": 0.6125,
   "P_total_empirical": 0.5064,
   "pass": true
  },
  {
   "id": "v_0499",
   "x": 45.0,
   "y": 23.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5153,
   "P_total_assumed": 0.6137,
   "P_total_empirical": 0.5078,
   "pass": true
  },
  {
   "id": "v_0500",
   "x": 47.0,
   "y": 23.0,
   "w": 4,
   "zones": [
    "lift_landing",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5146,
   "P_total_assumed": 0.6145,
   "P_total_empirical": 0.5087,
   "pass": true
  },
  {
   "id": "v_0501",
   "x": 49.0,
   "y": 23.0,
   "w": 4,
   "zones": [
    "lift_landing",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5137,
   "P_total_assumed": 0.6149,
   "P_total_empirical": 0.5092,
   "pass": true
  },
  {
   "id": "v_0502",
   "x": 51.0,
   "y": 23.0,
   "w": 4,
   "zones": [
    "lift_landing",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5125,
   "P_total_assumed": 0.6149,
   "P_total_empirical": 0.5091,
   "pass": true
  },
  {
   "id": "v_0503",
   "x": 53.0,
   "y": 23.0,
   "w": 4,
   "zones": [
    "lift_landing",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5111,
   "P_total_assumed": 0.6145,
   "P_total_empirical": 0.5086,
   "pass": true
  },
  {
   "id": "v_0504",
   "x": 55.0,
   "y": 23.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5325,
   "P_total_assumed": 0.6137,
   "P_total_empirical": 0.5307,
   "pass": true
  },
  {
   "id": "v_0505",
   "x": 57.0,
   "y": 23.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5458,
   "P_total_assumed": 0.6125,
   "P_total_empirical": 0.5447,
   "pass": true
  },
  {
   "id": "v_0506",
   "x": 59.0,
   "y": 23.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5548,
   "P_total_assumed": 0.6109,
   "P_total_empirical": 0.554,
   "pass": true
  },
  {
   "id": "v_0507",
   "x": 61.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.5668,
   "P_total_assumed": 0.6089,
   "P_total_empirical": 0.5663,
   "pass": true
  },
  {
   "id": "v_0508",
   "x": 63.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.499,
   "P_total_assumed": 0.499,
   "P_total_empirical": 0.3614,
   "pass": false
  },
  {
   "id": "v_0509",
   "x": 77.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3833,
   "P_total_assumed": 0.3833,
   "P_total_empirical": 0.5162,
   "pass": true
  },
  {
   "id": "v_0510",
   "x": 79.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.611,
   "P_total_assumed": 0.5047,
   "P_total_empirical": 0.6114,
   "pass": true
  },
  {
   "id": "v_0511",
   "x": 81.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6618,
   "P_total_assumed": 0.5697,
   "P_total_empirical": 0.6624,
   "pass": true
  },
  {
   "id": "v_0512",
   "x": 85.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9976,
   "P_total_assumed": 0.997,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0513",
   "x": 87.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9976,
   "P_total_assumed": 0.997,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0514",
   "x": 89.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9976,
   "P_total_assumed": 0.9969,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0515",
   "x": 91.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9631,
   "P_total_assumed": 0.2554,
   "P_total_empirical": 0.9534,
   "pass": true
  },
  {
   "id": "v_0516",
   "x": 93.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9625,
   "P_total_assumed": 0.2456,
   "P_total_empirical": 0.9528,
   "pass": true
  },
  {
   "id": "v_0517",
   "x": 95.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9619,
   "P_total_assumed": 0.2362,
   "P_total_empirical": 0.9522,
   "pass": true
  },
  {
   "id": "v_0518",
   "x": 97.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3813,
   "P_total_assumed": 0.2265,
   "P_total_empirical": 0.2265,
   "pass": false
  },
  {
   "id": "v_0519",
   "x": 99.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.371,
   "P_total_assumed": 0.2171,
   "P_total_empirical": 0.2171,
   "pass": false
  },
  {
   "id": "v_0520",
   "x": 1.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.041,
   "P_total_assumed": 0.2145,
   "P_total_empirical": 0.0869,
   "pass": false
  },
  {
   "id": "v_0521",
   "x": 3.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.042,
   "P_total_assumed": 0.2236,
   "P_total_empirical": 0.0911,
   "pass": false
  },
  {
   "id": "v_0522",
   "x": 5.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0429,
   "P_total_assumed": 0.2332,
   "P_total_empirical": 0.0958,
   "pass": false
  },
  {
   "id": "v_0523",
   "x": 7.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0437,
   "P_total_assumed": 0.2427,
   "P_total_empirical": 0.1006,
   "pass": false
  },
  {
   "id": "v_0524",
   "x": 9.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9373,
   "P_total_assumed": 0.2521,
   "P_total_empirical": 0.9439,
   "pass": true
  },
  {
   "id": "v_0525",
   "x": 11.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9413,
   "P_total_assumed": 0.9553,
   "P_total_empirical": 0.9966,
   "pass": true
  },
  {
   "id": "v_0526",
   "x": 13.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9413,
   "P_total_assumed": 0.9559,
   "P_total_empirical": 0.9966,
   "pass": true
  },
  {
   "id": "v_0527",
   "x": 15.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9412,
   "P_total_assumed": 0.9503,
   "P_total_empirical": 0.9962,
   "pass": true
  },
  {
   "id": "v_0528",
   "x": 19.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3844,
   "P_total_assumed": 0.384,
   "P_total_empirical": 0.5166,
   "pass": true
  },
  {
   "id": "v_0529",
   "x": 21.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3843,
   "P_total_assumed": 0.3839,
   "P_total_empirical": 0.5165,
   "pass": true
  },
  {
   "id": "v_0530",
   "x": 23.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3842,
   "P_total_assumed": 0.3838,
   "P_total_empirical": 0.5163,
   "pass": true
  },
  {
   "id": "v_0531",
   "x": 37.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3158,
   "P_total_assumed": 0.5393,
   "P_total_empirical": 0.4147,
   "pass": false
  },
  {
   "id": "v_0532",
   "x": 39.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3169,
   "P_total_assumed": 0.5431,
   "P_total_empirical": 0.419,
   "pass": false
  },
  {
   "id": "v_0533",
   "x": 41.0,
   "y": 25.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.4635,
   "P_total_assumed": 0.6605,
   "P_total_empirical": 0.546,
   "pass": true
  },
  {
   "id": "v_0534",
   "x": 43.0,
   "y": 25.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.4637,
   "P_total_assumed": 0.6624,
   "P_total_empirical": 0.5483,
   "pass": true
  },
  {
   "id": "v_0535",
   "x": 45.0,
   "y": 25.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5792,
   "P_total_assumed": 0.6638,
   "P_total_empirical": 0.5501,
   "pass": true
  },
  {
   "id": "v_0536",
   "x": 47.0,
   "y": 25.0,
   "w": 4,
   "zones": [
    "lift_landing",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.579,
   "P_total_assumed": 0.6649,
   "P_total_empirical": 0.5514,
   "pass": true
  },
  {
   "id": "v_0537",
   "x": 49.0,
   "y": 25.0,
   "w": 4,
   "zones": [
    "lift_landing",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5589,
   "P_total_assumed": 0.6499,
   "P_total_empirical": 0.5314,
   "pass": true
  },
  {
   "id": "v_0538",
   "x": 51.0,
   "y": 25.0,
   "w": 4,
   "zones": [
    "lift_landing",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5577,
   "P_total_assumed": 0.6499,
   "P_total_empirical": 0.5314,
   "pass": true
  },
  {
   "id": "v_0539",
   "x": 53.0,
   "y": 25.0,
   "w": 4,
   "zones": [
    "lift_landing",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5564,
   "P_total_assumed": 0.6649,
   "P_total_empirical": 0.5514,
   "pass": true
  },
  {
   "id": "v_0540",
   "x": 55.0,
   "y": 25.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5756,
   "P_total_assumed": 0.6638,
   "P_total_empirical": 0.5711,
   "pass": true
  },
  {
   "id": "v_0541",
   "x": 57.0,
   "y": 25.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5527,
   "P_total_assumed": 0.6624,
   "P_total_empirical": 0.5482,
   "pass": true
  },
  {
   "id": "v_0542",
   "x": 59.0,
   "y": 25.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5504,
   "P_total_assumed": 0.6605,
   "P_total_empirical": 0.5458,
   "pass": true
  },
  {
   "id": "v_0543",
   "x": 61.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.5007,
   "P_total_assumed": 0.5431,
   "P_total_empirical": 0.3889,
   "pass": false
  },
  {
   "id": "v_0544",
   "x": 63.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4972,
   "P_total_assumed": 0.5393,
   "P_total_empirical": 0.384,
   "pass": false
  },
  {
   "id": "v_0545",
   "x": 77.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3838,
   "P_total_assumed": 0.3838,
   "P_total_empirical": 0.5165,
   "pass": true
  },
  {
   "id": "v_0546",
   "x": 79.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3839,
   "P_total_assumed": 0.3839,
   "P_total_empirical": 0.5166,
   "pass": true
  },
  {
   "id": "v_0547",
   "x": 81.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.5156,
   "P_total_assumed": 0.384,
   "P_total_empirical": 0.5167,
   "pass": true
  },
  {
   "id": "v_0548",
   "x": 85.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9974,
   "P_total_assumed": 0.9967,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0549",
   "x": 87.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9977,
   "P_total_assumed": 0.997,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0550",
   "x": 89.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9976,
   "P_total_assumed": 0.997,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0551",
   "x": 91.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9629,
   "P_total_assumed": 0.2521,
   "P_total_empirical": 0.9532,
   "pass": true
  },
  {
   "id": "v_0552",
   "x": 93.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9623,
   "P_total_assumed": 0.2427,
   "P_total_empirical": 0.9526,
   "pass": true
  },
  {
   "id": "v_0553",
   "x": 95.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3879,
   "P_total_assumed": 0.2332,
   "P_total_empirical": 0.2332,
   "pass": false
  },
  {
   "id": "v_0554",
   "x": 97.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3777,
   "P_total_assumed": 0.2236,
   "P_total_empirical": 0.2236,
   "pass": false
  },
  {
   "id": "v_0555",
   "x": 99.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3674,
   "P_total_assumed": 0.2145,
   "P_total_empirical": 0.2145,
   "pass": false
  },
  {
   "id": "v_0556",
   "x": 1.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0686,
   "P_total_assumed": 0.2115,
   "P_total_empirical": 0.0857,
   "pass": false
  },
  {
   "id": "v_0557",
   "x": 3.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0702,
   "P_total_assumed": 0.2204,
   "P_total_empirical": 0.09,
   "pass": false
  },
  {
   "id": "v_0558",
   "x": 5.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0717,
   "P_total_assumed": 0.2297,
   "P_total_empirical": 0.0942,
   "pass": false
  },
  {
   "id": "v_0559",
   "x": 7.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.073,
   "P_total_assumed": 0.2393,
   "P_total_empirical": 0.099,
   "pass": false
  },
  {
   "id": "v_0560",
   "x": 9.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.942,
   "P_total_assumed": 0.1617,
   "P_total_empirical": 0.9374,
   "pass": true
  },
  {
   "id": "v_0561",
   "x": 11.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9501,
   "P_total_assumed": 0.9577,
   "P_total_empirical": 0.9968,
   "pass": true
  },
  {
   "id": "v_0562",
   "x": 13.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9501,
   "P_total_assumed": 0.958,
   "P_total_empirical": 0.9968,
   "pass": true
  },
  {
   "id": "v_0563",
   "x": 15.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.95,
   "P_total_assumed": 0.9491,
   "P_total_empirical": 0.9968,
   "pass": true
  },
  {
   "id": "v_0564",
   "x": 19.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3844,
   "P_total_assumed": 0.3842,
   "P_total_empirical": 0.5168,
   "pass": true
  },
  {
   "id": "v_0565",
   "x": 21.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3844,
   "P_total_assumed": 0.3841,
   "P_total_empirical": 0.5167,
   "pass": true
  },
  {
   "id": "v_0566",
   "x": 23.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3843,
   "P_total_assumed": 0.384,
   "P_total_empirical": 0.5166,
   "pass": true
  },
  {
   "id": "v_0567",
   "x": 37.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.2063,
   "P_total_assumed": 0.4452,
   "P_total_empirical": 0.2958,
   "pass": false
  },
  {
   "id": "v_0568",
   "x": 39.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3789,
   "P_total_assumed": 0.5689,
   "P_total_empirical": 0.4522,
   "pass": false
  },
  {
   "id": "v_0569",
   "x": 41.0,
   "y": 27.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.3803,
   "P_total_assumed": 0.6066,
   "P_total_empirical": 0.4563,
   "pass": false
  },
  {
   "id": "v_0570",
   "x": 43.0,
   "y": 27.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5128,
   "P_total_assumed": 0.6924,
   "P_total_empirical": 0.5746,
   "pass": true
  },
  {
   "id": "v_0571",
   "x": 45.0,
   "y": 27.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6179,
   "P_total_assumed": 0.694,
   "P_total_empirical": 0.5766,
   "pass": true
  },
  {
   "id": "v_0572",
   "x": 47.0,
   "y": 27.0,
   "w": 4,
   "zones": [
    "lift_landing",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6178,
   "P_total_assumed": 0.6951,
   "P_total_empirical": 0.5781,
   "pass": true
  },
  {
   "id": "v_0573",
   "x": 49.0,
   "y": 27.0,
   "w": 4,
   "zones": [
    "lift_landing",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6175,
   "P_total_assumed": 0.6959,
   "P_total_empirical": 0.579,
   "pass": true
  },
  {
   "id": "v_0574",
   "x": 51.0,
   "y": 27.0,
   "w": 4,
   "zones": [
    "lift_landing",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5857,
   "P_total_assumed": 0.6959,
   "P_total_empirical": 0.579,
   "pass": true
  },
  {
   "id": "v_0575",
   "x": 53.0,
   "y": 27.0,
   "w": 4,
   "zones": [
    "lift_landing",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5843,
   "P_total_assumed": 0.6951,
   "P_total_empirical": 0.578,
   "pass": true
  },
  {
   "id": "v_0576",
   "x": 55.0,
   "y": 27.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5826,
   "P_total_assumed": 0.694,
   "P_total_empirical": 0.5765,
   "pass": true
  },
  {
   "id": "v_0577",
   "x": 57.0,
   "y": 27.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5806,
   "P_total_assumed": 0.6924,
   "P_total_empirical": 0.5744,
   "pass": true
  },
  {
   "id": "v_0578",
   "x": 59.0,
   "y": 27.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5417,
   "P_total_assumed": 0.6066,
   "P_total_empirical": 0.456,
   "pass": false
  },
  {
   "id": "v_0579",
   "x": 61.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4989,
   "P_total_assumed": 0.5689,
   "P_total_empirical": 0.4041,
   "pass": false
  },
  {
   "id": "v_0580",
   "x": 63.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4953,
   "P_total_assumed": 0.4452,
   "P_total_empirical": 0.3986,
   "pass": false
  },
  {
   "id": "v_0581",
   "x": 77.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.384,
   "P_total_assumed": 0.384,
   "P_total_empirical": 0.5167,
   "pass": true
  },
  {
   "id": "v_0582",
   "x": 79.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3841,
   "P_total_assumed": 0.3841,
   "P_total_empirical": 0.5168,
   "pass": true
  },
  {
   "id": "v_0583",
   "x": 81.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3842,
   "P_total_assumed": 0.3842,
   "P_total_empirical": 0.5169,
   "pass": true
  },
  {
   "id": "v_0584",
   "x": 85.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9968,
   "P_total_assumed": 0.996,
   "P_total_empirical": 0.9997,
   "pass": true
  },
  {
   "id": "v_0585",
   "x": 87.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9974,
   "P_total_assumed": 0.9967,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0586",
   "x": 89.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9974,
   "P_total_assumed": 0.9967,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0587",
   "x": 91.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9583,
   "P_total_assumed": 0.1617,
   "P_total_empirical": 0.9475,
   "pass": true
  },
  {
   "id": "v_0588",
   "x": 93.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9621,
   "P_total_assumed": 0.2393,
   "P_total_empirical": 0.9524,
   "pass": true
  },
  {
   "id": "v_0589",
   "x": 95.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3838,
   "P_total_assumed": 0.2297,
   "P_total_empirical": 0.2297,
   "pass": false
  },
  {
   "id": "v_0590",
   "x": 97.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3736,
   "P_total_assumed": 0.2204,
   "P_total_empirical": 0.2204,
   "pass": false
  },
  {
   "id": "v_0591",
   "x": 99.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3634,
   "P_total_assumed": 0.2115,
   "P_total_empirical": 0.2115,
   "pass": false
  },
  {
   "id": "v_0592",
   "x": 1.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.1861,
   "P_total_assumed": 0.2319,
   "P_total_empirical": 0.1415,
   "pass": false
  },
  {
   "id": "v_0593",
   "x": 3.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.1914,
   "P_total_assumed": 0.1851,
   "P_total_empirical": 0.0842,
   "pass": false
  },
  {
   "id": "v_0594",
   "x": 5.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.1193,
   "P_total_assumed": 0.1149,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0595",
   "x": 7.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.945,
   "P_total_assumed": 0.1196,
   "P_total_empirical": 0.9374,
   "pass": true
  },
  {
   "id": "v_0596",
   "x": 9.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9451,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.9374,
   "pass": true
  },
  {
   "id": "v_0597",
   "x": 11.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9691,
   "P_total_assumed": 0.9644,
   "P_total_empirical": 0.9978,
   "pass": true
  },
  {
   "id": "v_0598",
   "x": 13.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9647,
   "P_total_assumed": 0.9644,
   "P_total_empirical": 0.9978,
   "pass": true
  },
  {
   "id": "v_0599",
   "x": 15.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9647,
   "P_total_assumed": 0.9644,
   "P_total_empirical": 0.9978,
   "pass": true
  },
  {
   "id": "v_0600",
   "x": 19.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3844,
   "P_total_assumed": 0.3843,
   "P_total_empirical": 0.5169,
   "pass": true
  },
  {
   "id": "v_0601",
   "x": 21.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3844,
   "P_total_assumed": 0.3842,
   "P_total_empirical": 0.5169,
   "pass": true
  },
  {
   "id": "v_0602",
   "x": 23.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3843,
   "P_total_assumed": 0.3841,
   "P_total_empirical": 0.5168,
   "pass": true
  },
  {
   "id": "v_0603",
   "x": 37.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3247,
   "P_total_assumed": 0.4427,
   "P_total_empirical": 0.3326,
   "pass": false
  },
  {
   "id": "v_0604",
   "x": 39.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4406,
   "P_total_assumed": 0.601,
   "P_total_empirical": 0.4496,
   "pass": false
  },
  {
   "id": "v_0605",
   "x": 41.0,
   "y": 29.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.4427,
   "P_total_assumed": 0.6045,
   "P_total_empirical": 0.4539,
   "pass": false
  },
  {
   "id": "v_0606",
   "x": 43.0,
   "y": 29.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.538,
   "P_total_assumed": 0.6074,
   "P_total_empirical": 0.4577,
   "pass": false
  },
  {
   "id": "v_0607",
   "x": 45.0,
   "y": 29.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6148,
   "P_total_assumed": 0.6739,
   "P_total_empirical": 0.5494,
   "pass": true
  },
  {
   "id": "v_0608",
   "x": 47.0,
   "y": 29.0,
   "w": 4,
   "zones": [
    "lift_landing",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6152,
   "P_total_assumed": 0.6753,
   "P_total_empirical": 0.5512,
   "pass": true
  },
  {
   "id": "v_0609",
   "x": 49.0,
   "y": 29.0,
   "w": 4,
   "zones": [
    "lift_landing",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6153,
   "P_total_assumed": 0.7166,
   "P_total_empirical": 0.6083,
   "pass": true
  },
  {
   "id": "v_0610",
   "x": 51.0,
   "y": 29.0,
   "w": 4,
   "zones": [
    "lift_landing",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6152,
   "P_total_assumed": 0.7166,
   "P_total_empirical": 0.6083,
   "pass": true
  },
  {
   "id": "v_0611",
   "x": 53.0,
   "y": 29.0,
   "w": 4,
   "zones": [
    "lift_landing",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5592,
   "P_total_assumed": 0.6753,
   "P_total_empirical": 0.5512,
   "pass": true
  },
  {
   "id": "v_0612",
   "x": 55.0,
   "y": 29.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5578,
   "P_total_assumed": 0.6739,
   "P_total_empirical": 0.5494,
   "pass": true
  },
  {
   "id": "v_0613",
   "x": 57.0,
   "y": 29.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5561,
   "P_total_assumed": 0.6074,
   "P_total_empirical": 0.4577,
   "pass": false
  },
  {
   "id": "v_0614",
   "x": 59.0,
   "y": 29.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.487,
   "P_total_assumed": 0.6045,
   "P_total_empirical": 0.4539,
   "pass": false
  },
  {
   "id": "v_0615",
   "x": 61.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4844,
   "P_total_assumed": 0.601,
   "P_total_empirical": 0.4495,
   "pass": false
  },
  {
   "id": "v_0616",
   "x": 63.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4034,
   "P_total_assumed": 0.4427,
   "P_total_empirical": 0.3608,
   "pass": false
  },
  {
   "id": "v_0617",
   "x": 77.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3842,
   "P_total_assumed": 0.3841,
   "P_total_empirical": 0.5168,
   "pass": true
  },
  {
   "id": "v_0618",
   "x": 79.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3843,
   "P_total_assumed": 0.3842,
   "P_total_empirical": 0.5169,
   "pass": true
  },
  {
   "id": "v_0619",
   "x": 81.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3844,
   "P_total_assumed": 0.3843,
   "P_total_empirical": 0.517,
   "pass": true
  },
  {
   "id": "v_0620",
   "x": 85.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9967,
   "P_total_assumed": 0.996,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0621",
   "x": 87.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9967,
   "P_total_assumed": 0.996,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0622",
   "x": 89.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9967,
   "P_total_assumed": 0.996,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0623",
   "x": 91.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9474,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.9374,
   "pass": true
  },
  {
   "id": "v_0624",
   "x": 93.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9535,
   "P_total_assumed": 0.1196,
   "P_total_empirical": 0.9449,
   "pass": true
  },
  {
   "id": "v_0625",
   "x": 95.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.2517,
   "P_total_assumed": 0.1149,
   "P_total_empirical": 0.1149,
   "pass": false
  },
  {
   "id": "v_0626",
   "x": 97.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.2452,
   "P_total_assumed": 0.1851,
   "P_total_empirical": 0.1102,
   "pass": false
  },
  {
   "id": "v_0627",
   "x": 99.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.2886,
   "P_total_assumed": 0.2319,
   "P_total_empirical": 0.1644,
   "pass": false
  },
  {
   "id": "v_0628",
   "x": 1.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.2886,
   "P_total_assumed": 0.2319,
   "P_total_empirical": 0.1644,
   "pass": false
  },
  {
   "id": "v_0629",
   "x": 3.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.2452,
   "P_total_assumed": 0.1851,
   "P_total_empirical": 0.1102,
   "pass": false
  },
  {
   "id": "v_0630",
   "x": 5.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.2517,
   "P_total_assumed": 0.1149,
   "P_total_empirical": 0.1149,
   "pass": false
  },
  {
   "id": "v_0631",
   "x": 7.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9535,
   "P_total_assumed": 0.1196,
   "P_total_empirical": 0.9449,
   "pass": true
  },
  {
   "id": "v_0632",
   "x": 9.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9474,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.9374,
   "pass": true
  },
  {
   "id": "v_0633",
   "x": 11.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9967,
   "P_total_assumed": 0.996,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0634",
   "x": 13.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9967,
   "P_total_assumed": 0.996,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0635",
   "x": 15.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9967,
   "P_total_assumed": 0.996,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0636",
   "x": 19.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3844,
   "P_total_assumed": 0.3843,
   "P_total_empirical": 0.517,
   "pass": true
  },
  {
   "id": "v_0637",
   "x": 21.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3843,
   "P_total_assumed": 0.3842,
   "P_total_empirical": 0.5169,
   "pass": true
  },
  {
   "id": "v_0638",
   "x": 23.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3842,
   "P_total_assumed": 0.3841,
   "P_total_empirical": 0.5168,
   "pass": true
  },
  {
   "id": "v_0639",
   "x": 37.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4034,
   "P_total_assumed": 0.4427,
   "P_total_empirical": 0.3608,
   "pass": false
  },
  {
   "id": "v_0640",
   "x": 39.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4844,
   "P_total_assumed": 0.601,
   "P_total_empirical": 0.4495,
   "pass": false
  },
  {
   "id": "v_0641",
   "x": 41.0,
   "y": 31.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.487,
   "P_total_assumed": 0.6045,
   "P_total_empirical": 0.4539,
   "pass": false
  },
  {
   "id": "v_0642",
   "x": 43.0,
   "y": 31.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5561,
   "P_total_assumed": 0.6074,
   "P_total_empirical": 0.4577,
   "pass": false
  },
  {
   "id": "v_0643",
   "x": 45.0,
   "y": 31.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5578,
   "P_total_assumed": 0.6739,
   "P_total_empirical": 0.5494,
   "pass": true
  },
  {
   "id": "v_0644",
   "x": 47.0,
   "y": 31.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5592,
   "P_total_assumed": 0.6753,
   "P_total_empirical": 0.5512,
   "pass": true
  },
  {
   "id": "v_0645",
   "x": 49.0,
   "y": 31.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6152,
   "P_total_assumed": 0.7166,
   "P_total_empirical": 0.6083,
   "pass": true
  },
  {
   "id": "v_0646",
   "x": 51.0,
   "y": 31.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6153,
   "P_total_assumed": 0.7166,
   "P_total_empirical": 0.6083,
   "pass": true
  },
  {
   "id": "v_0647",
   "x": 53.0,
   "y": 31.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6152,
   "P_total_assumed": 0.6753,
   "P_total_empirical": 0.5512,
   "pass": true
  },
  {
   "id": "v_0648",
   "x": 55.0,
   "y": 31.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6148,
   "P_total_assumed": 0.6739,
   "P_total_empirical": 0.5494,
   "pass": true
  },
  {
   "id": "v_0649",
   "x": 57.0,
   "y": 31.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.538,
   "P_total_assumed": 0.6074,
   "P_total_empirical": 0.4577,
   "pass": false
  },
  {
   "id": "v_0650",
   "x": 59.0,
   "y": 31.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.4427,
   "P_total_assumed": 0.6045,
   "P_total_empirical": 0.4539,
   "pass": false
  },
  {
   "id": "v_0651",
   "x": 61.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4406,
   "P_total_assumed": 0.601,
   "P_total_empirical": 0.4496,
   "pass": false
  },
  {
   "id": "v_0652",
   "x": 63.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3247,
   "P_total_assumed": 0.4427,
   "P_total_empirical": 0.3326,
   "pass": false
  },
  {
   "id": "v_0653",
   "x": 77.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3843,
   "P_total_assumed": 0.3841,
   "P_total_empirical": 0.5168,
   "pass": true
  },
  {
   "id": "v_0654",
   "x": 79.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3844,
   "P_total_assumed": 0.3842,
   "P_total_empirical": 0.5169,
   "pass": true
  },
  {
   "id": "v_0655",
   "x": 81.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3844,
   "P_total_assumed": 0.3843,
   "P_total_empirical": 0.5169,
   "pass": true
  },
  {
   "id": "v_0656",
   "x": 85.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9961,
   "P_total_assumed": 0.996,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0657",
   "x": 87.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9647,
   "P_total_assumed": 0.9644,
   "P_total_empirical": 0.9978,
   "pass": true
  },
  {
   "id": "v_0658",
   "x": 89.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9691,
   "P_total_assumed": 0.9644,
   "P_total_empirical": 0.9978,
   "pass": true
  },
  {
   "id": "v_0659",
   "x": 91.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9451,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.9374,
   "pass": true
  },
  {
   "id": "v_0660",
   "x": 93.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.945,
   "P_total_assumed": 0.1196,
   "P_total_empirical": 0.9374,
   "pass": true
  },
  {
   "id": "v_0661",
   "x": 95.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.1193,
   "P_total_assumed": 0.1149,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0662",
   "x": 97.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.1914,
   "P_total_assumed": 0.1851,
   "P_total_empirical": 0.0842,
   "pass": false
  },
  {
   "id": "v_0663",
   "x": 99.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.1861,
   "P_total_assumed": 0.2319,
   "P_total_empirical": 0.1415,
   "pass": false
  },
  {
   "id": "v_0664",
   "x": 1.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3634,
   "P_total_assumed": 0.2115,
   "P_total_empirical": 0.2115,
   "pass": false
  },
  {
   "id": "v_0665",
   "x": 3.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3736,
   "P_total_assumed": 0.2204,
   "P_total_empirical": 0.2204,
   "pass": false
  },
  {
   "id": "v_0666",
   "x": 5.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3838,
   "P_total_assumed": 0.2297,
   "P_total_empirical": 0.2297,
   "pass": false
  },
  {
   "id": "v_0667",
   "x": 7.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9621,
   "P_total_assumed": 0.2393,
   "P_total_empirical": 0.9524,
   "pass": true
  },
  {
   "id": "v_0668",
   "x": 9.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9583,
   "P_total_assumed": 0.1617,
   "P_total_empirical": 0.9475,
   "pass": true
  },
  {
   "id": "v_0669",
   "x": 11.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9974,
   "P_total_assumed": 0.9967,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0670",
   "x": 13.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9974,
   "P_total_assumed": 0.9967,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0671",
   "x": 15.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9968,
   "P_total_assumed": 0.996,
   "P_total_empirical": 0.9997,
   "pass": true
  },
  {
   "id": "v_0672",
   "x": 19.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3842,
   "P_total_assumed": 0.3842,
   "P_total_empirical": 0.5169,
   "pass": true
  },
  {
   "id": "v_0673",
   "x": 21.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3841,
   "P_total_assumed": 0.3841,
   "P_total_empirical": 0.5168,
   "pass": true
  },
  {
   "id": "v_0674",
   "x": 23.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.384,
   "P_total_assumed": 0.384,
   "P_total_empirical": 0.5167,
   "pass": true
  },
  {
   "id": "v_0675",
   "x": 37.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4953,
   "P_total_assumed": 0.4452,
   "P_total_empirical": 0.3986,
   "pass": false
  },
  {
   "id": "v_0676",
   "x": 39.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4989,
   "P_total_assumed": 0.5689,
   "P_total_empirical": 0.4041,
   "pass": false
  },
  {
   "id": "v_0677",
   "x": 41.0,
   "y": 33.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5417,
   "P_total_assumed": 0.6066,
   "P_total_empirical": 0.456,
   "pass": false
  },
  {
   "id": "v_0678",
   "x": 43.0,
   "y": 33.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5806,
   "P_total_assumed": 0.6924,
   "P_total_empirical": 0.5744,
   "pass": true
  },
  {
   "id": "v_0679",
   "x": 45.0,
   "y": 33.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5826,
   "P_total_assumed": 0.694,
   "P_total_empirical": 0.5765,
   "pass": true
  },
  {
   "id": "v_0680",
   "x": 47.0,
   "y": 33.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5843,
   "P_total_assumed": 0.6951,
   "P_total_empirical": 0.578,
   "pass": true
  },
  {
   "id": "v_0681",
   "x": 49.0,
   "y": 33.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5857,
   "P_total_assumed": 0.6959,
   "P_total_empirical": 0.579,
   "pass": true
  },
  {
   "id": "v_0682",
   "x": 51.0,
   "y": 33.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6175,
   "P_total_assumed": 0.6959,
   "P_total_empirical": 0.579,
   "pass": true
  },
  {
   "id": "v_0683",
   "x": 53.0,
   "y": 33.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6178,
   "P_total_assumed": 0.6951,
   "P_total_empirical": 0.5781,
   "pass": true
  },
  {
   "id": "v_0684",
   "x": 55.0,
   "y": 33.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6179,
   "P_total_assumed": 0.694,
   "P_total_empirical": 0.5766,
   "pass": true
  },
  {
   "id": "v_0685",
   "x": 57.0,
   "y": 33.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5128,
   "P_total_assumed": 0.6924,
   "P_total_empirical": 0.5746,
   "pass": true
  },
  {
   "id": "v_0686",
   "x": 59.0,
   "y": 33.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.3803,
   "P_total_assumed": 0.6066,
   "P_total_empirical": 0.4563,
   "pass": false
  },
  {
   "id": "v_0687",
   "x": 61.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3789,
   "P_total_assumed": 0.5689,
   "P_total_empirical": 0.4522,
   "pass": false
  },
  {
   "id": "v_0688",
   "x": 63.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.2063,
   "P_total_assumed": 0.4452,
   "P_total_empirical": 0.2958,
   "pass": false
  },
  {
   "id": "v_0689",
   "x": 77.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3843,
   "P_total_assumed": 0.384,
   "P_total_empirical": 0.5166,
   "pass": true
  },
  {
   "id": "v_0690",
   "x": 79.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3844,
   "P_total_assumed": 0.3841,
   "P_total_empirical": 0.5167,
   "pass": true
  },
  {
   "id": "v_0691",
   "x": 81.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3844,
   "P_total_assumed": 0.3842,
   "P_total_empirical": 0.5168,
   "pass": true
  },
  {
   "id": "v_0692",
   "x": 85.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9961,
   "P_total_assumed": 0.996,
   "P_total_empirical": 0.9997,
   "pass": true
  },
  {
   "id": "v_0693",
   "x": 87.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9501,
   "P_total_assumed": 0.958,
   "P_total_empirical": 0.9968,
   "pass": true
  },
  {
   "id": "v_0694",
   "x": 89.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9501,
   "P_total_assumed": 0.9577,
   "P_total_empirical": 0.9968,
   "pass": true
  },
  {
   "id": "v_0695",
   "x": 91.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.942,
   "P_total_assumed": 0.1617,
   "P_total_empirical": 0.9374,
   "pass": true
  },
  {
   "id": "v_0696",
   "x": 93.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.073,
   "P_total_assumed": 0.2393,
   "P_total_empirical": 0.099,
   "pass": false
  },
  {
   "id": "v_0697",
   "x": 95.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0717,
   "P_total_assumed": 0.2297,
   "P_total_empirical": 0.0942,
   "pass": false
  },
  {
   "id": "v_0698",
   "x": 97.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0702,
   "P_total_assumed": 0.2204,
   "P_total_empirical": 0.09,
   "pass": false
  },
  {
   "id": "v_0699",
   "x": 99.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0686,
   "P_total_assumed": 0.2115,
   "P_total_empirical": 0.0857,
   "pass": false
  },
  {
   "id": "v_0700",
   "x": 1.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3674,
   "P_total_assumed": 0.2145,
   "P_total_empirical": 0.2145,
   "pass": false
  },
  {
   "id": "v_0701",
   "x": 3.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3777,
   "P_total_assumed": 0.2236,
   "P_total_empirical": 0.2236,
   "pass": false
  },
  {
   "id": "v_0702",
   "x": 5.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3879,
   "P_total_assumed": 0.2332,
   "P_total_empirical": 0.2332,
   "pass": false
  },
  {
   "id": "v_0703",
   "x": 7.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9623,
   "P_total_assumed": 0.2427,
   "P_total_empirical": 0.9526,
   "pass": true
  },
  {
   "id": "v_0704",
   "x": 9.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9629,
   "P_total_assumed": 0.2521,
   "P_total_empirical": 0.9532,
   "pass": true
  },
  {
   "id": "v_0705",
   "x": 11.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9976,
   "P_total_assumed": 0.997,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0706",
   "x": 13.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9977,
   "P_total_assumed": 0.997,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0707",
   "x": 15.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9974,
   "P_total_assumed": 0.9967,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0708",
   "x": 19.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.5156,
   "P_total_assumed": 0.384,
   "P_total_empirical": 0.5167,
   "pass": true
  },
  {
   "id": "v_0709",
   "x": 21.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3839,
   "P_total_assumed": 0.3839,
   "P_total_empirical": 0.5166,
   "pass": true
  },
  {
   "id": "v_0710",
   "x": 23.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3838,
   "P_total_assumed": 0.3838,
   "P_total_empirical": 0.5165,
   "pass": true
  },
  {
   "id": "v_0711",
   "x": 37.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4972,
   "P_total_assumed": 0.5393,
   "P_total_empirical": 0.384,
   "pass": false
  },
  {
   "id": "v_0712",
   "x": 39.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.5007,
   "P_total_assumed": 0.5431,
   "P_total_empirical": 0.3889,
   "pass": false
  },
  {
   "id": "v_0713",
   "x": 41.0,
   "y": 35.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5504,
   "P_total_assumed": 0.6605,
   "P_total_empirical": 0.5458,
   "pass": true
  },
  {
   "id": "v_0714",
   "x": 43.0,
   "y": 35.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5527,
   "P_total_assumed": 0.6624,
   "P_total_empirical": 0.5482,
   "pass": true
  },
  {
   "id": "v_0715",
   "x": 45.0,
   "y": 35.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5756,
   "P_total_assumed": 0.6638,
   "P_total_empirical": 0.5711,
   "pass": true
  },
  {
   "id": "v_0716",
   "x": 47.0,
   "y": 35.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5564,
   "P_total_assumed": 0.6649,
   "P_total_empirical": 0.5514,
   "pass": true
  },
  {
   "id": "v_0717",
   "x": 49.0,
   "y": 35.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5577,
   "P_total_assumed": 0.6499,
   "P_total_empirical": 0.5314,
   "pass": true
  },
  {
   "id": "v_0718",
   "x": 51.0,
   "y": 35.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5589,
   "P_total_assumed": 0.6499,
   "P_total_empirical": 0.5314,
   "pass": true
  },
  {
   "id": "v_0719",
   "x": 53.0,
   "y": 35.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.579,
   "P_total_assumed": 0.6649,
   "P_total_empirical": 0.5514,
   "pass": true
  },
  {
   "id": "v_0720",
   "x": 55.0,
   "y": 35.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5792,
   "P_total_assumed": 0.6638,
   "P_total_empirical": 0.5501,
   "pass": true
  },
  {
   "id": "v_0721",
   "x": 57.0,
   "y": 35.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.4637,
   "P_total_assumed": 0.6624,
   "P_total_empirical": 0.5483,
   "pass": true
  },
  {
   "id": "v_0722",
   "x": 59.0,
   "y": 35.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.4635,
   "P_total_assumed": 0.6605,
   "P_total_empirical": 0.546,
   "pass": true
  },
  {
   "id": "v_0723",
   "x": 61.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3169,
   "P_total_assumed": 0.5431,
   "P_total_empirical": 0.419,
   "pass": false
  },
  {
   "id": "v_0724",
   "x": 63.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3158,
   "P_total_assumed": 0.5393,
   "P_total_empirical": 0.4147,
   "pass": false
  },
  {
   "id": "v_0725",
   "x": 77.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3842,
   "P_total_assumed": 0.3838,
   "P_total_empirical": 0.5163,
   "pass": true
  },
  {
   "id": "v_0726",
   "x": 79.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3843,
   "P_total_assumed": 0.3839,
   "P_total_empirical": 0.5165,
   "pass": true
  },
  {
   "id": "v_0727",
   "x": 81.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3844,
   "P_total_assumed": 0.384,
   "P_total_empirical": 0.5166,
   "pass": true
  },
  {
   "id": "v_0728",
   "x": 85.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9961,
   "P_total_assumed": 0.9967,
   "P_total_empirical": 0.9997,
   "pass": true
  },
  {
   "id": "v_0729",
   "x": 87.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9459,
   "P_total_assumed": 0.9593,
   "P_total_empirical": 0.9969,
   "pass": true
  },
  {
   "id": "v_0730",
   "x": 89.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9413,
   "P_total_assumed": 0.9553,
   "P_total_empirical": 0.9966,
   "pass": true
  },
  {
   "id": "v_0731",
   "x": 91.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9373,
   "P_total_assumed": 0.2521,
   "P_total_empirical": 0.9439,
   "pass": true
  },
  {
   "id": "v_0732",
   "x": 93.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0437,
   "P_total_assumed": 0.2427,
   "P_total_empirical": 0.1006,
   "pass": false
  },
  {
   "id": "v_0733",
   "x": 95.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0429,
   "P_total_assumed": 0.2332,
   "P_total_empirical": 0.0958,
   "pass": false
  },
  {
   "id": "v_0734",
   "x": 97.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.042,
   "P_total_assumed": 0.2236,
   "P_total_empirical": 0.0911,
   "pass": false
  },
  {
   "id": "v_0735",
   "x": 99.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.041,
   "P_total_assumed": 0.2145,
   "P_total_empirical": 0.0869,
   "pass": false
  },
  {
   "id": "v_0736",
   "x": 1.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.371,
   "P_total_assumed": 0.2171,
   "P_total_empirical": 0.2171,
   "pass": false
  },
  {
   "id": "v_0737",
   "x": 3.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3813,
   "P_total_assumed": 0.2265,
   "P_total_empirical": 0.2265,
   "pass": false
  },
  {
   "id": "v_0738",
   "x": 5.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9619,
   "P_total_assumed": 0.2362,
   "P_total_empirical": 0.9522,
   "pass": true
  },
  {
   "id": "v_0739",
   "x": 7.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9625,
   "P_total_assumed": 0.2456,
   "P_total_empirical": 0.9528,
   "pass": true
  },
  {
   "id": "v_0740",
   "x": 9.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9631,
   "P_total_assumed": 0.2554,
   "P_total_empirical": 0.9534,
   "pass": true
  },
  {
   "id": "v_0741",
   "x": 11.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9976,
   "P_total_assumed": 0.9969,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0742",
   "x": 13.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9976,
   "P_total_assumed": 0.997,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0743",
   "x": 15.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9976,
   "P_total_assumed": 0.997,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0744",
   "x": 19.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6618,
   "P_total_assumed": 0.5697,
   "P_total_empirical": 0.6624,
   "pass": true
  },
  {
   "id": "v_0745",
   "x": 21.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.611,
   "P_total_assumed": 0.5047,
   "P_total_empirical": 0.6114,
   "pass": true
  },
  {
   "id": "v_0746",
   "x": 23.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3833,
   "P_total_assumed": 0.3833,
   "P_total_empirical": 0.5162,
   "pass": true
  },
  {
   "id": "v_0747",
   "x": 37.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.499,
   "P_total_assumed": 0.499,
   "P_total_empirical": 0.3614,
   "pass": false
  },
  {
   "id": "v_0748",
   "x": 39.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.5668,
   "P_total_assumed": 0.6089,
   "P_total_empirical": 0.5663,
   "pass": true
  },
  {
   "id": "v_0749",
   "x": 41.0,
   "y": 37.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5548,
   "P_total_assumed": 0.6109,
   "P_total_empirical": 0.554,
   "pass": true
  },
  {
   "id": "v_0750",
   "x": 43.0,
   "y": 37.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5458,
   "P_total_assumed": 0.6125,
   "P_total_empirical": 0.5447,
   "pass": true
  },
  {
   "id": "v_0751",
   "x": 45.0,
   "y": 37.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5325,
   "P_total_assumed": 0.6137,
   "P_total_empirical": 0.5307,
   "pass": true
  },
  {
   "id": "v_0752",
   "x": 47.0,
   "y": 37.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5111,
   "P_total_assumed": 0.6145,
   "P_total_empirical": 0.5086,
   "pass": true
  },
  {
   "id": "v_0753",
   "x": 49.0,
   "y": 37.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5125,
   "P_total_assumed": 0.6149,
   "P_total_empirical": 0.5091,
   "pass": true
  },
  {
   "id": "v_0754",
   "x": 51.0,
   "y": 37.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5137,
   "P_total_assumed": 0.6149,
   "P_total_empirical": 0.5092,
   "pass": true
  },
  {
   "id": "v_0755",
   "x": 53.0,
   "y": 37.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5146,
   "P_total_assumed": 0.6145,
   "P_total_empirical": 0.5087,
   "pass": true
  },
  {
   "id": "v_0756",
   "x": 55.0,
   "y": 37.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5153,
   "P_total_assumed": 0.6137,
   "P_total_empirical": 0.5078,
   "pass": true
  },
  {
   "id": "v_0757",
   "x": 57.0,
   "y": 37.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.3829,
   "P_total_assumed": 0.6125,
   "P_total_empirical": 0.5064,
   "pass": true
  },
  {
   "id": "v_0758",
   "x": 59.0,
   "y": 37.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.3834,
   "P_total_assumed": 0.6109,
   "P_total_empirical": 0.5046,
   "pass": true
  },
  {
   "id": "v_0759",
   "x": 61.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3838,
   "P_total_assumed": 0.6089,
   "P_total_empirical": 0.5024,
   "pass": true
  },
  {
   "id": "v_0760",
   "x": 63.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.2155,
   "P_total_assumed": 0.499,
   "P_total_empirical": 0.363,
   "pass": false
  },
  {
   "id": "v_0761",
   "x": 77.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.384,
   "P_total_assumed": 0.3833,
   "P_total_empirical": 0.5158,
   "pass": true
  },
  {
   "id": "v_0762",
   "x": 79.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3842,
   "P_total_assumed": 0.5047,
   "P_total_empirical": 0.5161,
   "pass": true
  },
  {
   "id": "v_0763",
   "x": 81.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3843,
   "P_total_assumed": 0.5697,
   "P_total_empirical": 0.5817,
   "pass": true
  },
  {
   "id": "v_0764",
   "x": 85.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.996,
   "P_total_assumed": 0.997,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0765",
   "x": 87.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9457,
   "P_total_assumed": 0.9585,
   "P_total_empirical": 0.9968,
   "pass": true
  },
  {
   "id": "v_0766",
   "x": 89.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9371,
   "P_total_assumed": 0.9513,
   "P_total_empirical": 0.9963,
   "pass": true
  },
  {
   "id": "v_0767",
   "x": 91.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9372,
   "P_total_assumed": 0.2554,
   "P_total_empirical": 0.9439,
   "pass": true
  },
  {
   "id": "v_0768",
   "x": 93.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.2456,
   "P_total_empirical": 0.1017,
   "pass": false
  },
  {
   "id": "v_0769",
   "x": 95.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.2362,
   "P_total_empirical": 0.097,
   "pass": false
  },
  {
   "id": "v_0770",
   "x": 97.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.2265,
   "P_total_empirical": 0.0923,
   "pass": false
  },
  {
   "id": "v_0771",
   "x": 99.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.2171,
   "P_total_empirical": 0.088,
   "pass": false
  },
  {
   "id": "v_0772",
   "x": 1.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3743,
   "P_total_assumed": 0.2197,
   "P_total_empirical": 0.2197,
   "pass": false
  },
  {
   "id": "v_0773",
   "x": 3.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3848,
   "P_total_assumed": 0.2293,
   "P_total_empirical": 0.2293,
   "pass": false
  },
  {
   "id": "v_0774",
   "x": 5.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9621,
   "P_total_assumed": 0.239,
   "P_total_empirical": 0.9523,
   "pass": true
  },
  {
   "id": "v_0775",
   "x": 7.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9627,
   "P_total_assumed": 0.2485,
   "P_total_empirical": 0.9529,
   "pass": true
  },
  {
   "id": "v_0776",
   "x": 9.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9633,
   "P_total_assumed": 0.2584,
   "P_total_empirical": 0.9536,
   "pass": true
  },
  {
   "id": "v_0777",
   "x": 11.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9975,
   "P_total_assumed": 0.9969,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0778",
   "x": 13.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9975,
   "P_total_assumed": 0.9969,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0779",
   "x": 15.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9976,
   "P_total_assumed": 0.9969,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0780",
   "x": 19.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6631,
   "P_total_assumed": 0.5711,
   "P_total_empirical": 0.6636,
   "pass": true
  },
  {
   "id": "v_0781",
   "x": 21.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6673,
   "P_total_assumed": 0.5763,
   "P_total_empirical": 0.6676,
   "pass": true
  },
  {
   "id": "v_0782",
   "x": 23.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6712,
   "P_total_assumed": 0.5811,
   "P_total_empirical": 0.6713,
   "pass": true
  },
  {
   "id": "v_0783",
   "x": 25.0,
   "y": 39.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total_geometric": 0.5867,
   "P_total_assumed": 0.4734,
   "P_total_empirical": 0.5868,
   "pass": true
  },
  {
   "id": "v_0784",
   "x": 27.0,
   "y": 39.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total_geometric": 0.5911,
   "P_total_assumed": 0.4789,
   "P_total_empirical": 0.5911,
   "pass": true
  },
  {
   "id": "v_0785",
   "x": 29.0,
   "y": 39.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total_geometric": 0.5952,
   "P_total_assumed": 0.4841,
   "P_total_empirical": 0.5952,
   "pass": true
  },
  {
   "id": "v_0786",
   "x": 31.0,
   "y": 39.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total_geometric": 0.5987,
   "P_total_assumed": 0.5988,
   "P_total_empirical": 0.5987,
   "pass": true
  },
  {
   "id": "v_0787",
   "x": 33.0,
   "y": 39.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total_geometric": 0.602,
   "P_total_assumed": 0.6022,
   "P_total_empirical": 0.602,
   "pass": true
  },
  {
   "id": "v_0788",
   "x": 35.0,
   "y": 39.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total_geometric": 0.6049,
   "P_total_assumed": 0.6051,
   "P_total_empirical": 0.6047,
   "pass": true
  },
  {
   "id": "v_0789",
   "x": 37.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6074,
   "P_total_assumed": 0.6078,
   "P_total_empirical": 0.6071,
   "pass": true
  },
  {
   "id": "v_0790",
   "x": 39.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.568,
   "P_total_assumed": 0.6101,
   "P_total_empirical": 0.5676,
   "pass": true
  },
  {
   "id": "v_0791",
   "x": 41.0,
   "y": 39.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5559,
   "P_total_assumed": 0.612,
   "P_total_empirical": 0.5553,
   "pass": true
  },
  {
   "id": "v_0792",
   "x": 43.0,
   "y": 39.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5469,
   "P_total_assumed": 0.6135,
   "P_total_empirical": 0.546,
   "pass": true
  },
  {
   "id": "v_0793",
   "x": 45.0,
   "y": 39.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5334,
   "P_total_assumed": 0.6146,
   "P_total_empirical": 0.532,
   "pass": true
  },
  {
   "id": "v_0794",
   "x": 47.0,
   "y": 39.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5119,
   "P_total_assumed": 0.6154,
   "P_total_empirical": 0.5098,
   "pass": true
  },
  {
   "id": "v_0795",
   "x": 49.0,
   "y": 39.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5132,
   "P_total_assumed": 0.6158,
   "P_total_empirical": 0.5103,
   "pass": true
  },
  {
   "id": "v_0796",
   "x": 51.0,
   "y": 39.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5143,
   "P_total_assumed": 0.6158,
   "P_total_empirical": 0.5103,
   "pass": true
  },
  {
   "id": "v_0797",
   "x": 53.0,
   "y": 39.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5151,
   "P_total_assumed": 0.6154,
   "P_total_empirical": 0.5099,
   "pass": true
  },
  {
   "id": "v_0798",
   "x": 55.0,
   "y": 39.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5157,
   "P_total_assumed": 0.6146,
   "P_total_empirical": 0.509,
   "pass": true
  },
  {
   "id": "v_0799",
   "x": 57.0,
   "y": 39.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.3833,
   "P_total_assumed": 0.6135,
   "P_total_empirical": 0.5076,
   "pass": true
  },
  {
   "id": "v_0800",
   "x": 59.0,
   "y": 39.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.3837,
   "P_total_assumed": 0.612,
   "P_total_empirical": 0.5058,
   "pass": true
  },
  {
   "id": "v_0801",
   "x": 61.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.384,
   "P_total_assumed": 0.6101,
   "P_total_empirical": 0.5037,
   "pass": true
  },
  {
   "id": "v_0802",
   "x": 63.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3842,
   "P_total_assumed": 0.6078,
   "P_total_empirical": 0.5011,
   "pass": true
  },
  {
   "id": "v_0803",
   "x": 65.0,
   "y": 39.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total_geometric": 0.3843,
   "P_total_assumed": 0.6051,
   "P_total_empirical": 0.4982,
   "pass": false
  },
  {
   "id": "v_0804",
   "x": 67.0,
   "y": 39.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total_geometric": 0.3844,
   "P_total_assumed": 0.6022,
   "P_total_empirical": 0.4951,
   "pass": false
  },
  {
   "id": "v_0805",
   "x": 69.0,
   "y": 39.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total_geometric": 0.3845,
   "P_total_assumed": 0.5988,
   "P_total_empirical": 0.4917,
   "pass": false
  },
  {
   "id": "v_0806",
   "x": 71.0,
   "y": 39.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total_geometric": 0.2154,
   "P_total_assumed": 0.4841,
   "P_total_empirical": 0.3476,
   "pass": false
  },
  {
   "id": "v_0807",
   "x": 73.0,
   "y": 39.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total_geometric": 0.2155,
   "P_total_assumed": 0.4789,
   "P_total_empirical": 0.3427,
   "pass": false
  },
  {
   "id": "v_0808",
   "x": 75.0,
   "y": 39.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total_geometric": 0.2155,
   "P_total_assumed": 0.4734,
   "P_total_empirical": 0.3379,
   "pass": false
  },
  {
   "id": "v_0809",
   "x": 77.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3838,
   "P_total_assumed": 0.5811,
   "P_total_empirical": 0.5878,
   "pass": true
  },
  {
   "id": "v_0810",
   "x": 79.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.384,
   "P_total_assumed": 0.5763,
   "P_total_empirical": 0.5851,
   "pass": true
  },
  {
   "id": "v_0811",
   "x": 81.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3841,
   "P_total_assumed": 0.5711,
   "P_total_empirical": 0.5822,
   "pass": true
  },
  {
   "id": "v_0812",
   "x": 85.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.996,
   "P_total_assumed": 0.9969,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0813",
   "x": 87.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9453,
   "P_total_assumed": 0.9572,
   "P_total_empirical": 0.9967,
   "pass": true
  },
  {
   "id": "v_0814",
   "x": 89.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9367,
   "P_total_assumed": 0.9497,
   "P_total_empirical": 0.9961,
   "pass": true
  },
  {
   "id": "v_0815",
   "x": 91.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9369,
   "P_total_assumed": 0.2584,
   "P_total_empirical": 0.9437,
   "pass": true
  },
  {
   "id": "v_0816",
   "x": 93.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.2485,
   "P_total_empirical": 0.1029,
   "pass": false
  },
  {
   "id": "v_0817",
   "x": 95.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.239,
   "P_total_empirical": 0.0982,
   "pass": false
  },
  {
   "id": "v_0818",
   "x": 97.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.2293,
   "P_total_empirical": 0.0935,
   "pass": false
  },
  {
   "id": "v_0819",
   "x": 99.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0888,
   "P_total_empirical": 0.0888,
   "pass": false
  },
  {
   "id": "v_0820",
   "x": 1.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3776,
   "P_total_assumed": 0.2223,
   "P_total_empirical": 0.2223,
   "pass": false
  },
  {
   "id": "v_0821",
   "x": 3.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3877,
   "P_total_assumed": 0.2319,
   "P_total_empirical": 0.2319,
   "pass": false
  },
  {
   "id": "v_0822",
   "x": 5.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9622,
   "P_total_assumed": 0.2417,
   "P_total_empirical": 0.9524,
   "pass": true
  },
  {
   "id": "v_0823",
   "x": 7.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9628,
   "P_total_assumed": 0.2513,
   "P_total_empirical": 0.9531,
   "pass": true
  },
  {
   "id": "v_0824",
   "x": 9.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9634,
   "P_total_assumed": 0.2614,
   "P_total_empirical": 0.9537,
   "pass": true
  },
  {
   "id": "v_0825",
   "x": 11.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9974,
   "P_total_assumed": 0.9967,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0826",
   "x": 13.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9974,
   "P_total_assumed": 0.9967,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0827",
   "x": 15.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9975,
   "P_total_assumed": 0.9968,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0828",
   "x": 19.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6641,
   "P_total_assumed": 0.5723,
   "P_total_empirical": 0.6645,
   "pass": true
  },
  {
   "id": "v_0829",
   "x": 21.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6683,
   "P_total_assumed": 0.5774,
   "P_total_empirical": 0.6685,
   "pass": true
  },
  {
   "id": "v_0830",
   "x": 23.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6719,
   "P_total_assumed": 0.582,
   "P_total_empirical": 0.6721,
   "pass": true
  },
  {
   "id": "v_0831",
   "x": 25.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6754,
   "P_total_assumed": 0.5864,
   "P_total_empirical": 0.6755,
   "pass": true
  },
  {
   "id": "v_0832",
   "x": 27.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.5926,
   "P_total_assumed": 0.4808,
   "P_total_empirical": 0.5926,
   "pass": true
  },
  {
   "id": "v_0833",
   "x": 29.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.5965,
   "P_total_assumed": 0.4858,
   "P_total_empirical": 0.5965,
   "pass": true
  },
  {
   "id": "v_0834",
   "x": 31.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6001,
   "P_total_assumed": 0.6002,
   "P_total_empirical": 0.6,
   "pass": true
  },
  {
   "id": "v_0835",
   "x": 33.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6032,
   "P_total_assumed": 0.6033,
   "P_total_empirical": 0.6031,
   "pass": true
  },
  {
   "id": "v_0836",
   "x": 35.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6061,
   "P_total_assumed": 0.6063,
   "P_total_empirical": 0.606,
   "pass": true
  },
  {
   "id": "v_0837",
   "x": 37.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6084,
   "P_total_assumed": 0.6088,
   "P_total_empirical": 0.6082,
   "pass": true
  },
  {
   "id": "v_0838",
   "x": 39.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.569,
   "P_total_assumed": 0.611,
   "P_total_empirical": 0.5687,
   "pass": true
  },
  {
   "id": "v_0839",
   "x": 41.0,
   "y": 41.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.571,
   "P_total_assumed": 0.6129,
   "P_total_empirical": 0.5705,
   "pass": true
  },
  {
   "id": "v_0840",
   "x": 43.0,
   "y": 41.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5725,
   "P_total_assumed": 0.6144,
   "P_total_empirical": 0.5718,
   "pass": true
  },
  {
   "id": "v_0841",
   "x": 45.0,
   "y": 41.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5736,
   "P_total_assumed": 0.6155,
   "P_total_empirical": 0.5725,
   "pass": true
  },
  {
   "id": "v_0842",
   "x": 47.0,
   "y": 41.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5742,
   "P_total_assumed": 0.6162,
   "P_total_empirical": 0.5727,
   "pass": true
  },
  {
   "id": "v_0843",
   "x": 49.0,
   "y": 41.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5745,
   "P_total_assumed": 0.6166,
   "P_total_empirical": 0.5723,
   "pass": true
  },
  {
   "id": "v_0844",
   "x": 51.0,
   "y": 41.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5744,
   "P_total_assumed": 0.6166,
   "P_total_empirical": 0.5715,
   "pass": true
  },
  {
   "id": "v_0845",
   "x": 53.0,
   "y": 41.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.574,
   "P_total_assumed": 0.6162,
   "P_total_empirical": 0.57,
   "pass": true
  },
  {
   "id": "v_0846",
   "x": 55.0,
   "y": 41.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.4561,
   "P_total_assumed": 0.6155,
   "P_total_empirical": 0.568,
   "pass": true
  },
  {
   "id": "v_0847",
   "x": 57.0,
   "y": 41.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.4547,
   "P_total_assumed": 0.6144,
   "P_total_empirical": 0.5654,
   "pass": true
  },
  {
   "id": "v_0848",
   "x": 59.0,
   "y": 41.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.4532,
   "P_total_assumed": 0.6129,
   "P_total_empirical": 0.5623,
   "pass": true
  },
  {
   "id": "v_0849",
   "x": 61.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4513,
   "P_total_assumed": 0.611,
   "P_total_empirical": 0.5587,
   "pass": true
  },
  {
   "id": "v_0850",
   "x": 63.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4493,
   "P_total_assumed": 0.6088,
   "P_total_empirical": 0.5547,
   "pass": true
  },
  {
   "id": "v_0851",
   "x": 65.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4471,
   "P_total_assumed": 0.6063,
   "P_total_empirical": 0.5504,
   "pass": true
  },
  {
   "id": "v_0852",
   "x": 67.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4447,
   "P_total_assumed": 0.6033,
   "P_total_empirical": 0.5455,
   "pass": true
  },
  {
   "id": "v_0853",
   "x": 69.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4423,
   "P_total_assumed": 0.6002,
   "P_total_empirical": 0.5405,
   "pass": true
  },
  {
   "id": "v_0854",
   "x": 71.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.2861,
   "P_total_assumed": 0.4858,
   "P_total_empirical": 0.4077,
   "pass": false
  },
  {
   "id": "v_0855",
   "x": 73.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.2829,
   "P_total_assumed": 0.4808,
   "P_total_empirical": 0.4007,
   "pass": false
  },
  {
   "id": "v_0856",
   "x": 75.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4338,
   "P_total_assumed": 0.5864,
   "P_total_empirical": 0.6242,
   "pass": true
  },
  {
   "id": "v_0857",
   "x": 77.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4317,
   "P_total_assumed": 0.582,
   "P_total_empirical": 0.6201,
   "pass": true
  },
  {
   "id": "v_0858",
   "x": 79.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4296,
   "P_total_assumed": 0.5774,
   "P_total_empirical": 0.6161,
   "pass": true
  },
  {
   "id": "v_0859",
   "x": 81.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4276,
   "P_total_assumed": 0.5723,
   "P_total_empirical": 0.612,
   "pass": true
  },
  {
   "id": "v_0860",
   "x": 85.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9962,
   "P_total_assumed": 0.9968,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0861",
   "x": 87.0,
   "y": 41.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.948,
   "P_total_assumed": 0.9551,
   "P_total_empirical": 0.9967,
   "pass": true
  },
  {
   "id": "v_0862",
   "x": 89.0,
   "y": 41.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.9398,
   "P_total_assumed": 0.9473,
   "P_total_empirical": 0.9961,
   "pass": true
  },
  {
   "id": "v_0863",
   "x": 91.0,
   "y": 41.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.0553,
   "P_total_assumed": 0.2614,
   "P_total_empirical": 0.1589,
   "pass": false
  },
  {
   "id": "v_0864",
   "x": 93.0,
   "y": 41.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.0527,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0527,
   "pass": false
  },
  {
   "id": "v_0865",
   "x": 95.0,
   "y": 41.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.0502,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0502,
   "pass": false
  },
  {
   "id": "v_0866",
   "x": 97.0,
   "y": 41.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.0477,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0477,
   "pass": false
  },
  {
   "id": "v_0867",
   "x": 99.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0868",
   "x": 1.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.38,
   "P_total_assumed": 0.2242,
   "P_total_empirical": 0.2242,
   "pass": false
  },
  {
   "id": "v_0869",
   "x": 3.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9612,
   "P_total_assumed": 0.234,
   "P_total_empirical": 0.9513,
   "pass": true
  },
  {
   "id": "v_0870",
   "x": 5.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9621,
   "P_total_assumed": 0.2437,
   "P_total_empirical": 0.9523,
   "pass": true
  },
  {
   "id": "v_0871",
   "x": 7.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9629,
   "P_total_assumed": 0.2536,
   "P_total_empirical": 0.9531,
   "pass": true
  },
  {
   "id": "v_0872",
   "x": 9.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9636,
   "P_total_assumed": 0.2634,
   "P_total_empirical": 0.9538,
   "pass": true
  },
  {
   "id": "v_0873",
   "x": 11.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9972,
   "P_total_assumed": 0.9965,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0874",
   "x": 13.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9973,
   "P_total_assumed": 0.9965,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0875",
   "x": 15.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9973,
   "P_total_assumed": 0.9965,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0876",
   "x": 19.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6648,
   "P_total_assumed": 0.5731,
   "P_total_empirical": 0.6651,
   "pass": true
  },
  {
   "id": "v_0877",
   "x": 21.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6688,
   "P_total_assumed": 0.578,
   "P_total_empirical": 0.6689,
   "pass": true
  },
  {
   "id": "v_0878",
   "x": 23.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6724,
   "P_total_assumed": 0.5826,
   "P_total_empirical": 0.6725,
   "pass": true
  },
  {
   "id": "v_0879",
   "x": 25.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6758,
   "P_total_assumed": 0.5868,
   "P_total_empirical": 0.6758,
   "pass": true
  },
  {
   "id": "v_0880",
   "x": 27.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.5937,
   "P_total_assumed": 0.4822,
   "P_total_empirical": 0.5938,
   "pass": true
  },
  {
   "id": "v_0881",
   "x": 29.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.5976,
   "P_total_assumed": 0.4872,
   "P_total_empirical": 0.5977,
   "pass": true
  },
  {
   "id": "v_0882",
   "x": 31.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6012,
   "P_total_assumed": 0.6012,
   "P_total_empirical": 0.6012,
   "pass": true
  },
  {
   "id": "v_0883",
   "x": 33.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6042,
   "P_total_assumed": 0.6044,
   "P_total_empirical": 0.6042,
   "pass": true
  },
  {
   "id": "v_0884",
   "x": 35.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.607,
   "P_total_assumed": 0.6072,
   "P_total_empirical": 0.6069,
   "pass": true
  },
  {
   "id": "v_0885",
   "x": 37.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6093,
   "P_total_assumed": 0.6097,
   "P_total_empirical": 0.6092,
   "pass": true
  },
  {
   "id": "v_0886",
   "x": 39.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.6112,
   "P_total_assumed": 0.6118,
   "P_total_empirical": 0.611,
   "pass": true
  },
  {
   "id": "v_0887",
   "x": 41.0,
   "y": 43.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6127,
   "P_total_assumed": 0.6136,
   "P_total_empirical": 0.6124,
   "pass": true
  },
  {
   "id": "v_0888",
   "x": 43.0,
   "y": 43.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6137,
   "P_total_assumed": 0.615,
   "P_total_empirical": 0.6132,
   "pass": true
  },
  {
   "id": "v_0889",
   "x": 45.0,
   "y": 43.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6143,
   "P_total_assumed": 0.6161,
   "P_total_empirical": 0.6135,
   "pass": true
  },
  {
   "id": "v_0890",
   "x": 47.0,
   "y": 43.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6144,
   "P_total_assumed": 0.6168,
   "P_total_empirical": 0.6133,
   "pass": true
  },
  {
   "id": "v_0891",
   "x": 49.0,
   "y": 43.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6141,
   "P_total_assumed": 0.6172,
   "P_total_empirical": 0.6124,
   "pass": true
  },
  {
   "id": "v_0892",
   "x": 51.0,
   "y": 43.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6133,
   "P_total_assumed": 0.6172,
   "P_total_empirical": 0.6109,
   "pass": true
  },
  {
   "id": "v_0893",
   "x": 53.0,
   "y": 43.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6121,
   "P_total_assumed": 0.6168,
   "P_total_empirical": 0.6088,
   "pass": true
  },
  {
   "id": "v_0894",
   "x": 55.0,
   "y": 43.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5035,
   "P_total_assumed": 0.6161,
   "P_total_empirical": 0.6061,
   "pass": true
  },
  {
   "id": "v_0895",
   "x": 57.0,
   "y": 43.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5011,
   "P_total_assumed": 0.615,
   "P_total_empirical": 0.6029,
   "pass": true
  },
  {
   "id": "v_0896",
   "x": 59.0,
   "y": 43.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.4982,
   "P_total_assumed": 0.6136,
   "P_total_empirical": 0.5989,
   "pass": true
  },
  {
   "id": "v_0897",
   "x": 61.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4949,
   "P_total_assumed": 0.6118,
   "P_total_empirical": 0.5945,
   "pass": true
  },
  {
   "id": "v_0898",
   "x": 63.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4915,
   "P_total_assumed": 0.6097,
   "P_total_empirical": 0.5896,
   "pass": true
  },
  {
   "id": "v_0899",
   "x": 65.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4878,
   "P_total_assumed": 0.6072,
   "P_total_empirical": 0.5843,
   "pass": true
  },
  {
   "id": "v_0900",
   "x": 67.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4838,
   "P_total_assumed": 0.6044,
   "P_total_empirical": 0.5784,
   "pass": true
  },
  {
   "id": "v_0901",
   "x": 69.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4798,
   "P_total_assumed": 0.6012,
   "P_total_empirical": 0.5723,
   "pass": true
  },
  {
   "id": "v_0902",
   "x": 71.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.332,
   "P_total_assumed": 0.4872,
   "P_total_empirical": 0.4468,
   "pass": false
  },
  {
   "id": "v_0903",
   "x": 73.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4696,
   "P_total_assumed": 0.4822,
   "P_total_empirical": 0.5575,
   "pass": true
  },
  {
   "id": "v_0904",
   "x": 75.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.466,
   "P_total_assumed": 0.5868,
   "P_total_empirical": 0.6455,
   "pass": true
  },
  {
   "id": "v_0905",
   "x": 77.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4627,
   "P_total_assumed": 0.5826,
   "P_total_empirical": 0.6409,
   "pass": true
  },
  {
   "id": "v_0906",
   "x": 79.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4592,
   "P_total_assumed": 0.578,
   "P_total_empirical": 0.636,
   "pass": true
  },
  {
   "id": "v_0907",
   "x": 81.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4558,
   "P_total_assumed": 0.5731,
   "P_total_empirical": 0.6312,
   "pass": true
  },
  {
   "id": "v_0908",
   "x": 85.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9963,
   "P_total_assumed": 0.9965,
   "P_total_empirical": 0.9997,
   "pass": true
  },
  {
   "id": "v_0909",
   "x": 87.0,
   "y": 43.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.9493,
   "P_total_assumed": 0.9522,
   "P_total_empirical": 0.9966,
   "pass": true
  },
  {
   "id": "v_0910",
   "x": 97.0,
   "y": 43.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0911",
   "x": 99.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0912",
   "x": 1.0,
   "y": 45.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9607,
   "P_total_assumed": 0.6772,
   "P_total_empirical": 0.6772,
   "pass": true
  },
  {
   "id": "v_0913",
   "x": 3.0,
   "y": 45.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9942,
   "P_total_assumed": 0.2361,
   "P_total_empirical": 0.9465,
   "pass": true
  },
  {
   "id": "v_0914",
   "x": 5.0,
   "y": 45.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9952,
   "P_total_assumed": 0.2458,
   "P_total_empirical": 0.951,
   "pass": true
  },
  {
   "id": "v_0915",
   "x": 7.0,
   "y": 45.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9628,
   "P_total_assumed": 0.2557,
   "P_total_empirical": 0.9529,
   "pass": true
  },
  {
   "id": "v_0916",
   "x": 9.0,
   "y": 45.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9636,
   "P_total_assumed": 0.2658,
   "P_total_empirical": 0.9539,
   "pass": true
  },
  {
   "id": "v_0917",
   "x": 11.0,
   "y": 45.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.997,
   "P_total_assumed": 0.9962,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0918",
   "x": 13.0,
   "y": 45.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.997,
   "P_total_assumed": 0.9962,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0919",
   "x": 15.0,
   "y": 45.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9971,
   "P_total_assumed": 0.9963,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0920",
   "x": 19.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.6652,
   "P_total_assumed": 0.5735,
   "P_total_empirical": 0.6654,
   "pass": true
  },
  {
   "id": "v_0921",
   "x": 21.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.6691,
   "P_total_assumed": 0.5783,
   "P_total_empirical": 0.6692,
   "pass": true
  },
  {
   "id": "v_0922",
   "x": 23.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.6727,
   "P_total_assumed": 0.5829,
   "P_total_empirical": 0.6728,
   "pass": true
  },
  {
   "id": "v_0923",
   "x": 25.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.6759,
   "P_total_assumed": 0.587,
   "P_total_empirical": 0.676,
   "pass": true
  },
  {
   "id": "v_0924",
   "x": 27.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.5949,
   "P_total_assumed": 0.4837,
   "P_total_empirical": 0.5949,
   "pass": true
  },
  {
   "id": "v_0925",
   "x": 29.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.5987,
   "P_total_assumed": 0.4885,
   "P_total_empirical": 0.5987,
   "pass": true
  },
  {
   "id": "v_0926",
   "x": 31.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.6021,
   "P_total_assumed": 0.6021,
   "P_total_empirical": 0.6021,
   "pass": true
  },
  {
   "id": "v_0927",
   "x": 33.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.6051,
   "P_total_assumed": 0.6052,
   "P_total_empirical": 0.6051,
   "pass": true
  },
  {
   "id": "v_0928",
   "x": 35.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.6078,
   "P_total_assumed": 0.608,
   "P_total_empirical": 0.6078,
   "pass": true
  },
  {
   "id": "v_0929",
   "x": 37.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.61,
   "P_total_assumed": 0.6104,
   "P_total_empirical": 0.6099,
   "pass": true
  },
  {
   "id": "v_0930",
   "x": 39.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.6119,
   "P_total_assumed": 0.6125,
   "P_total_empirical": 0.6118,
   "pass": true
  },
  {
   "id": "v_0931",
   "x": 41.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6133,
   "P_total_assumed": 0.6142,
   "P_total_empirical": 0.6131,
   "pass": true
  },
  {
   "id": "v_0932",
   "x": 43.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6143,
   "P_total_assumed": 0.6156,
   "P_total_empirical": 0.6139,
   "pass": true
  },
  {
   "id": "v_0933",
   "x": 45.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6148,
   "P_total_assumed": 0.6166,
   "P_total_empirical": 0.6142,
   "pass": true
  },
  {
   "id": "v_0934",
   "x": 47.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6149,
   "P_total_assumed": 0.6173,
   "P_total_empirical": 0.6139,
   "pass": true
  },
  {
   "id": "v_0935",
   "x": 49.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6145,
   "P_total_assumed": 0.6177,
   "P_total_empirical": 0.6131,
   "pass": true
  },
  {
   "id": "v_0936",
   "x": 51.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6137,
   "P_total_assumed": 0.6177,
   "P_total_empirical": 0.6116,
   "pass": true
  },
  {
   "id": "v_0937",
   "x": 53.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.6125,
   "P_total_assumed": 0.6173,
   "P_total_empirical": 0.6096,
   "pass": true
  },
  {
   "id": "v_0938",
   "x": 55.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.504,
   "P_total_assumed": 0.6166,
   "P_total_empirical": 0.6069,
   "pass": true
  },
  {
   "id": "v_0939",
   "x": 57.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.5015,
   "P_total_assumed": 0.6156,
   "P_total_empirical": 0.6037,
   "pass": true
  },
  {
   "id": "v_0940",
   "x": 59.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface",
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.4986,
   "P_total_assumed": 0.6142,
   "P_total_empirical": 0.5998,
   "pass": true
  },
  {
   "id": "v_0941",
   "x": 61.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.4954,
   "P_total_assumed": 0.6125,
   "P_total_empirical": 0.5955,
   "pass": true
  },
  {
   "id": "v_0942",
   "x": 63.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.4918,
   "P_total_assumed": 0.6104,
   "P_total_empirical": 0.5905,
   "pass": true
  },
  {
   "id": "v_0943",
   "x": 65.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.4882,
   "P_total_assumed": 0.608,
   "P_total_empirical": 0.5852,
   "pass": true
  },
  {
   "id": "v_0944",
   "x": 67.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.4842,
   "P_total_assumed": 0.6052,
   "P_total_empirical": 0.5794,
   "pass": true
  },
  {
   "id": "v_0945",
   "x": 69.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.4802,
   "P_total_assumed": 0.6021,
   "P_total_empirical": 0.5733,
   "pass": true
  },
  {
   "id": "v_0946",
   "x": 71.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.4724,
   "P_total_assumed": 0.4885,
   "P_total_empirical": 0.564,
   "pass": true
  },
  {
   "id": "v_0947",
   "x": 73.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.4693,
   "P_total_assumed": 0.4837,
   "P_total_empirical": 0.5581,
   "pass": true
  },
  {
   "id": "v_0948",
   "x": 75.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.4658,
   "P_total_assumed": 0.587,
   "P_total_empirical": 0.6452,
   "pass": true
  },
  {
   "id": "v_0949",
   "x": 77.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.4624,
   "P_total_assumed": 0.5829,
   "P_total_empirical": 0.6405,
   "pass": true
  },
  {
   "id": "v_0950",
   "x": 79.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.4589,
   "P_total_assumed": 0.5783,
   "P_total_empirical": 0.6356,
   "pass": true
  },
  {
   "id": "v_0951",
   "x": 81.0,
   "y": 45.0,
   "w": 5,
   "zones": [
    "gangform_workface"
   ],
   "P_total_geometric": 0.4556,
   "P_total_assumed": 0.5735,
   "P_total_empirical": 0.6309,
   "pass": true
  },
  {
   "id": "v_0952",
   "x": 85.0,
   "y": 45.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9962,
   "P_total_assumed": 0.9963,
   "P_total_empirical": 0.9997,
   "pass": true
  },
  {
   "id": "v_0953",
   "x": 87.0,
   "y": 45.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.2256,
   "P_total_assumed": 0.9483,
   "P_total_empirical": 0.943,
   "pass": true
  },
  {
   "id": "v_0954",
   "x": 97.0,
   "y": 45.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0955",
   "x": 99.0,
   "y": 45.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0956",
   "x": 1.0,
   "y": 47.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.7909,
   "P_total_assumed": 0.7909,
   "P_total_empirical": 0.7909,
   "pass": true
  },
  {
   "id": "v_0957",
   "x": 3.0,
   "y": 47.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9688,
   "P_total_assumed": 0.8137,
   "P_total_empirical": 0.9688,
   "pass": true
  },
  {
   "id": "v_0958",
   "x": 5.0,
   "y": 47.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9877,
   "P_total_assumed": 0.836,
   "P_total_empirical": 0.9877,
   "pass": true
  },
  {
   "id": "v_0959",
   "x": 7.0,
   "y": 47.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 0.8572,
   "P_total_empirical": 0.9908,
   "pass": true
  },
  {
   "id": "v_0960",
   "x": 9.0,
   "y": 47.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 0.8774,
   "P_total_empirical": 0.9923,
   "pass": true
  },
  {
   "id": "v_0961",
   "x": 11.0,
   "y": 47.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9989,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0962",
   "x": 13.0,
   "y": 47.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9968,
   "P_total_assumed": 0.9959,
   "P_total_empirical": 0.9997,
   "pass": true
  },
  {
   "id": "v_0963",
   "x": 15.0,
   "y": 47.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9968,
   "P_total_assumed": 0.9959,
   "P_total_empirical": 0.9997,
   "pass": true
  },
  {
   "id": "v_0964",
   "x": 85.0,
   "y": 47.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.996,
   "P_total_assumed": 0.9959,
   "P_total_empirical": 0.9997,
   "pass": true
  },
  {
   "id": "v_0965",
   "x": 87.0,
   "y": 47.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.2259,
   "P_total_assumed": 0.9433,
   "P_total_empirical": 0.9374,
   "pass": true
  },
  {
   "id": "v_0966",
   "x": 97.0,
   "y": 47.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0967",
   "x": 99.0,
   "y": 47.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_0968",
   "x": 1.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.7941,
   "P_total_assumed": 0.7941,
   "P_total_empirical": 0.7941,
   "pass": true
  },
  {
   "id": "v_0969",
   "x": 3.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8693,
   "P_total_assumed": 0.8175,
   "P_total_empirical": 0.8693,
   "pass": true
  },
  {
   "id": "v_0970",
   "x": 5.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9828,
   "P_total_assumed": 0.8399,
   "P_total_empirical": 0.9828,
   "pass": true
  },
  {
   "id": "v_0971",
   "x": 7.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9908,
   "P_total_assumed": 0.8606,
   "P_total_empirical": 0.9908,
   "pass": true
  },
  {
   "id": "v_0972",
   "x": 9.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9924,
   "P_total_assumed": 0.8804,
   "P_total_empirical": 0.9924,
   "pass": true
  },
  {
   "id": "v_0973",
   "x": 11.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9993,
   "P_total_assumed": 0.9993,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0974",
   "x": 13.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 0.9994,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0975",
   "x": 15.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 0.9995,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0976",
   "x": 17.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9998,
   "P_total_assumed": 0.9971,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0977",
   "x": 19.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9998,
   "P_total_assumed": 0.9976,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_0978",
   "x": 21.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.998,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0979",
   "x": 23.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9984,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0980",
   "x": 25.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9987,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0981",
   "x": 27.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9989,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0982",
   "x": 29.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9989,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0983",
   "x": 31.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0984",
   "x": 33.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0985",
   "x": 35.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0986",
   "x": 37.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0987",
   "x": 39.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0988",
   "x": 41.0,
   "y": 49.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0989",
   "x": 43.0,
   "y": 49.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0990",
   "x": 45.0,
   "y": 49.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0991",
   "x": 47.0,
   "y": 49.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0992",
   "x": 49.0,
   "y": 49.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0993",
   "x": 51.0,
   "y": 49.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0994",
   "x": 53.0,
   "y": 49.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_0995",
   "x": 55.0,
   "y": 49.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0996",
   "x": 57.0,
   "y": 49.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.9993,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0997",
   "x": 59.0,
   "y": 49.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0998",
   "x": 61.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_0999",
   "x": 63.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9991,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1000",
   "x": 65.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.999,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_1001",
   "x": 67.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9991,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_1002",
   "x": 69.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.999,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_1003",
   "x": 71.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9826,
   "P_total_assumed": 0.9989,
   "P_total_empirical": 0.9959,
   "pass": true
  },
  {
   "id": "v_1004",
   "x": 73.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9813,
   "P_total_assumed": 0.9989,
   "P_total_empirical": 0.9961,
   "pass": true
  },
  {
   "id": "v_1005",
   "x": 75.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9799,
   "P_total_assumed": 0.9987,
   "P_total_empirical": 0.9954,
   "pass": true
  },
  {
   "id": "v_1006",
   "x": 77.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9785,
   "P_total_assumed": 0.9984,
   "P_total_empirical": 0.9946,
   "pass": true
  },
  {
   "id": "v_1007",
   "x": 79.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9772,
   "P_total_assumed": 0.998,
   "P_total_empirical": 0.9938,
   "pass": true
  },
  {
   "id": "v_1008",
   "x": 81.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.976,
   "P_total_assumed": 0.9976,
   "P_total_empirical": 0.9929,
   "pass": true
  },
  {
   "id": "v_1009",
   "x": 83.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9747,
   "P_total_assumed": 0.9971,
   "P_total_empirical": 0.9919,
   "pass": true
  },
  {
   "id": "v_1010",
   "x": 85.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9975,
   "P_total_assumed": 0.9995,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1011",
   "x": 87.0,
   "y": 49.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.5184,
   "P_total_assumed": 0.9924,
   "P_total_empirical": 0.9774,
   "pass": true
  },
  {
   "id": "v_1012",
   "x": 97.0,
   "y": 49.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_1013",
   "x": 99.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_1014",
   "x": 1.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.7964,
   "P_total_assumed": 0.7964,
   "P_total_empirical": 0.7964,
   "pass": true
  },
  {
   "id": "v_1015",
   "x": 3.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8209,
   "P_total_assumed": 0.8209,
   "P_total_empirical": 0.8209,
   "pass": true
  },
  {
   "id": "v_1016",
   "x": 5.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9831,
   "P_total_assumed": 0.8425,
   "P_total_empirical": 0.9831,
   "pass": true
  },
  {
   "id": "v_1017",
   "x": 7.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.991,
   "P_total_assumed": 0.8639,
   "P_total_empirical": 0.991,
   "pass": true
  },
  {
   "id": "v_1018",
   "x": 9.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9926,
   "P_total_assumed": 0.8833,
   "P_total_empirical": 0.9926,
   "pass": true
  },
  {
   "id": "v_1019",
   "x": 11.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9993,
   "P_total_assumed": 0.9993,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1020",
   "x": 13.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 0.9994,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1021",
   "x": 15.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9995,
   "P_total_assumed": 0.9995,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1022",
   "x": 17.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9971,
   "P_total_assumed": 0.9971,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_1023",
   "x": 19.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9977,
   "P_total_assumed": 0.9976,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1024",
   "x": 21.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9981,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1025",
   "x": 23.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9984,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1026",
   "x": 25.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9987,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1027",
   "x": 27.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9989,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1028",
   "x": 29.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9989,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1029",
   "x": 31.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1030",
   "x": 33.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1031",
   "x": 35.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1032",
   "x": 37.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1033",
   "x": 39.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1034",
   "x": 41.0,
   "y": 51.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1035",
   "x": 43.0,
   "y": 51.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1036",
   "x": 45.0,
   "y": 51.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1037",
   "x": 47.0,
   "y": 51.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1038",
   "x": 49.0,
   "y": 51.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1039",
   "x": 51.0,
   "y": 51.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1040",
   "x": 53.0,
   "y": 51.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1041",
   "x": 55.0,
   "y": 51.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1042",
   "x": 57.0,
   "y": 51.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.9993,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1043",
   "x": 59.0,
   "y": 51.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1044",
   "x": 61.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1045",
   "x": 63.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9991,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1046",
   "x": 65.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.999,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_1047",
   "x": 67.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9991,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_1048",
   "x": 69.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.999,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_1049",
   "x": 71.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9826,
   "P_total_assumed": 0.9989,
   "P_total_empirical": 0.996,
   "pass": true
  },
  {
   "id": "v_1050",
   "x": 73.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9812,
   "P_total_assumed": 0.9989,
   "P_total_empirical": 0.9961,
   "pass": true
  },
  {
   "id": "v_1051",
   "x": 75.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9798,
   "P_total_assumed": 0.9987,
   "P_total_empirical": 0.9954,
   "pass": true
  },
  {
   "id": "v_1052",
   "x": 77.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9785,
   "P_total_assumed": 0.9984,
   "P_total_empirical": 0.9946,
   "pass": true
  },
  {
   "id": "v_1053",
   "x": 79.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9772,
   "P_total_assumed": 0.9981,
   "P_total_empirical": 0.9938,
   "pass": true
  },
  {
   "id": "v_1054",
   "x": 81.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9759,
   "P_total_assumed": 0.9976,
   "P_total_empirical": 0.9929,
   "pass": true
  },
  {
   "id": "v_1055",
   "x": 83.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9973,
   "P_total_assumed": 0.9971,
   "P_total_empirical": 0.9991,
   "pass": true
  },
  {
   "id": "v_1056",
   "x": 85.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9663,
   "P_total_assumed": 0.9995,
   "P_total_empirical": 0.9983,
   "pass": true
  },
  {
   "id": "v_1057",
   "x": 87.0,
   "y": 51.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.5184,
   "P_total_assumed": 0.9917,
   "P_total_empirical": 0.9748,
   "pass": true
  },
  {
   "id": "v_1058",
   "x": 97.0,
   "y": 51.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_1059",
   "x": 99.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_1060",
   "x": 1.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.7987,
   "P_total_assumed": 0.7987,
   "P_total_empirical": 0.7987,
   "pass": true
  },
  {
   "id": "v_1061",
   "x": 3.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.823,
   "P_total_assumed": 0.823,
   "P_total_empirical": 0.823,
   "pass": true
  },
  {
   "id": "v_1062",
   "x": 5.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8444,
   "P_total_assumed": 0.8444,
   "P_total_empirical": 0.8444,
   "pass": true
  },
  {
   "id": "v_1063",
   "x": 7.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8656,
   "P_total_assumed": 0.8656,
   "P_total_empirical": 0.8656,
   "pass": true
  },
  {
   "id": "v_1064",
   "x": 9.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8852,
   "P_total_assumed": 0.8852,
   "P_total_empirical": 0.8852,
   "pass": true
  },
  {
   "id": "v_1065",
   "x": 11.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9873,
   "P_total_assumed": 0.9992,
   "P_total_empirical": 0.9992,
   "pass": true
  },
  {
   "id": "v_1066",
   "x": 13.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9993,
   "P_total_assumed": 0.9993,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1067",
   "x": 15.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 0.9994,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1068",
   "x": 17.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9972,
   "P_total_assumed": 0.9972,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_1069",
   "x": 19.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9977,
   "P_total_assumed": 0.9977,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1070",
   "x": 21.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9981,
   "P_total_assumed": 0.9981,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1071",
   "x": 23.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9985,
   "P_total_assumed": 0.9985,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1072",
   "x": 25.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9987,
   "P_total_assumed": 0.9987,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1073",
   "x": 27.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9989,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1074",
   "x": 29.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1075",
   "x": 31.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1076",
   "x": 33.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1077",
   "x": 35.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1078",
   "x": 37.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1079",
   "x": 39.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1080",
   "x": 41.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1081",
   "x": 43.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1082",
   "x": 45.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1083",
   "x": 47.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1084",
   "x": 49.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1085",
   "x": 51.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1086",
   "x": 53.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1087",
   "x": 55.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1088",
   "x": 57.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9993,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1089",
   "x": 59.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1090",
   "x": 61.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1091",
   "x": 63.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9991,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1092",
   "x": 65.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1093",
   "x": 67.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9991,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_1094",
   "x": 69.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9989,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_1095",
   "x": 71.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9825,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.9964,
   "pass": true
  },
  {
   "id": "v_1096",
   "x": 73.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9811,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.9961,
   "pass": true
  },
  {
   "id": "v_1097",
   "x": 75.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9798,
   "P_total_assumed": 0.9987,
   "P_total_empirical": 0.9954,
   "pass": true
  },
  {
   "id": "v_1098",
   "x": 77.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9784,
   "P_total_assumed": 0.9985,
   "P_total_empirical": 0.9946,
   "pass": true
  },
  {
   "id": "v_1099",
   "x": 79.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9771,
   "P_total_assumed": 0.9981,
   "P_total_empirical": 0.9938,
   "pass": true
  },
  {
   "id": "v_1100",
   "x": 81.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9758,
   "P_total_assumed": 0.9977,
   "P_total_empirical": 0.9929,
   "pass": true
  },
  {
   "id": "v_1101",
   "x": 83.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9971,
   "P_total_assumed": 0.9972,
   "P_total_empirical": 0.9991,
   "pass": true
  },
  {
   "id": "v_1102",
   "x": 85.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9661,
   "P_total_assumed": 0.9994,
   "P_total_empirical": 0.9981,
   "pass": true
  },
  {
   "id": "v_1103",
   "x": 87.0,
   "y": 53.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.9641,
   "P_total_assumed": 0.9993,
   "P_total_empirical": 0.9979,
   "pass": true
  },
  {
   "id": "v_1104",
   "x": 97.0,
   "y": 53.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_1105",
   "x": 99.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.0,
   "P_total_assumed": 0.0,
   "P_total_empirical": 0.0,
   "pass": false
  },
  {
   "id": "v_1106",
   "x": 1.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.801,
   "P_total_assumed": 0.801,
   "P_total_empirical": 0.801,
   "pass": true
  },
  {
   "id": "v_1107",
   "x": 3.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8237,
   "P_total_assumed": 0.8237,
   "P_total_empirical": 0.8237,
   "pass": true
  },
  {
   "id": "v_1108",
   "x": 5.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8462,
   "P_total_assumed": 0.8462,
   "P_total_empirical": 0.8462,
   "pass": true
  },
  {
   "id": "v_1109",
   "x": 7.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8672,
   "P_total_assumed": 0.8672,
   "P_total_empirical": 0.8672,
   "pass": true
  },
  {
   "id": "v_1110",
   "x": 9.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8866,
   "P_total_assumed": 0.8866,
   "P_total_empirical": 0.8866,
   "pass": true
  },
  {
   "id": "v_1111",
   "x": 11.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9858,
   "P_total_assumed": 0.9985,
   "P_total_empirical": 0.9985,
   "pass": true
  },
  {
   "id": "v_1112",
   "x": 13.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.988,
   "P_total_assumed": 0.9991,
   "P_total_empirical": 0.9991,
   "pass": true
  },
  {
   "id": "v_1113",
   "x": 15.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.99,
   "P_total_assumed": 0.9994,
   "P_total_empirical": 0.9994,
   "pass": true
  },
  {
   "id": "v_1114",
   "x": 17.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9558,
   "P_total_assumed": 0.9972,
   "P_total_empirical": 0.9972,
   "pass": true
  },
  {
   "id": "v_1115",
   "x": 19.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9636,
   "P_total_assumed": 0.9977,
   "P_total_empirical": 0.9977,
   "pass": true
  },
  {
   "id": "v_1116",
   "x": 21.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9981,
   "P_total_assumed": 0.9981,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1117",
   "x": 23.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9985,
   "P_total_assumed": 0.9985,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1118",
   "x": 25.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9987,
   "P_total_assumed": 0.9987,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1119",
   "x": 27.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.999,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1120",
   "x": 29.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.999,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1121",
   "x": 31.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9991,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1122",
   "x": 33.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1123",
   "x": 35.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9993,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1124",
   "x": 37.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1125",
   "x": 39.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1126",
   "x": 41.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1127",
   "x": 43.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1128",
   "x": 45.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1129",
   "x": 47.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1130",
   "x": 49.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1131",
   "x": 51.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1132",
   "x": 53.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1133",
   "x": 55.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1134",
   "x": 57.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9993,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1135",
   "x": 59.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1136",
   "x": 61.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1137",
   "x": 63.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1138",
   "x": 65.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9991,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1139",
   "x": 67.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9989,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_1140",
   "x": 69.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9982,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 0.9996,
   "pass": true
  },
  {
   "id": "v_1141",
   "x": 71.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9823,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.9964,
   "pass": true
  },
  {
   "id": "v_1142",
   "x": 73.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.981,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.9961,
   "pass": true
  },
  {
   "id": "v_1143",
   "x": 75.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9796,
   "P_total_assumed": 0.9987,
   "P_total_empirical": 0.9954,
   "pass": true
  },
  {
   "id": "v_1144",
   "x": 77.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9783,
   "P_total_assumed": 0.9985,
   "P_total_empirical": 0.9946,
   "pass": true
  },
  {
   "id": "v_1145",
   "x": 79.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9769,
   "P_total_assumed": 0.9981,
   "P_total_empirical": 0.9937,
   "pass": true
  },
  {
   "id": "v_1146",
   "x": 81.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9757,
   "P_total_assumed": 0.9977,
   "P_total_empirical": 0.9928,
   "pass": true
  },
  {
   "id": "v_1147",
   "x": 83.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9967,
   "P_total_assumed": 0.9972,
   "P_total_empirical": 0.999,
   "pass": true
  },
  {
   "id": "v_1148",
   "x": 85.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9652,
   "P_total_assumed": 0.9994,
   "P_total_empirical": 0.9978,
   "pass": true
  },
  {
   "id": "v_1149",
   "x": 87.0,
   "y": 55.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.958,
   "P_total_assumed": 0.9991,
   "P_total_empirical": 0.9972,
   "pass": true
  },
  {
   "id": "v_1150",
   "x": 89.0,
   "y": 55.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.9375,
   "P_total_assumed": 0.9897,
   "P_total_empirical": 0.9703,
   "pass": true
  },
  {
   "id": "v_1151",
   "x": 91.0,
   "y": 55.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.3981,
   "P_total_assumed": 0.8866,
   "P_total_empirical": 0.6989,
   "pass": true
  },
  {
   "id": "v_1152",
   "x": 93.0,
   "y": 55.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.378,
   "P_total_assumed": 0.8672,
   "P_total_empirical": 0.6737,
   "pass": true
  },
  {
   "id": "v_1153",
   "x": 95.0,
   "y": 55.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.3598,
   "P_total_assumed": 0.8462,
   "P_total_empirical": 0.6487,
   "pass": true
  },
  {
   "id": "v_1154",
   "x": 97.0,
   "y": 55.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total_geometric": 0.3436,
   "P_total_assumed": 0.8237,
   "P_total_empirical": 0.6251,
   "pass": true
  },
  {
   "id": "v_1155",
   "x": 99.0,
   "y": 55.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3277,
   "P_total_assumed": 0.801,
   "P_total_empirical": 0.6022,
   "pass": true
  },
  {
   "id": "v_1156",
   "x": 1.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8018,
   "P_total_assumed": 0.8018,
   "P_total_empirical": 0.8018,
   "pass": true
  },
  {
   "id": "v_1157",
   "x": 3.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.825,
   "P_total_assumed": 0.825,
   "P_total_empirical": 0.825,
   "pass": true
  },
  {
   "id": "v_1158",
   "x": 5.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8474,
   "P_total_assumed": 0.8474,
   "P_total_empirical": 0.8474,
   "pass": true
  },
  {
   "id": "v_1159",
   "x": 7.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8678,
   "P_total_assumed": 0.8678,
   "P_total_empirical": 0.8678,
   "pass": true
  },
  {
   "id": "v_1160",
   "x": 9.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8871,
   "P_total_assumed": 0.8871,
   "P_total_empirical": 0.8871,
   "pass": true
  },
  {
   "id": "v_1161",
   "x": 11.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.984,
   "P_total_assumed": 0.9886,
   "P_total_empirical": 0.9886,
   "pass": true
  },
  {
   "id": "v_1162",
   "x": 13.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9866,
   "P_total_assumed": 0.9978,
   "P_total_empirical": 0.9978,
   "pass": true
  },
  {
   "id": "v_1163",
   "x": 15.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9888,
   "P_total_assumed": 0.9992,
   "P_total_empirical": 0.9992,
   "pass": true
  },
  {
   "id": "v_1164",
   "x": 17.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9907,
   "P_total_assumed": 0.9994,
   "P_total_empirical": 0.9994,
   "pass": true
  },
  {
   "id": "v_1165",
   "x": 19.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9638,
   "P_total_assumed": 0.9977,
   "P_total_empirical": 0.9977,
   "pass": true
  },
  {
   "id": "v_1166",
   "x": 21.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9705,
   "P_total_assumed": 0.9981,
   "P_total_empirical": 0.9981,
   "pass": true
  },
  {
   "id": "v_1167",
   "x": 23.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9758,
   "P_total_assumed": 0.9985,
   "P_total_empirical": 0.9985,
   "pass": true
  },
  {
   "id": "v_1168",
   "x": 25.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9801,
   "P_total_assumed": 0.9988,
   "P_total_empirical": 0.9988,
   "pass": true
  },
  {
   "id": "v_1169",
   "x": 27.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9835,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.999,
   "pass": true
  },
  {
   "id": "v_1170",
   "x": 29.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.999,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1171",
   "x": 31.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9991,
   "P_total_assumed": 0.9994,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1172",
   "x": 33.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1173",
   "x": 35.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9993,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1174",
   "x": 37.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1175",
   "x": 39.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9995,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1176",
   "x": 41.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9995,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1177",
   "x": 43.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1178",
   "x": 45.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 1.0,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1179",
   "x": 47.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9999,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1180",
   "x": 49.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9996,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1181",
   "x": 51.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9995,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1182",
   "x": 53.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1183",
   "x": 55.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1184",
   "x": 57.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9993,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1185",
   "x": 59.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1186",
   "x": 61.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1187",
   "x": 63.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1188",
   "x": 65.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.999,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_1189",
   "x": 67.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9975,
   "P_total_assumed": 0.9999,
   "P_total_empirical": 0.9995,
   "pass": true
  },
  {
   "id": "v_1190",
   "x": 69.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9882,
   "P_total_assumed": 0.9994,
   "P_total_empirical": 0.9977,
   "pass": true
  },
  {
   "id": "v_1191",
   "x": 71.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9822,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.9963,
   "pass": true
  },
  {
   "id": "v_1192",
   "x": 73.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9808,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.996,
   "pass": true
  },
  {
   "id": "v_1193",
   "x": 75.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9794,
   "P_total_assumed": 0.9988,
   "P_total_empirical": 0.9953,
   "pass": true
  },
  {
   "id": "v_1194",
   "x": 77.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9781,
   "P_total_assumed": 0.9985,
   "P_total_empirical": 0.9945,
   "pass": true
  },
  {
   "id": "v_1195",
   "x": 79.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9768,
   "P_total_assumed": 0.9981,
   "P_total_empirical": 0.9937,
   "pass": true
  },
  {
   "id": "v_1196",
   "x": 81.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9964,
   "P_total_assumed": 0.9977,
   "P_total_empirical": 0.9989,
   "pass": true
  },
  {
   "id": "v_1197",
   "x": 83.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9701,
   "P_total_assumed": 0.9994,
   "P_total_empirical": 0.998,
   "pass": true
  },
  {
   "id": "v_1198",
   "x": 85.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9623,
   "P_total_assumed": 0.9992,
   "P_total_empirical": 0.9973,
   "pass": true
  },
  {
   "id": "v_1199",
   "x": 87.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9057,
   "P_total_assumed": 0.9978,
   "P_total_empirical": 0.9929,
   "pass": true
  },
  {
   "id": "v_1200",
   "x": 89.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.5825,
   "P_total_assumed": 0.9316,
   "P_total_empirical": 0.8018,
   "pass": true
  },
  {
   "id": "v_1201",
   "x": 91.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3964,
   "P_total_assumed": 0.8871,
   "P_total_empirical": 0.698,
   "pass": true
  },
  {
   "id": "v_1202",
   "x": 93.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.378,
   "P_total_assumed": 0.8678,
   "P_total_empirical": 0.6737,
   "pass": true
  },
  {
   "id": "v_1203",
   "x": 95.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3598,
   "P_total_assumed": 0.8474,
   "P_total_empirical": 0.6498,
   "pass": true
  },
  {
   "id": "v_1204",
   "x": 97.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.342,
   "P_total_assumed": 0.825,
   "P_total_empirical": 0.6253,
   "pass": true
  },
  {
   "id": "v_1205",
   "x": 99.0,
   "y": 57.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3261,
   "P_total_assumed": 0.8018,
   "P_total_empirical": 0.6013,
   "pass": true
  },
  {
   "id": "v_1206",
   "x": 1.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8024,
   "P_total_assumed": 0.8024,
   "P_total_empirical": 0.8024,
   "pass": true
  },
  {
   "id": "v_1207",
   "x": 3.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8258,
   "P_total_assumed": 0.8258,
   "P_total_empirical": 0.8258,
   "pass": true
  },
  {
   "id": "v_1208",
   "x": 5.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8474,
   "P_total_assumed": 0.8474,
   "P_total_empirical": 0.8474,
   "pass": true
  },
  {
   "id": "v_1209",
   "x": 7.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8684,
   "P_total_assumed": 0.8684,
   "P_total_empirical": 0.8684,
   "pass": true
  },
  {
   "id": "v_1210",
   "x": 9.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.888,
   "P_total_assumed": 0.888,
   "P_total_empirical": 0.888,
   "pass": true
  },
  {
   "id": "v_1211",
   "x": 11.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.982,
   "P_total_assumed": 0.982,
   "P_total_empirical": 0.982,
   "pass": true
  },
  {
   "id": "v_1212",
   "x": 13.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9849,
   "P_total_assumed": 0.9949,
   "P_total_empirical": 0.9949,
   "pass": true
  },
  {
   "id": "v_1213",
   "x": 15.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9874,
   "P_total_assumed": 0.9991,
   "P_total_empirical": 0.9991,
   "pass": true
  },
  {
   "id": "v_1214",
   "x": 17.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9895,
   "P_total_assumed": 0.9993,
   "P_total_empirical": 0.9993,
   "pass": true
  },
  {
   "id": "v_1215",
   "x": 19.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9638,
   "P_total_assumed": 0.9977,
   "P_total_empirical": 0.9977,
   "pass": true
  },
  {
   "id": "v_1216",
   "x": 21.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9704,
   "P_total_assumed": 0.9981,
   "P_total_empirical": 0.9981,
   "pass": true
  },
  {
   "id": "v_1217",
   "x": 23.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9758,
   "P_total_assumed": 0.9985,
   "P_total_empirical": 0.9985,
   "pass": true
  },
  {
   "id": "v_1218",
   "x": 25.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.98,
   "P_total_assumed": 0.9987,
   "P_total_empirical": 0.9987,
   "pass": true
  },
  {
   "id": "v_1219",
   "x": 27.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9835,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.999,
   "pass": true
  },
  {
   "id": "v_1220",
   "x": 29.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9847,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.999,
   "pass": true
  },
  {
   "id": "v_1221",
   "x": 31.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9865,
   "P_total_assumed": 0.9992,
   "P_total_empirical": 0.9992,
   "pass": true
  },
  {
   "id": "v_1222",
   "x": 33.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.988,
   "P_total_assumed": 0.9997,
   "P_total_empirical": 0.9992,
   "pass": true
  },
  {
   "id": "v_1223",
   "x": 35.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9993,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1224",
   "x": 37.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1225",
   "x": 39.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9995,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1226",
   "x": 41.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9995,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1227",
   "x": 43.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9995,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1228",
   "x": 45.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9995,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1229",
   "x": 47.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9995,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1230",
   "x": 49.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9995,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1231",
   "x": 51.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9995,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1232",
   "x": 53.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 1.0,
   "pass": true
  },
  {
   "id": "v_1233",
   "x": 55.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9994,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1234",
   "x": 57.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9993,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1235",
   "x": 59.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9993,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1236",
   "x": 61.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1237",
   "x": 63.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9992,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9999,
   "pass": true
  },
  {
   "id": "v_1238",
   "x": 65.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.999,
   "P_total_assumed": 1.0,
   "P_total_empirical": 0.9998,
   "pass": true
  },
  {
   "id": "v_1239",
   "x": 67.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9948,
   "P_total_assumed": 0.9997,
   "P_total_empirical": 0.9991,
   "pass": true
  },
  {
   "id": "v_1240",
   "x": 69.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9833,
   "P_total_assumed": 0.9992,
   "P_total_empirical": 0.9968,
   "pass": true
  },
  {
   "id": "v_1241",
   "x": 71.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9819,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.9963,
   "pass": true
  },
  {
   "id": "v_1242",
   "x": 73.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9805,
   "P_total_assumed": 0.999,
   "P_total_empirical": 0.996,
   "pass": true
  },
  {
   "id": "v_1243",
   "x": 75.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9792,
   "P_total_assumed": 0.9987,
   "P_total_empirical": 0.9952,
   "pass": true
  },
  {
   "id": "v_1244",
   "x": 77.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9778,
   "P_total_assumed": 0.9985,
   "P_total_empirical": 0.9945,
   "pass": true
  },
  {
   "id": "v_1245",
   "x": 79.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9765,
   "P_total_assumed": 0.9981,
   "P_total_empirical": 0.9936,
   "pass": true
  },
  {
   "id": "v_1246",
   "x": 81.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9959,
   "P_total_assumed": 0.9977,
   "P_total_empirical": 0.9988,
   "pass": true
  },
  {
   "id": "v_1247",
   "x": 83.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9699,
   "P_total_assumed": 0.9993,
   "P_total_empirical": 0.9977,
   "pass": true
  },
  {
   "id": "v_1248",
   "x": 85.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.9594,
   "P_total_assumed": 0.9991,
   "P_total_empirical": 0.9967,
   "pass": true
  },
  {
   "id": "v_1249",
   "x": 87.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.8102,
   "P_total_assumed": 0.9949,
   "P_total_empirical": 0.9839,
   "pass": true
  },
  {
   "id": "v_1250",
   "x": 89.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.4151,
   "P_total_assumed": 0.9048,
   "P_total_empirical": 0.7224,
   "pass": true
  },
  {
   "id": "v_1251",
   "x": 91.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3948,
   "P_total_assumed": 0.888,
   "P_total_empirical": 0.6982,
   "pass": true
  },
  {
   "id": "v_1252",
   "x": 93.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3763,
   "P_total_assumed": 0.8684,
   "P_total_empirical": 0.6729,
   "pass": true
  },
  {
   "id": "v_1253",
   "x": 95.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3582,
   "P_total_assumed": 0.8474,
   "P_total_empirical": 0.6489,
   "pass": true
  },
  {
   "id": "v_1254",
   "x": 97.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3404,
   "P_total_assumed": 0.8258,
   "P_total_empirical": 0.6244,
   "pass": true
  },
  {
   "id": "v_1255",
   "x": 99.0,
   "y": 59.0,
   "w": 1,
   "zones": [],
   "P_total_geometric": 0.3245,
   "P_total_assumed": 0.8024,
   "P_total_empirical": 0.6015,
   "pass": true
  }
 ],
 "fail_zones": [
  {
   "voxel_id": "v_0150",
   "x": 1.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0,
   "reason": "완전 차폐"
  },
  {
   "voxel_id": "v_0151",
   "x": 3.0,
   "y": 7.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0,
   "reason": "완전 차폐"
  },
  {
   "voxel_id": "v_0152",
   "x": 5.0,
   "y": 7.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total": 0.0,
   "reason": "완전 차폐"
  },
  {
   "voxel_id": "v_0196",
   "x": 1.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0,
   "reason": "완전 차폐"
  },
  {
   "voxel_id": "v_0197",
   "x": 3.0,
   "y": 9.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0,
   "reason": "완전 차폐"
  },
  {
   "voxel_id": "v_0198",
   "x": 5.0,
   "y": 9.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total": 0.0,
   "reason": "완전 차폐"
  },
  {
   "voxel_id": "v_0242",
   "x": 1.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0,
   "reason": "완전 차폐"
  },
  {
   "voxel_id": "v_0243",
   "x": 3.0,
   "y": 11.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0,
   "reason": "완전 차폐"
  },
  {
   "voxel_id": "v_0244",
   "x": 5.0,
   "y": 11.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total": 0.0,
   "reason": "완전 차폐"
  },
  {
   "voxel_id": "v_0288",
   "x": 1.0,
   "y": 13.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0,
   "reason": "완전 차폐"
  },
  {
   "voxel_id": "v_0289",
   "x": 3.0,
   "y": 13.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0,
   "reason": "완전 차폐"
  },
  {
   "voxel_id": "v_0290",
   "x": 5.0,
   "y": 13.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total": 0.0,
   "reason": "완전 차폐"
  },
  {
   "voxel_id": "v_0300",
   "x": 1.0,
   "y": 15.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0,
   "reason": "완전 차폐"
  },
  {
   "voxel_id": "v_0301",
   "x": 3.0,
   "y": 15.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0,
   "reason": "완전 차폐"
  },
  {
   "voxel_id": "v_0302",
   "x": 5.0,
   "y": 15.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total": 0.0,
   "reason": "완전 차폐"
  },
  {
   "voxel_id": "v_0344",
   "x": 1.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0,
   "reason": "완전 차폐"
  },
  {
   "voxel_id": "v_0345",
   "x": 3.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0,
   "reason": "완전 차폐"
  },
  {
   "voxel_id": "v_0346",
   "x": 5.0,
   "y": 17.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total": 0.0,
   "reason": "완전 차폐"
  },
  {
   "voxel_id": "v_0353",
   "x": 29.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total": 0.4468,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0387",
   "x": 99.0,
   "y": 17.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2242,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0388",
   "x": 1.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0,
   "reason": "완전 차폐"
  },
  {
   "voxel_id": "v_0389",
   "x": 3.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0,
   "reason": "완전 차폐"
  },
  {
   "voxel_id": "v_0390",
   "x": 5.0,
   "y": 19.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total": 0.0502,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0391",
   "x": 7.0,
   "y": 19.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total": 0.0527,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0392",
   "x": 9.0,
   "y": 19.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total": 0.0553,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0400",
   "x": 27.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total": 0.4007,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0401",
   "x": 29.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total": 0.4077,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0434",
   "x": 97.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2319,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0435",
   "x": 99.0,
   "y": 19.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2223,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0436",
   "x": 1.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0888,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0437",
   "x": 3.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0935,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0438",
   "x": 5.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0982,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0439",
   "x": 7.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total": 0.1029,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0447",
   "x": 25.0,
   "y": 21.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total": 0.3379,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0448",
   "x": 27.0,
   "y": 21.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total": 0.3427,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0449",
   "x": 29.0,
   "y": 21.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total": 0.3476,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0450",
   "x": 31.0,
   "y": 21.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total": 0.4917,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0451",
   "x": 33.0,
   "y": 21.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total": 0.4951,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0452",
   "x": 35.0,
   "y": 21.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total": 0.4982,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0482",
   "x": 97.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2293,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0483",
   "x": 99.0,
   "y": 21.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2197,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0484",
   "x": 1.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total": 0.088,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0485",
   "x": 3.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0923,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0486",
   "x": 5.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total": 0.097,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0487",
   "x": 7.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total": 0.1017,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0495",
   "x": 37.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total": 0.363,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0508",
   "x": 63.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total": 0.3614,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0518",
   "x": 97.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2265,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0519",
   "x": 99.0,
   "y": 23.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2171,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0520",
   "x": 1.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0869,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0521",
   "x": 3.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0911,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0522",
   "x": 5.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0958,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0523",
   "x": 7.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total": 0.1006,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0531",
   "x": 37.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total": 0.4147,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0532",
   "x": 39.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total": 0.419,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0543",
   "x": 61.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total": 0.3889,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0544",
   "x": 63.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total": 0.384,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0553",
   "x": 95.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2332,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0554",
   "x": 97.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2236,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0555",
   "x": 99.0,
   "y": 25.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2145,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0556",
   "x": 1.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0857,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0557",
   "x": 3.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total": 0.09,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0558",
   "x": 5.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0942,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0559",
   "x": 7.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total": 0.099,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0567",
   "x": 37.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2958,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0568",
   "x": 39.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total": 0.4522,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0569",
   "x": 41.0,
   "y": 27.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total": 0.4563,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0578",
   "x": 59.0,
   "y": 27.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total": 0.456,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0579",
   "x": 61.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total": 0.4041,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0580",
   "x": 63.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total": 0.3986,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0589",
   "x": 95.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2297,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0590",
   "x": 97.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2204,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0591",
   "x": 99.0,
   "y": 27.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2115,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0592",
   "x": 1.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total": 0.1415,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0593",
   "x": 3.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0842,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0594",
   "x": 5.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0,
   "reason": "완전 차폐"
  },
  {
   "voxel_id": "v_0603",
   "x": 37.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total": 0.3326,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0604",
   "x": 39.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total": 0.4496,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0605",
   "x": 41.0,
   "y": 29.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total": 0.4539,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0606",
   "x": 43.0,
   "y": 29.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total": 0.4577,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0613",
   "x": 57.0,
   "y": 29.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total": 0.4577,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0614",
   "x": 59.0,
   "y": 29.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total": 0.4539,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0615",
   "x": 61.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total": 0.4495,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0616",
   "x": 63.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total": 0.3608,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0625",
   "x": 95.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total": 0.1149,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0626",
   "x": 97.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total": 0.1102,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0627",
   "x": 99.0,
   "y": 29.0,
   "w": 1,
   "zones": [],
   "P_total": 0.1644,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0628",
   "x": 1.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total": 0.1644,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0629",
   "x": 3.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total": 0.1102,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0630",
   "x": 5.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total": 0.1149,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0639",
   "x": 37.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total": 0.3608,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0640",
   "x": 39.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total": 0.4495,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0641",
   "x": 41.0,
   "y": 31.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total": 0.4539,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0642",
   "x": 43.0,
   "y": 31.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total": 0.4577,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0649",
   "x": 57.0,
   "y": 31.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total": 0.4577,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0650",
   "x": 59.0,
   "y": 31.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total": 0.4539,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0651",
   "x": 61.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total": 0.4496,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0652",
   "x": 63.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total": 0.3326,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0661",
   "x": 95.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0,
   "reason": "화각 밖"
  },
  {
   "voxel_id": "v_0662",
   "x": 97.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0842,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0663",
   "x": 99.0,
   "y": 31.0,
   "w": 1,
   "zones": [],
   "P_total": 0.1415,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0664",
   "x": 1.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2115,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0665",
   "x": 3.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2204,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0666",
   "x": 5.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2297,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0675",
   "x": 37.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total": 0.3986,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0676",
   "x": 39.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total": 0.4041,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0677",
   "x": 41.0,
   "y": 33.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total": 0.456,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0686",
   "x": 59.0,
   "y": 33.0,
   "w": 3,
   "zones": [
    "tower_crane_radius"
   ],
   "P_total": 0.4563,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0687",
   "x": 61.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total": 0.4522,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0688",
   "x": 63.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2958,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0696",
   "x": 93.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total": 0.099,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0697",
   "x": 95.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0942,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0698",
   "x": 97.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total": 0.09,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0699",
   "x": 99.0,
   "y": 33.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0857,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0700",
   "x": 1.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2145,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0701",
   "x": 3.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2236,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0702",
   "x": 5.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2332,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0711",
   "x": 37.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total": 0.384,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0712",
   "x": 39.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total": 0.3889,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0723",
   "x": 61.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total": 0.419,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0724",
   "x": 63.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total": 0.4147,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0732",
   "x": 93.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total": 0.1006,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0733",
   "x": 95.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0958,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0734",
   "x": 97.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0911,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0735",
   "x": 99.0,
   "y": 35.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0869,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0736",
   "x": 1.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2171,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0737",
   "x": 3.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2265,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0747",
   "x": 37.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total": 0.3614,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0760",
   "x": 63.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total": 0.363,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0768",
   "x": 93.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total": 0.1017,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0769",
   "x": 95.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total": 0.097,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0770",
   "x": 97.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0923,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0771",
   "x": 99.0,
   "y": 37.0,
   "w": 1,
   "zones": [],
   "P_total": 0.088,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0772",
   "x": 1.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2197,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0773",
   "x": 3.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2293,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0803",
   "x": 65.0,
   "y": 39.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total": 0.4982,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0804",
   "x": 67.0,
   "y": 39.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total": 0.4951,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0805",
   "x": 69.0,
   "y": 39.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total": 0.4917,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0806",
   "x": 71.0,
   "y": 39.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total": 0.3476,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0807",
   "x": 73.0,
   "y": 39.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total": 0.3427,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0808",
   "x": 75.0,
   "y": 39.0,
   "w": 5,
   "zones": [
    "opening_perimeter"
   ],
   "P_total": 0.3379,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0816",
   "x": 93.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total": 0.1029,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0817",
   "x": 95.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0982,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0818",
   "x": 97.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0935,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0819",
   "x": 99.0,
   "y": 39.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0888,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0820",
   "x": 1.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2223,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0821",
   "x": 3.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2319,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0854",
   "x": 71.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total": 0.4077,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0855",
   "x": 73.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total": 0.4007,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0863",
   "x": 91.0,
   "y": 41.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total": 0.1589,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0864",
   "x": 93.0,
   "y": 41.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total": 0.0527,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0865",
   "x": 95.0,
   "y": 41.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total": 0.0502,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0866",
   "x": 97.0,
   "y": 41.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total": 0.0477,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0867",
   "x": 99.0,
   "y": 41.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0,
   "reason": "화각 밖"
  },
  {
   "voxel_id": "v_0868",
   "x": 1.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total": 0.2242,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0902",
   "x": 71.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total": 0.4468,
   "reason": "가림"
  },
  {
   "voxel_id": "v_0910",
   "x": 97.0,
   "y": 43.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total": 0.0,
   "reason": "화각 밖"
  },
  {
   "voxel_id": "v_0911",
   "x": 99.0,
   "y": 43.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0,
   "reason": "화각 밖"
  },
  {
   "voxel_id": "v_0954",
   "x": 97.0,
   "y": 45.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total": 0.0,
   "reason": "화각 밖"
  },
  {
   "voxel_id": "v_0955",
   "x": 99.0,
   "y": 45.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0,
   "reason": "화각 밖"
  },
  {
   "voxel_id": "v_0966",
   "x": 97.0,
   "y": 47.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total": 0.0,
   "reason": "화각 밖"
  },
  {
   "voxel_id": "v_0967",
   "x": 99.0,
   "y": 47.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0,
   "reason": "화각 밖"
  },
  {
   "voxel_id": "v_1012",
   "x": 97.0,
   "y": 49.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total": 0.0,
   "reason": "화각 밖"
  },
  {
   "voxel_id": "v_1013",
   "x": 99.0,
   "y": 49.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0,
   "reason": "화각 밖"
  },
  {
   "voxel_id": "v_1058",
   "x": 97.0,
   "y": 51.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total": 0.0,
   "reason": "화각 밖"
  },
  {
   "voxel_id": "v_1059",
   "x": 99.0,
   "y": 51.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0,
   "reason": "화각 밖"
  },
  {
   "voxel_id": "v_1104",
   "x": 97.0,
   "y": 53.0,
   "w": 2,
   "zones": [
    "material_yard"
   ],
   "P_total": 0.0,
   "reason": "화각 밖"
  },
  {
   "voxel_id": "v_1105",
   "x": 99.0,
   "y": 53.0,
   "w": 1,
   "zones": [],
   "P_total": 0.0,
   "reason": "화각 밖"
  }
 ],
 "curve": {
  "source": "outputs\\curve_params.json",
  "rho_measured_px": [
   4.0,
   48.0
  ],
  "r2_full_grid": 0.8977
 },
 "geometric_baseline": {
  "standard": "IEC 62676-4 (DORI)",
  "level": "observation",
  "min_rho_px": 15.62,
  "note": "기하 기준선은 임계 없는 가시성이 아니라 DORI 최소 픽셀밀도를 지키도록 세웠다. 등급별 결과는 baseline_sweep 에 있다. DORI 는 인간 관찰자 기준이며 AI 검출기에 검증된 바 없다",
  "sweep": [
   {
    "dori_level": "none",
    "ppm": null,
    "min_rho_px": 0.0,
    "camera_ids": [
     "c_b00",
     "c_b09",
     "c_b01",
     "c_t21",
     "c_b05",
     "c_b15",
     "c_b10",
     "c_t22"
    ],
    "WDR": 0.6043,
    "fail_voxel_count": 436,
    "delta_WDR": 0.0953,
    "is_default": false
   },
   {
    "dori_level": "detection",
    "ppm": 25.0,
    "min_rho_px": 6.25,
    "camera_ids": [
     "c_b08",
     "c_b01",
     "c_b02",
     "c_b07",
     "c_t21",
     "c_b03",
     "c_b10",
     "c_t22"
    ],
    "WDR": 0.6306,
    "fail_voxel_count": 402,
    "delta_WDR": 0.069,
    "is_default": false
   },
   {
    "dori_level": "observation",
    "ppm": 62.5,
    "min_rho_px": 15.62,
    "camera_ids": [
     "c_b04",
     "c_b05",
     "c_b09",
     "c_b00",
     "c_b02",
     "c_b07",
     "c_b11",
     "c_b14"
    ],
    "WDR": 0.6682,
    "fail_voxel_count": 334,
    "delta_WDR": 0.0314,
    "is_default": true
   },
   {
    "dori_level": "recognition",
    "ppm": 125.0,
    "min_rho_px": 31.25,
    "camera_ids": [
     "c_b04",
     "c_b05",
     "c_b02",
     "c_b07",
     "c_b09",
     "c_b01",
     "c_b08",
     "c_b12"
    ],
    "WDR": 0.6582,
    "fail_voxel_count": 334,
    "delta_WDR": 0.0414,
    "is_default": false
   }
  ]
 },
 "assumed_curve": {
  "curve_source": "DORI_recognise_125ppm",
  "is_measured": false,
  "f_rho": {
   "form": "logistic",
   "half_at_px": 31.25,
   "k": 0.094222,
   "derived_from": "IEC 62676-4 DORI recognise 125 PPM · identification 250 PPM 에서 0.95"
  },
  "g_theta": {
   "form": "cos",
   "note": "지면 단축의 기하학적 가정"
  },
  "h_occ": {
   "form": "binary_los",
   "note": "막히면 0, 아니면 1. 부분 가림을 반영하지 않는다"
  },
  "warning": "전부 문헌 관행에서 온 가정값이며 측정값이 아니다"
 },
 "dori_pair_stats": {
  "n_pairs": 30144,
  "n_visible": 9720,
  "rho_px_median": 11.35,
  "rho_px_min": 4.86,
  "rho_px_max": 98.89,
  "levels": {
   "detection": {
    "ppm": 25.0,
    "min_rho_px": 6.25,
    "n_pass": 9032,
    "ratio": 0.9292
   },
   "observation": {
    "ppm": 62.5,
    "min_rho_px": 15.62,
    "n_pass": 2762,
    "ratio": 0.2842
   },
   "recognition": {
    "ppm": 125.0,
    "min_rho_px": 31.25,
    "n_pass": 597,
    "ratio": 0.0614
   },
   "identification": {
    "ppm": 250.0,
    "min_rho_px": 62.5,
    "n_pass": 109,
    "ratio": 0.0112
   }
  }
 },
 "out_of_measured_range": {
  "n_visible": 9720,
  "rho_below_min": {
   "limit_px": 4.0,
   "n": 0,
   "ratio": 0.0
  },
  "theta_over_max": {
   "limit_deg": 75.0,
   "n": 8,
   "ratio": 0.0008
  },
  "occ_over_max": {
   "limit": 0.7501000000000001,
   "n": 602,
   "ratio": 0.0619
  },
  "any": {
   "n": 610,
   "ratio": 0.0628
  }
 },
 "status": "ok"
};
