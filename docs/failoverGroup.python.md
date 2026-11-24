# `failoverGroup` Submodule <a name="`failoverGroup` Submodule" id="@cdktn/provider-snowflake.failoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FailoverGroup <a name="FailoverGroup" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group snowflake_failover_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer"></a>

```python
from cdktn_provider_snowflake import failover_group

failoverGroup.FailoverGroup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  allowed_accounts: typing.List[str],
  name: str,
  object_types: typing.List[str],
  allowed_databases: typing.List[str] = None,
  allowed_external_volumes: typing.List[str] = None,
  allowed_integration_types: typing.List[str] = None,
  allowed_shares: typing.List[str] = None,
  comment: str = None,
  error_integration: str = None,
  id: str = None,
  ignore_edition_check: bool | IResolvable = None,
  optimized_refresh: bool | IResolvable = None,
  read_only: bool | IResolvable = None,
  replication_schedule: str = None,
  rpo_assurance: bool | IResolvable = None,
  timeouts: FailoverGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedAccounts">allowed_accounts</a></code> | <code>typing.List[str]</code> | Target accounts, in the form `<organization_name>.<account_name>`, to which replication and failover is enabled. Snowflake adds the source account to every failover group, so do not list it. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the failover group; |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.objectTypes">object_types</a></code> | <code>typing.List[str]</code> | Types of objects for which replication and failover from the source account to the target accounts is enabled. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedDatabases">allowed_databases</a></code> | <code>typing.List[str]</code> | Databases enabled for replication and failover. OBJECT_TYPES must include DATABASES. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedExternalVolumes">allowed_external_volumes</a></code> | <code>typing.List[str]</code> | External volumes enabled for replication and failover. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedIntegrationTypes">allowed_integration_types</a></code> | <code>typing.List[str]</code> | Integration types enabled for replication and failover. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedShares">allowed_shares</a></code> | <code>typing.List[str]</code> | Shares enabled for replication and failover. OBJECT_TYPES must include SHARES. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Comment for the failover group. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.errorIntegration">error_integration</a></code> | <code>str</code> | Notification integration that receives refresh error notifications. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#id FailoverGroup#id}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.ignoreEditionCheck">ignore_edition_check</a></code> | <code>bool \| cdktn.IResolvable</code> | Allows replicating objects to accounts on lower editions. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.optimizedRefresh">optimized_refresh</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the failover group uses Optimized Refresh. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.readOnly">read_only</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables the read-only mode of a primary failover group. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.replicationSchedule">replication_schedule</a></code> | <code>str</code> | Schedule for refreshing secondary failover groups. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.rpoAssurance">rpo_assurance</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the failover group uses RPO Assurance. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allowed_accounts`<sup>Required</sup> <a name="allowed_accounts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedAccounts"></a>

- *Type:* typing.List[str]

Target accounts, in the form `<organization_name>.<account_name>`, to which replication and failover is enabled. Snowflake adds the source account to every failover group, so do not list it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_accounts FailoverGroup#allowed_accounts}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the failover group;

must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#name FailoverGroup#name}

---

##### `object_types`<sup>Required</sup> <a name="object_types" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.objectTypes"></a>

- *Type:* typing.List[str]

Types of objects for which replication and failover from the source account to the target accounts is enabled.

Valid values are (case-insensitive): `ACCOUNT PARAMETERS` | `DATABASES` | `EXTERNAL VOLUMES` | `INTEGRATIONS` | `LISTINGS` | `NETWORK POLICIES` | `PROFILES` | `RESOURCE MONITORS` | `ROLES` | `SHARES` | `USERS` | `WAREHOUSES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#object_types FailoverGroup#object_types}

---

##### `allowed_databases`<sup>Optional</sup> <a name="allowed_databases" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedDatabases"></a>

- *Type:* typing.List[str]

Databases enabled for replication and failover. OBJECT_TYPES must include DATABASES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_databases FailoverGroup#allowed_databases}

---

##### `allowed_external_volumes`<sup>Optional</sup> <a name="allowed_external_volumes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedExternalVolumes"></a>

- *Type:* typing.List[str]

External volumes enabled for replication and failover.

OBJECT_TYPES must include EXTERNAL VOLUMES. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_external_volumes FailoverGroup#allowed_external_volumes}

---

##### `allowed_integration_types`<sup>Optional</sup> <a name="allowed_integration_types" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedIntegrationTypes"></a>

- *Type:* typing.List[str]

Integration types enabled for replication and failover.

OBJECT_TYPES must include INTEGRATIONS. SECURITY INTEGRATIONS also requires ROLES. Valid values are (case-insensitive): `SECURITY INTEGRATIONS` | `API INTEGRATIONS` | `STORAGE INTEGRATIONS` | `EXTERNAL ACCESS INTEGRATIONS` | `NOTIFICATION INTEGRATIONS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_integration_types FailoverGroup#allowed_integration_types}

