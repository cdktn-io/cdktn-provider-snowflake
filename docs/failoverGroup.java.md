# `failoverGroup` Submodule <a name="`failoverGroup` Submodule" id="@cdktn/provider-snowflake.failoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FailoverGroup <a name="FailoverGroup" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group snowflake_failover_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer"></a>

```java
import io.cdktn.providers.snowflake.failover_group.FailoverGroup;

FailoverGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .allowedAccounts(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .objectTypes(java.util.List<java.lang.String>)
//  .allowedDatabases(java.util.List<java.lang.String>)
//  .allowedExternalVolumes(java.util.List<java.lang.String>)
//  .allowedIntegrationTypes(java.util.List<java.lang.String>)
//  .allowedShares(java.util.List<java.lang.String>)
//  .comment(java.lang.String)
//  .errorIntegration(java.lang.String)
//  .id(java.lang.String)
//  .ignoreEditionCheck(java.lang.Boolean|IResolvable)
//  .optimizedRefresh(java.lang.Boolean|IResolvable)
//  .readOnly(java.lang.Boolean|IResolvable)
//  .replicationSchedule(java.lang.String)
//  .rpoAssurance(java.lang.Boolean|IResolvable)
//  .timeouts(FailoverGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedAccounts">allowedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | Target accounts, in the form `<organization_name>.<account_name>`, to which replication and failover is enabled. Snowflake adds the source account to every failover group, so do not list it. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the failover group; |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.objectTypes">objectTypes</a></code> | <code>java.util.List<java.lang.String></code> | Types of objects for which replication and failover from the source account to the target accounts is enabled. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedDatabases">allowedDatabases</a></code> | <code>java.util.List<java.lang.String></code> | Databases enabled for replication and failover. OBJECT_TYPES must include DATABASES. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedExternalVolumes">allowedExternalVolumes</a></code> | <code>java.util.List<java.lang.String></code> | External volumes enabled for replication and failover. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedIntegrationTypes">allowedIntegrationTypes</a></code> | <code>java.util.List<java.lang.String></code> | Integration types enabled for replication and failover. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedShares">allowedShares</a></code> | <code>java.util.List<java.lang.String></code> | Shares enabled for replication and failover. OBJECT_TYPES must include SHARES. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Comment for the failover group. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.errorIntegration">errorIntegration</a></code> | <code>java.lang.String</code> | Notification integration that receives refresh error notifications. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#id FailoverGroup#id}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.ignoreEditionCheck">ignoreEditionCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Allows replicating objects to accounts on lower editions. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.optimizedRefresh">optimizedRefresh</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the failover group uses Optimized Refresh. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.readOnly">readOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables the read-only mode of a primary failover group. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.replicationSchedule">replicationSchedule</a></code> | <code>java.lang.String</code> | Schedule for refreshing secondary failover groups. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.rpoAssurance">rpoAssurance</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the failover group uses RPO Assurance. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allowedAccounts`<sup>Required</sup> <a name="allowedAccounts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedAccounts"></a>

- *Type:* java.util.List<java.lang.String>

Target accounts, in the form `<organization_name>.<account_name>`, to which replication and failover is enabled. Snowflake adds the source account to every failover group, so do not list it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_accounts FailoverGroup#allowed_accounts}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier for the failover group;

must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#name FailoverGroup#name}

---

##### `objectTypes`<sup>Required</sup> <a name="objectTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.objectTypes"></a>

- *Type:* java.util.List<java.lang.String>

Types of objects for which replication and failover from the source account to the target accounts is enabled.

