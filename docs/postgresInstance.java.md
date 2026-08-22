# `postgresInstance` Submodule <a name="`postgresInstance` Submodule" id="@cdktn/provider-snowflake.postgresInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresInstance <a name="PostgresInstance" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance snowflake_postgres_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer"></a>

```java
import io.cdktn.providers.snowflake.postgres_instance.PostgresInstance;

PostgresInstance.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authenticationAuthority(java.lang.String)
    .computeFamily(java.lang.String)
    .name(java.lang.String)
    .postgresVersion(java.lang.Number)
    .storageSizeGb(java.lang.Number)
//  .comment(java.lang.String)
//  .highAvailability(java.lang.String)
//  .id(java.lang.String)
//  .maintenanceWindowStart(java.lang.Number)
//  .networkPolicy(java.lang.String)
//  .postgresSettings(java.lang.String)
//  .storageIntegration(java.lang.String)
//  .timeouts(PostgresInstanceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.authenticationAuthority">authenticationAuthority</a></code> | <code>java.lang.String</code> | Specifies the authentication authority for the Postgres instance. Valid values are (case-insensitive): `POSTGRES` \| `POSTGRES_OR_SNOWFLAKE`. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.computeFamily">computeFamily</a></code> | <code>java.lang.String</code> | Specifies the compute family for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the Postgres instance; |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.postgresVersion">postgresVersion</a></code> | <code>java.lang.Number</code> | Specifies the Postgres version for the instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.storageSizeGb">storageSizeGb</a></code> | <code>java.lang.Number</code> | Specifies the storage size in GB for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.highAvailability">highAvailability</a></code> | <code>java.lang.String</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the Postgres instance should be configured for high availability. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#id PostgresInstance#id}. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.maintenanceWindowStart">maintenanceWindowStart</a></code> | <code>java.lang.Number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the hour (0-23 UTC) at which the maintenance window starts. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.networkPolicy">networkPolicy</a></code> | <code>java.lang.String</code> | Specifies the network policy to associate with the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.postgresSettings">postgresSettings</a></code> | <code>java.lang.String</code> | Specifies custom Postgres settings as a JSON string. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.storageIntegration">storageIntegration</a></code> | <code>java.lang.String</code> | Specifies the storage integration for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authenticationAuthority`<sup>Required</sup> <a name="authenticationAuthority" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.authenticationAuthority"></a>

- *Type:* java.lang.String

Specifies the authentication authority for the Postgres instance. Valid values are (case-insensitive): `POSTGRES` | `POSTGRES_OR_SNOWFLAKE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#authentication_authority PostgresInstance#authentication_authority}

---

##### `computeFamily`<sup>Required</sup> <a name="computeFamily" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.computeFamily"></a>

- *Type:* java.lang.String

Specifies the compute family for the Postgres instance.

Valid values are (case-insensitive): `STANDARD_M` | `STANDARD_L` | `STANDARD_XL` | `STANDARD_2XL` | `STANDARD_4XL` | `STANDARD_8XL` | `STANDARD_12XL` | `STANDARD_24XL` | `HIGHMEM_L` | `HIGHMEM_XL` | `HIGHMEM_2XL` | `HIGHMEM_4XL` | `HIGHMEM_8XL` | `HIGHMEM_12XL` | `HIGHMEM_16XL` | `HIGHMEM_24XL` | `HIGHMEM_32XL` | `HIGHMEM_48XL` | `BURST_XS` | `BURST_S` | `BURST_M`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#compute_family PostgresInstance#compute_family}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier for the Postgres instance;

must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#name PostgresInstance#name}

---

##### `postgresVersion`<sup>Required</sup> <a name="postgresVersion" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.postgresVersion"></a>

- *Type:* java.lang.Number

Specifies the Postgres version for the instance.

Note that Snowflake does not allow downgrading; the version can only be upgraded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#postgres_version PostgresInstance#postgres_version}

---

##### `storageSizeGb`<sup>Required</sup> <a name="storageSizeGb" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.storageSizeGb"></a>

- *Type:* java.lang.Number

Specifies the storage size in GB for the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#storage_size_gb PostgresInstance#storage_size_gb}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#comment PostgresInstance#comment}

---

##### `highAvailability`<sup>Optional</sup> <a name="highAvailability" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.highAvailability"></a>

- *Type:* java.lang.String

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the Postgres instance should be configured for high availability.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#high_availability PostgresInstance#high_availability}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#id PostgresInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceWindowStart`<sup>Optional</sup> <a name="maintenanceWindowStart" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.maintenanceWindowStart"></a>

