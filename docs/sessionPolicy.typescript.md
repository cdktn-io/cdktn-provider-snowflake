# `sessionPolicy` Submodule <a name="`sessionPolicy` Submodule" id="@cdktn/provider-snowflake.sessionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SessionPolicy <a name="SessionPolicy" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy snowflake_session_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer"></a>

```typescript
import { sessionPolicy } from '@cdktn/provider-snowflake'

new sessionPolicy.SessionPolicy(scope: Construct, id: string, config: SessionPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig">SessionPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig">SessionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putAllowedSecondaryRoles">putAllowedSecondaryRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putBlockedSecondaryRoles">putBlockedSecondaryRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetAllowedSecondaryRoles">resetAllowedSecondaryRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetBlockedSecondaryRoles">resetBlockedSecondaryRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetSessionIdleTimeoutMins">resetSessionIdleTimeoutMins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetSessionUiIdleTimeoutMins">resetSessionUiIdleTimeoutMins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllowedSecondaryRoles` <a name="putAllowedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putAllowedSecondaryRoles"></a>

```typescript
public putAllowedSecondaryRoles(value: SessionPolicyAllowedSecondaryRoles): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putAllowedSecondaryRoles.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles">SessionPolicyAllowedSecondaryRoles</a>

---

##### `putBlockedSecondaryRoles` <a name="putBlockedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putBlockedSecondaryRoles"></a>

```typescript
public putBlockedSecondaryRoles(value: SessionPolicyBlockedSecondaryRoles): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putBlockedSecondaryRoles.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles">SessionPolicyBlockedSecondaryRoles</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: SessionPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts">SessionPolicyTimeouts</a>

---

##### `resetAllowedSecondaryRoles` <a name="resetAllowedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetAllowedSecondaryRoles"></a>

```typescript
public resetAllowedSecondaryRoles(): void
```

##### `resetBlockedSecondaryRoles` <a name="resetBlockedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetBlockedSecondaryRoles"></a>

```typescript
public resetBlockedSecondaryRoles(): void
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSessionIdleTimeoutMins` <a name="resetSessionIdleTimeoutMins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetSessionIdleTimeoutMins"></a>

```typescript
public resetSessionIdleTimeoutMins(): void
```

##### `resetSessionUiIdleTimeoutMins` <a name="resetSessionUiIdleTimeoutMins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetSessionUiIdleTimeoutMins"></a>

```typescript
public resetSessionUiIdleTimeoutMins(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SessionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isConstruct"></a>

```typescript
import { sessionPolicy } from '@cdktn/provider-snowflake'

sessionPolicy.SessionPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isTerraformElement"></a>

```typescript
import { sessionPolicy } from '@cdktn/provider-snowflake'

sessionPolicy.SessionPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isTerraformResource"></a>

```typescript
import { sessionPolicy } from '@cdktn/provider-snowflake'

sessionPolicy.SessionPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.generateConfigForImport"></a>

```typescript
import { sessionPolicy } from '@cdktn/provider-snowflake'

sessionPolicy.SessionPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SessionPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SessionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SessionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SessionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.allowedSecondaryRoles">allowedSecondaryRoles</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference">SessionPolicyAllowedSecondaryRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.blockedSecondaryRoles">blockedSecondaryRoles</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference">SessionPolicyBlockedSecondaryRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList">SessionPolicyDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList">SessionPolicyShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference">SessionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.allowedSecondaryRolesInput">allowedSecondaryRolesInput</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles">SessionPolicyAllowedSecondaryRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.blockedSecondaryRolesInput">blockedSecondaryRolesInput</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles">SessionPolicyBlockedSecondaryRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.sessionIdleTimeoutMinsInput">sessionIdleTimeoutMinsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.sessionUiIdleTimeoutMinsInput">sessionUiIdleTimeoutMinsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts">SessionPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.sessionIdleTimeoutMins">sessionIdleTimeoutMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.sessionUiIdleTimeoutMins">sessionUiIdleTimeoutMins</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `allowedSecondaryRoles`<sup>Required</sup> <a name="allowedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.allowedSecondaryRoles"></a>

```typescript
public readonly allowedSecondaryRoles: SessionPolicyAllowedSecondaryRolesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference">SessionPolicyAllowedSecondaryRolesOutputReference</a>

---

##### `blockedSecondaryRoles`<sup>Required</sup> <a name="blockedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.blockedSecondaryRoles"></a>