Valid values are (case-insensitive): `ACCOUNT PARAMETERS` | `DATABASES` | `EXTERNAL VOLUMES` | `INTEGRATIONS` | `LISTINGS` | `NETWORK POLICIES` | `PROFILES` | `RESOURCE MONITORS` | `ROLES` | `SHARES` | `USERS` | `WAREHOUSES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#object_types FailoverGroup#object_types}

---

##### `allowedDatabases`<sup>Optional</sup> <a name="allowedDatabases" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedDatabases"></a>

- *Type:* java.util.List<java.lang.String>

Databases enabled for replication and failover. OBJECT_TYPES must include DATABASES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_databases FailoverGroup#allowed_databases}

---

##### `allowedExternalVolumes`<sup>Optional</sup> <a name="allowedExternalVolumes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedExternalVolumes"></a>

- *Type:* java.util.List<java.lang.String>

External volumes enabled for replication and failover.

OBJECT_TYPES must include EXTERNAL VOLUMES. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_external_volumes FailoverGroup#allowed_external_volumes}

---

##### `allowedIntegrationTypes`<sup>Optional</sup> <a name="allowedIntegrationTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedIntegrationTypes"></a>

- *Type:* java.util.List<java.lang.String>

Integration types enabled for replication and failover.

OBJECT_TYPES must include INTEGRATIONS. SECURITY INTEGRATIONS also requires ROLES. Valid values are (case-insensitive): `SECURITY INTEGRATIONS` | `API INTEGRATIONS` | `STORAGE INTEGRATIONS` | `EXTERNAL ACCESS INTEGRATIONS` | `NOTIFICATION INTEGRATIONS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_integration_types FailoverGroup#allowed_integration_types}

---

##### `allowedShares`<sup>Optional</sup> <a name="allowedShares" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedShares"></a>

- *Type:* java.util.List<java.lang.String>

Shares enabled for replication and failover. OBJECT_TYPES must include SHARES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_shares FailoverGroup#allowed_shares}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Comment for the failover group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#comment FailoverGroup#comment}

---

##### `errorIntegration`<sup>Optional</sup> <a name="errorIntegration" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.errorIntegration"></a>

- *Type:* java.lang.String

Notification integration that receives refresh error notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#error_integration FailoverGroup#error_integration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#id FailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreEditionCheck`<sup>Optional</sup> <a name="ignoreEditionCheck" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.ignoreEditionCheck"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Allows replicating objects to accounts on lower editions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#ignore_edition_check FailoverGroup#ignore_edition_check}

---

##### `optimizedRefresh`<sup>Optional</sup> <a name="optimizedRefresh" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.optimizedRefresh"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the failover group uses Optimized Refresh.

Set on the primary failover group only. When true, a `replication_schedule` with an interval of 6 hours or less is required (Snowflake recommends `10 MINUTE` or less). Cannot be set together with `rpo_assurance`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#optimized_refresh FailoverGroup#optimized_refresh}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.readOnly"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables the read-only mode of a primary failover group.

