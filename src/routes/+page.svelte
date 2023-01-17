<script>
  import Tab from '$components/Tab.svelte'
  import TabPanel from '$components/TabPanel.svelte'
  import TabBar from '$components/TabBar.svelte'
  import Tabs from '$components/Tabs.svelte'
</script>

<h1 class="flex p-3 text-base font-bold underline">Cookbook</h1>
<Tabs>
  <TabBar>
    <Tab>Document</Tab>
    <Tab>Editor</Tab>
  </TabBar>
  <TabPanel><p>Document panel</p></TabPanel>
  <TabPanel><h2>Editor</h2></TabPanel>
</Tabs>

<Tabs>
  <TabBar>
    <Tab>Auto</Tab>
    <Tab>Mobil</Tab>
    <Tab>Truck</Tab>
  </TabBar>
  <TabPanel><p>Document panel</p></TabPanel>
  <TabPanel><h2>Editor</h2></TabPanel>
  <TabPanel><h2>Poof</h2></TabPanel>
</Tabs>