```typescript
public readonly blockedSecondaryRoles: SessionPolicyBlockedSecondaryRolesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference">SessionPolicyBlockedSecondaryRolesOutputReference</a>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.describeOutput"></a>

```typescript
public readonly describeOutput: SessionPolicyDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList">SessionPolicyDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.showOutput"></a>

```typescript
public readonly showOutput: SessionPolicyShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList">SessionPolicyShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: SessionPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference">SessionPolicyTimeoutsOutputReference</a>

---

##### `allowedSecondaryRolesInput`<sup>Optional</sup> <a name="allowedSecondaryRolesInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.allowedSecondaryRolesInput"></a>

```typescript
public readonly allowedSecondaryRolesInput: SessionPolicyAllowedSecondaryRoles;
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles">SessionPolicyAllowedSecondaryRoles</a>

---

##### `blockedSecondaryRolesInput`<sup>Optional</sup> <a name="blockedSecondaryRolesInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.blockedSecondaryRolesInput"></a>

```typescript
public readonly blockedSecondaryRolesInput: SessionPolicyBlockedSecondaryRoles;
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles">SessionPolicyBlockedSecondaryRoles</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `sessionIdleTimeoutMinsInput`<sup>Optional</sup> <a name="sessionIdleTimeoutMinsInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.sessionIdleTimeoutMinsInput"></a>

```typescript
public readonly sessionIdleTimeoutMinsInput: number;
```

- *Type:* number

---

##### `sessionUiIdleTimeoutMinsInput`<sup>Optional</sup> <a name="sessionUiIdleTimeoutMinsInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.sessionUiIdleTimeoutMinsInput"></a>

```typescript
public readonly sessionUiIdleTimeoutMinsInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SessionPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts">SessionPolicyTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `sessionIdleTimeoutMins`<sup>Required</sup> <a name="sessionIdleTimeoutMins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.sessionIdleTimeoutMins"></a>

```typescript
public readonly sessionIdleTimeoutMins: number;
```

- *Type:* number

---

##### `sessionUiIdleTimeoutMins`<sup>Required</sup> <a name="sessionUiIdleTimeoutMins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.sessionUiIdleTimeoutMins"></a>

```typescript
public readonly sessionUiIdleTimeoutMins: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SessionPolicyAllowedSecondaryRoles <a name="SessionPolicyAllowedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles.Initializer"></a>

```typescript
import { sessionPolicy } from '@cdktn/provider-snowflake'

const sessionPolicyAllowedSecondaryRoles: sessionPolicy.SessionPolicyAllowedSecondaryRoles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles.property.all">all</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, allows all secondary roles. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles.property.none">none</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, disallows all secondary roles. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles.property.roles">roles</a></code> | <code>string[]</code> | Specifies roles to be allowed as secondary roles. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles.property.all"></a>

```typescript
public readonly all: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, allows all secondary roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#all SessionPolicy#all}

---

##### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles.property.none"></a>

```typescript
public readonly none: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, disallows all secondary roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#none SessionPolicy#none}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

Specifies roles to be allowed as secondary roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#roles SessionPolicy#roles}

---

### SessionPolicyBlockedSecondaryRoles <a name="SessionPolicyBlockedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles.Initializer"></a>

```typescript
import { sessionPolicy } from '@cdktn/provider-snowflake'

const sessionPolicyBlockedSecondaryRoles: sessionPolicy.SessionPolicyBlockedSecondaryRoles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles.property.all">all</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, disallows all secondary roles. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles.property.none">none</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, allows all secondary roles. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles.property.roles">roles</a></code> | <code>string[]</code> | Specifies roles to be blocked as secondary roles. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles.property.all"></a>

```typescript
public readonly all: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, disallows all secondary roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#all SessionPolicy#all}

---

##### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles.property.none"></a>

```typescript
public readonly none: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, allows all secondary roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#none SessionPolicy#none}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

Specifies roles to be blocked as secondary roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#roles SessionPolicy#roles}

---

### SessionPolicyConfig <a name="SessionPolicyConfig" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.Initializer"></a>

```typescript
import { sessionPolicy } from '@cdktn/provider-snowflake'