- *Type:* java.lang.Number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the hour (0-23 UTC) at which the maintenance window starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#maintenance_window_start PostgresInstance#maintenance_window_start}

---

##### `networkPolicy`<sup>Optional</sup> <a name="networkPolicy" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.networkPolicy"></a>

- *Type:* java.lang.String

Specifies the network policy to associate with the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#network_policy PostgresInstance#network_policy}

---

##### `postgresSettings`<sup>Optional</sup> <a name="postgresSettings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.postgresSettings"></a>

- *Type:* java.lang.String

Specifies custom Postgres settings as a JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#postgres_settings PostgresInstance#postgres_settings}

---

##### `storageIntegration`<sup>Optional</sup> <a name="storageIntegration" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.storageIntegration"></a>

- *Type:* java.lang.String

Specifies the storage integration for the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#storage_integration PostgresInstance#storage_integration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#timeouts PostgresInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetHighAvailability">resetHighAvailability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetMaintenanceWindowStart">resetMaintenanceWindowStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetNetworkPolicy">resetNetworkPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetPostgresSettings">resetPostgresSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetStorageIntegration">resetStorageIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.putTimeouts"></a>

```java
public void putTimeouts(PostgresInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetComment"></a>

```java
public void resetComment()
```

##### `resetHighAvailability` <a name="resetHighAvailability" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetHighAvailability"></a>

```java
public void resetHighAvailability()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetId"></a>

```java
public void resetId()
```

##### `resetMaintenanceWindowStart` <a name="resetMaintenanceWindowStart" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetMaintenanceWindowStart"></a>

```java
public void resetMaintenanceWindowStart()
```

##### `resetNetworkPolicy` <a name="resetNetworkPolicy" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetNetworkPolicy"></a>

```java
public void resetNetworkPolicy()
```

##### `resetPostgresSettings` <a name="resetPostgresSettings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetPostgresSettings"></a>

```java
public void resetPostgresSettings()
```

##### `resetStorageIntegration` <a name="resetStorageIntegration" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetStorageIntegration"></a>

```java
public void resetStorageIntegration()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PostgresInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.postgres_instance.PostgresInstance;

PostgresInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.postgres_instance.PostgresInstance;

PostgresInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.postgres_instance.PostgresInstance;

PostgresInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.postgres_instance.PostgresInstance;

PostgresInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PostgresInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PostgresInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PostgresInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PostgresInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PostgresInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList">PostgresInstanceDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList">PostgresInstanceShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference">PostgresInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.authenticationAuthorityInput">authenticationAuthorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.computeFamilyInput">computeFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.highAvailabilityInput">highAvailabilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.maintenanceWindowStartInput">maintenanceWindowStartInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.networkPolicyInput">networkPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresSettingsInput">postgresSettingsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresVersionInput">postgresVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageIntegrationInput">storageIntegrationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageSizeGbInput">storageSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.authenticationAuthority">authenticationAuthority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.computeFamily">computeFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.highAvailability">highAvailability</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.maintenanceWindowStart">maintenanceWindowStart</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.networkPolicy">networkPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresSettings">postgresSettings</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresVersion">postgresVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageIntegration">storageIntegration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageSizeGb">storageSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.describeOutput"></a>

```java
public PostgresInstanceDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList">PostgresInstanceDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.showOutput"></a>

```java
public PostgresInstanceShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList">PostgresInstanceShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.timeouts"></a>

```java
public PostgresInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference">PostgresInstanceTimeoutsOutputReference</a>

---

##### `authenticationAuthorityInput`<sup>Optional</sup> <a name="authenticationAuthorityInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.authenticationAuthorityInput"></a>