Snowflake rejects changes to `object_types`, `allowed_databases`, `allowed_external_volumes`, `allowed_shares` and `allowed_integration_types` in this mode, so set it to false (or remove it) before changing them. With the `FAILOVER_GROUP_READ_ONLY_AUTO_SWITCH` experiment listed in [`experimental_features_enabled`](../#experimental_features_enabled-1) in the provider block, the provider leaves the read-only mode and enters it again around these changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#read_only FailoverGroup#read_only}

---

##### `replicationSchedule`<sup>Optional</sup> <a name="replicationSchedule" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.replicationSchedule"></a>

- *Type:* java.lang.String

Schedule for refreshing secondary failover groups.

An interval (`<num> MINUTE`) or `USING CRON <expr> <time_zone>`. Remove the attribute to unset the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#replication_schedule FailoverGroup#replication_schedule}

---

##### `rpoAssurance`<sup>Optional</sup> <a name="rpoAssurance" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.rpoAssurance"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

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
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedDatabases">resetAllowedDatabases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedExternalVolumes">resetAllowedExternalVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedIntegrationTypes">resetAllowedIntegrationTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedShares">resetAllowedShares</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetErrorIntegration">resetErrorIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetIgnoreEditionCheck">resetIgnoreEditionCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetOptimizedRefresh">resetOptimizedRefresh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetReplicationSchedule">resetReplicationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetRpoAssurance">resetRpoAssurance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.putTimeouts"></a>

```java
public void putTimeouts(FailoverGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a>

---

##### `resetAllowedDatabases` <a name="resetAllowedDatabases" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedDatabases"></a>

```java
public void resetAllowedDatabases()
```

##### `resetAllowedExternalVolumes` <a name="resetAllowedExternalVolumes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedExternalVolumes"></a>

```java
public void resetAllowedExternalVolumes()
```

##### `resetAllowedIntegrationTypes` <a name="resetAllowedIntegrationTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedIntegrationTypes"></a>

```java
public void resetAllowedIntegrationTypes()
```

##### `resetAllowedShares` <a name="resetAllowedShares" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedShares"></a>

```java
public void resetAllowedShares()
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetComment"></a>

```java
public void resetComment()
```

##### `resetErrorIntegration` <a name="resetErrorIntegration" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetErrorIntegration"></a>

```java
public void resetErrorIntegration()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetId"></a>

```java
public void resetId()
```

##### `resetIgnoreEditionCheck` <a name="resetIgnoreEditionCheck" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetIgnoreEditionCheck"></a>

```java
public void resetIgnoreEditionCheck()
```

##### `resetOptimizedRefresh` <a name="resetOptimizedRefresh" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetOptimizedRefresh"></a>

```java
public void resetOptimizedRefresh()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetReplicationSchedule` <a name="resetReplicationSchedule" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetReplicationSchedule"></a>

```java
public void resetReplicationSchedule()
```

##### `resetRpoAssurance` <a name="resetRpoAssurance" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetRpoAssurance"></a>

```java
public void resetRpoAssurance()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FailoverGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.failover_group.FailoverGroup;

FailoverGroup.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.failover_group.FailoverGroup;

FailoverGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.failover_group.FailoverGroup;

FailoverGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.failover_group.FailoverGroup;

FailoverGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FailoverGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a FailoverGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FailoverGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FailoverGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the FailoverGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.isPrimary">isPrimary</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList">FailoverGroupShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference">FailoverGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccountsInput">allowedAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabasesInput">allowedDatabasesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedExternalVolumesInput">allowedExternalVolumesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypesInput">allowedIntegrationTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedSharesInput">allowedSharesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.errorIntegrationInput">errorIntegrationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheckInput">ignoreEditionCheckInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypesInput">objectTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.optimizedRefreshInput">optimizedRefreshInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.replicationScheduleInput">replicationScheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.rpoAssuranceInput">rpoAssuranceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccounts">allowedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabases">allowedDatabases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedExternalVolumes">allowedExternalVolumes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypes">allowedIntegrationTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedShares">allowedShares</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.errorIntegration">errorIntegration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheck">ignoreEditionCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypes">objectTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.optimizedRefresh">optimizedRefresh</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.replicationSchedule">replicationSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.rpoAssurance">rpoAssurance</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.isPrimary"></a>

```java
public IResolvable getIsPrimary();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.showOutput"></a>

```java
public FailoverGroupShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList">FailoverGroupShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.timeouts"></a>

```java
public FailoverGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference">FailoverGroupTimeoutsOutputReference</a>

---

##### `allowedAccountsInput`<sup>Optional</sup> <a name="allowedAccountsInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccountsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedDatabasesInput`<sup>Optional</sup> <a name="allowedDatabasesInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabasesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedDatabasesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedExternalVolumesInput`<sup>Optional</sup> <a name="allowedExternalVolumesInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedExternalVolumesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedExternalVolumesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedIntegrationTypesInput`<sup>Optional</sup> <a name="allowedIntegrationTypesInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedIntegrationTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedSharesInput`<sup>Optional</sup> <a name="allowedSharesInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedSharesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedSharesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `errorIntegrationInput`<sup>Optional</sup> <a name="errorIntegrationInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.errorIntegrationInput"></a>

```java
public java.lang.String getErrorIntegrationInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreEditionCheckInput`<sup>Optional</sup> <a name="ignoreEditionCheckInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheckInput"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreEditionCheckInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `objectTypesInput`<sup>Optional</sup> <a name="objectTypesInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypesInput"></a>

```java
public java.util.List<java.lang.String> getObjectTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `optimizedRefreshInput`<sup>Optional</sup> <a name="optimizedRefreshInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.optimizedRefreshInput"></a>

```java
public java.lang.Boolean|IResolvable getOptimizedRefreshInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.readOnlyInput"></a>

```java
public java.lang.Boolean|IResolvable getReadOnlyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `replicationScheduleInput`<sup>Optional</sup> <a name="replicationScheduleInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.replicationScheduleInput"></a>

```java
public java.lang.String getReplicationScheduleInput();
```

- *Type:* java.lang.String

---

##### `rpoAssuranceInput`<sup>Optional</sup> <a name="rpoAssuranceInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.rpoAssuranceInput"></a>

```java
public java.lang.Boolean|IResolvable getRpoAssuranceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.timeoutsInput"></a>

```java
public IResolvable|FailoverGroupTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a>

---

##### `allowedAccounts`<sup>Required</sup> <a name="allowedAccounts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccounts"></a>

```java
public java.util.List<java.lang.String> getAllowedAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedDatabases`<sup>Required</sup> <a name="allowedDatabases" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabases"></a>

```java
public java.util.List<java.lang.String> getAllowedDatabases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedExternalVolumes`<sup>Required</sup> <a name="allowedExternalVolumes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedExternalVolumes"></a>

```java
public java.util.List<java.lang.String> getAllowedExternalVolumes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedIntegrationTypes`<sup>Required</sup> <a name="allowedIntegrationTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypes"></a>

```java
public java.util.List<java.lang.String> getAllowedIntegrationTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedShares`<sup>Required</sup> <a name="allowedShares" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedShares"></a>

```java
public java.util.List<java.lang.String> getAllowedShares();
```

- *Type:* java.util.List<java.lang.String>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `errorIntegration`<sup>Required</sup> <a name="errorIntegration" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.errorIntegration"></a>

```java
public java.lang.String getErrorIntegration();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ignoreEditionCheck`<sup>Required</sup> <a name="ignoreEditionCheck" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheck"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreEditionCheck();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `objectTypes`<sup>Required</sup> <a name="objectTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypes"></a>

```java
public java.util.List<java.lang.String> getObjectTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `optimizedRefresh`<sup>Required</sup> <a name="optimizedRefresh" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.optimizedRefresh"></a>

```java
public java.lang.Boolean|IResolvable getOptimizedRefresh();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.readOnly"></a>

```java
public java.lang.Boolean|IResolvable getReadOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `replicationSchedule`<sup>Required</sup> <a name="replicationSchedule" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.replicationSchedule"></a>

```java
public java.lang.String getReplicationSchedule();
```

- *Type:* java.lang.String

---

##### `rpoAssurance`<sup>Required</sup> <a name="rpoAssurance" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.rpoAssurance"></a>

```java
public java.lang.Boolean|IResolvable getRpoAssurance();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FailoverGroupConfig <a name="FailoverGroupConfig" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.failover_group.FailoverGroupConfig;

FailoverGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .allowedAccounts(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .objectTypes(java.util.List<java.lang.String>)
//  .allowedDatabases(java.util.List<java.lang.String>)
//  .allowedExternalVolumes(java.util.List<java.lang.String>)
//  .allowedIntegrationTypes(java.util.List<java.lang.String>)
//  .allowedShares(java.util.List<java.lang.String>)
//  .comment(java.lang.String)
//  .errorIntegration(java.lang.String)
//  .id(java.lang.String)
//  .ignoreEditionCheck(java.lang.Boolean|IResolvable)
//  .optimizedRefresh(java.lang.Boolean|IResolvable)
//  .readOnly(java.lang.Boolean|IResolvable)
//  .replicationSchedule(java.lang.String)
//  .rpoAssurance(java.lang.Boolean|IResolvable)
//  .timeouts(FailoverGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedAccounts">allowedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | Target accounts, in the form `<organization_name>.<account_name>`, to which replication and failover is enabled. Snowflake adds the source account to every failover group, so do not list it. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the failover group; |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.objectTypes">objectTypes</a></code> | <code>java.util.List<java.lang.String></code> | Types of objects for which replication and failover from the source account to the target accounts is enabled. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedDatabases">allowedDatabases</a></code> | <code>java.util.List<java.lang.String></code> | Databases enabled for replication and failover. OBJECT_TYPES must include DATABASES. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedExternalVolumes">allowedExternalVolumes</a></code> | <code>java.util.List<java.lang.String></code> | External volumes enabled for replication and failover. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedIntegrationTypes">allowedIntegrationTypes</a></code> | <code>java.util.List<java.lang.String></code> | Integration types enabled for replication and failover. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedShares">allowedShares</a></code> | <code>java.util.List<java.lang.String></code> | Shares enabled for replication and failover. OBJECT_TYPES must include SHARES. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Comment for the failover group. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.errorIntegration">errorIntegration</a></code> | <code>java.lang.String</code> | Notification integration that receives refresh error notifications. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#id FailoverGroup#id}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.ignoreEditionCheck">ignoreEditionCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Allows replicating objects to accounts on lower editions. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.optimizedRefresh">optimizedRefresh</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the failover group uses Optimized Refresh. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables the read-only mode of a primary failover group. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.replicationSchedule">replicationSchedule</a></code> | <code>java.lang.String</code> | Schedule for refreshing secondary failover groups. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.rpoAssurance">rpoAssurance</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the failover group uses RPO Assurance. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allowedAccounts`<sup>Required</sup> <a name="allowedAccounts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedAccounts"></a>

```java
public java.util.List<java.lang.String> getAllowedAccounts();
```

- *Type:* java.util.List<java.lang.String>

Target accounts, in the form `<organization_name>.<account_name>`, to which replication and failover is enabled. Snowflake adds the source account to every failover group, so do not list it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_accounts FailoverGroup#allowed_accounts}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier for the failover group;

must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#name FailoverGroup#name}

---

##### `objectTypes`<sup>Required</sup> <a name="objectTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.objectTypes"></a>

```java
public java.util.List<java.lang.String> getObjectTypes();
```

- *Type:* java.util.List<java.lang.String>

Types of objects for which replication and failover from the source account to the target accounts is enabled.

Valid values are (case-insensitive): `ACCOUNT PARAMETERS` | `DATABASES` | `EXTERNAL VOLUMES` | `INTEGRATIONS` | `LISTINGS` | `NETWORK POLICIES` | `PROFILES` | `RESOURCE MONITORS` | `ROLES` | `SHARES` | `USERS` | `WAREHOUSES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#object_types FailoverGroup#object_types}

---

##### `allowedDatabases`<sup>Optional</sup> <a name="allowedDatabases" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedDatabases"></a>

```java
public java.util.List<java.lang.String> getAllowedDatabases();
```

- *Type:* java.util.List<java.lang.String>

Databases enabled for replication and failover. OBJECT_TYPES must include DATABASES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_databases FailoverGroup#allowed_databases}

---

##### `allowedExternalVolumes`<sup>Optional</sup> <a name="allowedExternalVolumes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedExternalVolumes"></a>

```java
public java.util.List<java.lang.String> getAllowedExternalVolumes();
```

- *Type:* java.util.List<java.lang.String>

External volumes enabled for replication and failover.

OBJECT_TYPES must include EXTERNAL VOLUMES. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_external_volumes FailoverGroup#allowed_external_volumes}

---

##### `allowedIntegrationTypes`<sup>Optional</sup> <a name="allowedIntegrationTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedIntegrationTypes"></a>

```java
public java.util.List<java.lang.String> getAllowedIntegrationTypes();
```

- *Type:* java.util.List<java.lang.String>

Integration types enabled for replication and failover.

OBJECT_TYPES must include INTEGRATIONS. SECURITY INTEGRATIONS also requires ROLES. Valid values are (case-insensitive): `SECURITY INTEGRATIONS` | `API INTEGRATIONS` | `STORAGE INTEGRATIONS` | `EXTERNAL ACCESS INTEGRATIONS` | `NOTIFICATION INTEGRATIONS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_integration_types FailoverGroup#allowed_integration_types}

---

##### `allowedShares`<sup>Optional</sup> <a name="allowedShares" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedShares"></a>

```java
public java.util.List<java.lang.String> getAllowedShares();
```

- *Type:* java.util.List<java.lang.String>

Shares enabled for replication and failover. OBJECT_TYPES must include SHARES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_shares FailoverGroup#allowed_shares}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Comment for the failover group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#comment FailoverGroup#comment}

---

##### `errorIntegration`<sup>Optional</sup> <a name="errorIntegration" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.errorIntegration"></a>

```java
public java.lang.String getErrorIntegration();
```

- *Type:* java.lang.String

Notification integration that receives refresh error notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#error_integration FailoverGroup#error_integration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#id FailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreEditionCheck`<sup>Optional</sup> <a name="ignoreEditionCheck" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.ignoreEditionCheck"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreEditionCheck();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Allows replicating objects to accounts on lower editions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#ignore_edition_check FailoverGroup#ignore_edition_check}

---

##### `optimizedRefresh`<sup>Optional</sup> <a name="optimizedRefresh" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.optimizedRefresh"></a>

```java
public java.lang.Boolean|IResolvable getOptimizedRefresh();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the failover group uses Optimized Refresh.

Set on the primary failover group only. When true, a `replication_schedule` with an interval of 6 hours or less is required (Snowflake recommends `10 MINUTE` or less). Cannot be set together with `rpo_assurance`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#optimized_refresh FailoverGroup#optimized_refresh}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.readOnly"></a>

```java
public java.lang.Boolean|IResolvable getReadOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables the read-only mode of a primary failover group.

Snowflake rejects changes to `object_types`, `allowed_databases`, `allowed_external_volumes`, `allowed_shares` and `allowed_integration_types` in this mode, so set it to false (or remove it) before changing them. With the `FAILOVER_GROUP_READ_ONLY_AUTO_SWITCH` experiment listed in [`experimental_features_enabled`](../#experimental_features_enabled-1) in the provider block, the provider leaves the read-only mode and enters it again around these changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#read_only FailoverGroup#read_only}

---

##### `replicationSchedule`<sup>Optional</sup> <a name="replicationSchedule" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.replicationSchedule"></a>

```java
public java.lang.String getReplicationSchedule();
```

- *Type:* java.lang.String

Schedule for refreshing secondary failover groups.

An interval (`<num> MINUTE`) or `USING CRON <expr> <time_zone>`. Remove the attribute to unset the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#replication_schedule FailoverGroup#replication_schedule}

---

##### `rpoAssurance`<sup>Optional</sup> <a name="rpoAssurance" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.rpoAssurance"></a>

```java
public java.lang.Boolean|IResolvable getRpoAssurance();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the failover group uses RPO Assurance.

Set on the primary failover group only. Needs no replication schedule, enables Optimized Refresh automatically, and cannot be set together with `optimized_refresh`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#rpo_assurance FailoverGroup#rpo_assurance}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.timeouts"></a>

```java
public FailoverGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#timeouts FailoverGroup#timeouts}

---

### FailoverGroupShowOutput <a name="FailoverGroupShowOutput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.failover_group.FailoverGroupShowOutput;

FailoverGroupShowOutput.builder()
    .build();
```


### FailoverGroupTimeouts <a name="FailoverGroupTimeouts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.failover_group.FailoverGroupTimeouts;

FailoverGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#create FailoverGroup#create}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#delete FailoverGroup#delete}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#read FailoverGroup#read}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#update FailoverGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#create FailoverGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#delete FailoverGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#read FailoverGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#update FailoverGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FailoverGroupShowOutputList <a name="FailoverGroupShowOutputList" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.failover_group.FailoverGroupShowOutputList;

new FailoverGroupShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.get"></a>

```java
public FailoverGroupShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FailoverGroupShowOutputOutputReference <a name="FailoverGroupShowOutputOutputReference" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.failover_group.FailoverGroupShowOutputOutputReference;

new FailoverGroupShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.accountLocator">accountLocator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.accountName">accountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.allowedAccounts">allowedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.allowedIntegrationTypes">allowedIntegrationTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.errorIntegration">errorIntegration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isListingAutoFulfillmentGroup">isListingAutoFulfillmentGroup</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isOptimizedRefreshEnabled">isOptimizedRefreshEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isPrimary">isPrimary</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isPrimaryReadOnly">isPrimaryReadOnly</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.nextScheduledRefresh">nextScheduledRefresh</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.objectTypes">objectTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.primary">primary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.regionGroup">regionGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.replicationSchedule">replicationSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.rpoAssurance">rpoAssurance</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.secondaryState">secondaryState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.snowflakeRegion">snowflakeRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutput">FailoverGroupShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountLocator`<sup>Required</sup> <a name="accountLocator" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.accountLocator"></a>

```java
public java.lang.String getAccountLocator();
```

- *Type:* java.lang.String

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

---

##### `allowedAccounts`<sup>Required</sup> <a name="allowedAccounts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.allowedAccounts"></a>

```java
public java.util.List<java.lang.String> getAllowedAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedIntegrationTypes`<sup>Required</sup> <a name="allowedIntegrationTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.allowedIntegrationTypes"></a>

```java
public java.util.List<java.lang.String> getAllowedIntegrationTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `errorIntegration`<sup>Required</sup> <a name="errorIntegration" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.errorIntegration"></a>

```java
public java.lang.String getErrorIntegration();
```

- *Type:* java.lang.String

---

##### `isListingAutoFulfillmentGroup`<sup>Required</sup> <a name="isListingAutoFulfillmentGroup" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isListingAutoFulfillmentGroup"></a>

```java
public IResolvable getIsListingAutoFulfillmentGroup();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `isOptimizedRefreshEnabled`<sup>Required</sup> <a name="isOptimizedRefreshEnabled" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isOptimizedRefreshEnabled"></a>

```java
public IResolvable getIsOptimizedRefreshEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isPrimary"></a>

```java
public IResolvable getIsPrimary();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `isPrimaryReadOnly`<sup>Required</sup> <a name="isPrimaryReadOnly" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isPrimaryReadOnly"></a>

```java
public IResolvable getIsPrimaryReadOnly();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nextScheduledRefresh`<sup>Required</sup> <a name="nextScheduledRefresh" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.nextScheduledRefresh"></a>

```java
public java.lang.String getNextScheduledRefresh();
```

- *Type:* java.lang.String

---

##### `objectTypes`<sup>Required</sup> <a name="objectTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.objectTypes"></a>

```java
public java.util.List<java.lang.String> getObjectTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.primary"></a>

```java
public java.lang.String getPrimary();
```

- *Type:* java.lang.String

---

##### `regionGroup`<sup>Required</sup> <a name="regionGroup" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.regionGroup"></a>

```java
public java.lang.String getRegionGroup();
```

- *Type:* java.lang.String

---

##### `replicationSchedule`<sup>Required</sup> <a name="replicationSchedule" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.replicationSchedule"></a>

```java
public java.lang.String getReplicationSchedule();
```

- *Type:* java.lang.String

---

##### `rpoAssurance`<sup>Required</sup> <a name="rpoAssurance" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.rpoAssurance"></a>

```java
public IResolvable getRpoAssurance();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `secondaryState`<sup>Required</sup> <a name="secondaryState" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.secondaryState"></a>

```java
public java.lang.String getSecondaryState();
```

- *Type:* java.lang.String

---

##### `snowflakeRegion`<sup>Required</sup> <a name="snowflakeRegion" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.snowflakeRegion"></a>

```java
public java.lang.String getSnowflakeRegion();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.internalValue"></a>

```java
public FailoverGroupShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutput">FailoverGroupShowOutput</a>

---


### FailoverGroupTimeoutsOutputReference <a name="FailoverGroupTimeoutsOutputReference" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.failover_group.FailoverGroupTimeoutsOutputReference;

new FailoverGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|FailoverGroupTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a>

---



