# `failoverGroupSecondary` Submodule <a name="`failoverGroupSecondary` Submodule" id="@cdktn/provider-snowflake.failoverGroupSecondary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FailoverGroupSecondary <a name="FailoverGroupSecondary" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary snowflake_failover_group_secondary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer"></a>

```java
import io.cdktn.providers.snowflake.failover_group_secondary.FailoverGroupSecondary;

FailoverGroupSecondary.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .primary(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(FailoverGroupSecondaryTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the failover group secondary; |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.primary">primary</a></code> | <code>java.lang.String</code> | Primary failover group to replicate, in the form `<organization_name>.<account_name>.<failover_group_name>`. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#id FailoverGroupSecondary#id}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts">FailoverGroupSecondaryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier for the failover group secondary;

must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#name FailoverGroupSecondary#name}

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.primary"></a>

- *Type:* java.lang.String

Primary failover group to replicate, in the form `<organization_name>.<account_name>.<failover_group_name>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#primary FailoverGroupSecondary#primary}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#id FailoverGroupSecondary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts">FailoverGroupSecondaryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#timeouts FailoverGroupSecondary#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.putTimeouts"></a>

```java
public void putTimeouts(FailoverGroupSecondaryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts">FailoverGroupSecondaryTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FailoverGroupSecondary resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.failover_group_secondary.FailoverGroupSecondary;

FailoverGroupSecondary.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.failover_group_secondary.FailoverGroupSecondary;

FailoverGroupSecondary.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.failover_group_secondary.FailoverGroupSecondary;

FailoverGroupSecondary.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.failover_group_secondary.FailoverGroupSecondary;

FailoverGroupSecondary.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FailoverGroupSecondary.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a FailoverGroupSecondary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FailoverGroupSecondary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FailoverGroupSecondary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the FailoverGroupSecondary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.isPrimary">isPrimary</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList">FailoverGroupSecondaryShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference">FailoverGroupSecondaryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.primaryInput">primaryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts">FailoverGroupSecondaryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.primary">primary</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.isPrimary"></a>

```java
public IResolvable getIsPrimary();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.showOutput"></a>

```java
public FailoverGroupSecondaryShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList">FailoverGroupSecondaryShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.timeouts"></a>

```java
public FailoverGroupSecondaryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference">FailoverGroupSecondaryTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.primaryInput"></a>

```java
public java.lang.String getPrimaryInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.timeoutsInput"></a>

```java
public IResolvable|FailoverGroupSecondaryTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts">FailoverGroupSecondaryTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.primary"></a>

```java
public java.lang.String getPrimary();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FailoverGroupSecondaryConfig <a name="FailoverGroupSecondaryConfig" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.failover_group_secondary.FailoverGroupSecondaryConfig;

FailoverGroupSecondaryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .primary(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(FailoverGroupSecondaryTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the failover group secondary; |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.primary">primary</a></code> | <code>java.lang.String</code> | Primary failover group to replicate, in the form `<organization_name>.<account_name>.<failover_group_name>`. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#id FailoverGroupSecondary#id}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts">FailoverGroupSecondaryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier for the failover group secondary;

must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#name FailoverGroupSecondary#name}

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.primary"></a>

```java
public java.lang.String getPrimary();
```

- *Type:* java.lang.String

Primary failover group to replicate, in the form `<organization_name>.<account_name>.<failover_group_name>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#primary FailoverGroupSecondary#primary}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#id FailoverGroupSecondary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.timeouts"></a>

```java
public FailoverGroupSecondaryTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts">FailoverGroupSecondaryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#timeouts FailoverGroupSecondary#timeouts}

---

### FailoverGroupSecondaryShowOutput <a name="FailoverGroupSecondaryShowOutput" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.failover_group_secondary.FailoverGroupSecondaryShowOutput;

FailoverGroupSecondaryShowOutput.builder()
    .build();
```


### FailoverGroupSecondaryTimeouts <a name="FailoverGroupSecondaryTimeouts" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.failover_group_secondary.FailoverGroupSecondaryTimeouts;

FailoverGroupSecondaryTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#create FailoverGroupSecondary#create}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#delete FailoverGroupSecondary#delete}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#read FailoverGroupSecondary#read}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#update FailoverGroupSecondary#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#create FailoverGroupSecondary#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#delete FailoverGroupSecondary#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#read FailoverGroupSecondary#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#update FailoverGroupSecondary#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FailoverGroupSecondaryShowOutputList <a name="FailoverGroupSecondaryShowOutputList" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.failover_group_secondary.FailoverGroupSecondaryShowOutputList;

new FailoverGroupSecondaryShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.get"></a>

```java
public FailoverGroupSecondaryShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FailoverGroupSecondaryShowOutputOutputReference <a name="FailoverGroupSecondaryShowOutputOutputReference" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.failover_group_secondary.FailoverGroupSecondaryShowOutputOutputReference;

new FailoverGroupSecondaryShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.accountLocator">accountLocator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.accountName">accountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.allowedAccounts">allowedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.allowedIntegrationTypes">allowedIntegrationTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.errorIntegration">errorIntegration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.isListingAutoFulfillmentGroup">isListingAutoFulfillmentGroup</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.isOptimizedRefreshEnabled">isOptimizedRefreshEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.isPrimary">isPrimary</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.isPrimaryReadOnly">isPrimaryReadOnly</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.nextScheduledRefresh">nextScheduledRefresh</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.objectTypes">objectTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.primary">primary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.regionGroup">regionGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.replicationSchedule">replicationSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.rpoAssurance">rpoAssurance</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.secondaryState">secondaryState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.snowflakeRegion">snowflakeRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutput">FailoverGroupSecondaryShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountLocator`<sup>Required</sup> <a name="accountLocator" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.accountLocator"></a>

```java
public java.lang.String getAccountLocator();
```

- *Type:* java.lang.String

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

---

##### `allowedAccounts`<sup>Required</sup> <a name="allowedAccounts" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.allowedAccounts"></a>

```java
public java.util.List<java.lang.String> getAllowedAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedIntegrationTypes`<sup>Required</sup> <a name="allowedIntegrationTypes" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.allowedIntegrationTypes"></a>

```java
public java.util.List<java.lang.String> getAllowedIntegrationTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `errorIntegration`<sup>Required</sup> <a name="errorIntegration" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.errorIntegration"></a>

```java
public java.lang.String getErrorIntegration();
```

- *Type:* java.lang.String

---

##### `isListingAutoFulfillmentGroup`<sup>Required</sup> <a name="isListingAutoFulfillmentGroup" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.isListingAutoFulfillmentGroup"></a>

```java
public IResolvable getIsListingAutoFulfillmentGroup();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `isOptimizedRefreshEnabled`<sup>Required</sup> <a name="isOptimizedRefreshEnabled" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.isOptimizedRefreshEnabled"></a>

```java
public IResolvable getIsOptimizedRefreshEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.isPrimary"></a>

```java
public IResolvable getIsPrimary();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `isPrimaryReadOnly`<sup>Required</sup> <a name="isPrimaryReadOnly" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.isPrimaryReadOnly"></a>

```java
public IResolvable getIsPrimaryReadOnly();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nextScheduledRefresh`<sup>Required</sup> <a name="nextScheduledRefresh" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.nextScheduledRefresh"></a>

```java
public java.lang.String getNextScheduledRefresh();
```

- *Type:* java.lang.String

---

##### `objectTypes`<sup>Required</sup> <a name="objectTypes" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.objectTypes"></a>

```java
public java.util.List<java.lang.String> getObjectTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.primary"></a>

```java
public java.lang.String getPrimary();
```

- *Type:* java.lang.String

---

##### `regionGroup`<sup>Required</sup> <a name="regionGroup" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.regionGroup"></a>

```java
public java.lang.String getRegionGroup();
```

- *Type:* java.lang.String

---

##### `replicationSchedule`<sup>Required</sup> <a name="replicationSchedule" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.replicationSchedule"></a>

```java
public java.lang.String getReplicationSchedule();
```

- *Type:* java.lang.String

---

##### `rpoAssurance`<sup>Required</sup> <a name="rpoAssurance" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.rpoAssurance"></a>

```java
public IResolvable getRpoAssurance();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `secondaryState`<sup>Required</sup> <a name="secondaryState" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.secondaryState"></a>

```java
public java.lang.String getSecondaryState();
```

- *Type:* java.lang.String

---

##### `snowflakeRegion`<sup>Required</sup> <a name="snowflakeRegion" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.snowflakeRegion"></a>

```java
public java.lang.String getSnowflakeRegion();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.internalValue"></a>

```java
public FailoverGroupSecondaryShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutput">FailoverGroupSecondaryShowOutput</a>

---


### FailoverGroupSecondaryTimeoutsOutputReference <a name="FailoverGroupSecondaryTimeoutsOutputReference" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.failover_group_secondary.FailoverGroupSecondaryTimeoutsOutputReference;

new FailoverGroupSecondaryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts">FailoverGroupSecondaryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|FailoverGroupSecondaryTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts">FailoverGroupSecondaryTimeouts</a>

---