```java
public java.lang.String getAuthenticationAuthorityInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `computeFamilyInput`<sup>Optional</sup> <a name="computeFamilyInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.computeFamilyInput"></a>

```java
public java.lang.String getComputeFamilyInput();
```

- *Type:* java.lang.String

---

##### `highAvailabilityInput`<sup>Optional</sup> <a name="highAvailabilityInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.highAvailabilityInput"></a>

```java
public java.lang.String getHighAvailabilityInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowStartInput`<sup>Optional</sup> <a name="maintenanceWindowStartInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.maintenanceWindowStartInput"></a>

```java
public java.lang.Number getMaintenanceWindowStartInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkPolicyInput`<sup>Optional</sup> <a name="networkPolicyInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.networkPolicyInput"></a>

```java
public java.lang.String getNetworkPolicyInput();
```

- *Type:* java.lang.String

---

##### `postgresSettingsInput`<sup>Optional</sup> <a name="postgresSettingsInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresSettingsInput"></a>

```java
public java.lang.String getPostgresSettingsInput();
```

- *Type:* java.lang.String

---

##### `postgresVersionInput`<sup>Optional</sup> <a name="postgresVersionInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresVersionInput"></a>

```java
public java.lang.Number getPostgresVersionInput();
```

- *Type:* java.lang.Number

---

##### `storageIntegrationInput`<sup>Optional</sup> <a name="storageIntegrationInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageIntegrationInput"></a>

```java
public java.lang.String getStorageIntegrationInput();
```

- *Type:* java.lang.String

---

##### `storageSizeGbInput`<sup>Optional</sup> <a name="storageSizeGbInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageSizeGbInput"></a>

```java
public java.lang.Number getStorageSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.timeoutsInput"></a>

```java
public IResolvable|PostgresInstanceTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a>

---

##### `authenticationAuthority`<sup>Required</sup> <a name="authenticationAuthority" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.authenticationAuthority"></a>

```java
public java.lang.String getAuthenticationAuthority();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `computeFamily`<sup>Required</sup> <a name="computeFamily" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.computeFamily"></a>

```java
public java.lang.String getComputeFamily();
```

- *Type:* java.lang.String

---

##### `highAvailability`<sup>Required</sup> <a name="highAvailability" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.highAvailability"></a>

```java
public java.lang.String getHighAvailability();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowStart`<sup>Required</sup> <a name="maintenanceWindowStart" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.maintenanceWindowStart"></a>

```java
public java.lang.Number getMaintenanceWindowStart();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkPolicy`<sup>Required</sup> <a name="networkPolicy" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.networkPolicy"></a>

```java
public java.lang.String getNetworkPolicy();
```

- *Type:* java.lang.String

---

##### `postgresSettings`<sup>Required</sup> <a name="postgresSettings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresSettings"></a>

```java
public java.lang.String getPostgresSettings();
```

- *Type:* java.lang.String

---

##### `postgresVersion`<sup>Required</sup> <a name="postgresVersion" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresVersion"></a>

```java
public java.lang.Number getPostgresVersion();
```

- *Type:* java.lang.Number

---

##### `storageIntegration`<sup>Required</sup> <a name="storageIntegration" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageIntegration"></a>

```java
public java.lang.String getStorageIntegration();
```

- *Type:* java.lang.String

---

##### `storageSizeGb`<sup>Required</sup> <a name="storageSizeGb" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageSizeGb"></a>