---

##### `allowed_shares`<sup>Optional</sup> <a name="allowed_shares" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedShares"></a>

- *Type:* typing.List[str]

Shares enabled for replication and failover. OBJECT_TYPES must include SHARES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_shares FailoverGroup#allowed_shares}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.comment"></a>

- *Type:* str

Comment for the failover group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#comment FailoverGroup#comment}

---

##### `error_integration`<sup>Optional</sup> <a name="error_integration" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.errorIntegration"></a>

- *Type:* str

Notification integration that receives refresh error notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#error_integration FailoverGroup#error_integration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#id FailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_edition_check`<sup>Optional</sup> <a name="ignore_edition_check" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.ignoreEditionCheck"></a>

- *Type:* bool | cdktn.IResolvable

Allows replicating objects to accounts on lower editions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#ignore_edition_check FailoverGroup#ignore_edition_check}

---

##### `optimized_refresh`<sup>Optional</sup> <a name="optimized_refresh" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.optimizedRefresh"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the failover group uses Optimized Refresh.

Set on the primary failover group only. When true, a `replication_schedule` with an interval of 6 hours or less is required (Snowflake recommends `10 MINUTE` or less). Cannot be set together with `rpo_assurance`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#optimized_refresh FailoverGroup#optimized_refresh}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.readOnly"></a>

- *Type:* bool | cdktn.IResolvable

Enables the read-only mode of a primary failover group.

