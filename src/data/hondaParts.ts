export interface HondaPart {
  partNumber: string
  description: string
  category: string
  models: string[]
}

export const hondaParts: HondaPart[] = [
  // Brakes
  {
    partNumber: '45022-S84-A01',
    description: 'Front brake pad set',
    category: 'Brakes',
    models: ['Civic (2001-2005)', 'CR-V (2002-2006)'],
  },
  {
    partNumber: '45022-TBA-A01',
    description: 'Front brake pad set',
    category: 'Brakes',
    models: ['Civic (2012-2015)'],
  },
  {
    partNumber: '43022-TVA-A01',
    description: 'Rear brake pad set',
    category: 'Brakes',
    models: ['Accord (2013-2017)'],
  },
  {
    partNumber: '45251-S84-A00',
    description: 'Front brake rotor / disc',
    category: 'Brakes',
    models: ['Civic (2001-2005)'],
  },
  {
    partNumber: '42510-TLA-A00',
    description: 'Rear brake rotor / disc',
    category: 'Brakes',
    models: ['CR-V (2012-2016)'],
  },
  {
    partNumber: '01465-S84-A01',
    description: 'Front brake pad set with wear sensor',
    category: 'Brakes',
    models: ['Odyssey (1999-2004)'],
  },
  {
    partNumber: '46101-SNA-A02',
    description: 'Brake master cylinder',
    category: 'Brakes',
    models: ['Civic (2006-2011)'],
  },
  {
    partNumber: '01463-TBA-A01',
    description: 'Rear brake pad set',
    category: 'Brakes',
    models: ['Civic (2012-2015)'],
  },

  // Engine / filters
  {
    partNumber: '15400-PLM-A02',
    description: 'Engine oil filter',
    category: 'Engine',
    models: ['Civic', 'Accord', 'CR-V', 'Pilot', 'Fit', 'HR-V', 'Odyssey'],
  },
  {
    partNumber: '17220-5A2-A00',
    description: 'Engine air filter element',
    category: 'Engine',
    models: ['Accord (2013-2017)'],
  },
  {
    partNumber: '17220-RNA-A00',
    description: 'Engine air filter element',
    category: 'Engine',
    models: ['CR-V (2007-2011)'],
  },
  {
    partNumber: '80292-SDA-A01',
    description: 'Cabin air filter',
    category: 'Engine',
    models: ['Civic (2006-2011)', 'CR-V (2007-2011)'],
  },
  {
    partNumber: '80291-SWA-A01',
    description: 'Cabin air filter, activated carbon',
    category: 'Engine',
    models: ['Pilot (2009-2015)'],
  },
  {
    partNumber: '19200-5AA-A01',
    description: 'Radiator assembly',
    category: 'Engine',
    models: ['CR-V (2017-2022)'],
  },
  {
    partNumber: '19010-5A2-A01',
    description: 'Radiator cooling fan motor',
    category: 'Engine',
    models: ['Accord (2013-2017)'],
  },
  {
    partNumber: '06111-5BA-315',
    description: 'Timing belt kit with water pump',
    category: 'Engine',
    models: ['Odyssey (2011-2017)'],
  },
  {
    partNumber: '14400-5G0-A02',
    description: 'Timing chain kit',
    category: 'Engine',
    models: ['Civic (2016-2021)'],
  },
  {
    partNumber: '19110-5J6-A01',
    description: 'Water pump',
    category: 'Engine',
    models: ['Pilot (2016-2022)'],
  },
  {
    partNumber: '12310-5AA-315',
    description: 'Valve cover gasket',
    category: 'Engine',
    models: ['CR-V (2017-2022)'],
  },
  {
    partNumber: '91214-RPY-G01',
    description: 'Crankshaft seal, front',
    category: 'Engine',
    models: ['Accord (2008-2012)'],
  },

  // Ignition / electrical
  {
    partNumber: '12290-RTA-003',
    description: 'Ignition coil',
    category: 'Ignition',
    models: ['Civic (2006-2015)', 'CR-V (2007-2016)'],
  },
  {
    partNumber: '9807B-56876',
    description: 'Spark plug, iridium long life',
    category: 'Ignition',
    models: ['Accord', 'Civic', 'CR-V', 'Pilot', 'Odyssey'],
  },
  {
    partNumber: '31100-5AY-A01',
    description: 'Alternator assembly',
    category: 'Electrical',
    models: ['CR-V (2017-2022)'],
  },
  {
    partNumber: '31200-RNA-A01',
    description: 'Starter motor',
    category: 'Electrical',
    models: ['CR-V (2007-2011)'],
  },
  {
    partNumber: '39600-TBA-A11',
    description: 'Front oxygen / air-fuel ratio sensor',
    category: 'Electrical',
    models: ['Civic (2012-2015)'],
  },
  {
    partNumber: '36531-5BA-A01',
    description: 'Rear oxygen sensor',
    category: 'Electrical',
    models: ['Odyssey (2011-2017)'],
  },
  {
    partNumber: '39350-TF0-305',
    description: 'ABS wheel speed sensor, front',
    category: 'Electrical',
    models: ['Fit (2009-2013)'],
  },
  {
    partNumber: '31500-TBA-A01',
    description: '12V battery, group size 51R',
    category: 'Electrical',
    models: ['Civic (2012-2015)'],
  },
  {
    partNumber: '33150-T2A-H01',
    description: 'Headlight assembly, driver side',
    category: 'Electrical',
    models: ['Accord (2013-2015)'],
  },
  {
    partNumber: '33100-T2A-H01',
    description: 'Headlight assembly, passenger side',
    category: 'Electrical',
    models: ['Accord (2013-2015)'],
  },
  {
    partNumber: '34150-SDA-A01',
    description: 'Tail light assembly, driver side',
    category: 'Electrical',
    models: ['Civic Sedan (2006-2011)'],
  },

  // Suspension / steering
  {
    partNumber: '51606-S5A-A02',
    description: 'Front strut / shock absorber',
    category: 'Suspension',
    models: ['Civic (2001-2005)'],
  },
  {
    partNumber: '52611-TVA-A03',
    description: 'Rear shock absorber',
    category: 'Suspension',
    models: ['Accord (2013-2017)'],
  },
  {
    partNumber: '51350-TBA-A02',
    description: 'Front lower control arm',
    category: 'Suspension',
    models: ['Civic (2012-2015)'],
  },
  {
    partNumber: '51321-SDA-A01',
    description: 'Front sway bar end link',
    category: 'Suspension',
    models: ['Civic (2006-2011)', 'CR-V (2007-2011)'],
  },
  {
    partNumber: '53010-SWA-A01',
    description: 'Power steering rack and pinion',
    category: 'Steering',
    models: ['Pilot (2009-2015)'],
  },
  {
    partNumber: '53601-SNA-A02',
    description: 'Steering tie rod end, outer',
    category: 'Steering',
    models: ['Civic (2006-2011)'],
  },
  {
    partNumber: '44014-S9A-N51',
    description: 'CV axle shaft, front driver side',
    category: 'Drivetrain',
    models: ['CR-V (2002-2006)'],
  },
  {
    partNumber: '42200-S9A-000',
    description: 'Wheel bearing hub assembly, front',
    category: 'Drivetrain',
    models: ['CR-V (2002-2006)'],
  },

  // Transmission
  {
    partNumber: '25213-RPC-004',
    description: 'Automatic transmission filter kit',
    category: 'Transmission',
    models: ['Accord (2008-2012)'],
  },
  {
    partNumber: '08200-9008',
    description: 'CVT transmission fluid, 1 quart',
    category: 'Transmission',
    models: ['Civic (2016-2021)', 'CR-V (2017-2022)', 'Fit (2015-2020)'],
  },
  {
    partNumber: '22000-5X4-315',
    description: 'Clutch kit, includes disc and pressure plate',
    category: 'Transmission',
    models: ['Civic Si (2017-2021)'],
  },

  // Exhaust
  {
    partNumber: '18190-5AA-A01',
    description: 'Muffler, rear',
    category: 'Exhaust',
    models: ['CR-V (2017-2022)'],
  },
  {
    partNumber: '18160-5BA-A01',
    description: 'Catalytic converter',
    category: 'Exhaust',
    models: ['Odyssey (2011-2017)'],
  },

  // Body / exterior
  {
    partNumber: '04711-T2A-A90ZZ',
    description: 'Front bumper cover, primed',
    category: 'Body',
    models: ['Accord (2013-2015)'],
  },
  {
    partNumber: '60100-T2A-A00ZZ',
    description: 'Hood panel',
    category: 'Body',
    models: ['Accord (2013-2017)'],
  },
  {
    partNumber: '67010-SNA-A90ZZ',
    description: 'Front door shell, driver side',
    category: 'Body',
    models: ['Civic (2006-2011)'],
  },
  {
    partNumber: '72410-TBA-A01',
    description: 'Door handle, outer, driver side',
    category: 'Body',
    models: ['Civic (2012-2015)'],
  },
  {
    partNumber: '76200-T2A-A01',
    description: 'Side mirror assembly, power, driver side',
    category: 'Body',
    models: ['Accord (2013-2017)'],
  },
  {
    partNumber: '74145-SWA-A01',
    description: 'Windshield wiper motor',
    category: 'Body',
    models: ['Pilot (2009-2015)'],
  },
  {
    partNumber: '76620-TF0-013',
    description: 'Windshield wiper blade, driver side',
    category: 'Body',
    models: ['Fit', 'Civic', 'Accord'],
  },

  // Interior
  {
    partNumber: '81131-TBA-A01',
    description: 'Front seat cushion cover, cloth',
    category: 'Interior',
    models: ['Civic (2012-2015)'],
  },
  {
    partNumber: '77800-TBA-A02',
    description: 'Airbag clock spring / spiral cable',
    category: 'Interior',
    models: ['Civic (2012-2015)'],
  },
  {
    partNumber: '79310-SWA-A11',
    description: 'HVAC blower motor',
    category: 'Interior',
    models: ['Pilot (2009-2015)'],
  },
  {
    partNumber: '80103-SDA-A01',
    description: 'A/C compressor',
    category: 'Interior',
    models: ['CR-V (2007-2011)'],
  },
  {
    partNumber: '80031-SDA-A01',
    description: 'A/C condenser',
    category: 'Interior',
    models: ['CR-V (2007-2011)'],
  },

  // Fuel system
  {
    partNumber: '17045-S9A-L32',
    description: 'Fuel pump module assembly',
    category: 'Fuel System',
    models: ['CR-V (2002-2006)'],
  },
  {
    partNumber: '16010-5AA-A01',
    description: 'Fuel injector',
    category: 'Fuel System',
    models: ['CR-V (2017-2022)'],
  },
]