```java
public java.lang.Number getStorageSizeGb();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresInstanceConfig <a name="PostgresInstanceConfig" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.postgres_instance.PostgresInstanceConfig;

PostgresInstanceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authenticationAuthority(java.lang.String)
    .computeFamily(java.lang.String)
    .name(java.lang.String)
    .postgresVersion(java.lang.Number)
    .storageSizeGb(java.lang.Number)
//  .comment(java.lang.String)
//  .highAvailability(java.lang.String)
//  .id(java.lang.String)
//  .maintenanceWindowStart(java.lang.Number)
//  .networkPolicy(java.lang.String)
//  .postgresSettings(java.lang.String)
//  .storageIntegration(java.lang.String)
//  .timeouts(PostgresInstanceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.authenticationAuthority">authenticationAuthority</a></code> | <code>java.lang.String</code> | Specifies the authentication authority for the Postgres instance. Valid values are (case-insensitive): `POSTGRES` \| `POSTGRES_OR_SNOWFLAKE`. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.computeFamily">computeFamily</a></code> | <code>java.lang.String</code> | Specifies the compute family for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the Postgres instance; |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.postgresVersion">postgresVersion</a></code> | <code>java.lang.Number</code> | Specifies the Postgres version for the instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.storageSizeGb">storageSizeGb</a></code> | <code>java.lang.Number</code> | Specifies the storage size in GB for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.highAvailability">highAvailability</a></code> | <code>java.lang.String</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the Postgres instance should be configured for high availability. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#id PostgresInstance#id}. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.maintenanceWindowStart">maintenanceWindowStart</a></code> | <code>java.lang.Number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the hour (0-23 UTC) at which the maintenance window starts. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.networkPolicy">networkPolicy</a></code> | <code>java.lang.String</code> | Specifies the network policy to associate with the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.postgresSettings">postgresSettings</a></code> | <code>java.lang.String</code> | Specifies custom Postgres settings as a JSON string. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.storageIntegration">storageIntegration</a></code> | <code>java.lang.String</code> | Specifies the storage integration for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authenticationAuthority`<sup>Required</sup> <a name="authenticationAuthority" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.authenticationAuthority"></a>

```java
public java.lang.String getAuthenticationAuthority();
```

- *Type:* java.lang.String

Specifies the authentication authority for the Postgres instance. Valid values are (case-insensitive): `POSTGRES` | `POSTGRES_OR_SNOWFLAKE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#authentication_authority PostgresInstance#authentication_authority}

---

##### `computeFamily`<sup>Required</sup> <a name="computeFamily" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.computeFamily"></a>

```java
public java.lang.String getComputeFamily();
```

- *Type:* java.lang.String

Specifies the compute family for the Postgres instance.

Valid values are (case-insensitive): `STANDARD_M` | `STANDARD_L` | `STANDARD_XL` | `STANDARD_2XL` | `STANDARD_4XL` | `STANDARD_8XL` | `STANDARD_12XL` | `STANDARD_24XL` | `HIGHMEM_L` | `HIGHMEM_XL` | `HIGHMEM_2XL` | `HIGHMEM_4XL` | `HIGHMEM_8XL` | `HIGHMEM_12XL` | `HIGHMEM_16XL` | `HIGHMEM_24XL` | `HIGHMEM_32XL` | `HIGHMEM_48XL` | `BURST_XS` | `BURST_S` | `BURST_M`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#compute_family PostgresInstance#compute_family}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier for the Postgres instance;

must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#name PostgresInstance#name}

---

##### `postgresVersion`<sup>Required</sup> <a name="postgresVersion" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.postgresVersion"></a>

```java
public java.lang.Number getPostgresVersion();
```

- *Type:* java.lang.Number

Specifies the Postgres version for the instance.

Note that Snowflake does not allow downgrading; the version can only be upgraded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#postgres_version PostgresInstance#postgres_version}

---

##### `storageSizeGb`<sup>Required</sup> <a name="storageSizeGb" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.storageSizeGb"></a>

```java
public java.lang.Number getStorageSizeGb();
```

- *Type:* java.lang.Number

Specifies the storage size in GB for the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#storage_size_gb PostgresInstance#storage_size_gb}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#comment PostgresInstance#comment}

---

##### `highAvailability`<sup>Optional</sup> <a name="highAvailability" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.highAvailability"></a>

```java
public java.lang.String getHighAvailability();
```

- *Type:* java.lang.String

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the Postgres instance should be configured for high availability.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#high_availability PostgresInstance#high_availability}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#id PostgresInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceWindowStart`<sup>Optional</sup> <a name="maintenanceWindowStart" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.maintenanceWindowStart"></a>

```java
public java.lang.Number getMaintenanceWindowStart();
```