const sessionPolicyConfig: sessionPolicy.SessionPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.database">database</a></code> | <code>string</code> | The database in which to create the session policy. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the session policy. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.schema">schema</a></code> | <code>string</code> | The schema in which to create the session policy. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.allowedSecondaryRoles">allowedSecondaryRoles</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles">SessionPolicyAllowedSecondaryRoles</a></code> | allowed_secondary_roles block. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.blockedSecondaryRoles">blockedSecondaryRoles</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles">SessionPolicyBlockedSecondaryRoles</a></code> | blocked_secondary_roles block. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the session policy. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#id SessionPolicy#id}. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.sessionIdleTimeoutMins">sessionIdleTimeoutMins</a></code> | <code>number</code> | For Snowflake clients and programmatic clients, specifies the number of minutes in which a session can be idle before users must authenticate to Snowflake again. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.sessionUiIdleTimeoutMins">sessionUiIdleTimeoutMins</a></code> | <code>number</code> | For Snowsight, specifies the number of minutes in which a session can be idle before users must authenticate to Snowflake again. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts">SessionPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database in which to create the session policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#database SessionPolicy#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the session policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#name SessionPolicy#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema in which to create the session policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#schema SessionPolicy#schema}

---

##### `allowedSecondaryRoles`<sup>Optional</sup> <a name="allowedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.allowedSecondaryRoles"></a>

```typescript
public readonly allowedSecondaryRoles: SessionPolicyAllowedSecondaryRoles;
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles">SessionPolicyAllowedSecondaryRoles</a>

allowed_secondary_roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#allowed_secondary_roles SessionPolicy#allowed_secondary_roles}

---

##### `blockedSecondaryRoles`<sup>Optional</sup> <a name="blockedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.blockedSecondaryRoles"></a>

```typescript
public readonly blockedSecondaryRoles: SessionPolicyBlockedSecondaryRoles;
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles">SessionPolicyBlockedSecondaryRoles</a>

blocked_secondary_roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#blocked_secondary_roles SessionPolicy#blocked_secondary_roles}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the session policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#comment SessionPolicy#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#id SessionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sessionIdleTimeoutMins`<sup>Optional</sup> <a name="sessionIdleTimeoutMins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.sessionIdleTimeoutMins"></a>

```typescript
public readonly sessionIdleTimeoutMins: number;
```

- *Type:* number

For Snowflake clients and programmatic clients, specifies the number of minutes in which a session can be idle before users must authenticate to Snowflake again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#session_idle_timeout_mins SessionPolicy#session_idle_timeout_mins}

---

##### `sessionUiIdleTimeoutMins`<sup>Optional</sup> <a name="sessionUiIdleTimeoutMins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.sessionUiIdleTimeoutMins"></a>

```typescript
public readonly sessionUiIdleTimeoutMins: number;
```

- *Type:* number

For Snowsight, specifies the number of minutes in which a session can be idle before users must authenticate to Snowflake again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#session_ui_idle_timeout_mins SessionPolicy#session_ui_idle_timeout_mins}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SessionPolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts">SessionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#timeouts SessionPolicy#timeouts}

---

### SessionPolicyDescribeOutput <a name="SessionPolicyDescribeOutput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutput.Initializer"></a>

```typescript
import { sessionPolicy } from '@cdktn/provider-snowflake'

const sessionPolicyDescribeOutput: sessionPolicy.SessionPolicyDescribeOutput = { ... }
```


### SessionPolicyShowOutput <a name="SessionPolicyShowOutput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutput.Initializer"></a>

```typescript
import { sessionPolicy } from '@cdktn/provider-snowflake'

const sessionPolicyShowOutput: sessionPolicy.SessionPolicyShowOutput = { ... }
```


### SessionPolicyTimeouts <a name="SessionPolicyTimeouts" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.Initializer"></a>

```typescript
import { sessionPolicy } from '@cdktn/provider-snowflake'

const sessionPolicyTimeouts: sessionPolicy.SessionPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#create SessionPolicy#create}. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#delete SessionPolicy#delete}. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#read SessionPolicy#read}. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#update SessionPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#create SessionPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#delete SessionPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#read SessionPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#update SessionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SessionPolicyAllowedSecondaryRolesOutputReference <a name="SessionPolicyAllowedSecondaryRolesOutputReference" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.Initializer"></a>

```typescript
import { sessionPolicy } from '@cdktn/provider-snowflake'

new sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resetNone">resetNone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resetRoles">resetRoles</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAll` <a name="resetAll" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resetAll"></a>

```typescript
public resetAll(): void
```

##### `resetNone` <a name="resetNone" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resetNone"></a>

```typescript
public resetNone(): void
```

##### `resetRoles` <a name="resetRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resetRoles"></a>

```typescript
public resetRoles(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.allInput">allInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.noneInput">noneInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.rolesInput">rolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.all">all</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.none">none</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.roles">roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles">SessionPolicyAllowedSecondaryRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.allInput"></a>

```typescript
public readonly allInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `noneInput`<sup>Optional</sup> <a name="noneInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.noneInput"></a>

```typescript
public readonly noneInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.rolesInput"></a>

```typescript
public readonly rolesInput: string[];
```

- *Type:* string[]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.all"></a>

```typescript
public readonly all: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.none"></a>

```typescript
public readonly none: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SessionPolicyAllowedSecondaryRoles;
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles">SessionPolicyAllowedSecondaryRoles</a>

---


### SessionPolicyBlockedSecondaryRolesOutputReference <a name="SessionPolicyBlockedSecondaryRolesOutputReference" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.Initializer"></a>

```typescript
import { sessionPolicy } from '@cdktn/provider-snowflake'

new sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resetNone">resetNone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resetRoles">resetRoles</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAll` <a name="resetAll" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resetAll"></a>

```typescript
public resetAll(): void
```

##### `resetNone` <a name="resetNone" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resetNone"></a>

```typescript
public resetNone(): void
```

##### `resetRoles` <a name="resetRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resetRoles"></a>

```typescript
public resetRoles(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.allInput">allInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.noneInput">noneInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.rolesInput">rolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.all">all</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.none">none</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.roles">roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles">SessionPolicyBlockedSecondaryRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.allInput"></a>

```typescript
public readonly allInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `noneInput`<sup>Optional</sup> <a name="noneInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.noneInput"></a>

```typescript
public readonly noneInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.rolesInput"></a>

```typescript
public readonly rolesInput: string[];
```

- *Type:* string[]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.all"></a>

```typescript
public readonly all: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.none"></a>

```typescript
public readonly none: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SessionPolicyBlockedSecondaryRoles;
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles">SessionPolicyBlockedSecondaryRoles</a>

---


### SessionPolicyDescribeOutputList <a name="SessionPolicyDescribeOutputList" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.Initializer"></a>

```typescript
import { sessionPolicy } from '@cdktn/provider-snowflake'

new sessionPolicy.SessionPolicyDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.get"></a>

```typescript
public get(index: number): SessionPolicyDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SessionPolicyDescribeOutputOutputReference <a name="SessionPolicyDescribeOutputOutputReference" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer"></a>

```typescript
import { sessionPolicy } from '@cdktn/provider-snowflake'

new sessionPolicy.SessionPolicyDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.allowedSecondaryRoles">allowedSecondaryRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.blockedSecondaryRoles">blockedSecondaryRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.sessionIdleTimeoutMins">sessionIdleTimeoutMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.sessionUiIdleTimeoutMins">sessionUiIdleTimeoutMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutput">SessionPolicyDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedSecondaryRoles`<sup>Required</sup> <a name="allowedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.allowedSecondaryRoles"></a>

```typescript
public readonly allowedSecondaryRoles: string[];
```

- *Type:* string[]

---

##### `blockedSecondaryRoles`<sup>Required</sup> <a name="blockedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.blockedSecondaryRoles"></a>

```typescript
public readonly blockedSecondaryRoles: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `sessionIdleTimeoutMins`<sup>Required</sup> <a name="sessionIdleTimeoutMins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.sessionIdleTimeoutMins"></a>

```typescript
public readonly sessionIdleTimeoutMins: number;
```

- *Type:* number

---

##### `sessionUiIdleTimeoutMins`<sup>Required</sup> <a name="sessionUiIdleTimeoutMins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.sessionUiIdleTimeoutMins"></a>

```typescript
public readonly sessionUiIdleTimeoutMins: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SessionPolicyDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutput">SessionPolicyDescribeOutput</a>

---


### SessionPolicyShowOutputList <a name="SessionPolicyShowOutputList" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.Initializer"></a>

```typescript
import { sessionPolicy } from '@cdktn/provider-snowflake'

new sessionPolicy.SessionPolicyShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.get"></a>

```typescript
public get(index: number): SessionPolicyShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SessionPolicyShowOutputOutputReference <a name="SessionPolicyShowOutputOutputReference" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer"></a>

```typescript
import { sessionPolicy } from '@cdktn/provider-snowflake'

new sessionPolicy.SessionPolicyShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.options">options</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutput">SessionPolicyShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.options"></a>

```typescript
public readonly options: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SessionPolicyShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutput">SessionPolicyShowOutput</a>

---


### SessionPolicyTimeoutsOutputReference <a name="SessionPolicyTimeoutsOutputReference" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { sessionPolicy } from '@cdktn/provider-snowflake'

new sessionPolicy.SessionPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts">SessionPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SessionPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts">SessionPolicyTimeouts</a>

---