Snowflake rejects changes to `object_types`, `allowed_databases`, `allowed_external_volumes`, `allowed_shares` and `allowed_integration_types` in this mode, so set it to false (or remove it) before changing them. With the `FAILOVER_GROUP_READ_ONLY_AUTO_SWITCH` experiment listed in [`experimental_features_enabled`](../#experimental_features_enabled-1) in the provider block, the provider leaves the read-only mode and enters it again around these changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#read_only FailoverGroup#read_only}

---

##### `replication_schedule`<sup>Optional</sup> <a name="replication_schedule" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.replicationSchedule"></a>

- *Type:* str

Schedule for refreshing secondary failover groups.

An interval (`<num> MINUTE`) or `USING CRON <expr> <time_zone>`. Remove the attribute to unset the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#replication_schedule FailoverGroup#replication_schedule}

---

##### `rpo_assurance`<sup>Optional</sup> <a name="rpo_assurance" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.rpoAssurance"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the failover group uses RPO Assurance.

Set on the primary failover group only. Needs no replication schedule, enables Optimized Refresh automatically, and cannot be set together with `optimized_refresh`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#rpo_assurance FailoverGroup#rpo_assurance}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#timeouts FailoverGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedDatabases">reset_allowed_databases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedExternalVolumes">reset_allowed_external_volumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedIntegrationTypes">reset_allowed_integration_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedShares">reset_allowed_shares</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetErrorIntegration">reset_error_integration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetIgnoreEditionCheck">reset_ignore_edition_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetOptimizedRefresh">reset_optimized_refresh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetReadOnly">reset_read_only</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetReplicationSchedule">reset_replication_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetRpoAssurance">reset_rpo_assurance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#create FailoverGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#delete FailoverGroup#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#read FailoverGroup#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#update FailoverGroup#update}.

---

##### `reset_allowed_databases` <a name="reset_allowed_databases" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedDatabases"></a>

```python
def reset_allowed_databases() -> None
```

##### `reset_allowed_external_volumes` <a name="reset_allowed_external_volumes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedExternalVolumes"></a>

```python
def reset_allowed_external_volumes() -> None
```

##### `reset_allowed_integration_types` <a name="reset_allowed_integration_types" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedIntegrationTypes"></a>

```python
def reset_allowed_integration_types() -> None
```

##### `reset_allowed_shares` <a name="reset_allowed_shares" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedShares"></a>

```python
def reset_allowed_shares() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_error_integration` <a name="reset_error_integration" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetErrorIntegration"></a>

```python
def reset_error_integration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_edition_check` <a name="reset_ignore_edition_check" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetIgnoreEditionCheck"></a>

```python
def reset_ignore_edition_check() -> None
```

##### `reset_optimized_refresh` <a name="reset_optimized_refresh" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetOptimizedRefresh"></a>

```python
def reset_optimized_refresh() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

##### `reset_replication_schedule` <a name="reset_replication_schedule" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetReplicationSchedule"></a>

```python
def reset_replication_schedule() -> None
```

##### `reset_rpo_assurance` <a name="reset_rpo_assurance" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetRpoAssurance"></a>

```python
def reset_rpo_assurance() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a FailoverGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isConstruct"></a>

```python
from cdktn_provider_snowflake import failover_group

failoverGroup.FailoverGroup.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import failover_group

failoverGroup.FailoverGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import failover_group

failoverGroup.FailoverGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import failover_group

failoverGroup.FailoverGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a FailoverGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FailoverGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FailoverGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FailoverGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.isPrimary">is_primary</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList">FailoverGroupShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference">FailoverGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccountsInput">allowed_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabasesInput">allowed_databases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedExternalVolumesInput">allowed_external_volumes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypesInput">allowed_integration_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedSharesInput">allowed_shares_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.errorIntegrationInput">error_integration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheckInput">ignore_edition_check_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypesInput">object_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.optimizedRefreshInput">optimized_refresh_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.readOnlyInput">read_only_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.replicationScheduleInput">replication_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.rpoAssuranceInput">rpo_assurance_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccounts">allowed_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabases">allowed_databases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedExternalVolumes">allowed_external_volumes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypes">allowed_integration_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedShares">allowed_shares</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.errorIntegration">error_integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheck">ignore_edition_check</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypes">object_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.optimizedRefresh">optimized_refresh</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.readOnly">read_only</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.replicationSchedule">replication_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.rpoAssurance">rpo_assurance</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `is_primary`<sup>Required</sup> <a name="is_primary" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.isPrimary"></a>

```python
is_primary: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.showOutput"></a>

```python
show_output: FailoverGroupShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList">FailoverGroupShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.timeouts"></a>

```python
timeouts: FailoverGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference">FailoverGroupTimeoutsOutputReference</a>

---

##### `allowed_accounts_input`<sup>Optional</sup> <a name="allowed_accounts_input" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccountsInput"></a>

```python
allowed_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_databases_input`<sup>Optional</sup> <a name="allowed_databases_input" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabasesInput"></a>

```python
allowed_databases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_external_volumes_input`<sup>Optional</sup> <a name="allowed_external_volumes_input" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedExternalVolumesInput"></a>

```python
allowed_external_volumes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_integration_types_input`<sup>Optional</sup> <a name="allowed_integration_types_input" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypesInput"></a>

```python
allowed_integration_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_shares_input`<sup>Optional</sup> <a name="allowed_shares_input" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedSharesInput"></a>

```python
allowed_shares_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `error_integration_input`<sup>Optional</sup> <a name="error_integration_input" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.errorIntegrationInput"></a>

```python
error_integration_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_edition_check_input`<sup>Optional</sup> <a name="ignore_edition_check_input" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheckInput"></a>

```python
ignore_edition_check_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `object_types_input`<sup>Optional</sup> <a name="object_types_input" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypesInput"></a>

```python
object_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `optimized_refresh_input`<sup>Optional</sup> <a name="optimized_refresh_input" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.optimizedRefreshInput"></a>

```python
optimized_refresh_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.readOnlyInput"></a>

```python
read_only_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `replication_schedule_input`<sup>Optional</sup> <a name="replication_schedule_input" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.replicationScheduleInput"></a>

```python
replication_schedule_input: str
```

- *Type:* str

---

##### `rpo_assurance_input`<sup>Optional</sup> <a name="rpo_assurance_input" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.rpoAssuranceInput"></a>

```python
rpo_assurance_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | FailoverGroupTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a>

---

##### `allowed_accounts`<sup>Required</sup> <a name="allowed_accounts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccounts"></a>

```python
allowed_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_databases`<sup>Required</sup> <a name="allowed_databases" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabases"></a>

```python
allowed_databases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_external_volumes`<sup>Required</sup> <a name="allowed_external_volumes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedExternalVolumes"></a>

```python
allowed_external_volumes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_integration_types`<sup>Required</sup> <a name="allowed_integration_types" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypes"></a>

```python
allowed_integration_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_shares`<sup>Required</sup> <a name="allowed_shares" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedShares"></a>

```python
allowed_shares: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `error_integration`<sup>Required</sup> <a name="error_integration" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.errorIntegration"></a>

```python
error_integration: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_edition_check`<sup>Required</sup> <a name="ignore_edition_check" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheck"></a>

```python
ignore_edition_check: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `object_types`<sup>Required</sup> <a name="object_types" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypes"></a>

```python
object_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `optimized_refresh`<sup>Required</sup> <a name="optimized_refresh" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.optimizedRefresh"></a>

```python
optimized_refresh: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.readOnly"></a>

```python
read_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `replication_schedule`<sup>Required</sup> <a name="replication_schedule" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.replicationSchedule"></a>

```python
replication_schedule: str
```

- *Type:* str

---

##### `rpo_assurance`<sup>Required</sup> <a name="rpo_assurance" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.rpoAssurance"></a>

```python
rpo_assurance: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FailoverGroupConfig <a name="FailoverGroupConfig" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import failover_group

failoverGroup.FailoverGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  allowed_accounts: typing.List[str],
  name: str,
  object_types: typing.List[str],
  allowed_databases: typing.List[str] = None,
  allowed_external_volumes: typing.List[str] = None,
  allowed_integration_types: typing.List[str] = None,
  allowed_shares: typing.List[str] = None,
  comment: str = None,
  error_integration: str = None,
  id: str = None,
  ignore_edition_check: bool | IResolvable = None,
  optimized_refresh: bool | IResolvable = None,
  read_only: bool | IResolvable = None,
  replication_schedule: str = None,
  rpo_assurance: bool | IResolvable = None,
  timeouts: FailoverGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedAccounts">allowed_accounts</a></code> | <code>typing.List[str]</code> | Target accounts, in the form `<organization_name>.<account_name>`, to which replication and failover is enabled. Snowflake adds the source account to every failover group, so do not list it. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the failover group; |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.objectTypes">object_types</a></code> | <code>typing.List[str]</code> | Types of objects for which replication and failover from the source account to the target accounts is enabled. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedDatabases">allowed_databases</a></code> | <code>typing.List[str]</code> | Databases enabled for replication and failover. OBJECT_TYPES must include DATABASES. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedExternalVolumes">allowed_external_volumes</a></code> | <code>typing.List[str]</code> | External volumes enabled for replication and failover. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedIntegrationTypes">allowed_integration_types</a></code> | <code>typing.List[str]</code> | Integration types enabled for replication and failover. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedShares">allowed_shares</a></code> | <code>typing.List[str]</code> | Shares enabled for replication and failover. OBJECT_TYPES must include SHARES. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.comment">comment</a></code> | <code>str</code> | Comment for the failover group. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.errorIntegration">error_integration</a></code> | <code>str</code> | Notification integration that receives refresh error notifications. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#id FailoverGroup#id}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.ignoreEditionCheck">ignore_edition_check</a></code> | <code>bool \| cdktn.IResolvable</code> | Allows replicating objects to accounts on lower editions. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.optimizedRefresh">optimized_refresh</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the failover group uses Optimized Refresh. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.readOnly">read_only</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables the read-only mode of a primary failover group. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.replicationSchedule">replication_schedule</a></code> | <code>str</code> | Schedule for refreshing secondary failover groups. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.rpoAssurance">rpo_assurance</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the failover group uses RPO Assurance. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allowed_accounts`<sup>Required</sup> <a name="allowed_accounts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedAccounts"></a>

```python
allowed_accounts: typing.List[str]
```

- *Type:* typing.List[str]

Target accounts, in the form `<organization_name>.<account_name>`, to which replication and failover is enabled. Snowflake adds the source account to every failover group, so do not list it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_accounts FailoverGroup#allowed_accounts}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the failover group;

must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#name FailoverGroup#name}

---

##### `object_types`<sup>Required</sup> <a name="object_types" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.objectTypes"></a>

```python
object_types: typing.List[str]
```

- *Type:* typing.List[str]

Types of objects for which replication and failover from the source account to the target accounts is enabled.

Valid values are (case-insensitive): `ACCOUNT PARAMETERS` | `DATABASES` | `EXTERNAL VOLUMES` | `INTEGRATIONS` | `LISTINGS` | `NETWORK POLICIES` | `PROFILES` | `RESOURCE MONITORS` | `ROLES` | `SHARES` | `USERS` | `WAREHOUSES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#object_types FailoverGroup#object_types}

---

##### `allowed_databases`<sup>Optional</sup> <a name="allowed_databases" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedDatabases"></a>

```python
allowed_databases: typing.List[str]
```

- *Type:* typing.List[str]

Databases enabled for replication and failover. OBJECT_TYPES must include DATABASES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_databases FailoverGroup#allowed_databases}

---

##### `allowed_external_volumes`<sup>Optional</sup> <a name="allowed_external_volumes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedExternalVolumes"></a>

```python
allowed_external_volumes: typing.List[str]
```

- *Type:* typing.List[str]

External volumes enabled for replication and failover.

OBJECT_TYPES must include EXTERNAL VOLUMES. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_external_volumes FailoverGroup#allowed_external_volumes}

---

##### `allowed_integration_types`<sup>Optional</sup> <a name="allowed_integration_types" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedIntegrationTypes"></a>

```python
allowed_integration_types: typing.List[str]
```

- *Type:* typing.List[str]

Integration types enabled for replication and failover.

OBJECT_TYPES must include INTEGRATIONS. SECURITY INTEGRATIONS also requires ROLES. Valid values are (case-insensitive): `SECURITY INTEGRATIONS` | `API INTEGRATIONS` | `STORAGE INTEGRATIONS` | `EXTERNAL ACCESS INTEGRATIONS` | `NOTIFICATION INTEGRATIONS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_integration_types FailoverGroup#allowed_integration_types}

---

##### `allowed_shares`<sup>Optional</sup> <a name="allowed_shares" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedShares"></a>

```python
allowed_shares: typing.List[str]
```

- *Type:* typing.List[str]

Shares enabled for replication and failover. OBJECT_TYPES must include SHARES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_shares FailoverGroup#allowed_shares}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Comment for the failover group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#comment FailoverGroup#comment}

---

##### `error_integration`<sup>Optional</sup> <a name="error_integration" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.errorIntegration"></a>

```python
error_integration: str
```

- *Type:* str

Notification integration that receives refresh error notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#error_integration FailoverGroup#error_integration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#id FailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_edition_check`<sup>Optional</sup> <a name="ignore_edition_check" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.ignoreEditionCheck"></a>

```python
ignore_edition_check: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Allows replicating objects to accounts on lower editions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#ignore_edition_check FailoverGroup#ignore_edition_check}

---

##### `optimized_refresh`<sup>Optional</sup> <a name="optimized_refresh" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.optimizedRefresh"></a>

```python
optimized_refresh: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the failover group uses Optimized Refresh.

Set on the primary failover group only. When true, a `replication_schedule` with an interval of 6 hours or less is required (Snowflake recommends `10 MINUTE` or less). Cannot be set together with `rpo_assurance`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#optimized_refresh FailoverGroup#optimized_refresh}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.readOnly"></a>

```python
read_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables the read-only mode of a primary failover group.

Snowflake rejects changes to `object_types`, `allowed_databases`, `allowed_external_volumes`, `allowed_shares` and `allowed_integration_types` in this mode, so set it to false (or remove it) before changing them. With the `FAILOVER_GROUP_READ_ONLY_AUTO_SWITCH` experiment listed in [`experimental_features_enabled`](../#experimental_features_enabled-1) in the provider block, the provider leaves the read-only mode and enters it again around these changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#read_only FailoverGroup#read_only}

---

##### `replication_schedule`<sup>Optional</sup> <a name="replication_schedule" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.replicationSchedule"></a>

```python
replication_schedule: str
```

- *Type:* str

Schedule for refreshing secondary failover groups.

An interval (`<num> MINUTE`) or `USING CRON <expr> <time_zone>`. Remove the attribute to unset the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#replication_schedule FailoverGroup#replication_schedule}

---

##### `rpo_assurance`<sup>Optional</sup> <a name="rpo_assurance" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.rpoAssurance"></a>

```python
rpo_assurance: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the failover group uses RPO Assurance.

Set on the primary failover group only. Needs no replication schedule, enables Optimized Refresh automatically, and cannot be set together with `optimized_refresh`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#rpo_assurance FailoverGroup#rpo_assurance}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.timeouts"></a>

```python
timeouts: FailoverGroupTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#timeouts FailoverGroup#timeouts}

---

### FailoverGroupShowOutput <a name="FailoverGroupShowOutput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import failover_group

failoverGroup.FailoverGroupShowOutput()
```


### FailoverGroupTimeouts <a name="FailoverGroupTimeouts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import failover_group

failoverGroup.FailoverGroupTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#create FailoverGroup#create}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#delete FailoverGroup#delete}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#read FailoverGroup#read}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#update FailoverGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#create FailoverGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#delete FailoverGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#read FailoverGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#update FailoverGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FailoverGroupShowOutputList <a name="FailoverGroupShowOutputList" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import failover_group

failoverGroup.FailoverGroupShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FailoverGroupShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FailoverGroupShowOutputOutputReference <a name="FailoverGroupShowOutputOutputReference" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import failover_group

failoverGroup.FailoverGroupShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.accountLocator">account_locator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.allowedAccounts">allowed_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.allowedIntegrationTypes">allowed_integration_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.errorIntegration">error_integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isListingAutoFulfillmentGroup">is_listing_auto_fulfillment_group</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isOptimizedRefreshEnabled">is_optimized_refresh_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isPrimary">is_primary</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isPrimaryReadOnly">is_primary_read_only</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.nextScheduledRefresh">next_scheduled_refresh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.objectTypes">object_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.organizationName">organization_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.primary">primary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.regionGroup">region_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.replicationSchedule">replication_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.rpoAssurance">rpo_assurance</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.secondaryState">secondary_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.snowflakeRegion">snowflake_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutput">FailoverGroupShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_locator`<sup>Required</sup> <a name="account_locator" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.accountLocator"></a>

```python
account_locator: str
```

- *Type:* str

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `allowed_accounts`<sup>Required</sup> <a name="allowed_accounts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.allowedAccounts"></a>

```python
allowed_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_integration_types`<sup>Required</sup> <a name="allowed_integration_types" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.allowedIntegrationTypes"></a>

```python
allowed_integration_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `error_integration`<sup>Required</sup> <a name="error_integration" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.errorIntegration"></a>

```python
error_integration: str
```

- *Type:* str

---

##### `is_listing_auto_fulfillment_group`<sup>Required</sup> <a name="is_listing_auto_fulfillment_group" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isListingAutoFulfillmentGroup"></a>

```python
is_listing_auto_fulfillment_group: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_optimized_refresh_enabled`<sup>Required</sup> <a name="is_optimized_refresh_enabled" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isOptimizedRefreshEnabled"></a>

```python
is_optimized_refresh_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_primary`<sup>Required</sup> <a name="is_primary" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isPrimary"></a>

```python
is_primary: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_primary_read_only`<sup>Required</sup> <a name="is_primary_read_only" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isPrimaryReadOnly"></a>

```python
is_primary_read_only: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `next_scheduled_refresh`<sup>Required</sup> <a name="next_scheduled_refresh" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.nextScheduledRefresh"></a>

```python
next_scheduled_refresh: str
```

- *Type:* str

---

##### `object_types`<sup>Required</sup> <a name="object_types" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.objectTypes"></a>

```python
object_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_name`<sup>Required</sup> <a name="organization_name" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.primary"></a>

```python
primary: str
```

- *Type:* str

---

##### `region_group`<sup>Required</sup> <a name="region_group" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.regionGroup"></a>

```python
region_group: str
```

- *Type:* str

---

##### `replication_schedule`<sup>Required</sup> <a name="replication_schedule" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.replicationSchedule"></a>

```python
replication_schedule: str
```

- *Type:* str

---

##### `rpo_assurance`<sup>Required</sup> <a name="rpo_assurance" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.rpoAssurance"></a>

```python
rpo_assurance: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `secondary_state`<sup>Required</sup> <a name="secondary_state" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.secondaryState"></a>

```python
secondary_state: str
```

- *Type:* str

---

##### `snowflake_region`<sup>Required</sup> <a name="snowflake_region" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.snowflakeRegion"></a>

```python
snowflake_region: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: FailoverGroupShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutput">FailoverGroupShowOutput</a>

---


### FailoverGroupTimeoutsOutputReference <a name="FailoverGroupTimeoutsOutputReference" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import failover_group

failoverGroup.FailoverGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FailoverGroupTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a>

---