- *Type:* java.lang.Number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the hour (0-23 UTC) at which the maintenance window starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#maintenance_window_start PostgresInstance#maintenance_window_start}

---

##### `networkPolicy`<sup>Optional</sup> <a name="networkPolicy" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.networkPolicy"></a>

```java
public java.lang.String getNetworkPolicy();
```

- *Type:* java.lang.String

Specifies the network policy to associate with the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#network_policy PostgresInstance#network_policy}

---

##### `postgresSettings`<sup>Optional</sup> <a name="postgresSettings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.postgresSettings"></a>

```java
public java.lang.String getPostgresSettings();
```

- *Type:* java.lang.String

Specifies custom Postgres settings as a JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#postgres_settings PostgresInstance#postgres_settings}

---

##### `storageIntegration`<sup>Optional</sup> <a name="storageIntegration" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.storageIntegration"></a>

```java
public java.lang.String getStorageIntegration();
```

- *Type:* java.lang.String

Specifies the storage integration for the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#storage_integration PostgresInstance#storage_integration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.timeouts"></a>

```java
public PostgresInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#timeouts PostgresInstance#timeouts}

---

### PostgresInstanceDescribeOutput <a name="PostgresInstanceDescribeOutput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.postgres_instance.PostgresInstanceDescribeOutput;

PostgresInstanceDescribeOutput.builder()
    .build();
```


### PostgresInstanceShowOutput <a name="PostgresInstanceShowOutput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.postgres_instance.PostgresInstanceShowOutput;

PostgresInstanceShowOutput.builder()
    .build();
```


### PostgresInstanceTimeouts <a name="PostgresInstanceTimeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.postgres_instance.PostgresInstanceTimeouts;

PostgresInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#create PostgresInstance#create}. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#delete PostgresInstance#delete}. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#read PostgresInstance#read}. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#update PostgresInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#create PostgresInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#delete PostgresInstance#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#read PostgresInstance#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#update PostgresInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresInstanceDescribeOutputList <a name="PostgresInstanceDescribeOutputList" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.postgres_instance.PostgresInstanceDescribeOutputList;

new PostgresInstanceDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.get"></a>

```java
public PostgresInstanceDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### PostgresInstanceDescribeOutputOutputReference <a name="PostgresInstanceDescribeOutputOutputReference" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.postgres_instance.PostgresInstanceDescribeOutputOutputReference;

new PostgresInstanceDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.authenticationAuthority">authenticationAuthority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.computeFamily">computeFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.highAvailability">highAvailability</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.maintenanceWindowStart">maintenanceWindowStart</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.networkPolicy">networkPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.origin">origin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.postgresSettings">postgresSettings</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.postgresVersion">postgresVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.privatelinkServiceIdentifier">privatelinkServiceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.retentionTime">retentionTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.storageIntegration">storageIntegration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.storageSizeGb">storageSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.updatedOn">updatedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutput">PostgresInstanceDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationAuthority`<sup>Required</sup> <a name="authenticationAuthority" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.authenticationAuthority"></a>

```java
public java.lang.String getAuthenticationAuthority();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `computeFamily`<sup>Required</sup> <a name="computeFamily" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.computeFamily"></a>

```java
public java.lang.String getComputeFamily();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `highAvailability`<sup>Required</sup> <a name="highAvailability" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.highAvailability"></a>

```java
public IResolvable getHighAvailability();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowStart`<sup>Required</sup> <a name="maintenanceWindowStart" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.maintenanceWindowStart"></a>

```java
public java.lang.Number getMaintenanceWindowStart();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkPolicy`<sup>Required</sup> <a name="networkPolicy" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.networkPolicy"></a>

```java
public java.lang.String getNetworkPolicy();
```

- *Type:* java.lang.String

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.origin"></a>

```java
public java.lang.String getOrigin();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.ownerRoleType"></a>

```java
public java.lang.String getOwnerRoleType();
```

- *Type:* java.lang.String

---

##### `postgresSettings`<sup>Required</sup> <a name="postgresSettings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.postgresSettings"></a>

```java
public java.lang.String getPostgresSettings();
```

- *Type:* java.lang.String

---

##### `postgresVersion`<sup>Required</sup> <a name="postgresVersion" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.postgresVersion"></a>

```java
public java.lang.Number getPostgresVersion();
```

- *Type:* java.lang.Number

---

##### `privatelinkServiceIdentifier`<sup>Required</sup> <a name="privatelinkServiceIdentifier" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.privatelinkServiceIdentifier"></a>

```java
public java.lang.String getPrivatelinkServiceIdentifier();
```

- *Type:* java.lang.String

---

##### `retentionTime`<sup>Required</sup> <a name="retentionTime" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.retentionTime"></a>

```java
public java.lang.Number getRetentionTime();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `storageIntegration`<sup>Required</sup> <a name="storageIntegration" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.storageIntegration"></a>

```java
public java.lang.String getStorageIntegration();
```

- *Type:* java.lang.String

---

##### `storageSizeGb`<sup>Required</sup> <a name="storageSizeGb" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.storageSizeGb"></a>

```java
public java.lang.Number getStorageSizeGb();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.updatedOn"></a>

```java
public java.lang.String getUpdatedOn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.internalValue"></a>

```java
public PostgresInstanceDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutput">PostgresInstanceDescribeOutput</a>

---


### PostgresInstanceShowOutputList <a name="PostgresInstanceShowOutputList" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.postgres_instance.PostgresInstanceShowOutputList;

new PostgresInstanceShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.get"></a>

```java
public PostgresInstanceShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### PostgresInstanceShowOutputOutputReference <a name="PostgresInstanceShowOutputOutputReference" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.postgres_instance.PostgresInstanceShowOutputOutputReference;

new PostgresInstanceShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.authenticationAuthority">authenticationAuthority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.computeFamily">computeFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.isHa">isHa</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.origin">origin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.postgresSettings">postgresSettings</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.postgresVersion">postgresVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.privatelinkServiceIdentifier">privatelinkServiceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.retentionTime">retentionTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.storageSize">storageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.updatedOn">updatedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutput">PostgresInstanceShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationAuthority`<sup>Required</sup> <a name="authenticationAuthority" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.authenticationAuthority"></a>

```java
public java.lang.String getAuthenticationAuthority();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `computeFamily`<sup>Required</sup> <a name="computeFamily" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.computeFamily"></a>

```java
public java.lang.String getComputeFamily();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `isHa`<sup>Required</sup> <a name="isHa" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.isHa"></a>

```java
public IResolvable getIsHa();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.origin"></a>

```java
public java.lang.String getOrigin();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.ownerRoleType"></a>

```java
public java.lang.String getOwnerRoleType();
```

- *Type:* java.lang.String

---

##### `postgresSettings`<sup>Required</sup> <a name="postgresSettings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.postgresSettings"></a>

```java
public java.lang.String getPostgresSettings();
```

- *Type:* java.lang.String

---

##### `postgresVersion`<sup>Required</sup> <a name="postgresVersion" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.postgresVersion"></a>

```java
public java.lang.String getPostgresVersion();
```

- *Type:* java.lang.String

---

##### `privatelinkServiceIdentifier`<sup>Required</sup> <a name="privatelinkServiceIdentifier" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.privatelinkServiceIdentifier"></a>

```java
public java.lang.String getPrivatelinkServiceIdentifier();
```

- *Type:* java.lang.String

---

##### `retentionTime`<sup>Required</sup> <a name="retentionTime" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.retentionTime"></a>

```java
public java.lang.Number getRetentionTime();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `storageSize`<sup>Required</sup> <a name="storageSize" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.storageSize"></a>

```java
public java.lang.Number getStorageSize();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.updatedOn"></a>

```java
public java.lang.String getUpdatedOn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.internalValue"></a>

```java
public PostgresInstanceShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutput">PostgresInstanceShowOutput</a>

---


### PostgresInstanceTimeoutsOutputReference <a name="PostgresInstanceTimeoutsOutputReference" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.postgres_instance.PostgresInstanceTimeoutsOutputReference;

new PostgresInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|PostgresInstanceTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a>

---



